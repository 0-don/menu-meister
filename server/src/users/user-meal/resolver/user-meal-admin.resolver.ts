import { FindManyUserMealArgs } from "@/app_modules/@generated/user-meal/find-many-user-meal.args";
import { UserMeal } from "@/app_modules/@generated/user-meal/user-meal.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { MealLocation, Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { GraphQLResolveInfo } from "graphql";
import { UserMealGroupedCountAdminInput } from "../model/input/user-meal-grouped-count-admin.input";
import { UserMealGroupedUsersAdminInput } from "../model/input/user-meal-grouped-users-admin.input";
import { UserMealGroupedCountAdminOutput } from "../model/output/user-meal-grouped-count-admin.output";
import { UserMealGroupedUsersAdminOutput } from "../model/output/user-meal-grouped-users-admin.output";
import { UserMealService } from "../user-meal.service";

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
      const meals = await this.prisma.userMeal.findMany({
        where: {
          date: dayjs(data.date).toDate(),
          mealBoardPlanId: data.mealBoardPlanId,
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

      const groupedMeals = meals.reduce((acc, meal) => {
        const userMealLocation =
          meal.user.userMealLocation.find(
            (location) => location.timeOfDay === meal.timeOfDay,
          )?.mealLocation || MealLocation.InRoom;

        if (!acc[meal.user.id]) {
          acc[meal.user.id] = {
            userId: meal.user.id,
            firstname: meal.user.firstname,
            lastname: meal.user.lastname,
            meals: [],
          };
        }

        acc[meal.user.id].meals.push({
          meal: meal.meal.name,
          mealId: meal.meal.id,
          timeOfDay: meal.timeOfDay,
          mealLocation: userMealLocation,
        });

        return acc;
      }, {});

      return Object.values(groupedMeals);
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
