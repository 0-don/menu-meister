import { COOKIE_NAME, COOKIE_SERIALIZE_OPTIONS } from "@/constants";
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";
import { FastifyReply } from "fastify";
import { UserRoleName } from "../@generated/prisma/user-role-name.enum";
import { JwtUser } from "../@types/types";
import { ROLES } from "../decorators/roles.decorator";
import { PrismaService } from "../prisma/prisma.service";
import { getToken } from "../utils/helpers";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rules: `${UserRoleName}`[] =
      this.reflector.get<`${UserRoleName}`[]>(ROLES, context.getHandler()) ||
      [];

    if (!rules.length) throw new UnauthorizedException(["enpoint has no role"]);

    if (rules.includes("Guest")) return true;

    const ctx = GqlExecutionContext.create(context).getContext();

    const token = getToken({ ctx });

    if (!token) throw new UnauthorizedException(["no token"]);

    try {
      const user = this.jwtService.verify(token, {
        secret: process.env.SECRET,
      }) as JwtUser;
      await this.prisma.token.findFirstOrThrow({ where: { token } });

      if (user.roles.includes("Admin")) return true;

      return rules.some((rule) => user.roles.includes(rule));
    } catch (_) {
      const res = ctx.reply as FastifyReply;
      res.clearCookie(
        COOKIE_NAME,
        COOKIE_SERIALIZE_OPTIONS(ctx.req.headers?.referer),
      );

      return false;
    }
  }
}
