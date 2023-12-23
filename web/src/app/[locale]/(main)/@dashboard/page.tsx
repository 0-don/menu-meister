"use client";

import { DashboardPagination } from "@/components/elements/DashboardPagination";

interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps) {
  // const { data: { getAllMealSchedulesAdmin } = {} } = useGqlQuery(
  //   GET_ALL_MEAL_SCHEDULES_ADMIN,
  //   { where: {} },
  // );

  // console.log(getAllMealSchedulesAdmin);
  return (
    <>
      {/* <Test /> */}
      <DashboardPagination />
      {/* <MainTable /> */}
    </>
  );
}
