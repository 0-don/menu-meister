"use client";

import {
  GET_ALL_MEALS_ADMIN,
  GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN,
} from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import { WeeklyMealGroupFragmentFragment } from "@/gql/graphql";
import DashboardStore from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import { useInitialDashboardStore } from "@/store/hooks/useInitialDashboardStore";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { AddNewTableRow } from "./pages/dashboard/table/AddNewTableRow";
import { TableContext } from "./pages/dashboard/table/TableContext";

interface DashboardPageProps {}

export function MainTable({}: DashboardPageProps) {
  useInitialDashboardStore();
  const dashboardStore = useSnapshot(DashboardStore);

  const {
    data: { getAllWeeklyMealGroupsAdmin } = {},
    refetch: refetchWeeklyMealGroups,
  } = useGqlQuery(GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN, {
    where: {
      mealBoardPlanId: { equals: dashboardStore.activeMealBoardPlan?.id },
      year: { equals: dashboardStore.calendar.year },
      weekOfYear: { equals: dashboardStore.calendar.week },
    },
  });

  const { data: { getAllMealsAdmin } = {}, refetch: refetchMeals } =
    useGqlQuery(GET_ALL_MEALS_ADMIN);

  useEffect(() => {
    TableStore.data =
      getAllWeeklyMealGroupsAdmin as WeeklyMealGroupFragmentFragment[];
    // TableStore.refetchWeeklyMealGroups = refetchWeeklyMealGroups;
  }, [getAllWeeklyMealGroupsAdmin]);

  useEffect(() => {
    TableStore.meals = getAllMealsAdmin;
    // TableStore.refetchMeals = refetchMeals;
  }, [getAllMealsAdmin]);

  return (
    <>
      <TableContext />
      <AddNewTableRow />
    </>
  );
}
