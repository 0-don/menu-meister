import { User } from "@/app_modules/@generated/user/user.model";
import { JwtUser } from "@/app_modules/@types/types";
import { Injectable } from "@nestjs/common";
import argon2 from "argon2";
import { PrismaService } from "../../app_modules/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async upsertUser(data: User) {
    const { userRole, ...userData } = data;

    const password = await argon2.hash(userData.password || "");
    const create = { ...userData, password };
    const update = userData.password ? { ...userData, password } : userData;

    if (!update.password) delete update.password;
    if (update.username) delete update.username;

    const user = await this.prisma.user.upsert({
      where: { id: data.id },
      create: create as any,
      update: update as any,
    });

    return user;
  }

  async upsertUserRoles(data: User, me?: JwtUser) {
    const { userRole } = data;

    await this.prisma.userRole.deleteMany({
      where: { userId: data.id },
    });

    for (const role of userRole) {
      await this.prisma.userRole.create({
        data: {
          name: role.name,
          userId: data.id,
          createdBy: me.sub,
          updatedBy: me.sub,
        },
      });
    }
  }
}
