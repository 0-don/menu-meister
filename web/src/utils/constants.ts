import { TreeItem } from "@/components/tree/SortableTree";
import { GetAllMealSchedulesAdminQuery } from "@/gql/graphql";

export const X_URL = "x-url";
export const BACKEND_INTERNAL_URL = "http://meal-manager-server:4000/graphql";
export const TOKEN = "token";

export const ROLES = "roles";

export const initialItems: TreeItem[] = [
  { id: "Home", children: [] },
  {
    id: "Collections",
    children: [
      { id: "Spring", children: [] },
      { id: "Summer", children: [] },
      { id: "Fall", children: [] },
      { id: "Winter", children: [] },
    ],
  },
  { id: "About Us", children: [] },
  {
    id: "My Account",
    children: [
      { id: "Addresses", children: [] },
      { id: "Order History", children: [] },
    ],
  },
];

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
