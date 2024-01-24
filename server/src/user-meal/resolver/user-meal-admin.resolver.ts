import { FindManyUserMealArgs } from "@/app_modules/@generated/user-meal/find-many-user-meal.args";
import { UserMeal } from "@/app_modules/@generated/user-meal/user-meal.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { UserMealService } from "../user-meal.service";

@Resolver(() => UserMeal)
export class UserMealUserResolver {
  constructor(
    private prisma: PrismaService,
    private userMealService: UserMealService,
  ) {}

  @Query(() => [UserMeal], { nullable: true })
  @Roles("ADMIN")
  async getAllUserMealsAdmin(
    @Args() args: FindManyUserMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.userMeal.findMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
