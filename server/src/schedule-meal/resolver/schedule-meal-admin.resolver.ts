import { CreateManyScheduledMealArgs } from "@/app_modules/@generated/scheduled-meal/create-many-scheduled-meal.args";
import { CreateOneScheduledMealArgs } from "@/app_modules/@generated/scheduled-meal/create-one-scheduled-meal.args";
import { DeleteManyScheduledMealArgs } from "@/app_modules/@generated/scheduled-meal/delete-many-scheduled-meal.args";
import { DeleteOneScheduledMealArgs } from "@/app_modules/@generated/scheduled-meal/delete-one-scheduled-meal.args";
import { FindFirstScheduledMealArgs } from "@/app_modules/@generated/scheduled-meal/find-first-scheduled-meal.args";
import { FindManyScheduledMealArgs } from "@/app_modules/@generated/scheduled-meal/find-many-scheduled-meal.args";
import { ScheduledMeal } from "@/app_modules/@generated/scheduled-meal/scheduled-meal.model";
import { UpdateManyScheduledMealArgs } from "@/app_modules/@generated/scheduled-meal/update-many-scheduled-meal.args";
import { UpdateOneScheduledMealArgs } from "@/app_modules/@generated/scheduled-meal/update-one-scheduled-meal.args";
import { UpsertOneScheduledMealArgs } from "@/app_modules/@generated/scheduled-meal/upsert-one-scheduled-meal.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { ScheduleMealService } from "../schedule-meal.service";

@Resolver(() => ScheduledMeal)
export class ScheduledMealAdminResolver {
  constructor(
    private prisma: PrismaService,
    private scheduleMealService: ScheduleMealService,
  ) {}

  @Query(() => [ScheduledMeal], { nullable: true })
  @Roles("ADMIN")
  async getAllScheduledMealsAdmin(
    @Args() args: FindManyScheduledMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.scheduleMeal.findMany({
        ...args,
        ...select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => ScheduledMeal, { nullable: true })
  @Roles("ADMIN")
  async getScheduledMealAdmin(
    @Args() args: FindFirstScheduledMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.scheduleMeal.findFirst({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => ScheduledMeal, { nullable: true })
  @Roles("ADMIN")
  async createScheduledMealAdmin(
    @Args() args: CreateOneScheduledMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.scheduleMeal.create({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [ScheduledMeal], { nullable: true })
  @Roles("ADMIN")
  async createManyScheduledMealsAdmin(
    @Args() args: CreateManyScheduledMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.scheduleMeal.createMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => ScheduledMeal, { nullable: true })
  @Roles("ADMIN")
  async deleteScheduledMealAdmin(
    @Args() args: DeleteOneScheduledMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.scheduleMeal.delete({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyScheduledMealsAdmin(
    @Args() args: DeleteManyScheduledMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return (await this.prisma.scheduleMeal.deleteMany({ ...args, ...select }))
        .count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => ScheduledMeal, { nullable: true })
  @Roles("ADMIN")
  async updateScheduledMealAdmin(
    @Args() args: UpdateOneScheduledMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.scheduleMeal.update({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [ScheduledMeal], { nullable: true })
  @Roles("ADMIN")
  async updateManyScheduledMealsAdmin(
    @Args() args: UpdateManyScheduledMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.scheduleMeal.updateMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => ScheduledMeal, { nullable: true })
  @Roles("ADMIN")
  async upsertScheduledMealAdmin(
    @Args() args: UpsertOneScheduledMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.scheduleMeal.upsert({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
