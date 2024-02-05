import { GraphQLContext, JwtUser } from "@/app_modules/@types/types";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { COOKIE_NAME, COOKIE_SERIALIZE_OPTIONS } from "src/constants";
import { User } from "../../app_modules/@generated/user/user.model";
import { CurrentUser } from "../../app_modules/decorators/currentUser.decorator";
import { Roles } from "../../app_modules/decorators/roles.decorator";
import { PrismaService } from "../../app_modules/prisma/prisma.service";
import { AuthService } from "../auth.service";
import { LoginUserInput } from "../model/input/login-user.input";
import { RegisterUserInput } from "../model/input/register-user.input";

@Resolver(() => User)
export class AuthResolver {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}

  @Query(() => User, { nullable: true })
  @Roles("USER", "MOD")
  async me(@CurrentUser() me?: JwtUser) {
    if (!me) return null;

    try {
      return await this.prisma.user.update({
        where: { id: me.sub },
        data: { lastOnline: new Date() },
        select: {
          id: true,
          username: true,
          email: true,
          userRole: {
            select: {
              id: true,
              name: true,
            },
          },
          userMealLocation: {
            select: {
              id: true,
              timeOfDay: true,
              mealLocation: true,
            },
          },
          allergens: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (error) {
      return null;
    }
  }

  @Mutation(() => User, { nullable: true })
  @Roles("GUEST")
  async registerUser(
    @Args("data") data: RegisterUserInput,
    @Context() ctx: GraphQLContext,
    @CurrentUser() me?: JwtUser,
  ): Promise<User> {
    if (me) {
      await this.authService.logout(ctx);
      return null;
    }

    const user = await this.authService.registerUser(data);
    const token = await this.authService.createToken(user);

    ctx.reply.setCookie(
      COOKIE_NAME,
      token,
      COOKIE_SERIALIZE_OPTIONS(ctx.req.headers?.referer),
    );

    return user;
  }

  @Mutation(() => User, { nullable: true })
  @Roles("GUEST")
  async loginUser(
    @Args("data") data: LoginUserInput,
    @Context() ctx: GraphQLContext,
    @CurrentUser() me?: JwtUser,
  ): Promise<User> {
    if (me) {
      await this.authService.logout(ctx);
      return null;
    }

    const user = await this.authService.login(data);

    if (!user) return null;

    const token = await this.authService.createToken(user);

    ctx.reply.setCookie(
      COOKIE_NAME,
      token,
      COOKIE_SERIALIZE_OPTIONS(ctx.req.headers?.referer),
    );

    return user;
  }
}
