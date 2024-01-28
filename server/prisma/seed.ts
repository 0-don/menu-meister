import { faker } from "@faker-js/faker";
import { Prisma, PrismaClient, Unit, UserRoleName } from "@prisma/client";
import argon2 from "argon2";
import { error } from "console";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
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
const BLACKLISTED_IMG = [
  "2094537432367104",
  "1049880564858880",
  "8889722722058240",
  "5180683746017280",
  "2856251358707712",
  "1309938542444544",
];

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
    roles: ["ADMIN"],
  });

  await seedSettings();
  await seedAllProperties();
  await seedIngredients();
  await seedRecipes();
  await seedMeals();
  await seedMealBoardPlan();
  await seedWeeklyMealGroups();
};

async function downloadImage(url: string) {
  const name = new URL(url).searchParams.get("lock");
  const category = new URL(url).pathname.split("/").at(-1);
  const filename = `${category}-${name}.jpg`;

  const filePath = getImageFile(filename);

  if (existsSync(filePath)) {
    return { file: readFileSync(filePath, "base64"), filename };
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }

  const imageBuffer = await response.arrayBuffer();
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, Buffer.from(imageBuffer), "base64");
  return { file: Buffer.from(imageBuffer).toString("base64"), filename };
}

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
      name,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.additives.createMany({
    data: ADDITIVES.map((name) => ({
      name,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.properties.createMany({
    data: PROPERTIES.map((name) => ({
      name,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.categories.createMany({
    data: CATEGORIES.map((name) => ({
      name,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.seasons.createMany({
    data: SEASONS.map((name) => ({
      name,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.foodForms.createMany({
    data: FOOD_FORMS.map((name) => ({
      name,
      createdBy: user.id,
      updatedBy: user.id,
    })),
    skipDuplicates: true,
  });

  await prisma.kitchens.createMany({
    data: KITCHENS.map((name) => ({
      name,
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

  for (const ingredient of ingredients) {
    const data: Prisma.IngredientUncheckedCreateInput = {
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
        connectOrCreate: ingredient.allergens.map((name) => ({
          where: { name },
          create: { name, createdBy: user.id, updatedBy: user.id },
        })),
      },
      additives: {
        connectOrCreate: ingredient.additives.map((name) => ({
          where: { name },
          create: { name, createdBy: user.id, updatedBy: user.id },
        })),
      },
      properties: {
        connectOrCreate: ingredient.properties.map((name) => ({
          where: { name },
          create: { name, createdBy: user.id, updatedBy: user.id },
        })),
      },
      categories: {
        connectOrCreate: ingredient.categories.map((name) => ({
          where: { name },
          create: { name, createdBy: user.id, updatedBy: user.id },
        })),
      },
      seasons: {
        connectOrCreate: ingredient.seasons.map((name) => ({
          where: { name },
          create: { name, createdBy: user.id, updatedBy: user.id },
        })),
      },
      foodForms: {
        connectOrCreate: ingredient.food_forms.map((name) => ({
          where: { name },
          create: { name, createdBy: user.id, updatedBy: user.id },
        })),
      },
      kitchens: {
        connectOrCreate: ingredient.kitchens.map((name) => ({
          where: { name },
          create: { name, createdBy: user.id, updatedBy: user.id },
        })),
      },
    };

    await prisma.ingredient.upsert({
      where: { blsIdentifier: ingredient.bls_identifier },
      create: data,
      update: data,
    });
  }
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
    const additivesIds = recipe.additives.map(
      (name) => additives.find((additive) => additive.name === name)?.id,
    );
    const allergensIds = recipe.allergens.map(
      (name) => allergens.find((allergen) => allergen.name === name)?.id,
    );
    const propertiesIds = recipe.properties.map(
      (name) => properties.find((property) => property.name === name)?.id,
    );
    const categoriesIds = recipe.categories.map(
      (name) => categories.find((category) => category.name === name)?.id,
    );
    const seasonsIds = recipe.seasons.map(
      (name) => seasons.find((season) => season.name === name)?.id,
    );
    const foodFormsIds = recipe.food_forms.map(
      (name) => foodForms.find((foodForm) => foodForm.name === name)?.id,
    );
    const kitchensIds = recipe.kitchens.map(
      (name) => kitchens.find((kitchen) => kitchen.name === name)?.id,
    );

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

  // for (const _ of Array(500).keys()) {
  //   let randomIngredients: typeof ingredients = [];

  //   for (const _ of Array(randomInt(2, 5)).keys()) {
  //     randomIngredients.push(ingredients[randomInt(0, ingredients.length - 1)]);
  //   }

  //   const additives = new Set(
  //     ...randomIngredients.map((ingredient) =>
  //       ingredient.additives.map((additive) => additive.id),
  //     ),
  //   );
  //   const allergens = new Set(
  //     ...randomIngredients.map((ingredient) =>
  //       ingredient.allergens.map((allergen) => allergen.id),
  //     ),
  //   );
  //   const properties = new Set(
  //     ...randomIngredients.map((ingredient) =>
  //       ingredient.properties.map((property) => property.id),
  //     ),
  //   );
  //   const categories = new Set(
  //     ...randomIngredients.map((ingredient) =>
  //       ingredient.categories.map((category) => category.id),
  //     ),
  //   );
  //   const seasons = new Set(
  //     ...randomIngredients.map((ingredient) =>
  //       ingredient.seasons.map((season) => season.id),
  //     ),
  //   );
  //   const foodForms = new Set(
  //     ...randomIngredients.map((ingredient) =>
  //       ingredient.foodForms.map((foodForm) => foodForm.id),
  //     ),
  //   );
  //   const kitchens = new Set(
  //     ...randomIngredients.map((ingredient) =>
  //       ingredient.kitchens.map((kitchen) => kitchen.id),
  //     ),
  //   );
  //   const recipe = await prisma.recipe.create({
  //     data: {
  //       name: faker.commerce.productName(),
  //       description: faker.commerce.productDescription(),
  //       createdBy: user.id,
  //       updatedBy: user.id,
  //       additives: { connect: [...additives].map((id) => ({ id })) },
  //       allergens: { connect: [...allergens].map((id) => ({ id })) },
  //       properties: { connect: [...properties].map((id) => ({ id })) },
  //       categories: { connect: [...categories].map((id) => ({ id })) },
  //       seasons: { connect: [...seasons].map((id) => ({ id })) },
  //       foodForms: { connect: [...foodForms].map((id) => ({ id })) },
  //       kitchens: { connect: [...kitchens].map((id) => ({ id })) },
  //     },
  //   });

  //   for (const ingredient of randomIngredients) {
  //     await prisma.recipeIngredient.create({
  //       data: {
  //         recipeId: recipe.id,
  //         ingredientId: ingredient.id,
  //         amount: randomInt(1, 100),
  //         unit: "G",
  //         createdBy: user.id,
  //         updatedBy: user.id,
  //       },
  //     });
  //   }
  // }
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
    const additivesIds = meal.additives.map(
      (name) => additives.find((additive) => additive.name === name)?.id,
    );
    const allergensIds = meal.allergens.map(
      (name) => allergens.find((allergen) => allergen.name === name)?.id,
    );
    const propertiesIds = meal.properties.map(
      (name) => properties.find((property) => property.name === name)?.id,
    );
    const categoriesIds = meal.categories.map(
      (name) => categories.find((category) => category.name === name)?.id,
    );
    const seasonsIds = meal.seasons.map(
      (name) => seasons.find((season) => season.name === name)?.id,
    );
    const foodFormsIds = meal.food_forms.map(
      (name) => foodForms.find((foodForm) => foodForm.name === name)?.id,
    );

    const mealDB = await prisma.meal.create({
      data: {
        name: meal.name,
        image: meal.picture,
        imageName: `${meal.name}.jpg`,
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

    for (const recipeName of meal.dish_recipes) {
      const recipe = recipes.find((recipe) => recipe.name === recipeName);
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

  // for (const _ of Array(250).keys()) {
  //   const randomRecipes: typeof recipes = [];

  //   for (const _ of Array(randomInt(1, 3)).keys()) {
  //     randomRecipes.push(recipes[randomInt(0, recipes.length - 1)]);
  //   }

  //   const additives = new Set(
  //     ...randomRecipes.map((recipe) =>
  //       recipe.additives.map((additive) => additive.name),
  //     ),
  //   );
  //   const allergens = new Set(
  //     ...randomRecipes.map((recipe) =>
  //       recipe.allergens.map((allergen) => allergen.name),
  //     ),
  //   );
  //   const properties = new Set(
  //     ...randomRecipes.map((recipe) =>
  //       recipe.properties.map((property) => property.name),
  //     ),
  //   );
  //   const categories = new Set(
  //     ...randomRecipes.map((recipe) =>
  //       recipe.categories.map((category) => category.name),
  //     ),
  //   );
  //   const seasons = new Set(
  //     ...randomRecipes.map((recipe) =>
  //       recipe.seasons.map((season) => season.name),
  //     ),
  //   );
  //   const foodForms = new Set(
  //     ...randomRecipes.map((recipe) =>
  //       recipe.foodForms.map((foodForm) => foodForm.name),
  //     ),
  //   );

  //   const imgUrl = faker.image.urlLoremFlickr({
  //     category: "meal",
  //     width: 200,
  //     height: 200,
  //   });

  //   let blacklist = false;
  //   for (const blacklisted of BLACKLISTED_IMG) {
  //     if (imgUrl.includes(blacklisted)) {
  //       blacklist = true;
  //     }
  //   }

  //   const image = !blacklist
  //     ? await downloadImage(imgUrl)
  //     : { file: null, filename: null };

  //   const meal = await prisma.meal.create({
  //     data: {
  //       name: faker.commerce.productName(),
  //       description: faker.commerce.productDescription(),
  //       imageName: image.filename,
  //       image: image.file,
  //       createdBy: user.id,
  //       updatedBy: user.id,
  //       additives: { connect: [...additives].map((name) => ({ name })) },
  //       allergens: { connect: [...allergens].map((name) => ({ name })) },
  //       properties: { connect: [...properties].map((name) => ({ name })) },
  //       categories: { connect: [...categories].map((name) => ({ name })) },
  //       seasons: { connect: [...seasons].map((name) => ({ name })) },
  //       foodForms: { connect: [...foodForms].map((name) => ({ name })) },
  //     },
  //   });

  //   for (const recipe of randomRecipes) {
  //     await prisma.mealRecipe.create({
  //       data: {
  //         mealId: meal.id,
  //         recipeId: recipe.id,
  //         createdBy: user.id,
  //         updatedBy: user.id,
  //       },
  //     });
  //   }
  // }
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

  for (const mealBoardPlan of mealBoardPlans) {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 2;
    const endYear = currentYear + 2;
    const groupsPerWeek = 3;

    for (let year = startYear; year <= endYear; year++) {
      for (let week = 1; week <= 52; week++) {
        for (let groupIndex = 0; groupIndex < groupsPerWeek; groupIndex++) {
          if (coinFlip(0.25)) continue;
          const weeklyMealGroup = await prisma.weeklyMealGroup.create({
            data: {
              name: faker.commerce.productName(),
              description: faker.lorem.sentence(),
              mealBoardPlanId: mealBoardPlan.id,
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
            },
          });

          for (const dayField of DAYFIELDS) {
            const randomMeal = meals[randomInt(0, meals.length - 1)];

            if (coinFlip(0.75)) {
              await prisma.weeklyMealGroup.update({
                where: { id: weeklyMealGroup.id },
                data: {
                  [dayField]: randomMeal.id,
                },
              });
            }
          }
        }
      }
    }
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
