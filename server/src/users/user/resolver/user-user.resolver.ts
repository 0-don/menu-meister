import { UserUpdateInput } from "@/app_modules/@generated/user/user-update.input";
import { User } from "@/app_modules/@generated/user/user.model";
import { JwtUser } from "@/app_modules/@types/types";
import { CurrentUser } from "@/app_modules/decorators/currentUser.decorator";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserService } from "../user.service";

@Resolver(() => User)
export class UserUserResolver {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  @Mutation(() => Boolean, { nullable: true })
  @Roles("USER", "MOD")
  async updateUserAllergensUser(
    @Args("data") data: UserUpdateInput,
    @CurrentUser() me?: JwtUser,
  ) {
    try {
      return await this.prisma.user.update({
        data: data as any,
        where: { id: me.sub },
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
