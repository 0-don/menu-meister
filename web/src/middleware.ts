import createIntlMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

export const LOCALES = ["de", "en"] as const;
export const X_URL = "x-url";

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

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
