"use client";

import { GET_ALL_MEAL_SCHEDULES_ADMIN } from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import DashboardStore from "@/store/DashboardStore";
import { WEEK_GROUP } from "@/utils/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";

interface DashboardPageProps {}

export function MainTable({}: DashboardPageProps) {
  const t = useTranslations<"Dashboard">();
  const dashboardStore = useSnapshot(DashboardStore);

  const { data } = useGqlQuery(GET_ALL_MEAL_SCHEDULES_ADMIN, {
    where: {
      servingDate: {
        gte: dayjs.utc(dashboardStore.daysThatWeek.at(0)).toISOString(),
        lte: dayjs.utc(dashboardStore.daysThatWeek.at(-1)).toISOString(),
      },
    },
  });

  const groupedMealSchedules = (data?.getAllMealSchedulesAdmin ?? []).reduce(
    (acc, schedule) => {
      const weekday = dayjs(schedule.servingDate, "DD.MM.YYYY").format("dddd");
      acc[weekday] = acc[weekday] || [];
      acc[weekday]?.push(schedule);
      return acc;
    },
    structuredClone(WEEK_GROUP),
  );

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>{t("MONDAY")}</TableColumn>
        <TableColumn>{t("TUESDAY")}</TableColumn>
        <TableColumn>{t("WEDNESDAY")}</TableColumn>
        <TableColumn>{t("THURSDAY")}</TableColumn>
        <TableColumn>{t("FRIDAY")}</TableColumn>
        <TableColumn>{t("SATURDAY")}</TableColumn>
        <TableColumn>{t("SUNDAY")}</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          {Object.entries(groupedMealSchedules).map(
            ([weekday, schedules], i) => (
              <TableCell key={weekday + i}>
                {(schedules as any[]).map((schedule, i) => (
                  <p className="inline" key={schedule.id + i}>
                    {schedule.meal?.name}
                  </p>
                ))}
              </TableCell>
            ),
          )}
        </TableRow>
      </TableBody>
    </Table>
  );
}
