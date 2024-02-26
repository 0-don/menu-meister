import { FindManyWeeklyMealGroupArgs } from "@/app_modules/@generated/weekly-meal-group/find-many-weekly-meal-group.args";
import { WeeklyMealGroup } from "@/app_modules/@generated/weekly-meal-group/weekly-meal-group.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { WeeklyMealGroupService } from "../weekly-meal-group.service";

@Resolver(() => WeeklyMealGroup)
export class WeeklyMealGroupUseresolver {
  constructor(
    private prisma: PrismaService,
    private weeklyMealGroupService: WeeklyMealGroupService,
  ) {}

  @Query(() => [WeeklyMealGroup], { nullable: true })
  @Roles("User", "Mod")
  async getAllWeeklyMealGroupsUser(
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
}
