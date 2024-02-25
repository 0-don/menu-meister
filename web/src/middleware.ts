import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export const LOCALES = ["de", "en"] as const;
export const X_URL = "x-url";

export default async function middleware(request: NextRequest) {
  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createIntlMiddleware({
    locales: LOCALES,
    defaultLocale: "de",
    localePrefix: "never",
    localeDetection: true,
  });
  const response = handleI18nRouting(request);

  response.headers.set(X_URL, request.url);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
