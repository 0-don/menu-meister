import { faker } from "@faker-js/faker";
import { Prisma, PrismaClient, UserRoleName } from "@prisma/client";
import argon2 from "argon2";
import { error } from "console";
import dayjs from "dayjs";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";

const prisma = new PrismaClient();

const EMAIL = "admin@admin.de";
const MIN_MEALS_PER_DAY = 1;

const randomInt = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const coinFlip = (probability = 0.5) =>
  Math.random() <= probability ? true : false;

const getImageFile = (name: string) => join(resolve(), "images", name);

const seed = async () => {
  const userCount = await prisma.user.count();
  if (userCount > 0) return;

  await createUser({
    email: EMAIL,
    password: "!admin",
    roles: ["USER", "ADMIN"],
  });

  await seedIngredientsAndNutritions();

  await seedMeals();
  await seedMealGroups();
  await seedMealSchedulers();
};

async function downloadImage(url: string) {
  const name = new URL(url).searchParams.get("lock");
  const category = new URL(url).pathname.split("/").at(-1);
  const fileName = `${category}-${name}.jpg`;

  const filePath = getImageFile(fileName);

  if (existsSync(filePath)) {
    return readFileSync(filePath, "base64");
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }

  const imageBuffer = await response.arrayBuffer();
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, Buffer.from(imageBuffer), "base64");
  return Buffer.from(imageBuffer).toString("base64");
}

const seedIngredientsAndNutritions = async () => {
  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  for (const _ of Array(100).keys()) {
    const ingredientName = faker.commerce.product();

    const imgUrl = faker.image.urlLoremFlickr({
      category: "ingredients",
      width: 320,
      height: 240,
    });
    const image = await downloadImage(imgUrl);

    // Create ingredient individually
    const ingredient = await prisma.ingredient.create({
      data: {
        name: ingredientName,
        allergens: faker.helpers.arrayElement([
          "nuts",
          "dairy",
          "gluten",
          null,
        ]),
        image,
        createdBy: user.id,
        updatedBy: user.id,
      },
    });

    // Create corresponding nutrition data
    await prisma.nutrition.create({
      data: {
        ingredientId: ingredient.id,
        calories: faker.number.float({ min: 0, max: 500 }),
        protein: faker.number.float({ min: 0, max: 100 }),
        carbohydrates: faker.number.float({ min: 0, max: 100 }),
        fats: faker.number.float({ min: 0, max: 100 }),
        fiber: faker.number.float({ min: 0, max: 100 }),
        createdBy: user.id,
        updatedBy: user.id,
      },
    });
  }
};

const seedMeals = async () => {
  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  for (const _ of Array(100).keys()) {
    const imgUrl = faker.image.urlLoremFlickr({
      category: "meal",
      width: 320,
      height: 240,
    });
    const image = await downloadImage(imgUrl);

    const meal = await prisma.meal.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image,
        createdBy: user.id,
        updatedBy: user.id,
      },
    });

    await seedMealIngredients(meal.id, user.id);
  }
};

const seedMealSchedulers = async () => {
  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });
  const meals = await prisma.meal.findMany();
  const mealGroups = await prisma.mealGroup.findMany();

  const MEAL_SCHEDULER_COUNT = 2500;

  // Calculate days in past and future
  const daysInPast = Math.floor(MEAL_SCHEDULER_COUNT / 2 / MIN_MEALS_PER_DAY);
  const daysInFuture = Math.ceil(MEAL_SCHEDULER_COUNT / 2 / MIN_MEALS_PER_DAY);

  // Schedule meals for past
  await scheduleMeals(meals, mealGroups, daysInPast, user.id, true);

  // Schedule meals for future
  await scheduleMeals(meals, mealGroups, daysInFuture, user.id, false);
};

async function scheduleMeals(
  meals: Prisma.MealUncheckedCreateInput[],
  mealGroups: Prisma.MealGroupUncheckedCreateInput[],
  days: number,
  userId: number,
  isPast: boolean,
) {
  for (let day = 0; day < days; day++) {
    const servingDate = isPast
      ? dayjs().subtract(day, "day").toDate()
      : dayjs().add(day, "day").toDate();
    try {
      const mealSchedule = await prisma.mealSchedule.create({
        data: {
          servingDate: servingDate,
          createdBy: userId,
          updatedBy: userId,
        },
      });
      for (let i = 0; i < MIN_MEALS_PER_DAY; i++) {
        if (coinFlip()) {
          const randomMealIndex = Math.floor(Math.random() * meals.length);
          const mealId = meals[randomMealIndex].id;

          await prisma.scheduleMeal.create({
            data: {
              mealId,
              mealScheduleId: mealSchedule.id,
              createdBy: userId,
              updatedBy: userId,
            },
          });
        } else {
          const randomMealGroupIndex = Math.floor(
            Math.random() * mealGroups.length,
          );
          const mealGroupId = mealGroups[randomMealGroupIndex].id;

          await prisma.scheduleMeal.create({
            data: {
              mealGroupId,
              mealScheduleId: mealSchedule.id,
              createdBy: userId,
              updatedBy: userId,
            },
          });
        }
      }
    } catch (error) {}
  }
}

const seedMealGroups = async () => {
  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  const meals = await prisma.meal.findMany(); // Fetching meals instead of meal schedules

  for (const _ of Array(100).keys()) {
    const name = faker.commerce.department();
    const selectedMeals = faker.helpers.arrayElements(meals, {
      min: 1,
      max: 4,
    });

    await prisma.mealGroup.create({
      data: {
        name,
        meals: { connect: selectedMeals.map((meal) => ({ id: meal.id })) },
        createdBy: user.id,
        updatedBy: user.id,
      },
    });
  }
};

const seedMealIngredients = async (mealId: number, userId: number) => {
  const ingredients = await prisma.ingredient.findMany();
  const selectedIngredients = faker.helpers.uniqueArray(
    ingredients,
    randomInt(2, 5),
  );

  for (const ingredient of selectedIngredients) {
    await prisma.mealIngredient.create({
      data: {
        mealId: mealId,
        ingredientId: ingredient.id,
        weightGrams: faker.number.float({ min: 1, max: 500 }),
        createdBy: userId,
        updatedBy: userId,
      },
    });
  }
};

const createUser = async ({
  roles,
  email,
  password,
}: {
  email: string;
  password: string;
  roles: (keyof typeof UserRoleName)[];
}) => {
  const user = await prisma.user.create({
    data: {
      email,
      username: faker.internet.userName(),
      password: await argon2.hash(password),
      lastOnline: faker.date.past(),
    },
  });

  await prisma.user.update({
    where: { id: user.id },
    data: {
      createdBy: user.id,
      updatedBy: user.id,
    },
  });

  for (const role of roles) {
    await prisma.userRole.create({
      data: {
        userId: user.id,
        name: role,
        createdBy: user.id,
        updatedBy: user.id,
      },
    });
  }

  return user;
};

seed()
  .catch((e) => {
    error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
