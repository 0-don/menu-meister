import { FindManyMealArgs } from "@/app_modules/@generated/meal/find-many-meal.args";
import { Meal } from "@/app_modules/@generated/meal/meal.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { MealService } from "../meal.service";
import { Prisma } from "@prisma/client";

@Resolver(() => Meal)
export class MealUserResolver {
  constructor(
    private prisma: PrismaService,
    private mealService: MealService,
  ) {}

  @Query(() => [Meal], { nullable: true })
  @Roles("USER", "MOD")
  async getAllMealsUser(
    @Args() args: FindManyMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.MealSelect;
    try {
      return await this.prisma.meal.findMany({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
