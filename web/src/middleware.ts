import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import psl from "psl";
import { ME } from "./documents/query/auth";
import { ROLES, TOKEN, X_URL } from "./utils/constants";
import { customFetcherServer } from "./utils/helpers/serverUtils";

export const LOCALES = ["de", "en"] as const;

export default async function middleware(request: NextRequest) {
  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createIntlMiddleware({
    locales: LOCALES,
    defaultLocale: "de",
    localePrefix: "never",
    localeDetection: true,
  });
  const response = handleI18nRouting(request);

  await tokenParser(request, response);
  response.headers.set(X_URL, request.url);

  return response;
}

const tokenParser = async (request: NextRequest, response: NextResponse) => {
  const token = request.cookies.get(TOKEN)?.value;
  if (!token) return;
  const referer =
    request.headers.get("origin") ||
    request.headers.get("referer") ||
    new URL(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT).origin;
  const authorization = token ? `Bearer ${token}` : "";
  const { me } = await customFetcherServer(ME, undefined, {
    authorization,
    referer,
  })();
  if (!me)
    response.cookies.set(TOKEN, "", {
      expires: new Date(0),
      secure: true,
      domain:
        process.env.NODE_ENV === "production"
          ? `.${psl.parse(new URL(referer).hostname).domain}`
          : undefined,
      sameSite: process.env.NODE_ENV === "production" ? "lax" : "none",
      path: "/",
      httpOnly: true,
    });
  const roles = me?.UserRole?.map(({ name }) => name).join(",");
  if (roles) response.headers.set(ROLES, roles);
};

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
