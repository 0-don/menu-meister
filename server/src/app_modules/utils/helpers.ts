import { COOKIE_NAME, JWT_SERVICE } from "src/constants";
import { GraphQLContext, JwtUser } from "../@types/types";

export const getToken = ({
  ctx,
  jwt,
}: {
  ctx?: GraphQLContext;
  jwt?: string;
}): string | undefined => {
  const cookieString = ctx?.req?.headers?.cookie;

  const ctxToken: string | undefined =
    ctx?.req?.cookies?.[COOKIE_NAME] ||
    ctx?.req?.headers?.authorization?.replace("Bearer ", "") ||
    parseCookie(cookieString)?.[COOKIE_NAME];

  return ctxToken || jwt?.replace("Bearer ", "");
};

export const getUserFromJwt = (req: any) => {
  const cookieString: string | undefined =
    typeof req.headers.get === "function"
      ? req?.headers?.get("cookie")
      : req.headers?.cookie;
  const authHeader: string | undefined =
    typeof req.headers.get === "function"
      ? req?.headers?.get("Authorization")
      : req?.headers?.Authorization;

  if (!cookieString && !authHeader) return null;

  const cookie = parseCookie(cookieString)?.[COOKIE_NAME];
  const token = getToken({ jwt: cookie || authHeader });

  if (token) {
    return JWT_SERVICE.verify(token, {
      secret: process.env.SECRET,
    }) as JwtUser;
  } else {
    return null;
  }
};

export const parseCookie = (str: string): { [key: string]: string } =>
  str
    ?.split(";")
    ?.map((v) => v?.split("="))
    ?.reduce((acc, v) => {
      acc[decodeURIComponent(v?.[0]?.trim())] = decodeURIComponent(
        v?.[1]?.trim(),
      );
      return acc;
    }, {});
