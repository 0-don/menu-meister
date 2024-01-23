"use client";
import { GET_ALL_USER_MEALS_USER } from "@/documents/query/menu";
import { useGqlQuery } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { useMeHook } from "./useMeHook";

export const useUserMealHook = () => {
  const dashboardStore = useSnapshot(DashboardStore);
  const { me } = useMeHook();

  const { data: { getAllUserMealsUser } = {}, refetch: refetchUserMeals } =
    useGqlQuery(
      GET_ALL_USER_MEALS_USER,
      {
        where: {
          userId: { equals: me?.id },
          mealBoardPlanId: { equals: dashboardStore.activeMealBoardPlan?.id },
          date: {
            gte: dashboardStore.daysThatWeek.at(0),
            lte: dashboardStore.daysThatWeek.at(-1),
          },
        },
      },
      { enabled: false },
    );

  useEffect(() => {
    if (dashboardStore.activeMealBoardPlan) {
      refetchUserMeals();
    }
  }, [dashboardStore.daysThatWeek, dashboardStore.activeMealBoardPlan]);

  return { userMeals: getAllUserMealsUser, refetchUserMeals };
};
