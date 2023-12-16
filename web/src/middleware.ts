import createMiddleware from "next-intl/middleware";

export const LOCALES = ["de", "en"] as const;

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: "de",
  localePrefix: "always",
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
