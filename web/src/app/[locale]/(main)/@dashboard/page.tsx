"use client";

import { MainTable } from "@/components/MainTable";
import { GET_ALL_MEAL_SCHEDULES_ADMIN } from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";

interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps) {
  const { data: { getAllMealSchedulesAdmin } = {} } = useGqlQuery(
    GET_ALL_MEAL_SCHEDULES_ADMIN,
    { where: {} },
  );

  console.log(getAllMealSchedulesAdmin);
  return <MainTable />;
}
