import createIntlMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { LOCALES } from "./locales";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales: LOCALES,
    localePrefix: "never",
    defaultLocale: LOCALES[0],
  });
  const response = handleI18nRouting(request);

  response.headers.set("x-url", request.url);

  return response;
}
