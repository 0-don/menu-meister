export const X_URL = "x-url";
export const BACKEND_INTERNAL_URL = "http://meal-manager-server:4000/graphql";
export const TOKEN = "token";
export const ROLES = "roles";

export const localePath = async (locale: string): Promise<Messages> =>
  (await import(`../../public/locales/${locale}.json`)).default;
