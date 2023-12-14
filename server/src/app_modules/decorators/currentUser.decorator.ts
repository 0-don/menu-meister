import {
  COOKIE_NAME,
  COOKIE_SERIALIZE_OPTIONS,
  JWT_SERVICE,
} from "@/constants";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { FastifyReply } from "fastify";
import { getToken } from "../utils/helpers";

export const CurrentUser = createParamDecorator(
  async (_: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context).getContext();

    const res = ctx.reply as FastifyReply;

    const token = getToken({ ctx });

    if (!token) return null;

    try {
      return JWT_SERVICE.verify(token, { secret: process.env.SECRET });
    } catch (_) {
      res.clearCookie(
        COOKIE_NAME,
        COOKIE_SERIALIZE_OPTIONS(ctx.req.headers?.referer),
      );

      return null;
    }
  },
);
