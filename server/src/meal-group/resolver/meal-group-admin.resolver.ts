import { CreateManyMealGroupArgs } from "@/app_modules/@generated/meal-group/create-many-meal-group.args";
import { CreateOneMealGroupArgs } from "@/app_modules/@generated/meal-group/create-one-meal-group.args";
import { DeleteManyMealGroupArgs } from "@/app_modules/@generated/meal-group/delete-many-meal-group.args";
import { DeleteOneMealGroupArgs } from "@/app_modules/@generated/meal-group/delete-one-meal-group.args";
import { FindFirstMealGroupArgs } from "@/app_modules/@generated/meal-group/find-first-meal-group.args";
import { FindManyMealGroupArgs } from "@/app_modules/@generated/meal-group/find-many-meal-group.args";
import { MealGroup } from "@/app_modules/@generated/meal-group/meal-group.model";
import { UpdateManyMealGroupArgs } from "@/app_modules/@generated/meal-group/update-many-meal-group.args";
import { UpdateOneMealGroupArgs } from "@/app_modules/@generated/meal-group/update-one-meal-group.args";
import { UpsertOneMealGroupArgs } from "@/app_modules/@generated/meal-group/upsert-one-meal-group.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { MealGroupService } from "../meal-group.service";

@Resolver(() => MealGroup)
export class MealGroupAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealGroupService: MealGroupService,
  ) {}

  @Query(() => [MealGroup], { nullable: true })
  @Roles("ADMIN")
  async getAllMealGroupsAdmin(
    @Args() args: FindManyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealGroup.findMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => MealGroup, { nullable: true })
  @Roles("ADMIN")
  async getMealGroupAdmin(
    @Args() args: FindFirstMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealGroup.findFirst({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealGroup, { nullable: true })
  @Roles("ADMIN")
  async createMealGroupAdmin(
    @Args() args: CreateOneMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealGroup.create({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [MealGroup], { nullable: true })
  @Roles("ADMIN")
  async createManyMealGroupsAdmin(
    @Args() args: CreateManyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealGroup.createMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealGroup, { nullable: true })
  @Roles("ADMIN")
  async deleteMealGroupAdmin(
    @Args() args: DeleteOneMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealGroup.delete({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyMealGroupsAdmin(
    @Args() args: DeleteManyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return (await this.prisma.mealGroup.deleteMany({ ...args, ...select }))
        .count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealGroup, { nullable: true })
  @Roles("ADMIN")
  async updateMealGroupAdmin(
    @Args() args: UpdateOneMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealGroup.update({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [MealGroup], { nullable: true })
  @Roles("ADMIN")
  async updateManyMealGroupsAdmin(
    @Args() args: UpdateManyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealGroup.updateMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => MealGroup, { nullable: true })
  @Roles("ADMIN")
  async upsertMealGroupAdmin(
    @Args() args: UpsertOneMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.mealGroup.upsert({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
