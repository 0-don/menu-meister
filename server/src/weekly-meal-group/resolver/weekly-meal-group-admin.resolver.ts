import { CreateManyWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/create-many-weekly-meal-group.args";
import { DeleteManyWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/delete-many-weekly-meal-group.args";
import { DeleteOneWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/delete-one-weekly-meal-group.args";
import { FindFirstWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/find-first-weekly-meal-group.args";
import { FindManyWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/find-many-weekly-meal-group.args";
import { UpdateManyWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/update-many-weekly-meal-group.args";
import { UpsertOneWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/upsert-one-weekly-meal-group.args";
import { WeeklyMealGroupUncheckedCreateInput } from "@/app_modules/@generated/weekly-meal-group/weekly-meal-group-unchecked-create.input";
import { WeeklyMealGroupUncheckedUpdateInput } from "@/app_modules/@generated/weekly-meal-group/weekly-meal-group-unchecked-update.input";
import { WeeklyMealGroupWhereUniqueInput } from "@/app_modules/@generated/weekly-meal-group/weekly-meal-group-where-unique.input";
import { WeeklyMealGroup } from "@/app_modules/@generated/weekly-meal-group/weekly-meal-group.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { GraphQLResolveInfo } from "graphql";
import { SwitchWeeklyMealGroupInput } from "../model/input/switch-weekly-meal-group.input";
import { WeeklyMealGroupService } from "../weekly-meal-group.service";

@Resolver(() => WeeklyMealGroup)
export class WeeklyMealGroupAdminResolver {
  constructor(
    private prisma: PrismaService,
    private weeklyMealGroupService: WeeklyMealGroupService,
  ) {
    dayjs.extend(utc);
    dayjs.extend(weekOfYear);
    dayjs.extend(isoWeek);
    dayjs.extend(isoWeeksInYear);
    dayjs.extend(isLeapYear);
    dayjs.Ls["en"].weekStart = 1;
  }

  @Mutation(() => Boolean)
  @Roles("ADMIN")
  async switchDateWeeklyMealGroupAdmin(
    @Args("dateFrom") dateFrom: string,
    @Args("dateTo") dateTo: string,
  ) {
    try {
      const weeklyMealGroups = await this.prisma.weeklyMealGroup.findMany({
        where: {
          weekOfYear: { equals: dayjs(dateFrom).week() },
          year: { equals: dayjs(dateFrom).year() },
        },
      });

      await this.prisma.weeklyMealGroup.createMany({
        data: weeklyMealGroups.map((weeklyMealGroup) => ({
          ...weeklyMealGroup,
          weekOfYear: dayjs(dateTo).week(),
          year: dayjs(dateTo).year(),
          id: undefined,
        })),
      });
      return true;
    } catch (error) {
      Logger.error(error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  @Roles("ADMIN")
  async switchWeeklyMealGroupAdmin(
    @Args("data") data: SwitchWeeklyMealGroupInput,
  ) {
    try {
      await this.prisma.weeklyMealGroup.update({
        where: { id: data.activeGroupId },
        data: { [`${data.activeDay}MealId`]: data?.overMealId || null },
      });

      await this.prisma.weeklyMealGroup.update({
        where: { id: data.overGroupId },
        data: { [`${data.overDay}MealId`]: data.activeMealId },
      });
      return true;
    } catch (error) {
      Logger.error(error);
      return false;
    }
  }

  @Query(() => [WeeklyMealGroup], { nullable: true })
  @Roles("ADMIN")
  async getAllWeeklyMealGroupsAdmin(
    @Args() args: FindManyWeeklyMealGroupArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.WeeklyMealGroupSelect;

    try {
      return await this.prisma.weeklyMealGroup.findMany({ ...args, select });
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
    const select = new PrismaSelect(info).value
      .select as Prisma.WeeklyMealGroupSelect;
    try {
      return await this.prisma.weeklyMealGroup.findFirst({
        ...args,
        select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => WeeklyMealGroup, { nullable: true })
  @Roles("ADMIN")
  async createWeeklyMealGroupAdmin(
    @Args("data") data: WeeklyMealGroupUncheckedCreateInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.WeeklyMealGroupSelect;
    try {
      return await this.prisma.weeklyMealGroup.create({
        select,
        data: data as any,
      });
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
    const select = new PrismaSelect(info).value
      .select as Prisma.WeeklyMealGroupSelect;

    try {
      const createdGroups = await Promise.all(
        args.data.map((groupData) =>
          this.prisma.weeklyMealGroup.create({
            data: groupData,
            select,
          }),
        ),
      );

      return createdGroups;
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
    const select = new PrismaSelect(info).value
      .select as Prisma.WeeklyMealGroupSelect;
    try {
      return await this.prisma.weeklyMealGroup.delete({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyWeeklyMealGroupsAdmin(
    @Args() args: DeleteManyWeeklyMealGroupArgs,
  ) {
    try {
      return (await this.prisma.weeklyMealGroup.deleteMany({ ...args })).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => WeeklyMealGroup, { nullable: true })
  @Roles("ADMIN")
  async updateWeeklyMealGroupAdmin(
    // @Args() args: UpdateOneWeeklyMealGroupArgs,
    @Args("data") data: WeeklyMealGroupUncheckedUpdateInput,
    @Args({ name: "where", type: () => WeeklyMealGroupWhereUniqueInput })
    where: Prisma.AtLeast<WeeklyMealGroupWhereUniqueInput, "id">,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.WeeklyMealGroupSelect;

    try {
      return await this.prisma.weeklyMealGroup.update({
        data: data as any,
        where,
        select,
      });
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
    const select = new PrismaSelect(info).value
      .select as Prisma.WeeklyMealGroupSelect;
    try {
      const data = await this.prisma.weeklyMealGroup.findMany({
        where: args.where,
        select,
      });

      await this.prisma.weeklyMealGroup.updateMany({ ...args });

      return data.map((d) => ({ ...d, ...args.data }));
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
    const select = new PrismaSelect(info).value
      ?.select as Prisma.WeeklyMealGroupSelect;
    try {
      return await this.prisma.weeklyMealGroup.upsert({
        ...(args as any),
        select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
