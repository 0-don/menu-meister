import { CreateManyUserMealArgs } from "@/app_modules/@generated/user-meal/create-many-user-meal.args";
import { DeleteManyUserMealArgs } from "@/app_modules/@generated/user-meal/delete-many-user-meal.args";
import { DeleteOneUserMealArgs } from "@/app_modules/@generated/user-meal/delete-one-user-meal.args";
import { FindFirstUserMealArgs } from "@/app_modules/@generated/user-meal/find-first-user-meal.args";
import { FindManyUserMealArgs } from "@/app_modules/@generated/user-meal/find-many-user-meal.args";
import { UpdateManyUserMealArgs } from "@/app_modules/@generated/user-meal/update-many-user-meal.args";
import { UpdateOneUserMealArgs } from "@/app_modules/@generated/user-meal/update-one-user-meal.args";
import { UpsertOneUserMealArgs } from "@/app_modules/@generated/user-meal/upsert-one-user-meal.args";
import { UserMealUncheckedCreateInput } from "@/app_modules/@generated/user-meal/user-meal-unchecked-create.input";
import { UserMeal } from "@/app_modules/@generated/user-meal/user-meal.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { UserMealService } from "../user-meal.service";

@Resolver(() => UserMeal)
export class UserMealUserResolver {
  constructor(
    private prisma: PrismaService,
    private userMealService: UserMealService,
  ) {}

  @Query(() => [UserMeal], { nullable: true })
  @Roles("USER", "MOD")
  async getAllUserMealsUser(
    @Args() args: FindManyUserMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserMealSelect;
    try {
      return await this.prisma.userMeal.findMany({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => UserMeal, { nullable: true })
  @Roles("USER", "MOD")
  async getUserMealUser(
    @Args() args: FindFirstUserMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserMealSelect;
    try {
      return await this.prisma.userMeal.findFirst({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMeal, { nullable: true })
  @Roles("USER", "MOD")
  async createUserMealUser(
    @Args("data") data: UserMealUncheckedCreateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserMealSelect;
    try {
      const userMealAlreadyExist = await this.prisma.userMeal.findFirst({
        where: {
          date: data.date,
          timeOfDay: data.timeOfDay,
        },
      });

      if (userMealAlreadyExist)
        await this.prisma.userMeal.delete({
          where: { id: userMealAlreadyExist.id },
        });

      return await this.prisma.userMeal.create({ data, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [UserMeal], { nullable: true })
  @Roles("USER", "MOD")
  async createManyUserMealsUser(
    @Args() args: CreateManyUserMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserMealSelect;
    try {
      const data = await Promise.all(
        args.data.map((data) => this.prisma.userMeal.create({ data, select })),
      );

      return data;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMeal, { nullable: true })
  @Roles("USER", "MOD")
  async deleteUserMealUser(
    @Args() args: DeleteOneUserMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserMealSelect;
    try {
      return await this.prisma.userMeal.delete({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("USER", "MOD")
  async deleteManyUserMealsUser(@Args() args: DeleteManyUserMealArgs) {
    try {
      return (await this.prisma.userMeal.deleteMany({ ...args })).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMeal, { nullable: true })
  @Roles("USER", "MOD")
  async updateUserMealUser(
    @Args() args: UpdateOneUserMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserMealSelect;
    try {
      return await this.prisma.userMeal.update({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [UserMeal], { nullable: true })
  @Roles("USER", "MOD")
  async updateManyUserMealsUser(
    @Args() args: UpdateManyUserMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserMealSelect;

    try {
      const data = await this.prisma.userMeal.findMany({
        where: args.where,
        select,
      });

      await this.prisma.userMeal.updateMany({ ...args });

      return data.map((d) => ({ ...d, ...args.data }));
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => UserMeal, { nullable: true })
  @Roles("USER", "MOD")
  async upsertUserMealUser(
    @Args() args: UpsertOneUserMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      ?.select as Prisma.UserMealSelect;
    try {
      return await this.prisma.userMeal.upsert({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
