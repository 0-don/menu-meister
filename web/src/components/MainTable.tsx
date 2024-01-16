"use client";

import {
  GET_ALL_MEALS_ADMIN,
  GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN,
} from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import DashboardStore from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { TableContext } from "./table/TableContext";

interface DashboardPageProps {}

export function MainTable({}: DashboardPageProps) {
  const t = useTranslations<"Dashboard">();
  const dashboardStore = useSnapshot(DashboardStore);

  const {
    data: { getAllWeeklyMealGroupsAdmin } = {},
    refetch: refetchWeeklyMealGroups,
  } = useGqlQuery(GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN, {
    where: {
      year: { equals: dashboardStore.calendar.year },
      weekOfYear: { equals: dashboardStore.calendar.week },
    },
  });

  const { data: { getAllMealsAdmin } = {}, refetch: refetchMeals } =
    useGqlQuery(GET_ALL_MEALS_ADMIN);

  useEffect(() => {
    TableStore.data = getAllWeeklyMealGroupsAdmin;
    TableStore.refetchWeeklyMealGroups = refetchWeeklyMealGroups;
  }, [getAllWeeklyMealGroupsAdmin]);

  useEffect(() => {
    TableStore.meals = getAllWeeklyMealGroupsAdmin;
    TableStore.refetchMeals = refetchMeals;
  }, [getAllMealsAdmin]);

  return (
    <>
      <TableContext />
    </>
  );
}
