import { CookieSerializeOptions } from "@fastify/cookie";
import { JwtService } from "@nestjs/jwt";
import "dotenv/config";
import psl from "psl";

export const PORT = process.env?.PORT || 4000;

export const BODY_LIMIT = 15000;

export const TOKEN_EXPIRES_IN = 60 * 60 * 24 * 30; // 30 days

export const COOKIE_NAME = "token" as const;

export const JWT_SERVICE = new JwtService();

export const CORS_DOMAINS = process.env.CORS_ORIGIN.replace(/ /g, "").split(
  ",",
);

export const COOKIE_SERIALIZE_OPTIONS = (
  domain?: string,
): CookieSerializeOptions => {
  return {
    httpOnly: true,
    path: "/",
    maxAge: TOKEN_EXPIRES_IN,
    sameSite: process.env.NODE_ENV === "production" ? "lax" : "none",
    secure: true, //process.env.NODE_ENV === 'production' ? true : false, // cookie only works in https
    domain:
      domain && process.env.NODE_ENV === "production"
        ? `.${psl.parse(new URL(domain).hostname).domain}`
        : process.env.NODE_ENV === "production" && CORS_DOMAINS.length > 0
          ? `.${psl.parse(new URL(CORS_DOMAINS[0]).hostname).domain}`
          : undefined,
  };
};
