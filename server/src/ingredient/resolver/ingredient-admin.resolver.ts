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
import { GraphQLResolveInfo } from "graphql";
import { IngredientService } from "../ingredient.service";

@Resolver(() => Ingredient)
export class IngredientAdminResolver {
  constructor(
    private prisma: PrismaService,
    private ingredientService: IngredientService,
  ) {}

  @Query(() => [Ingredient], { nullable: true })
  @Roles("ADMIN")
  async getAllIngredientsAdmin(
    @Args() args: FindManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.ingredient.findMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => Ingredient, { nullable: true })
  @Roles("ADMIN")
  async getIngredientAdmin(
    @Args() args: FindFirstIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.ingredient.findFirst({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Ingredient, { nullable: true })
  @Roles("ADMIN")
  async createIngredientAdmin(
    @Args() args: CreateOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.ingredient.create({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Ingredient], { nullable: true })
  @Roles("ADMIN")
  async createManyIngredientsAdmin(
    @Args() args: CreateManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.ingredient.createMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Ingredient, { nullable: true })
  @Roles("ADMIN")
  async deleteIngredientAdmin(
    @Args() args: DeleteOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.ingredient.delete({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyIngredientsAdmin(
    @Args() args: DeleteManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return (await this.prisma.ingredient.deleteMany({ ...args, ...select }))
        .count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Ingredient, { nullable: true })
  @Roles("ADMIN")
  async updateIngredientAdmin(
    @Args() args: UpdateOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.ingredient.update({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Ingredient], { nullable: true })
  @Roles("ADMIN")
  async updateManyIngredientsAdmin(
    @Args() args: UpdateManyIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.ingredient.updateMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Ingredient, { nullable: true })
  @Roles("ADMIN")
  async upsertIngredientAdmin(
    @Args() args: UpsertOneIngredientArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.ingredient.upsert({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
