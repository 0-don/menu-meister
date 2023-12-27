import { GetAllMealSchedulesAdminQuery } from "@/gql/graphql";

export const X_URL = "x-url";
export const BACKEND_INTERNAL_URL = "http://meal-manager-server:4000/graphql";
export const TOKEN = "token";
export const ROLES = "roles";

export const localePath = async (locale: string): Promise<Messages> =>
  (await import(`../../public/locales/${locale}.json`)).default;

export const WEEK_GROUP = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
} as {
  [key: string]: NonNullable<
    GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"]
  >;
};


export const grid = 8;
export const borderRadius = 2;
