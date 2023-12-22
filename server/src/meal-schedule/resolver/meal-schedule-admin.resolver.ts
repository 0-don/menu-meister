import { CreateManyMealScheduleArgs } from "@/app_modules/@generated/meal-schedule/create-many-meal-schedule.args";
import { CreateOneMealScheduleArgs } from "@/app_modules/@generated/meal-schedule/create-one-meal-schedule.args";
import { DeleteManyMealScheduleArgs } from "@/app_modules/@generated/meal-schedule/delete-many-meal-schedule.args";
import { DeleteOneMealScheduleArgs } from "@/app_modules/@generated/meal-schedule/delete-one-meal-schedule.args";
import { FindFirstMealScheduleArgs } from "@/app_modules/@generated/meal-schedule/find-first-meal-schedule.args";
import { FindManyMealScheduleArgs } from "@/app_modules/@generated/meal-schedule/find-many-meal-schedule.args";
import { MealSchedule } from "@/app_modules/@generated/meal-schedule/meal-schedule.model";
import { UpdateManyMealScheduleArgs } from "@/app_modules/@generated/meal-schedule/update-many-meal-schedule.args";
import { UpdateOneMealScheduleArgs } from "@/app_modules/@generated/meal-schedule/update-one-meal-schedule.args";
import { UpsertOneMealScheduleArgs } from "@/app_modules/@generated/meal-schedule/upsert-one-meal-schedule.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { MealScheduleService } from "../meal-schedule.service";

@Resolver(() => MealSchedule)
export class MealScheduleAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealScheduleService: MealScheduleService,
  ) {}

  @Query(() => [MealSchedule])
  @Roles("ADMIN")
  async getAllMealSchedulesAdmin(
    @Args() args: FindManyMealScheduleArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;

    try {
      return await this.prisma.mealSchedule.findMany({
        ...args,
        ...select,
      });
    } catch (e) {
      Logger.error(e);
      return [];
    }
  }

  @Query(() => MealSchedule, { nullable: true })
  @Roles("ADMIN")
  async getMealScheduleAdmin(
    @Args() args: FindFirstMealScheduleArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.mealSchedule.findFirst({ ...args, ...select });
  }

  @Mutation(() => MealSchedule)
  @Roles("ADMIN")
  async createMealScheduleAdmin(
    @Args() args: CreateOneMealScheduleArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.mealSchedule.create({ ...args, ...select });
  }

  @Mutation(() => [MealSchedule])
  @Roles("ADMIN")
  async createManyMealSchedulesAdmin(
    @Args() args: CreateManyMealScheduleArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.mealSchedule.createMany({ ...args, ...select });
  }

  @Mutation(() => MealSchedule)
  @Roles("ADMIN")
  async deleteMealScheduleAdmin(
    @Args() args: DeleteOneMealScheduleArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.mealSchedule.delete({ ...args, ...select });
  }

  @Mutation(() => Int)
  @Roles("ADMIN")
  async deleteManyMealSchedulesAdmin(
    @Args() args: DeleteManyMealScheduleArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return (await this.prisma.mealSchedule.deleteMany({ ...args, ...select }))
      .count;
  }

  @Mutation(() => MealSchedule)
  @Roles("ADMIN")
  async updateMealScheduleAdmin(
    @Args() args: UpdateOneMealScheduleArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.mealSchedule.update({ ...args, ...select });
  }

  @Mutation(() => [MealSchedule])
  @Roles("ADMIN")
  async updateManyMealSchedulesAdmin(
    @Args() args: UpdateManyMealScheduleArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.mealSchedule.updateMany({ ...args, ...select });
  }

  @Mutation(() => MealSchedule)
  @Roles("ADMIN")
  async upsertMealScheduleAdmin(
    @Args() args: UpsertOneMealScheduleArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.mealSchedule.upsert({ ...args, ...select });
  }
}
