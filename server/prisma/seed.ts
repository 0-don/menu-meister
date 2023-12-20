import { faker } from "@faker-js/faker";
import { PrismaClient, UserRoleName } from "@prisma/client";
import argon2 from "argon2";
import { error } from "console";
const prisma = new PrismaClient();

const seed = async () => {
  const userCount = await prisma.user.count();

  if (userCount > 0) return;

  await createUser({
    email: "admin@admin.de",
    password: "!admin",
    roles: ["USER", "ADMIN"],
  });
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
};

seed()
  .catch((e) => {
    error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
