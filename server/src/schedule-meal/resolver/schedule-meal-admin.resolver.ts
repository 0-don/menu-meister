import { CreateManyScheduleMealArgs } from "@/app_modules/@generated/schedule-meal/create-many-schedule-meal.args";
import { CreateOneScheduleMealArgs } from "@/app_modules/@generated/schedule-meal/create-one-schedule-meal.args";
import { DeleteManyScheduleMealArgs } from "@/app_modules/@generated/schedule-meal/delete-many-schedule-meal.args";
import { DeleteOneScheduleMealArgs } from "@/app_modules/@generated/schedule-meal/delete-one-schedule-meal.args";
import { FindFirstScheduleMealArgs } from "@/app_modules/@generated/schedule-meal/find-first-schedule-meal.args";
import { FindManyScheduleMealArgs } from "@/app_modules/@generated/schedule-meal/find-many-schedule-meal.args";
import { ScheduleMeal } from "@/app_modules/@generated/schedule-meal/schedule-meal.model";
import { UpdateManyScheduleMealArgs } from "@/app_modules/@generated/schedule-meal/update-many-schedule-meal.args";
import { UpdateOneScheduleMealArgs } from "@/app_modules/@generated/schedule-meal/update-one-schedule-meal.args";
import { UpsertOneScheduleMealArgs } from "@/app_modules/@generated/schedule-meal/upsert-one-schedule-meal.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { ScheduleMealService } from "../schedule-meal.service";

@Resolver(() => ScheduleMeal)
export class ScheduleMealAdminResolver {
  constructor(
    private prisma: PrismaService,
    private scheduleMealService: ScheduleMealService,
  ) {}

  @Query(() => [ScheduleMeal], { nullable: true })
  @Roles("ADMIN")
  async getAllScheduleMealsAdmin(
    @Args() args: FindManyScheduleMealArgs,
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

  @Query(() => ScheduleMeal, { nullable: true })
  @Roles("ADMIN")
  async getScheduleMealAdmin(
    @Args() args: FindFirstScheduleMealArgs,
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

  @Mutation(() => ScheduleMeal, { nullable: true })
  @Roles("ADMIN")
  async createScheduleMealAdmin(
    @Args() args: CreateOneScheduleMealArgs,
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

  @Mutation(() => [ScheduleMeal], { nullable: true })
  @Roles("ADMIN")
  async createManyScheduleMealsAdmin(
    @Args() args: CreateManyScheduleMealArgs,
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

  @Mutation(() => ScheduleMeal, { nullable: true })
  @Roles("ADMIN")
  async deleteScheduleMealAdmin(
    @Args() args: DeleteOneScheduleMealArgs,
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
  async deleteManyScheduleMealsAdmin(
    @Args() args: DeleteManyScheduleMealArgs,
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

  @Mutation(() => ScheduleMeal, { nullable: true })
  @Roles("ADMIN")
  async updateScheduleMealAdmin(
    @Args() args: UpdateOneScheduleMealArgs,
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

  @Mutation(() => [ScheduleMeal], { nullable: true })
  @Roles("ADMIN")
  async updateManyScheduleMealsAdmin(
    @Args() args: UpdateManyScheduleMealArgs,
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

  @Mutation(() => ScheduleMeal, { nullable: true })
  @Roles("ADMIN")
  async upsertScheduleMealAdmin(
    @Args() args: UpsertOneScheduleMealArgs,
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
