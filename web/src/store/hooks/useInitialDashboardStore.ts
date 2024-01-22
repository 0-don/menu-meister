import { useMealBoardPlanHook } from "@/components/hooks/useMealBoardPlanHook";
import { useEffect } from "react";
import { subscribe } from "valtio";
import {
  DASHBOARD_STORE_KEY,
  DashboardStore,
  dashboardWatch,
} from "../DashboardStore";

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
    return dashboardWatch();
  }, []);

  useEffect(() => {
    DashboardStore.mealBoardPlans = mealBoardPlans;
    if (!DashboardStore.activeMealBoardPlan)
      DashboardStore.activeMealBoardPlan = mealBoardPlans?.at(0);
  }, [mealBoardPlans]);
};
