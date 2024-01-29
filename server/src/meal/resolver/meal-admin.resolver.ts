import { CreateManyMealArgs } from "@/app_modules/@generated/meal/create-many-meal.args";
import { CreateOneMealArgs } from "@/app_modules/@generated/meal/create-one-meal.args";
import { DeleteManyMealArgs } from "@/app_modules/@generated/meal/delete-many-meal.args";
import { DeleteOneMealArgs } from "@/app_modules/@generated/meal/delete-one-meal.args";
import { FindFirstMealArgs } from "@/app_modules/@generated/meal/find-first-meal.args";
import { FindManyMealArgs } from "@/app_modules/@generated/meal/find-many-meal.args";
import { Meal } from "@/app_modules/@generated/meal/meal.model";
import { UpdateManyMealArgs } from "@/app_modules/@generated/meal/update-many-meal.args";
import { UpdateOneMealArgs } from "@/app_modules/@generated/meal/update-one-meal.args";
import { UpsertOneMealArgs } from "@/app_modules/@generated/meal/upsert-one-meal.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { FileScalar } from "@/app_modules/scalars/file.scalar";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import sharp from "sharp";
import { MealService } from "../meal.service";

@Resolver(() => Meal)
export class MealAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealService: MealService,
  ) {}

  @Mutation(() => Boolean, { nullable: true })
  @Roles("ADMIN")
  async uploadMealImageAdmin(
    @Args({ name: "mealId", type: () => Int }) mealId: number,
    @Args({ name: "file", type: () => FileScalar }) file: File,
  ) {
    try {
      const image = (
        await sharp(await file.arrayBuffer())
          .resize(200, 200)
          .jpeg()
          .toBuffer()
      ).toString("base64");

      await this.prisma.meal.update({
        where: { id: mealId },
        data: { image },
      });
      return true;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => [Meal], { nullable: true })
  @Roles("ADMIN")
  async getAllMealsAdmin(
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

  @Query(() => Meal, { nullable: true })
  @Roles("ADMIN")
  async getMealAdmin(
    @Args() args: FindFirstMealArgs,
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
    @Args() args: CreateOneMealArgs,
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
    @Args() args: CreateManyMealArgs,
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
    @Args() args: DeleteOneMealArgs,
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
    @Args() args: DeleteManyMealArgs,
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
    @Args() args: UpdateOneMealArgs,
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
    @Args() args: UpdateManyMealArgs,
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
    @Args() args: UpsertOneMealArgs,
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
