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
    return await this.prisma.user.findMany({ ...args, ...select });
  }

  @Query(() => Meal, { nullable: true })
  @Roles("ADMIN")
  async getMealAdmin(
    @Args() args: FindFirstIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.user.findFirst({ ...args, ...select });
  }

  @Mutation(() => Meal)
  @Roles("ADMIN")
  async createMealAdmin(
    @Args() args: CreateOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.user.create({ ...args, ...select });
  }

  @Mutation(() => [Meal])
  @Roles("ADMIN")
  async createManyMealsAdmin(
    @Args() args: CreateManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.user.createMany({ ...args, ...select });
  }

  @Mutation(() => Meal)
  @Roles("ADMIN")
  async deleteMealAdmin(
    @Args() args: DeleteOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.user.delete({ ...args, ...select });
  }

  @Mutation(() => Int)
  @Roles("ADMIN")
  async deleteManyMealsAdmin(
    @Args() args: DeleteManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return (await this.prisma.user.deleteMany({ ...args, ...select })).count;
  }

  @Mutation(() => Meal)
  @Roles("ADMIN")
  async updateMealAdmin(
    @Args() args: UpdateOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.user.update({ ...args, ...select });
  }

  @Mutation(() => [Meal])
  @Roles("ADMIN")
  async updateManyMealsAdmin(
    @Args() args: UpdateManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.user.updateMany({ ...args, ...select });
  }

  @Mutation(() => Meal)
  @Roles("ADMIN")
  async upsertMealAdmin(
    @Args() args: UpsertOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.user.upsert({ ...args, ...select });
  }
}
