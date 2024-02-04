import { CreateManyUserArgs } from "@/app_modules/@generated/user/create-many-user.args";
import { CreateOneUserArgs } from "@/app_modules/@generated/user/create-one-user.args";
import { DeleteManyUserArgs } from "@/app_modules/@generated/user/delete-many-user.args";
import { DeleteOneUserArgs } from "@/app_modules/@generated/user/delete-one-user.args";
import { FindFirstUserArgs } from "@/app_modules/@generated/user/find-first-user.args";
import { FindManyUserArgs } from "@/app_modules/@generated/user/find-many-user.args";
import { UpdateManyUserArgs } from "@/app_modules/@generated/user/update-many-user.args";
import { UpdateOneUserArgs } from "@/app_modules/@generated/user/update-one-user.args";
import { UpsertOneUserArgs } from "@/app_modules/@generated/user/upsert-one-user.args";
import { User } from "@/app_modules/@generated/user/user.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { UserService } from "../user.service";

@Resolver(() => User)
export class UserAdminResolver {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  @Query(() => [User], { nullable: true })
  @Roles("ADMIN")
  async getAllUsersAdmin(
    @Args() args: FindManyUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.user.findMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => User, { nullable: true })
  @Roles("ADMIN")
  async getUserAdmin(
    @Args() args: FindFirstUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.user.findFirst({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => User, { nullable: true })
  @Roles("ADMIN")
  async createUserAdmin(
    @Args() args: CreateOneUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.user.create({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [User], { nullable: true })
  @Roles("ADMIN")
  async createManyUsersAdmin(
    @Args() args: CreateManyUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.user.createMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => User, { nullable: true })
  @Roles("ADMIN")
  async deleteUserAdmin(
    @Args() args: DeleteOneUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.user.delete({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("ADMIN")
  async deleteManyUsersAdmin(
    @Args() args: DeleteManyUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return (await this.prisma.user.deleteMany({ ...args, ...select })).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => User, { nullable: true })
  @Roles("ADMIN")
  async updateUserAdmin(
    @Args() args: UpdateOneUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.user.update({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [User], { nullable: true })
  @Roles("ADMIN")
  async updateManyUsersAdmin(
    @Args() args: UpdateManyUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.user.updateMany({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => User, { nullable: true })
  @Roles("ADMIN")
  async upsertUserAdmin(
    @Args() args: UpsertOneUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    try {
      return await this.prisma.user.upsert({ ...args, ...select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
