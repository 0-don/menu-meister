import { faker } from "@faker-js/faker";
import { PrismaClient, UserRoleName } from "@prisma/client";
import argon2 from "argon2";
import { error } from "console";

const prisma = new PrismaClient();

const randomInt = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const coinFlip = (probability = 0.5) =>
  Math.random() <= probability ? true : false;

const seed = async () => {
  const userCount = await prisma.user.count();

  if (userCount > 0) return;

  const user = await createUser({
    email: "admin@admin.de",
    password: "!admin",
    roles: ["USER", "ADMIN"],
  });
};

export const seedIngredientsAndNutritions = async () => {
  const user = await prisma.user.findFirst({
    where: { email: "admin@admin.de" },
  });

  for (let i = 0; i < 100; i++) {
    const ingredientName = faker.commerce.product();

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
