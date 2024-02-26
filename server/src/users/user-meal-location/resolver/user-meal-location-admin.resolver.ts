import { CreateManyUserMealLocationArgs } from "@/app_modules/@generated/user-meal-location/create-many-user-meal-location.args";
import { DeleteManyUserMealLocationArgs } from "@/app_modules/@generated/user-meal-location/delete-many-user-meal-location.args";
import { DeleteOneUserMealLocationArgs } from "@/app_modules/@generated/user-meal-location/delete-one-user-meal-location.args";
import { FindFirstUserMealLocationArgs } from "@/app_modules/@generated/user-meal-location/find-first-user-meal-location.args";
import { FindManyUserMealLocationArgs } from "@/app_modules/@generated/user-meal-location/find-many-user-meal-location.args";
import { UpdateManyUserMealLocationArgs } from "@/app_modules/@generated/user-meal-location/update-many-user-meal-location.args";
import { UpdateOneUserMealLocationArgs } from "@/app_modules/@generated/user-meal-location/update-one-user-meal-location.args";
import { UpsertOneUserMealLocationArgs } from "@/app_modules/@generated/user-meal-location/upsert-one-user-meal-location.args";
import { UserMealLocationUncheckedCreateInput } from "@/app_modules/@generated/user-meal-location/user-meal-location-unchecked-create.input";
import { UserMealLocation } from "@/app_modules/@generated/user-meal-location/user-meal-location.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { UserMeaLocationService } from "../user-meal-location.service";

@Resolver(() => UserMealLocation)
export class UserMealLocationAdminResolver {
  constructor(
    private prisma: PrismaService,
    private userMealLocationService: UserMeaLocationService,
  ) {}

  @Query(() => [UserMealLocation], { nullable: true })
  @Roles("Admin")
  async getAllUserMealLocationsAdmin(
    @Args() args: FindManyUserMealLocationArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.UserMealLocationSelect;

    try {
      return await this.prisma.userMealLocation.findMany({
        select,
        ...args,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => UserMealLocation, { nullable: true })
  @Roles("Admin")
  async getUserMealLocationAdmin(
    @Args() args: FindFirstUserMealLocationArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.UserMealLocationSelect;
    try {
      return await this.prisma.userMealLocation.findFirst({
        select,
        ...args,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMealLocation, { nullable: true })
  @Roles("Admin")
  async createUserMealLocationAdmin(
    @Args("data") data: UserMealLocationUncheckedCreateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.UserMealLocationSelect;
    try {
      return await this.prisma.userMealLocation.create({
        data: data as any,
        select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [UserMealLocation], { nullable: true })
  @Roles("Admin")
  async createManyUserMealLocationsAdmin(
    @Args() args: CreateManyUserMealLocationArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.UserMealLocationSelect;
    try {
      const data = await Promise.all(
        args.data.map((data) =>
          this.prisma.userMealLocation.create({ data, select }),
        ),
      );

      return data;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMealLocation, { nullable: true })
  @Roles("Admin")
  async deleteUserMealLocationAdmin(
    @Args() args: DeleteOneUserMealLocationArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.UserMealLocationSelect;
    try {
      return await this.prisma.userMealLocation.delete({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("Admin")
  async deleteManyUserMealLocationsAdmin(
    @Args() args: DeleteManyUserMealLocationArgs,
  ) {
    try {
      return (await this.prisma.userMealLocation.deleteMany({ ...args })).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMealLocation, { nullable: true })
  @Roles("Admin")
  async updateUserMealLocationAdmin(
    @Args() args: UpdateOneUserMealLocationArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.UserMealLocationSelect;
    try {
      return await this.prisma.userMealLocation.update({
        ...(args as any),
        select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [UserMealLocation], { nullable: true })
  @Roles("Admin")
  async updateManyUserMealLocationsAdmin(
    @Args() args: UpdateManyUserMealLocationArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.UserMealLocationSelect;
    try {
      const data = await this.prisma.userMealLocation.findMany({
        where: args.where,
        select,
      });

      await this.prisma.userMealLocation.updateMany({ ...args });

      return data.map((d) => ({ ...d, ...args.data }));
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMealLocation, { nullable: true })
  @Roles("Admin")
  async upsertUserMealLocationAdmin(
    @Args() args: UpsertOneUserMealLocationArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.UserMealLocationSelect;
    try {
      return await this.prisma.userMealLocation.upsert({
        ...(args as any),
        select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMealLocation, { nullable: true })
  @Roles("Admin")
  async updateUserMealAdmin(
    @Args() args: UpdateOneUserMealLocationArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.UserMealLocationSelect;
    try {
      return await this.prisma.userMealLocation.update({
        ...(args as any),
        select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMealLocation, { nullable: true })
  @Roles("Admin")
  async upsertUserMealAdmin(
    @Args() args: UpsertOneUserMealLocationArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      ?.select as Prisma.UserMealLocationSelect;
    try {
      return await this.prisma.userMealLocation.upsert({
        ...(args as any),
        select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
