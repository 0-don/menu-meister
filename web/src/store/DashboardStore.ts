"use client";

import { GET_ALL_MEAL_BOARD_PLANS_USER } from "@/documents/query/dashboard";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { ResultOf } from "gql.tada";
import { proxy } from "valtio";
import { watch } from "valtio/utils";

dayjs.extend(utc);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
dayjs.Ls["en"].weekStart = 1;

export const DASHBOARD_STORE_KEY = "DashboardStore";

export const DashboardStore = proxy({
  init: false,
  activeMealBoardPlan: undefined as
    | NonNullable<
        ResultOf<
          typeof GET_ALL_MEAL_BOARD_PLANS_USER
        >["getAllMealBoardPlansUser"]
      >[number]
    | undefined,
  mealBoardPlans: [] as ResultOf<
    typeof GET_ALL_MEAL_BOARD_PLANS_USER
  >["getAllMealBoardPlansUser"],
  calendar: {
    year: dayjs().year(),
    week: dayjs().isoWeek(),
  },
  weeksThatYear: 0,
  daysThatWeek: [] as string[],
  setCalendar(date: string) {
    DashboardStore.calendar.year = dayjs(date).year();
    DashboardStore.calendar.week = dayjs(date).isoWeek();
  },
  decrementWeek() {
    if (DashboardStore.calendar.week > 1) {
      DashboardStore.calendar.week -= 1;
    } else {
      // Move to the last week of the previous year
      const previousYear = DashboardStore.calendar.year - 1;
      DashboardStore.calendar.year = previousYear;
      DashboardStore.calendar.week = dayjs()
        .year(previousYear)
        .isoWeeksInYear();
    }
  },
  incrementWeek() {
    if (DashboardStore.calendar.week < DashboardStore.weeksThatYear) {
      DashboardStore.calendar.week += 1;
    } else {
      // Move to the first week of the next year
      const nextYear = DashboardStore.calendar.year + 1;
      DashboardStore.calendar.year = nextYear;
      DashboardStore.calendar.week = 1;
    }
  },
});

export const dashboardWatch = () =>
  watch((get) => {
    const { year, week } = get(DashboardStore.calendar);
    const startOfWeek = dayjs().year(year).isoWeek(week).startOf("week");

    DashboardStore.daysThatWeek = Array.from({ length: 7 }, (_, i) =>
      startOfWeek.add(i, "day").toISOString(),
    );
    DashboardStore.weeksThatYear = dayjs().year(year).isoWeeksInYear();
  });

dashboardWatch();
