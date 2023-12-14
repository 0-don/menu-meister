import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { LOCALES } from "./navigation";

export default async function middleware(request: NextRequest) {
  const defaultLocale = (request.headers.get("x-default-locale") ||
    "de") as (typeof LOCALES)[number];

  const handleI18nRouting = createIntlMiddleware({
    locales: LOCALES,
    localePrefix: "never",
    defaultLocale,
  });
  const response = handleI18nRouting(request);

  response.headers.set("x-default-locale", defaultLocale);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
