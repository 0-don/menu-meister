import { CreateManyMealIngredientArgs } from "@/app_modules/@generated/meal-ingredient/create-many-meal-ingredient.args";
import { CreateOneMealIngredientArgs } from "@/app_modules/@generated/meal-ingredient/create-one-meal-ingredient.args";
import { DeleteManyMealIngredientArgs } from "@/app_modules/@generated/meal-ingredient/delete-many-meal-ingredient.args";
import { DeleteOneMealIngredientArgs } from "@/app_modules/@generated/meal-ingredient/delete-one-meal-ingredient.args";
import { FindFirstMealIngredientArgs } from "@/app_modules/@generated/meal-ingredient/find-first-meal-ingredient.args";
import { FindManyMealIngredientArgs } from "@/app_modules/@generated/meal-ingredient/find-many-meal-ingredient.args";
import { MealIngredient } from "@/app_modules/@generated/meal-ingredient/meal-ingredient.model";
import { UpdateManyMealIngredientArgs } from "@/app_modules/@generated/meal-ingredient/update-many-meal-ingredient.args";
import { UpdateOneMealIngredientArgs } from "@/app_modules/@generated/meal-ingredient/update-one-meal-ingredient.args";
import { UpsertOneMealIngredientArgs } from "@/app_modules/@generated/meal-ingredient/upsert-one-meal-ingredient.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { MealIngredientService } from "../meal-ingredient.service";

@Resolver(() => MealIngredient)
export class MealIngredientAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealIngredientService: MealIngredientService,
  ) {}

  @Query(() => [MealIngredient], { nullable: true })
  @Roles("ADMIN")
  async getAllMealIngredientsAdmin(
    @Args() args: FindManyMealIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealIngredient.findMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => MealIngredient, { nullable: true })
  @Roles("ADMIN")
  async getMealIngredientAdmin(
    @Args() args: FindFirstMealIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealIngredient.findFirst({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealIngredient, { nullable: true })
  @Roles("ADMIN")
  async createMealIngredientAdmin(
    @Args() args: CreateOneMealIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealIngredient.create({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [MealIngredient], { nullable: true })
  @Roles("ADMIN")
  async createManyMealIngredientsAdmin(
    @Args() args: CreateManyMealIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealIngredient.createMany({
        ...args,
        ...select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealIngredient, { nullable: true })
  @Roles("ADMIN")
  async deleteMealIngredientAdmin(
    @Args() args: DeleteOneMealIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealIngredient.delete({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyMealIngredientsAdmin(
    @Args() args: DeleteManyMealIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return (
        await this.prisma.mealIngredient.deleteMany({ ...args, ...select })
      ).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealIngredient, { nullable: true })
  @Roles("ADMIN")
  async updateMealIngredientAdmin(
    @Args() args: UpdateOneMealIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealIngredient.update({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [MealIngredient], { nullable: true })
  @Roles("ADMIN")
  async updateManyMealIngredientsAdmin(
    @Args() args: UpdateManyMealIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealIngredient.updateMany({
        ...args,
        ...select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealIngredient, { nullable: true })
  @Roles("ADMIN")
  async upsertMealIngredientAdmin(
    @Args() args: UpsertOneMealIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealIngredient.upsert({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
