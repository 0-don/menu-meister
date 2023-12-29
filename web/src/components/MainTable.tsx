"use client";

import { GET_ALL_MEAL_SCHEDULES_ADMIN } from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import { SortOrder } from "@/gql/graphql";
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
import { MultipleContainers } from "./dnd/MultiContainer";
import { TableItem } from "./elements/TableItem";
import { SortableTree } from "./tree/SortableTree";

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
    orderBy: { servingDate: SortOrder.Asc },
  });

  const groupedMealSchedules = (data?.getAllMealSchedulesAdmin ?? []).reduce(
    (acc, schedule) => {
      const weekday = dayjs(schedule.servingDate, "DD.MM.YYYY").format("dddd");
      acc[weekday] = acc[weekday] || [];
      acc[weekday]?.push(schedule);
      return acc;
    },
    structuredClone(WEEK_GROUP) as typeof WEEK_GROUP,
  );

  return (
    <>
      {/* <Board items={data?.getAllMealSchedulesAdmin} /> */}

      {/* <MultipleContainers /> */}
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <SortableTree />
      </div>

      <Table className="mt-5" aria-label="Table">
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
              ([weekday, schedules]) => (
                <TableCell key={weekday} className="align-top">
                  {schedules.map((schedule) => (
                    <TableItem key={schedule.id} schedule={schedule} />
                  ))}
                </TableCell>
              ),
            )}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
