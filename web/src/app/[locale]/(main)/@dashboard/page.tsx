"use client";

import { DashboardPagination } from "@/components/elements/DashboardPagination";
import DashboardStore from "@/store/DashboardStore";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";

interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps) {
  const t = useTranslations<"Dashboard">();
  const dashboardStore = useSnapshot(DashboardStore);
  // const { data: { getAllMealSchedulesAdmin } = {} } = useGqlQuery(
  //   GET_ALL_MEAL_SCHEDULES_ADMIN,
  //   { where: {} },
  // );

  return (
    <>
      {/* <Test /> */}
      <div className="mb-2 mt-10 flex">
        <p className="font-bold">
          {t("FROM_TO", {
            week: dashboardStore.calendar.week,
            from: dayjs(dashboardStore.daysThatWeek.at(0))?.format(
              "DD.MM.YYYY",
            ),
            to: dayjs(dashboardStore.daysThatWeek.at(-1))?.format("DD.MM.YYYY"),
          })}
        </p>
      </div>
      <DashboardPagination />
      {/* <MainTable /> */}
    </>
  );
}
