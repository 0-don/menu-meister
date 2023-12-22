import { CreateManyNutritionArgs } from "@/app_modules/@generated/nutrition/create-many-nutrition.args";
import { CreateOneNutritionArgs } from "@/app_modules/@generated/nutrition/create-one-nutrition.args";
import { DeleteManyNutritionArgs } from "@/app_modules/@generated/nutrition/delete-many-nutrition.args";
import { DeleteOneNutritionArgs } from "@/app_modules/@generated/nutrition/delete-one-nutrition.args";
import { FindFirstNutritionArgs } from "@/app_modules/@generated/nutrition/find-first-nutrition.args";
import { FindManyNutritionArgs } from "@/app_modules/@generated/nutrition/find-many-nutrition.args";
import { Nutrition } from "@/app_modules/@generated/nutrition/nutrition.model";
import { UpdateManyNutritionArgs } from "@/app_modules/@generated/nutrition/update-many-nutrition.args";
import { UpdateOneNutritionArgs } from "@/app_modules/@generated/nutrition/update-one-nutrition.args";
import { UpsertOneNutritionArgs } from "@/app_modules/@generated/nutrition/upsert-one-nutrition.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { NutritionService } from "../nutrition.service";

@Resolver(() => Nutrition)
export class NutritionAdminResolver {
  constructor(
    private prisma: PrismaService,
    private nutritionService: NutritionService,
  ) {}

  @Query(() => [Nutrition], { nullable: true })
  @Roles("ADMIN")
  async getAllNutritionsAdmin(
    @Args() args: FindManyNutritionArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.nutrition.findMany({ ...args, ...select });
  }

  @Query(() => Nutrition, { nullable: true })
  @Roles("ADMIN")
  async getNutritionAdmin(
    @Args() args: FindFirstNutritionArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.nutrition.findUnique({ ...args, ...select });
  }

  @Mutation(() => Nutrition)
  @Roles("ADMIN")
  async createNutritionAdmin(
    @Args() args: CreateOneNutritionArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.nutrition.create({ ...args, ...select });
  }

  @Mutation(() => [Nutrition])
  @Roles("ADMIN")
  async createManyNutritionsAdmin(
    @Args() args: CreateManyNutritionArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.nutrition.createMany({ ...args, ...select });
  }

  @Mutation(() => Nutrition)
  @Roles("ADMIN")
  async deleteNutritionAdmin(
    @Args() args: DeleteOneNutritionArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.nutrition.delete({ ...args, ...select });
  }

  @Mutation(() => Int)
  @Roles("ADMIN")
  async deleteManyNutritionsAdmin(
    @Args() args: DeleteManyNutritionArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return (await this.prisma.nutrition.deleteMany({ ...args, ...select }))
      .count;
  }

  @Mutation(() => Nutrition)
  @Roles("ADMIN")
  async updateNutritionAdmin(
    @Args() args: UpdateOneNutritionArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.nutrition.update({ ...args, ...select });
  }

  @Mutation(() => [Nutrition])
  @Roles("ADMIN")
  async updateManyNutritionsAdmin(
    @Args() args: UpdateManyNutritionArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.nutrition.updateMany({ ...args, ...select });
  }

  @Mutation(() => Nutrition)
  @Roles("ADMIN")
  async upsertNutritionAdmin(
    @Args() args: UpsertOneNutritionArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.nutrition.upsert({ ...args, ...select });
  }
}
