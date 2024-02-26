import { GraphQLContext, JwtUser } from "@/app_modules/@types/types";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { COOKIE_NAME, COOKIE_SERIALIZE_OPTIONS } from "src/constants";
import { User } from "../../app_modules/@generated/user/user.model";
import { CurrentUser } from "../../app_modules/decorators/currentUser.decorator";
import { Roles } from "../../app_modules/decorators/roles.decorator";
import { PrismaService } from "../../app_modules/prisma/prisma.service";
import { AuthService } from "../auth.service";

@Resolver(() => User)
export class AuthUserResolver {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}

  @Mutation(() => Boolean, { nullable: true })
  @Roles("User", "Mod")
  async logout(@Context() ctx: GraphQLContext, @CurrentUser() me?: JwtUser) {
    if (!me) return null;

    return await this.authService.logout(ctx);
  }

  @Mutation(() => Boolean, { nullable: true })
  @Roles("User", "Mod")
  async changePasswordUser(
    @Args("password") password: string,
    @Args("newPassword") newPassword: string,
    @CurrentUser() me?: JwtUser,
  ) {
    if (!me) return null;

    const validPassword = await this.authService.checkPassword(
      password,
      me.username,
    );

    if (!validPassword) return false;

    return await this.authService.changePassword(me.username, newPassword);
  }

  @Mutation(() => Boolean)
  @Roles("User", "Mod")
  async deleteAccountTokensUser(
    @Context() ctx: GraphQLContext,
    @CurrentUser() me?: JwtUser,
  ) {
    if (!me) return false;

    await this.authService.deleteTokens({ where: { createdBy: me.sub } });

    ctx.reply.clearCookie(
      COOKIE_NAME,
      COOKIE_SERIALIZE_OPTIONS(ctx.req.headers?.referer),
    );

    return true;
  }
}
