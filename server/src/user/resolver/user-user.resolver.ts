import { UserOrderByWithRelationInput } from "@/app_modules/@generated/user/user-order-by-with-relation.input";
import { UserWhereInput } from "@/app_modules/@generated/user/user-where.input";
import { User } from "@/app_modules/@generated/user/user.model";
import { JwtUser } from "@/app_modules/@types/types";
import { CurrentUser } from "@/app_modules/decorators/currentUser.decorator";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Args, Info, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { UserService } from "../user.service";

@Resolver(() => User)
export class UserUserResolver {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  @Mutation(() => Boolean)
  @Roles("GUEST")
  async updateUserUser(@CurrentUser() me?: JwtUser) {
    if (!me) return false;

    return true;
  }

  @Query(() => [User], { nullable: true })
  @Roles("GUEST")
  async getAllUsersUser(
    @Args("where", { nullable: true }) where: UserWhereInput,
    @Args("orderBy", { nullable: true })
    orderBy: UserOrderByWithRelationInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value.select;
    return await this.prisma.user.findMany({
      where,
      orderBy,
      ...select,
    });
  }
}
