import { CreateManyIngredientArgs } from "@/app_modules/@generated/ingredient/create-many-ingredient.args";
import { CreateOneIngredientArgs } from "@/app_modules/@generated/ingredient/create-one-ingredient.args";
import { DeleteManyIngredientArgs } from "@/app_modules/@generated/ingredient/delete-many-ingredient.args";
import { DeleteOneIngredientArgs } from "@/app_modules/@generated/ingredient/delete-one-ingredient.args";
import { FindFirstIngredientArgs } from "@/app_modules/@generated/ingredient/find-first-ingredient.args";
import { FindManyIngredientArgs } from "@/app_modules/@generated/ingredient/find-many-ingredient.args";
import { Ingredient } from "@/app_modules/@generated/ingredient/ingredient.model";
import { UpdateManyIngredientArgs } from "@/app_modules/@generated/ingredient/update-many-ingredient.args";
import { UpdateOneIngredientArgs } from "@/app_modules/@generated/ingredient/update-one-ingredient.args";
import { UpsertOneIngredientArgs } from "@/app_modules/@generated/ingredient/upsert-one-ingredient.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { IngredientService } from "../ingredient.service";

@Resolver(() => Ingredient)
export class IngredientAdminResolver {
  constructor(
    private prisma: PrismaService,
    private ingredientService: IngredientService,
  ) {}

  @Query(() => [Ingredient], { nullable: true })
  @Roles("Admin")
  async getAllIngredientsAdmin(
    @Args() args: FindManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.IngredientSelect;
    try {
      return await this.prisma.ingredient.findMany({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => Ingredient, { nullable: true })
  @Roles("Admin")
  async getIngredientAdmin(
    @Args() args: FindFirstIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.IngredientSelect;
    try {
      return await this.prisma.ingredient.findFirst({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Ingredient, { nullable: true })
  @Roles("Admin")
  async createIngredientAdmin(
    @Args() args: CreateOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.IngredientSelect;
    try {
      return await this.prisma.ingredient.create({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Ingredient], { nullable: true })
  @Roles("Admin")
  async createManyIngredientsAdmin(
    @Args() args: CreateManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.IngredientSelect;
    try {
      const createdIngredients = await Promise.all(
        args.data.map((data) => this.prisma.meal.create({ data, select })),
      );
      return createdIngredients;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Ingredient, { nullable: true })
  @Roles("Admin")
  async deleteIngredientAdmin(
    @Args() args: DeleteOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.IngredientSelect;
    try {
      return await this.prisma.ingredient.delete({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("Admin")
  async deleteManyIngredientsAdmin(@Args() args: DeleteManyIngredientArgs) {
    try {
      return (await this.prisma.ingredient.deleteMany({ ...args })).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Ingredient, { nullable: true })
  @Roles("Admin")
  async updateIngredientAdmin(
    @Args() args: UpdateOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.IngredientSelect;
    try {
      return await this.prisma.ingredient.update({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Ingredient], { nullable: true })
  @Roles("Admin")
  async updateManyIngredientsAdmin(
    @Args() args: UpdateManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.IngredientSelect;
    try {
      const ingredientToUpdate = await this.prisma.ingredient.findMany({
        where: args.where,
        select,
      });

      await this.prisma.ingredient.updateMany({ ...args });

      const updatedIngredients = ingredientToUpdate.map((mealBoardPlan) => ({
        ...mealBoardPlan,
        ...args.data,
      }));

      return updatedIngredients;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Ingredient, { nullable: true })
  @Roles("Admin")
  async upsertIngredientAdmin(
    @Args() args: UpsertOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      ?.select as Prisma.IngredientSelect;
    try {
      return await this.prisma.ingredient.upsert({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
