"use client";

import { GET_ALL_WEEKLY_MEAL_GROUPS_USER } from "@/documents/query/dashboard";
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
    data: { getAllWeeklyMealGroupsUser } = {},
    refetch: refetchWeeklyMealGroups,
  } = useGqlQuery(
    GET_ALL_WEEKLY_MEAL_GROUPS_USER,
    {
      where: {
        mealBoardPlanId: { equals: dashboardStore.activeMealBoardPlan?.id },
        year: { equals: dashboardStore.calendar.year },
        weekOfYear: { equals: dashboardStore.calendar.week },
      },
    },
    { enabled: false },
  );

  useEffect(() => {
    if (dashboardStore.activeMealBoardPlan?.id) refetchWeeklyMealGroups();
  }, [dashboardStore.activeMealBoardPlan, dashboardStore.calendar]);

  useEffect(() => {
    TableStore.data =
      getAllWeeklyMealGroupsUser as WeeklyMealGroupFragmentFragment[];
    TableStore.refetchWeeklyMealGroups = refetchWeeklyMealGroups;
  }, [getAllWeeklyMealGroupsUser, dashboardStore.activeMealBoardPlan]);

  return (
    <>
      <TableContext />
      <AddNewTableRow />
    </>
  );
}
