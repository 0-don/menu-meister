import { CreateManyIngredientArgs } from "@/app_modules/@generated/ingredient/create-many-ingredient.args";
import { CreateOneIngredientArgs } from "@/app_modules/@generated/ingredient/create-one-ingredient.args";
import { DeleteManyIngredientArgs } from "@/app_modules/@generated/ingredient/delete-many-ingredient.args";
import { DeleteOneIngredientArgs } from "@/app_modules/@generated/ingredient/delete-one-ingredient.args";
import { FindFirstIngredientArgs } from "@/app_modules/@generated/ingredient/find-first-ingredient.args";
import { FindManyIngredientArgs } from "@/app_modules/@generated/ingredient/find-many-ingredient.args";
import { UpdateManyIngredientArgs } from "@/app_modules/@generated/ingredient/update-many-ingredient.args";
import { UpdateOneIngredientArgs } from "@/app_modules/@generated/ingredient/update-one-ingredient.args";
import { UpsertOneIngredientArgs } from "@/app_modules/@generated/ingredient/upsert-one-ingredient.args";
import { Meal } from "@/app_modules/@generated/meal/meal.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { MealService } from "../meal.service";

@Resolver(() => Meal)
export class MealAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealService: MealService,
  ) {}

  @Query(() => [Meal], { nullable: true })
  @Roles("ADMIN")
  async getAllMealsAdmin(
    @Args() args: FindManyIngredientArgs,
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

  @Query(() => Meal, { nullable: true })
  @Roles("ADMIN")
  async getMealAdmin(
    @Args() args: FindFirstIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.meal.findFirst({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Meal, { nullable: true })
  @Roles("ADMIN")
  async createMealAdmin(
    @Args() args: CreateOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.meal.create({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Meal], { nullable: true })
  @Roles("ADMIN")
  async createManyMealsAdmin(
    @Args() args: CreateManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.meal.createMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Meal, { nullable: true })
  @Roles("ADMIN")
  async deleteMealAdmin(
    @Args() args: DeleteOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.meal.delete({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyMealsAdmin(
    @Args() args: DeleteManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return (await this.prisma.meal.deleteMany({ ...args, ...select })).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Meal, { nullable: true })
  @Roles("ADMIN")
  async updateMealAdmin(
    @Args() args: UpdateOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.meal.update({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Meal], { nullable: true })
  @Roles("ADMIN")
  async updateManyMealsAdmin(
    @Args() args: UpdateManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.meal.updateMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Meal, { nullable: true })
  @Roles("ADMIN")
  async upsertMealAdmin(
    @Args() args: UpsertOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.meal.upsert({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
