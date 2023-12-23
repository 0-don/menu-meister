"use client";

import { DashboardPagination } from "@/components/elements/DashboardPagination";

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
      {/* <MainTable /> */}
    </>
  );
}
