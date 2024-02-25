"use client";

import { WEEKLY_MEAL_GROUP_FRAGMENT } from "@/documents/fragments/dashboard";
import { GET_ALL_WEEKLY_MEAL_GROUPS_USER } from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
import { TableStore } from "@/store/TableStore";
import { useInitialDashboardStore } from "@/store/hooks/useInitialDashboardStore";
import { FragmentOf } from "gql.tada";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { useMeHook } from "./hooks/useMeHook";
import { useUserMealHook } from "./hooks/useUserMealHook";
import { useWeeklyMealGroupHook } from "./hooks/useWeeklyMealGroupHook";
import { AddNewTableRow } from "./pages/dashboard/table/AddNewTableRow";
import { TableContext } from "./pages/dashboard/table/TableContext";

interface DashboardPageProps {}

export function MainTable({}: DashboardPageProps) {
  useInitialDashboardStore();
  const { isHighRank, isOrderMenu } = useMeHook();
  const { isPast } = useWeeklyMealGroupHook();
  const { userMealsAdmin } = useUserMealHook();
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
    { enabled: !!dashboardStore.activeMealBoardPlan?.id },
  );

  useEffect(() => {
    TableStore.data = getAllWeeklyMealGroupsUser as FragmentOf<
      typeof WEEKLY_MEAL_GROUP_FRAGMENT
    >[];
    TableStore.refetchWeeklyMealGroups = refetchWeeklyMealGroups;
  }, [getAllWeeklyMealGroupsUser, dashboardStore.activeMealBoardPlan]);

  return (
    <>
      <TableContext />
      {isHighRank &&
        !isOrderMenu &&
        !userMealsAdmin.length &&
        !isPast(dashboardStore.daysThatWeek.at(-1)) && <AddNewTableRow />}
    </>
  );
}
