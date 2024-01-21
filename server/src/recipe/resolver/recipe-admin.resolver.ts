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
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.recipe.findMany({ ...args, ...select });
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
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.recipe.findUnique({ ...args, ...select });
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
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.recipe.create({ ...args, ...select });
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
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.recipe.createMany({ ...args, ...select });
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
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.recipe.delete({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyRecipesAdmin(
    @Args() args: DeleteManyRecipeArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return (await this.prisma.recipe.deleteMany({ ...args, ...select }))
        .count;
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
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.recipe.update({ ...args, ...select });
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
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.recipe.updateMany({ ...args, ...select });
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
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.recipe.upsert({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
