import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

export const BACKEND_INTERNAL_URL = "http://meal-manager-server:4000/graphql";
export const TOKEN = "token";

export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    }),
);

export const localePath = async (locale: string): Promise<Messages> =>
  (await import(`../../public/locales/${locale}.json`)).default;
