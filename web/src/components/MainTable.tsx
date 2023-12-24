"use client";

import { GET_ALL_MEAL_SCHEDULES_ADMIN } from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import { GetAllMealSchedulesAdminQuery, SortOrder } from "@/gql/graphql";
import DashboardStore from "@/store/DashboardStore";
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
        gte: dayjs(dashboardStore.daysThatWeek.at(0)).toISOString(),
        lte: dayjs(dashboardStore.daysThatWeek.at(-1)).toISOString(),
      },
    },
    orderBy: { servingDate: SortOrder.Asc },
  });

  const groupedMealSchedules = (data?.getAllMealSchedulesAdmin ?? []).reduce(
    (acc, schedule) => {
      const weekday = dayjs(schedule.servingDate, "DD.MM.YYYY").format("dddd");
      acc[weekday] = acc[weekday] || [];
      acc[weekday]?.push(schedule);
      return acc;
    },
    {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    } as {
      [key: string]: NonNullable<
        GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"]
      >;
    },
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
          {Object.entries(groupedMealSchedules).map(([weekday, schedules]) => (
            <TableCell key={weekday}>
              {schedules.map((schedule) => (
                <p className="inline" key={schedule.id}>
                  {schedule.meal?.name}
                </p>
              ))}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
