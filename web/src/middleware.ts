import createMiddleware from "next-intl/middleware";

export const LOCALES = ["de", "en"] as const;

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: "de",
  localeDetection: false,
});

export const config = {
  matcher: ["/", `/(de|en)/:path*`],
};
