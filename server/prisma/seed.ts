import { faker } from "@faker-js/faker";
import {
  MealLocation,
  PrismaClient,
  TimeOfDay,
  Unit,
  UserRoleName,
} from "@prisma/client";
import argon2 from "argon2";
import { error } from "console";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import "dotenv/config";
import { readFileSync } from "fs";
import { join, resolve } from "path";
import {
  ADDITIVES,
  ALLERGENS,
  CATEGORIES,
  FOOD_FORMS,
  Ingredient,
  KITCHENS,
  MealOrRecipe,
  PROPERTIES,
  SEASONS,
} from "./data";

dayjs.extend(utc);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
dayjs.Ls["en"].weekStart = 1;

const prisma = new PrismaClient();

const EMAIL = "admin@admin.de";
const MEAL_BOARD_PLAN_NAME = "Testplan";
const DAYFIELDS = [
  "mondayMealId",
  "tuesdayMealId",
  "wednesdayMealId",
  "thursdayMealId",
  "fridayMealId",
  "saturdayMealId",
  "sundayMealId",
];

const randomInt = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const coinFlip = (probability = 0.5) =>
  Math.random() <= probability ? true : false;

const seed = async () => {
  const userCount = await prisma.user.count();
  if (userCount > 0) return;

  await createUser({
    email: EMAIL,
    password: await argon2.hash("!admin"),
    roles: ["USER", "ADMIN"],
  });

  await seedSettings();
  await seedAllProperties();
  await seedIngredients();
  await seedRecipes();
  await seedMeals();
  await seedMealBoardPlan();
  await seedWeeklyMealGroups();
  await seedUsers();
  await seedUserMeals();
};

const seedUsers = async () => {
  const allergens = await prisma.allergens.findMany();
  const timeOfDays = Object.values(TimeOfDay);
  const mealLocations = Object.values(MealLocation);

  const mealLocationsAndAllergens = async (userId: number) => {
    for (const _ of Array(randomInt(1, 5))) {
      const allergen = allergens[randomInt(0, allergens.length - 1)];
      await prisma.user.update({
        where: { id: userId },
        data: {
          allergens: {
            connectOrCreate: [
              {
                create: {
                  id: allergen.id,
                  name: allergen.name,
                  createdBy: userId,
                  updatedBy: userId,
                },
                where: { id: allergen.id },
              },
            ],
          },
        },
      });
    }

    for (const _ of Array(randomInt(3, 7))) {
      const timeOfDay = timeOfDays[randomInt(0, timeOfDays.length - 1)];
      const mealLocation =
        mealLocations[randomInt(0, mealLocations.length - 1)];
      try {
        await prisma.userMealLocation.create({
          data: {
            timeOfDay,
            mealLocation,
            userId,
            createdBy: userId,
            updatedBy: userId,
          },
        });
      } catch (error) {}
    }
  };

  for (const _ of Array(100).keys()) {
    const user = await createUser({
      email: faker.internet.email(),
      password: await argon2.hash("test"),
      roles: ["USER"],
    });
    await mealLocationsAndAllergens(user.id);
  }

  const admin = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  await mealLocationsAndAllergens(admin.id);
};

const seedUserMeals = async () => {
  const users = await prisma.user.findMany();
  const pastWeeklyMealGroups = await prisma.weeklyMealGroup.findMany({
    where: {
      OR: [
        { year: { lt: dayjs().year() } },
        { year: dayjs().year(), weekOfYear: { lt: dayjs().week() } },
      ],
    },
  });
  const mealBoardPlan = await prisma.mealBoardPlan.findFirst({
    where: { name: MEAL_BOARD_PLAN_NAME },
  });

  const transactions: any[] = [];

  for (const user of users) {
    for (const _ of Array(randomInt(100, 200))) {
      const weeklyMealGroup =
        pastWeeklyMealGroups[randomInt(0, pastWeeklyMealGroups.length - 1)];
      const index = randomInt(0, DAYFIELDS.length - 1);

      const startOfWeek = dayjs()
        .year(weeklyMealGroup.year)
        .isoWeek(weeklyMealGroup.weekOfYear)
        .startOf("week");

      const days = Array.from({ length: 7 }, (_, i) =>
        startOfWeek
          .add(i + process.env.NODE_ENV === "production" ? 0 : 1, "day")
          .toISOString(),
      );
      const weekDay = DAYFIELDS[index];
      const mealId = weeklyMealGroup[weekDay];
      if (!mealId) continue;
      const date = days[index];

      transactions.push(
        prisma.userMeal.create({
          data: {
            date,
            mealId,
            userId: user.id,
            mealBoardPlanId: mealBoardPlan.id,
            timeOfDay: weeklyMealGroup.timeOfDay,
            weeklyMealGroupId: weeklyMealGroup.id,
            createdBy: user.id,
            updatedBy: user.id,
          },
        }),
      );
    }
  }

  await prisma.$transaction(transactions);
};

const seedSettings = async () => {
  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  await prisma.settings.create({
    data: {
      maxEditOrderDays: 3,
      createdBy: user.id,
      updatedBy: user.id,
    },
  });
};

const seedAllProperties = async () => {
  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  await prisma.allergens.createMany({
    data: ALLERGENS.map((name) => ({
      name: name.key,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.additives.createMany({
    data: ADDITIVES.map((name) => ({
      name: name.key,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.properties.createMany({
    data: PROPERTIES.map((name) => ({
      name: name.key,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.categories.createMany({
    data: CATEGORIES.map((name) => ({
      name: name.key,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.seasons.createMany({
    data: SEASONS.map((name) => ({
      name: name.key,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.foodForms.createMany({
    data: FOOD_FORMS.map((name) => ({
      name: name.key,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.kitchens.createMany({
    data: KITCHENS.map((name) => ({
      name: name.key,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });
};

const seedIngredients = async () => {
  const ingredients: Ingredient[] = JSON.parse(
    readFileSync(join(resolve(), "prisma", "ingredients.json"), "utf-8"),
  );

  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  const operations = ingredients.map((ingredient) => {
    const data = {
      name: ingredient.name,
      blsIdentifier: ingredient.bls_identifier,
      energyKcal: ingredient.energyKcal,
      energyKj: ingredient.energyKj,
      breadUnits: ingredient.breadUnits,
      carbohydrates: ingredient.carbohydrates,
      sugars: ingredient.sugars,
      salt: ingredient.salt,
      fats: ingredient.fats,
      saturatedFats: ingredient.saturatedFats,
      createdBy: user.id,
      updatedBy: user.id,
      allergens: {
        connectOrCreate: ingredient.allergens.map((name) => {
          const item = ALLERGENS.find((allergen) => allergen.value === name);
          return {
            where: { name: item?.key },
            create: {
              name: item?.key,
              createdBy: user.id,
              updatedBy: user.id,
            },
          };
        }),
      },
      additives: {
        connectOrCreate: ingredient.additives.map((name) => {
          const item = ADDITIVES.find((additive) => additive.value === name);
          return {
            where: { name: item?.key },
            create: {
              name: item?.key,
              createdBy: user.id,
              updatedBy: user.id,
            },
          };
        }),
      },
      properties: {
        connectOrCreate: ingredient.properties.map((name) => {
          const item = PROPERTIES.find((property) => property.value === name);
          return {
            where: { name: item?.key },
            create: {
              name: item?.key,
              createdBy: user.id,
              updatedBy: user.id,
            },
          };
        }),
      },
      categories: {
        connectOrCreate: ingredient.categories.map((name) => {
          const item = CATEGORIES.find((category) => category.value === name);
          return {
            where: { name: item?.key },
            create: {
              name: item?.key,
              createdBy: user.id,
              updatedBy: user.id,
            },
          };
        }),
      },
      seasons: {
        connectOrCreate: ingredient.seasons.map((name) => {
          const item = SEASONS.find((season) => season.value === name);
          return {
            where: { name: item?.key },
            create: {
              name: item?.key,
              createdBy: user.id,
              updatedBy: user.id,
            },
          };
        }),
      },
      foodForms: {
        connectOrCreate: ingredient.food_forms.map((name) => {
          const item = FOOD_FORMS.find((foodForm) => foodForm.value === name);
          return {
            where: { name: item?.key },
            create: {
              name: item?.key,
              createdBy: user.id,
              updatedBy: user.id,
            },
          };
        }),
      },
      kitchens: {
        connectOrCreate: ingredient.kitchens.map((name) => {
          const item = KITCHENS.find((kitchen) => kitchen.value === name);
          return {
            where: { name: item?.key },
            create: {
              name: item?.key,
              createdBy: user.id,
              updatedBy: user.id,
            },
          };
        }),
      },
    };
    return prisma.ingredient.upsert({
      where: { blsIdentifier: ingredient.bls_identifier },
      update: data,
      create: data,
    });
  });

  await prisma.$transaction(operations);
};

const seedRecipes = async () => {
  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  const ingredients = await prisma.ingredient.findMany({
    select: {
      id: true,
      name: true,
      blsIdentifier: true,
    },
  });

  const additives = await prisma.additives.findMany({
    select: { id: true, name: true },
  });
  const allergens = await prisma.allergens.findMany({
    select: { id: true, name: true },
  });
  const properties = await prisma.properties.findMany({
    select: { id: true, name: true },
  });
  const categories = await prisma.categories.findMany({
    select: { id: true, name: true },
  });
  const seasons = await prisma.seasons.findMany({
    select: { id: true, name: true },
  });
  const foodForms = await prisma.foodForms.findMany({
    select: { id: true, name: true },
  });
  const kitchens = await prisma.kitchens.findMany({
    select: { id: true, name: true },
  });

  const recipes: MealOrRecipe[] = JSON.parse(
    readFileSync(join(resolve(), "prisma", "recipes.json"), "utf-8"),
  );

  for (const recipe of recipes) {
    const additivesIds = recipe.additives
      .map((name) => {
        const item = ADDITIVES.find((additive) => additive.value === name);
        const actualAdditive = additives.find(
          (additive) => additive.name === item?.key,
        );
        return actualAdditive?.id;
      })
      .filter(Boolean);
    const allergensIds = recipe.allergens
      .map((name) => {
        const item = ALLERGENS.find((allergen) => allergen.value === name);
        const actualAllergen = allergens.find(
          (allergen) => allergen.name === item?.key,
        );
        return actualAllergen?.id;
      })
      .filter(Boolean);
    const propertiesIds = recipe.properties
      .map((name) => {
        const item = PROPERTIES.find((property) => property.value === name);
        const actualProperty = properties.find(
          (property) => property.name === item?.key,
        );
        return actualProperty?.id;
      })
      .filter(Boolean);
    const categoriesIds = recipe.categories
      .map((name) => {
        const item = CATEGORIES.find((category) => category.value === name);
        const actualCategory = categories.find(
          (category) => category.name === item?.key,
        );
        return actualCategory?.id;
      })
      .filter(Boolean);
    const seasonsIds = recipe.seasons
      .map((name) => {
        const item = SEASONS.find((season) => season.value === name);
        const actualSeason = seasons.find(
          (season) => season.name === item?.key,
        );
        return actualSeason?.id;
      })
      .filter(Boolean);
    const foodFormsIds = recipe.food_forms
      .map((name) => {
        const item = FOOD_FORMS.find((foodForm) => foodForm.value === name);
        const actualFoodForm = foodForms.find(
          (foodForm) => foodForm.name === item?.key,
        );
        return actualFoodForm?.id;
      })
      .filter(Boolean);
    const kitchensIds = recipe.kitchens
      .map((name) => {
        const item = KITCHENS.find((kitchen) => kitchen.value === name);
        const actualKitchen = kitchens.find(
          (kitchen) => kitchen.name === item?.key,
        );
        return actualKitchen?.id;
      })
      .filter(Boolean);
    const recipeDB = await prisma.recipe.create({
      data: {
        name: recipe.name,
        createdBy: user.id,
        updatedBy: user.id,
        additives: additivesIds.length
          ? { connect: additivesIds.map((id) => ({ id })) }
          : undefined,
        allergens: allergensIds.length
          ? { connect: allergensIds.map((id) => ({ id })) }
          : undefined,
        properties: propertiesIds.length
          ? { connect: propertiesIds.map((id) => ({ id })) }
          : undefined,
        categories: categoriesIds.length
          ? { connect: categoriesIds.map((id) => ({ id })) }
          : undefined,
        seasons: seasonsIds.length
          ? { connect: seasonsIds.map((id) => ({ id })) }
          : undefined,
        foodForms: foodFormsIds.length
          ? { connect: foodFormsIds.map((id) => ({ id })) }
          : undefined,
        kitchens: kitchensIds.length
          ? { connect: kitchensIds.map((id) => ({ id })) }
          : undefined,
      },
    });

    for (const ingredient of recipe.recipe_ingredients) {
      const ingredientId = ingredients.find(
        (ingredient) => ingredient.blsIdentifier === ingredient.blsIdentifier,
      )?.id;

      await prisma.recipeIngredient.create({
        data: {
          recipeId: recipeDB.id,
          ingredientId,
          amount: ingredient.amount / ingredient.factor,
          unit: ingredient.unit.toUpperCase() as Unit,
          createdBy: user.id,
          updatedBy: user.id,
        },
      });
    }
  }
};

const seedMeals = async () => {
  const user = await prisma.user.findFirst({
    where: { email: EMAIL },
  });

  const recipes = await prisma.recipe.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  const additives = await prisma.additives.findMany({
    select: { id: true, name: true },
  });
  const allergens = await prisma.allergens.findMany({
    select: { id: true, name: true },
  });
  const properties = await prisma.properties.findMany({
    select: { id: true, name: true },
  });
  const categories = await prisma.categories.findMany({
    select: { id: true, name: true },
  });
  const seasons = await prisma.seasons.findMany({
    select: { id: true, name: true },
  });
  const foodForms = await prisma.foodForms.findMany({
    select: { id: true, name: true },
  });

  const meals: MealOrRecipe[] = JSON.parse(
    readFileSync(join(resolve(), "prisma", "meals.json"), "utf-8"),
  );

  for (const meal of meals) {
    const additivesIds = meal.additives
      .map((name) => {
        const item = ADDITIVES.find((additive) => additive.value === name);
        const actualAdditive = additives.find(
          (additive) => additive.name === item?.key,
        );
        return actualAdditive?.id;
      })
      .filter(Boolean);
    const allergensIds = meal.allergens
      .map((name) => {
        const item = ALLERGENS.find((allergen) => allergen.value === name);
        const actualAllergen = allergens.find(
          (allergen) => allergen.name === item?.key,
        );
        return actualAllergen?.id;
      })
      .filter(Boolean);
    const propertiesIds = meal.properties
      .map((name) => {
        const item = PROPERTIES.find((property) => property.value === name);
        const actualProperty = properties.find(
          (property) => property.name === item?.key,
        );
        return actualProperty?.id;
      })
      .filter(Boolean);
    const categoriesIds = meal.categories
      .map((name) => {
        const item = CATEGORIES.find((category) => category.value === name);
        const actualCategory = categories.find(
          (category) => category.name === item?.key,
        );
        return actualCategory?.id;
      })
      .filter(Boolean);
    const seasonsIds = meal.seasons
      .map((name) => {
        const item = SEASONS.find((season) => season.value === name);
        const actualSeason = seasons.find(
          (season) => season.name === item?.key,
        );
        return actualSeason?.id;
      })
      .filter(Boolean);
    const foodFormsIds = meal.food_forms
      .map((name) => {
        const item = FOOD_FORMS.find((foodForm) => foodForm.value === name);
        const actualFoodForm = foodForms.find(
          (foodForm) => foodForm.name === item?.key,
        );
        return actualFoodForm?.id;
      })
      .filter(Boolean);

    const mealDB = await prisma.meal.create({
      data: {
        name: meal.name,
        image: meal.picture,
        createdBy: user.id,
        updatedBy: user.id,
        additives: additivesIds.length
          ? { connect: additivesIds.map((id) => ({ id })) }
          : undefined,
        allergens: allergensIds.length
          ? { connect: allergensIds.map((id) => ({ id })) }
          : undefined,
        properties: propertiesIds.length
          ? { connect: propertiesIds.map((id) => ({ id })) }
          : undefined,
        categories: categoriesIds.length
          ? { connect: categoriesIds.map((id) => ({ id })) }
          : undefined,
        seasons: seasonsIds.length
          ? { connect: seasonsIds.map((id) => ({ id })) }
          : undefined,
        foodForms: foodFormsIds.length
          ? { connect: foodFormsIds.map((id) => ({ id })) }
          : undefined,
      },
    });

    for (const mealRecipes of meal.dish_recipes) {
      const recipe = recipes.find((recipe) => recipe.name === mealRecipes.name);

      if (!recipe) continue;
      await prisma.mealRecipe.create({
        data: {
          mealId: mealDB.id,
          recipeId: recipe.id,
          createdBy: user.id,
          updatedBy: user.id,
        },
      });
    }
  }
};

const seedMealBoardPlan = async () => {
  const user = await prisma.user.findUnique({ where: { email: EMAIL } });

  await prisma.mealBoardPlan.create({
    data: {
      name: MEAL_BOARD_PLAN_NAME,
      createdBy: user.id,
      updatedBy: user.id,
    },
  });
};

const seedWeeklyMealGroups = async () => {
  const user = await prisma.user.findUnique({ where: { email: EMAIL } });
  const meals = await prisma.meal.findMany();
  const mealBoardPlans = await prisma.mealBoardPlan.findMany();
  const timeOfDays = Object.values(TimeOfDay);

  const weeklyMealGroupsToCreate = [];

  for (const mealBoardPlan of mealBoardPlans) {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 2;
    const endYear = currentYear + 2;
    const groupsPerWeek = 3;

    for (let year = startYear; year <= endYear; year++) {
      for (let week = 1; week <= 52; week++) {
        for (let groupIndex = 0; groupIndex < groupsPerWeek; groupIndex++) {
          if (coinFlip(0.25)) continue;
          const weeklyMealGroupData = {
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            mealBoardPlanId: mealBoardPlan.id,
            timeOfDay: timeOfDays[randomInt(0, timeOfDays.length - 1)],
            color: faker.internet.color({
              redBase: 100,
              greenBase: 100,
              blueBase: 100,
            }),
            weekOfYear: week,
            orderIndex: groupIndex,
            year,
            createdBy: user.id,
            updatedBy: user.id,
          };
          weeklyMealGroupsToCreate.push(weeklyMealGroupData);
        }
      }
    }
  }

  // Batch create weeklyMealGroups
  await prisma.weeklyMealGroup.createMany({
    data: weeklyMealGroupsToCreate,
  });

  // Fetch all weeklyMealGroups created
  const allWeeklyMealGroups = await prisma.weeklyMealGroup.findMany();

  const updates = allWeeklyMealGroups.flatMap((weeklyMealGroup) =>
    DAYFIELDS.map((dayField) => {
      if (coinFlip(0.75)) {
        const randomMeal = meals[randomInt(0, meals.length - 1)];
        return prisma.weeklyMealGroup.update({
          where: { id: weeklyMealGroup.id },
          data: { [dayField]: randomMeal.id },
        });
      }
      return null;
    }).filter((update) => update !== null),
  );

  await prisma.$transaction(updates);
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
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      username: faker.internet.userName(),
      password,
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
