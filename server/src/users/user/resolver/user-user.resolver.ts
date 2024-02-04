import { UserUpdateInput } from "@/app_modules/@generated/user/user-update.input";
import { User } from "@/app_modules/@generated/user/user.model";
import { JwtUser } from "@/app_modules/@types/types";
import { CurrentUser } from "@/app_modules/decorators/currentUser.decorator";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Mutation, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { UserService } from "../user.service";

@Resolver(() => User)
export class UserUserResolver {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  @Mutation(() => User, { nullable: true })
  @Roles("USER", "MOD")
  async updateUserAllergens(
    @Args("data") data: UserUpdateInput,
    @Info() info: GraphQLResolveInfo,
    @CurrentUser() me?: JwtUser,
  ) {
    const select = new PrismaSelect(info).value.select as Prisma.UserSelect;
    try {
      return await this.prisma.user.update({
        data,
        select,
        where: { id: me.sub },
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
