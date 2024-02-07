import { FindManyUserMealArgs } from "@/app_modules/@generated/user-meal/find-many-user-meal.args";
import { UserMealGroupByArgs } from "@/app_modules/@generated/user-meal/user-meal-group-by.args";
import { UserMealGroupBy } from "@/app_modules/@generated/user-meal/user-meal-group-by.output";
import { UserMealScalarFieldEnum } from "@/app_modules/@generated/user-meal/user-meal-scalar-field.enum";
import { UserMeal } from "@/app_modules/@generated/user-meal/user-meal.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { UserMealUserInput } from "../model/input/user-meal-user.input";
import { UserMealUserOutput } from "../model/output/user-meal-user.output";
import { UserMealService } from "../user-meal.service";

@Resolver(() => UserMeal)
export class UserMealAdminResolver {
  constructor(
    private prisma: PrismaService,
    private userMealService: UserMealService,
  ) {}

  @Query(() => [UserMealUserOutput], { nullable: true })
  @Roles("ADMIN")
  async getUserMealsGroupedCountAdmin(
    @Args("data") data: UserMealUserInput,
  ): Promise<UserMealUserOutput[]> {
    try {
      const mealsGrouped = await this.prisma.userMeal.groupBy({
        where: {
          mealBoardPlanId: { equals: data.mealBoardPlanId },
          date: {
            gte: data.dateFrom,
            lte: data.dateTo,
          },
        },
        by: [UserMealScalarFieldEnum.date, UserMealScalarFieldEnum.mealId],
        _count: { mealId: true },
      });
      const mealIds = mealsGrouped.map((meal) => meal.mealId);

      const meals = await this.prisma.meal.findMany({
        where: { id: { in: mealIds } },
        select: { id: true, name: true },
      });

      return mealsGrouped
        .map((meal) => {
          const mealData = meals.find((m) => m.id === meal.mealId);
          return {
            count: meal._count?.mealId,
            date: meal.date.toISOString(),
            meal: mealData.name,
          };
        })
        .sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0));
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => [UserMealGroupBy], { nullable: true })
  @Roles("ADMIN")
  async getUserMealsGroupedAdmin(@Args() args: UserMealGroupByArgs) {
    try {
      // @ts-ignore
      const result = await this.prisma.userMeal.groupBy({
        ...args,
      });

      return result;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => [UserMeal], { nullable: true })
  @Roles("ADMIN")
  async getAllUserMealsAdmin(
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
}
