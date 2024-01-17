"use client";

import { MainTable } from "@/components/MainTable";
import { DashboardPagination } from "@/components/pages/dashboard/table/DashboardPagination";

interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps) {
  // const { data: { getAllMealSchedulesAdmin } = {} } = useGqlQuery(
  //   GET_ALL_MEAL_SCHEDULES_ADMIN,
  //   { where: {} },
  // );

  return (
    <>
      {/* <Test /> */}

      <DashboardPagination />
      <MainTable />
    </>
  );
}
