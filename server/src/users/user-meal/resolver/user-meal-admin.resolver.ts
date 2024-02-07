import { FindManyUserMealArgs } from "@/app_modules/@generated/user-meal/find-many-user-meal.args";
import { UserMealGroupByArgs } from "@/app_modules/@generated/user-meal/user-meal-group-by.args";
import { UserMealGroupBy } from "@/app_modules/@generated/user-meal/user-meal-group-by.output";
import { UserMeal } from "@/app_modules/@generated/user-meal/user-meal.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { MealLocation, Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { UserMealGroupedCountAdminInput } from "../model/input/user-meal-grouped-count-admin.input";
import { UserMealGroupedUsersAdminInput } from "../model/input/user-meal-grouped-users-admin.input";
import { UserMealGroupedCountAdminOutput } from "../model/output/user-meal-grouped-count-admin.output";
import { UserMealGroupedUsersAdminOutput } from "../model/output/user-meal-grouped-users-admin.output";
import { UserMealService } from "../user-meal.service";
import dayjs from "dayjs";

@Resolver(() => UserMeal)
export class UserMealAdminResolver {
  constructor(
    private prisma: PrismaService,
    private userMealService: UserMealService,
  ) {}

  @Query(() => [UserMealGroupedUsersAdminOutput], { nullable: true })
  @Roles("ADMIN")
  async getUserMealsGroupedUsersAdmin(
    @Args("data") data: UserMealGroupedUsersAdminInput,
  ): Promise<UserMealGroupedUsersAdminOutput[]> {
    try {
      const gteDate = dayjs(data.date).toDate();
      const lteDate = dayjs(data.date).add(1, "day").toDate();
      console.log(gteDate, lteDate);
      const meals = await this.prisma.userMeal.findMany({
        where: {
          // date: { gte: gteDate, lte: lteDate },
          date: lteDate,
          // mealBoardPlanId: { equals: data.mealBoardPlanId },
        },
        select: {
          date: true,
          timeOfDay: true,
          meal: {
            select: {
              id: true,
              name: true,
            },
          },
          user: {
            select: {
              id: true,
              firstname: true,
              lastname: true,
              userMealLocation: {
                select: {
                  id: true,
                  mealLocation: true,
                  timeOfDay: true,
                },
              },
            },
          },
        },
      });

      // console.log(meals);
      const groupedMeals: UserMealGroupedUsersAdminOutput[] = [];

      for (const meal of meals) {
        const groupedMeal = groupedMeals.find(
          (groupedMeal) => groupedMeal.userId === meal.user.id,
        );

        if (!groupedMeal) {
          const group: UserMealGroupedUsersAdminOutput = {
            userId: meal.user.id,
            firstname: meal.user.firstname,
            lastname: meal.user.lastname,
            meals: [
              {
                meal: meal.meal.name,
                mealId: meal.meal.id,
                timeOfDay: meal.timeOfDay,
                mealLocation:
                  meal.user.userMealLocation.find(
                    (location) => location.timeOfDay === meal.timeOfDay,
                  )?.mealLocation || MealLocation.InRoom,
              },
            ],
          };

          groupedMeals.push(group);
        } else {
          groupedMeal.meals.push({
            meal: meal.meal.name,
            mealId: meal.meal.id,
            timeOfDay: meal.timeOfDay,
            mealLocation:
              meal.user.userMealLocation.find(
                (location) => location.timeOfDay === meal.timeOfDay,
              )?.mealLocation || MealLocation.InRoom,
          });
        }
      }

      return groupedMeals;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => [UserMealGroupedCountAdminOutput], { nullable: true })
  @Roles("ADMIN")
  async getUserMealsGroupedCountAdmin(
    @Args("data") data: UserMealGroupedCountAdminInput,
  ): Promise<UserMealGroupedCountAdminOutput[]> {
    try {
      return await this.userMealService.getUserMealsGroupedCount(data);
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
