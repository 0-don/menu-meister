"use client";

import { MainTable } from "@/components/MainTable";
import { MenuPagination } from "@/components/pages/dashboard/utils/MenuPagination";
import { GET_ALL_USER_MEALS_ADMIN } from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps) {
  const dashboardStore = useSnapshot(DashboardStore);

  const { data: { getAllUserMealsAdmin } = {}, refetch } = useGqlQuery(
    GET_ALL_USER_MEALS_ADMIN,
    {
      where: {
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
    if (dashboardStore.activeMealBoardPlan?.id) {
      refetch();
      TableStore.orderedMeals = getAllUserMealsAdmin;
    }
  }, [dashboardStore.activeMealBoardPlan, dashboardStore.daysThatWeek]);

  return (
    <>
      <MenuPagination />
      <MainTable />
    </>
  );
}
