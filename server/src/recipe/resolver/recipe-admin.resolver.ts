import { CreateManyRecipeArgs } from "@/app_modules/@generated/recipe/create-many-recipe.args";
import { CreateOneRecipeArgs } from "@/app_modules/@generated/recipe/create-one-recipe.args";
import { DeleteManyRecipeArgs } from "@/app_modules/@generated/recipe/delete-many-recipe.args";
import { DeleteOneRecipeArgs } from "@/app_modules/@generated/recipe/delete-one-recipe.args";
import { FindFirstRecipeArgs } from "@/app_modules/@generated/recipe/find-first-recipe.args";
import { FindManyRecipeArgs } from "@/app_modules/@generated/recipe/find-many-recipe.args";
import { Recipe } from "@/app_modules/@generated/recipe/recipe.model";
import { UpdateManyRecipeArgs } from "@/app_modules/@generated/recipe/update-many-recipe.args";
import { UpdateOneRecipeArgs } from "@/app_modules/@generated/recipe/update-one-recipe.args";
import { UpsertOneRecipeArgs } from "@/app_modules/@generated/recipe/upsert-one-recipe.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { RecipeService } from "../recipe.service";

@Resolver(() => Recipe)
export class RecipeAdminResolver {
  constructor(
    private prisma: PrismaService,
    private recipeService: RecipeService,
  ) {}

  @Query(() => [Recipe], { nullable: true })
  @Roles("ADMIN")
  async getAllRecipesAdmin(
    @Args() args: FindManyRecipeArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.RecipeSelect;
    try {
      return await this.prisma.recipe.findMany({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => Recipe, { nullable: true })
  @Roles("ADMIN")
  async getRecipeAdmin(
    @Args() args: FindFirstRecipeArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.RecipeSelect;
    try {
      return await this.prisma.recipe.findFirst({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Recipe, { nullable: true })
  @Roles("ADMIN")
  async createRecipeAdmin(
    @Args() args: CreateOneRecipeArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.RecipeSelect;
    try {
      return await this.prisma.recipe.create({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Recipe], { nullable: true })
  @Roles("ADMIN")
  async createManyRecipesAdmin(
    @Args() args: CreateManyRecipeArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.RecipeSelect;
    try {
      const createdRecipes = await Promise.all(
        args.data.map((recipeData) =>
          this.prisma.recipe.create({
            data: recipeData,
            select,
          }),
        ),
      );

      return createdRecipes;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Recipe, { nullable: true })
  @Roles("ADMIN")
  async deleteRecipeAdmin(
    @Args() args: DeleteOneRecipeArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.RecipeSelect;
    try {
      return await this.prisma.recipe.delete({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyRecipesAdmin(@Args() args: DeleteManyRecipeArgs) {
    try {
      return (await this.prisma.recipe.deleteMany({ ...args })).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Recipe, { nullable: true })
  @Roles("ADMIN")
  async updateRecipeAdmin(
    @Args() args: UpdateOneRecipeArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value?.select as Prisma.RecipeSelect;
    try {
      return await this.prisma.recipe.update({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Recipe], { nullable: true })
  @Roles("ADMIN")
  async updateManyRecipesAdmin(
    @Args() args: UpdateManyRecipeArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.RecipeSelect;
    try {
      const recipesToUpdate = await this.prisma.recipe.findMany({
        where: args.where,
        select,
      });

      await this.prisma.recipe.updateMany({ ...args });

      const updatedRecipes = recipesToUpdate.map((recipe) => ({
        ...recipe,
        ...args.data,
      }));
      return updatedRecipes;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
  @Mutation(() => Recipe, { nullable: true })
  @Roles("ADMIN")
  async upsertRecipeAdmin(
    @Args() args: UpsertOneRecipeArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.RecipeSelect;
    try {
      return await this.prisma.recipe.upsert({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
