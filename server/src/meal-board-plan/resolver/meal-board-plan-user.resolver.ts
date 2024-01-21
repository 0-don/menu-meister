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
import { GraphQLResolveInfo } from "graphql";
import { MealBoardPlanService } from "../meal-board-plan.service";


@Resolver(() => MealBoardPlan)
export class MealBoardPlanUserResolver {
  constructor(
    private prisma: PrismaService,
    private mealBoardPlanService: MealBoardPlanService,
  ) {}

  @Query(() => [MealBoardPlan], { nullable: true })
  @Roles("USER", "MOD", "ADMIN")
  async getAllMealBoardPlansUser(
    @Args() args: FindManyMealBoardPlanArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealBoardPlan.findMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
