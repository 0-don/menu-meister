"use client";

import { GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN } from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import DashboardStore from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { TableContext } from "./table/TableContext";

interface DashboardPageProps {}

export function MainTable({}: DashboardPageProps) {
  const t = useTranslations<"Dashboard">();
  const dashboardStore = useSnapshot(DashboardStore);

  const { data } = useGqlQuery(GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN, {
    where: {
      year: { equals: dashboardStore.calendar.year },
      weekOfYear: { equals: dashboardStore.calendar.week },
    },
  });

  useEffect(
    () => void (TableStore.data = data?.getAllWeeklyMealGroupsAdmin),
    [data],
  );

  return (
    <>
      <TableContext />
      <Table className="mt-5" aria-label="Table">
        <TableHeader>
          <TableColumn>Group</TableColumn>
          <TableColumn>{t("MONDAY")}</TableColumn>
          <TableColumn>{t("TUESDAY")}</TableColumn>
          <TableColumn>{t("WEDNESDAY")}</TableColumn>
          <TableColumn>{t("THURSDAY")}</TableColumn>
          <TableColumn>{t("FRIDAY")}</TableColumn>
          <TableColumn>{t("SATURDAY")}</TableColumn>
          <TableColumn>{t("SUNDAY")}</TableColumn>
        </TableHeader>

        <TableBody>
          {(data?.getAllWeeklyMealGroupsAdmin || []).map((group) => (
            <TableRow key={group.id}>
              <TableCell>{group.name}</TableCell>
              <TableCell>{group.mondayMeal?.name}</TableCell>
              <TableCell>{group.tuesdayMeal?.name}</TableCell>
              <TableCell>{group.wednesdayMeal?.name}</TableCell>
              <TableCell>{group.thursdayMeal?.name}</TableCell>
              <TableCell>{group.fridayMeal?.name}</TableCell>
              <TableCell>{group.saturdayMeal?.name}</TableCell>
              <TableCell>{group.sundayMeal?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
