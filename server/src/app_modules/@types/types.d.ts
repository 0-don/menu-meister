import { UserRoleName } from "@prisma/client";
import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { COOKIE_NAME } from "../../constants";

export type GraphQLContext = {
  request?: FastifyRequest;
  req: FastifyRequest;
  reply: FastifyReply;
};

export type JwtUser = {
  username: string;
  sub: string;
  roles: UserRoleName[];
  iat?: number;
  exp?: number;
};

export type CookieName = typeof COOKIE_NAME;

export type FastifyInstance = ReturnType<typeof fastify>;
