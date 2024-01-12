import { GetAllMealSchedulesAdminQuery } from "@/gql/graphql";
import { UniqueIdentifier } from "@dnd-kit/core";

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

export function debounce(fn: (...args: any) => any, ms: number) {
  let timer: NodeJS.Timeout | undefined = undefined;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      // @ts-ignore
      fn.apply(this, args);
    }, ms);
  };
}

export interface DaySchedule {
  id: UniqueIdentifier;
  servingDate: string;
  schedules: Schedule[];
}

export interface Schedule {
  id: UniqueIdentifier;
  meal?: Meal;
  group?: Group;
}

export interface Group {
  id: UniqueIdentifier;
  name: string;
  meals: Meal[];
}

export interface Meal {
  id: UniqueIdentifier;
  name: string;
}

export type GroupedSchedules = {
  [key: string]: ItemType[];
};

export type ItemType = {
  id: UniqueIdentifier;
  parent?: UniqueIdentifier;
  container?: boolean;
};

export const INITIAL_DATAS: DaySchedule[] = [
  {
    id: "day1",
    servingDate: "2024-01-08",
    schedules: [
      { id: "schedule1", meal: { id: "meal1", name: "pizza" } },
      { id: "schedule2", meal: { id: "meal2", name: "bread" } },
      { id: "schedule8", meal: { id: "meal8", name: "tea" } },
      // {
      //   id: "schedule3",
      //   group: {
      //     id: "group1",
      //     name: "breakfast",
      //     meals: [
      //       { id: "meal3", name: "tea" },
      //       // { id: "meal4", name: "sandwich" },
      //     ],
      //   },
      // },
    ],
  },
  {
    id: "day2",
    servingDate: "2024-01-12",
    schedules: [
      {
        id: "schedule6",
        group: {
          id: "group2",
          name: "lunch",
          meals: [
            { id: "meal7", name: "soup" },
            { id: "meal8", name: "burger" },
          ],
        },
      },
      { id: "schedule4", meal: { id: "meal5", name: "pasta" } },
      { id: "schedule5", meal: { id: "meal6", name: "salad" } },
    ],
  },
];
