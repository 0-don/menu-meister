import { CreateManyMealBoardPlanArgs } from "@/app_modules/@generated/meal-board-plan/create-many-meal-board-plan.args";
import { CreateOneMealBoardPlanArgs } from "@/app_modules/@generated/meal-board-plan/create-one-meal-board-plan.args";
import { DeleteManyMealBoardPlanArgs } from "@/app_modules/@generated/meal-board-plan/delete-many-meal-board-plan.args";
import { DeleteOneMealBoardPlanArgs } from "@/app_modules/@generated/meal-board-plan/delete-one-meal-board-plan.args";
import { FindFirstMealBoardPlanArgs } from "@/app_modules/@generated/meal-board-plan/find-first-meal-board-plan.args";
import { FindManyMealBoardPlanArgs } from "@/app_modules/@generated/meal-board-plan/find-many-meal-board-plan.args";
import { MealBoardPlanUncheckedUpdateInput } from "@/app_modules/@generated/meal-board-plan/meal-board-plan-unchecked-update.input";
import { MealBoardPlanWhereUniqueInput } from "@/app_modules/@generated/meal-board-plan/meal-board-plan-where-unique.input";
import { MealBoardPlan } from "@/app_modules/@generated/meal-board-plan/meal-board-plan.model";
import { UpdateManyMealBoardPlanArgs } from "@/app_modules/@generated/meal-board-plan/update-many-meal-board-plan.args";
import { UpsertOneMealBoardPlanArgs } from "@/app_modules/@generated/meal-board-plan/upsert-one-meal-board-plan.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { MealBoardPlanService } from "../meal-board-plan.service";

@Resolver(() => MealBoardPlan)
export class MealBoardPlanAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealBoardPlanService: MealBoardPlanService,
  ) {}

  @Query(() => [MealBoardPlan], { nullable: true })
  @Roles("ADMIN")
  async getAllMealBoardPlansAdmin(
    @Args() args: FindManyMealBoardPlanArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.MealBoardPlanSelect;
    try {
      return await this.prisma.mealBoardPlan.findMany({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => MealBoardPlan, { nullable: true })
  @Roles("ADMIN")
  async getMealBoardPlanAdmin(
    @Args() args: FindFirstMealBoardPlanArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.MealBoardPlanSelect;
    try {
      return await this.prisma.mealBoardPlan.findFirst({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealBoardPlan, { nullable: true })
  @Roles("ADMIN")
  async createMealBoardPlanAdmin(
    @Args() args: CreateOneMealBoardPlanArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.MealBoardPlanSelect;
    try {
      return await this.prisma.mealBoardPlan.create({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [MealBoardPlan], { nullable: true })
  @Roles("ADMIN")
  async createManyMealBoardPlansAdmin(
    @Args() args: CreateManyMealBoardPlanArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.MealBoardPlanSelect;
    try {
      return await this.prisma.mealBoardPlan.createMany({ ...args });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealBoardPlan, { nullable: true })
  @Roles("ADMIN")
  async deleteMealBoardPlanAdmin(
    @Args() args: DeleteOneMealBoardPlanArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.MealBoardPlanSelect;
    try {
      return await this.prisma.mealBoardPlan.delete({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyMealBoardPlansAdmin(
    @Args() args: DeleteManyMealBoardPlanArgs,
  ) {
    try {
      return (await this.prisma.mealBoardPlan.deleteMany({ ...args })).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealBoardPlan, { nullable: true })
  @Roles("ADMIN")
  async updateMealBoardPlanAdmin(
    @Args("data") data: MealBoardPlanUncheckedUpdateInput,
    @Args({ name: "where", type: () => MealBoardPlanWhereUniqueInput })
    where: Prisma.AtLeast<MealBoardPlanWhereUniqueInput, "id">,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.MealBoardPlanSelect;
    try {
      return await this.prisma.mealBoardPlan.update({ data, where, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [MealBoardPlan], { nullable: true })
  @Roles("ADMIN")
  async updateManyMealBoardPlansAdmin(
    @Args() args: UpdateManyMealBoardPlanArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.MealBoardPlanSelect;
    try {
      return await this.prisma.mealBoardPlan.updateMany({ ...args });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealBoardPlan, { nullable: true })
  @Roles("ADMIN")
  async upsertMealBoardPlanAdmin(
    @Args() args: UpsertOneMealBoardPlanArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.MealBoardPlanSelect;
    try {
      return await this.prisma.mealBoardPlan.upsert({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
