import { Allergens } from "@/app_modules/@generated/allergens/allergens.model";
import { FindManyMealArgs } from "@/app_modules/@generated/meal/find-many-meal.args";
import { Meal } from "@/app_modules/@generated/meal/meal.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { AllergensService } from "../allergens.service";

@Resolver(() => Allergens)
export class AllergensUserResolver {
  constructor(
    private prisma: PrismaService,
    private allergensService: AllergensService,
  ) {}

  @Query(() => [Meal], { nullable: true })
  @Roles("USER", "MOD")
  async getAllAllergensUser(
    @Args() args: FindManyMealArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.meal.findMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
