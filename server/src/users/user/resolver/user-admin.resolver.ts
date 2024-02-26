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
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { UserService } from "../user.service";

@Resolver(() => User)
export class UserAdminResolver {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  @Query(() => [User], { nullable: true })
  @Roles("Admin")
  async getAllUsersAdmin(
    @Args() args: FindManyUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserSelect;
    try {
      return await this.prisma.user.findMany({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Query(() => User, { nullable: true })
  @Roles("Admin")
  async getUserAdmin(
    @Args() args: FindFirstUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserSelect;
    try {
      return await this.prisma.user.findFirst({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => User, { nullable: true })
  @Roles("Admin")
  async createUserAdmin(
    @Args() args: CreateOneUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserSelect;
    try {
      return await this.prisma.user.create({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [User], { nullable: true })
  @Roles("Admin")
  async createManyUsersAdmin(
    @Args() args: CreateManyUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserSelect;
    try {
      const data = await Promise.all(
        args.data.map((userData) =>
          this.prisma.user.create({
            data: userData,
            select,
          }),
        ),
      );

      return data;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => User, { nullable: true })
  @Roles("Admin")
  async deleteUserAdmin(
    @Args() args: DeleteOneUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserSelect;
    try {
      return await this.prisma.user.delete({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => Int, { nullable: true })
  @Roles("Admin")
  async deleteManyUsersAdmin(@Args() args: DeleteManyUserArgs) {
    try {
      return (await this.prisma.user.deleteMany({ ...args })).count;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => User, { nullable: true })
  @Roles("Admin")
  async updateUserAdmin(
    @Args() { data, where }: UpdateOneUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserSelect;
    try {
      return await this.prisma.user.update({
        data: data as any,
        where,
        select,
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => [User], { nullable: true })
  @Roles("Admin")
  async updateManyUsersAdmin(
    @Args() args: UpdateManyUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserSelect;
    try {
      const data = await this.prisma.user.findMany({
        where: args.where,
        select,
      });

      await this.prisma.user.updateMany({ ...args });

      return data;
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }

  @Mutation(() => User, { nullable: true })
  @Roles("Admin")
  async upsertUserAdmin(
    @Args() args: UpsertOneUserArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value?.select as Prisma.UserSelect;
    try {
      return await this.prisma.user.upsert({ ...(args as any), select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
