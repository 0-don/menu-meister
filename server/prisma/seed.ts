import { faker } from "@faker-js/faker";
import { PrismaClient, UserRoleName } from "@prisma/client";
import argon2 from "argon2";
import { error } from "console";
import dayjs from "dayjs";
import { mkdirSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";

const prisma = new PrismaClient();

const EMAIL = "admin@admin.de";

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
};

async function downloadImage(url: string) {
  const name = new URL(url).searchParams.get("lock");
  const category = new URL(url).pathname.split("/").at(-1);
  const fileName = `${category}-${name}.jpg`;
  const filePath = join(resolve(), "images", name);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }

  const image = Buffer.from(await response.arrayBuffer());
  mkdirSync(dirname(getImageFile(fileName)), { recursive: true });
  writeFileSync(getImageFile(fileName), image);
  return { fileName, filePath, image };
}

const seedIngredientsAndNutritions = async () => {
  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  for (const _ of Array(500).keys()) {
    const ingredientName = faker.commerce.product();

    const imgUrl = faker.image.urlLoremFlickr({
      category: "ingredients",
      width: 320,
      height: 240,
    });
    const { image } = await downloadImage(imgUrl);

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
    const { image } = await downloadImage(imgUrl);

    const meal = await prisma.meal.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image,
        createdBy: user.id,
        updatedBy: user.id,
      },
    });

    await seedMealSchedulers(meal.id, user.id);
    await seedMealIngredients(meal.id, user.id);
  }
};

const seedMealSchedulers = async (mealId, userId) => {
  for (const _ of Array(50).keys()) {
    await prisma.mealScheduler.create({
      data: {
        mealId: mealId,
        servingDate: faker.date.between({
          from: dayjs().subtract(1, "month").toDate(),
          to: dayjs().add(1, "month").toDate(),
        }),
        createdBy: userId,
        updatedBy: userId,
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
