import { CookieSerializeOptions } from "@fastify/cookie";
import { JwtService } from "@nestjs/jwt";
import "dotenv/config";
import psl, { ParsedDomain } from "psl";

export const PORT = process.env?.PORT || 4000;
export const TOKEN_EXPIRES_IN = 60 * 60 * 24 * 30; // 30 days
export const COOKIE_NAME = "token" as const;
export const JWT_SERVICE = new JwtService();
export const CORS_DOMAINS = process.env.CORS_ORIGIN.replace(/ /g, "").split(
  ",",
);

export const COOKIE_SERIALIZE_OPTIONS = (
  domain?: string,
): CookieSerializeOptions => {
  const isProduction = process.env.NODE_ENV === "production";
  let effectiveDomain: string | undefined = undefined;

  if (domain && isProduction) {
    effectiveDomain = `.${(psl.parse(new URL(domain).hostname) as ParsedDomain).domain}`;
  } else if (isProduction && CORS_DOMAINS.length) {
    effectiveDomain = `.${(psl.parse(new URL(CORS_DOMAINS[0]).hostname) as ParsedDomain).domain}`;
  }

  return {
    httpOnly: true,
    path: "/",
    maxAge: TOKEN_EXPIRES_IN,
    sameSite: isProduction ? "lax" : "none",
    secure: true,
    domain: effectiveDomain,
  };
};
