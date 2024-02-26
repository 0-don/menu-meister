import { FindManyMealBoardPlanArgs } from "@/app_modules/@generated/meal-board-plan/find-many-meal-board-plan.args";
import { MealBoardPlan } from "@/app_modules/@generated/meal-board-plan/meal-board-plan.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { MealBoardPlanService } from "../meal-board-plan.service";

@Resolver(() => MealBoardPlan)
export class MealBoardPlanUserResolver {
  constructor(
    private prisma: PrismaService,
    private mealBoardPlanService: MealBoardPlanService,
  ) {}

  @Query(() => [MealBoardPlan], { nullable: true })
  @Roles("User", "Mod", "Admin")
  async getAllMealBoardPlansUser(
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
}
