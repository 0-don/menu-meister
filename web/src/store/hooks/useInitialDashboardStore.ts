import { useMealBoardPlanHook } from "@/components/hooks/useMealBoardPlanHook";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { useEffect } from "react";
import { subscribe } from "valtio";
import { watch } from "valtio/utils";
import { DASHBOARD_STORE_KEY, DashboardStore } from "../DashboardStore";

dayjs.extend(utc);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
dayjs.Ls["en"].weekStart = 1;

export const useInitialDashboardStore = () => {
  const { mealBoardPlans } = useMealBoardPlanHook();

  useEffect(() => {
    const store = localStorage.getItem(DASHBOARD_STORE_KEY)
      ? JSON.parse(localStorage.getItem(DASHBOARD_STORE_KEY)!)
      : null;
    if (store) Object.assign(DashboardStore, store);
  }, []);

  useEffect(() => {
    return subscribe(DashboardStore, () => {
      localStorage.setItem(DASHBOARD_STORE_KEY, JSON.stringify(DashboardStore));
    });
  }, []);

  useEffect(() => {
    return watch((get) => {
      const { year, week } = get(DashboardStore.calendar);
      const startOfWeek = dayjs().year(year).isoWeek(week).startOf("week");

      DashboardStore.daysThatWeek = Array.from({ length: 7 }, (_, i) =>
        startOfWeek.add(i, "day").format("YYYY-MM-DD"),
      );
      DashboardStore.weeksThatYear = dayjs().year(year).isoWeeksInYear();
    });
  }, []);

  useEffect(() => {
    DashboardStore.mealBoardPlans = mealBoardPlans;
    if (!DashboardStore.activeMealBoardPlan)
      DashboardStore.activeMealBoardPlan = mealBoardPlans?.at(0);
  }, [mealBoardPlans]);
};
