import { useMealBoardPlanHook } from "@/components/hooks/useMealBoardPlanHook";
import { setStore } from "@/utils/constants";
import { useEffect } from "react";
import { subscribe } from "valtio";
import DashboardStore, { DASHBOARD_STORE_KEY } from "../DashboardStore";

export const useInitialDashboardStore = () => {
  const { mealBoardPlans } = useMealBoardPlanHook();

  useEffect(() => {
    const store = localStorage.getItem(DASHBOARD_STORE_KEY)
      ? JSON.parse(localStorage.getItem(DASHBOARD_STORE_KEY)!)
      : null;

    if (store) setStore(store, DashboardStore);
  }, []);

  useEffect(() => {
    return subscribe(DashboardStore, () => {
      localStorage.setItem(DASHBOARD_STORE_KEY, JSON.stringify(DashboardStore));
    });
  }, []);

  useEffect(() => {
    DashboardStore.mealBoardPlans = mealBoardPlans;
    if (!DashboardStore.activeMealBoardPlan)
      DashboardStore.activeMealBoardPlan = mealBoardPlans?.at(0);
  }, [mealBoardPlans]);
};
