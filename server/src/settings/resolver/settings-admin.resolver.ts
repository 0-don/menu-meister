import { CreateManySettingsArgs } from "@/app_modules/@generated/settings/create-many-settings.args";
import { CreateOneSettingsArgs } from "@/app_modules/@generated/settings/create-one-settings.args";
import { DeleteManySettingsArgs } from "@/app_modules/@generated/settings/delete-many-settings.args";
import { DeleteOneSettingsArgs } from "@/app_modules/@generated/settings/delete-one-settings.args";
import { FindFirstSettingsArgs } from "@/app_modules/@generated/settings/find-first-settings.args";
import { FindManySettingsArgs } from "@/app_modules/@generated/settings/find-many-settings.args";
import { Settings } from "@/app_modules/@generated/settings/settings.model";
import { UpdateManySettingsArgs } from "@/app_modules/@generated/settings/update-many-settings.args";
import { UpdateOneSettingsArgs } from "@/app_modules/@generated/settings/update-one-settings.args";
import { UpsertOneSettingsArgs } from "@/app_modules/@generated/settings/upsert-one-settings.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { SettingsService } from "../settings.service";

@Resolver(() => Settings)
export class SettingsAdminResolver {
  constructor(
    private prisma: PrismaService,
    private settingsService: SettingsService,
  ) {}

  @Query(() => [Settings], { nullable: true })
  @Roles("ADMIN")
  async getAllSettingsAdmin(
    @Args() args: FindManySettingsArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.settings.findMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => Settings, { nullable: true })
  @Roles("ADMIN")
  async getSettingsAdmin(
    @Args() args: FindFirstSettingsArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.settings.findUnique({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Settings, { nullable: true })
  @Roles("ADMIN")
  async createSettingsAdmin(
    @Args() args: CreateOneSettingsArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.settings.create({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Settings], { nullable: true })
  @Roles("ADMIN")
  async createManySettingsAdmin(
    @Args() args: CreateManySettingsArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.settings.createMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Settings, { nullable: true })
  @Roles("ADMIN")
  async deleteSettingsAdmin(
    @Args() args: DeleteOneSettingsArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.settings.delete({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManySettingsAdmin(
    @Args() args: DeleteManySettingsArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return (await this.prisma.settings.deleteMany({ ...args, ...select }))
        .count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Settings, { nullable: true })
  @Roles("ADMIN")
  async updateSettingsAdmin(
    @Args() args: UpdateOneSettingsArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.settings.update({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [Settings], { nullable: true })
  @Roles("ADMIN")
  async updateManySettingsAdmin(
    @Args() args: UpdateManySettingsArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.settings.updateMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Settings, { nullable: true })
  @Roles("ADMIN")
  async upsertSettingsAdmin(
    @Args() args: UpsertOneSettingsArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.settings.upsert({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
