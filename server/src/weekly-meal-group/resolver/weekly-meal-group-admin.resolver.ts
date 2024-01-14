import { CreateManyWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/create-many-weekly-meal-group.args";
import { CreateOneWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/create-one-weekly-meal-group.args";
import { DeleteManyWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/delete-many-weekly-meal-group.args";
import { DeleteOneWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/delete-one-weekly-meal-group.args";
import { FindFirstWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/find-first-weekly-meal-group.args";
import { FindManyWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/find-many-weekly-meal-group.args";
import { UpdateManyWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/update-many-weekly-meal-group.args";
import { UpdateOneWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/update-one-weekly-meal-group.args";
import { UpsertOneWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/upsert-one-weekly-meal-group.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { WeeklyMealGroup } from "../weekly-meal-group.service";

@Resolver(() => WeeklyMealGroup)
export class WeeklyMealGroupAdminResolver {
  constructor(
    private prisma: PrismaService,
    private weeklyMealGroupService: WeeklyMealGroup,
  ) {}

  @Query(() => [WeeklyMealGroup], { nullable: true })
  @Roles("ADMIN")
  async getAllWeeklyMealGroupsAdmin(
    @Args() args: FindManyWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.weeklyMealGroup.findMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => WeeklyMealGroup, { nullable: true })
  @Roles("ADMIN")
  async getWeeklyMealGroupAdmin(
    @Args() args: FindFirstWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.weeklyMealGroup.findFirst({
        ...args,
        ...select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => WeeklyMealGroup, { nullable: true })
  @Roles("ADMIN")
  async createWeeklyMealGroupAdmin(
    @Args() args: CreateOneWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.weeklyMealGroup.create({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [WeeklyMealGroup], { nullable: true })
  @Roles("ADMIN")
  async createManyWeeklyMealGroupsAdmin(
    @Args() args: CreateManyWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.weeklyMealGroup.createMany({
        ...args,
        ...select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => WeeklyMealGroup, { nullable: true })
  @Roles("ADMIN")
  async deleteWeeklyMealGroupAdmin(
    @Args() args: DeleteOneWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.weeklyMealGroup.delete({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyWeeklyMealGroupsAdmin(
    @Args() args: DeleteManyWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return (
        await this.prisma.weeklyMealGroup.deleteMany({ ...args, ...select })
      ).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => WeeklyMealGroup, { nullable: true })
  @Roles("ADMIN")
  async updateWeeklyMealGroupAdmin(
    @Args() args: UpdateOneWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.weeklyMealGroup.update({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [WeeklyMealGroup], { nullable: true })
  @Roles("ADMIN")
  async updateManyWeeklyMealGroupsAdmin(
    @Args() args: UpdateManyWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.weeklyMealGroup.updateMany({
        ...args,
        ...select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => WeeklyMealGroup, { nullable: true })
  @Roles("ADMIN")
  async upsertWeeklyMealGroupAdmin(
    @Args() args: UpsertOneWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.weeklyMealGroup.upsert({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
