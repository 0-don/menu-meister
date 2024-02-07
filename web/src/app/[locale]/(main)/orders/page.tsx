"use client";

import { MenuPagination } from "@/components/pages/dashboard/utils/MenuPagination";
import { GET_USER_MEALS_GROUPED_COUNT_ADMIN } from "@/documents/query/orders";
import { useGqlQuery } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
import { useInitialDashboardStore } from "@/store/hooks/useInitialDashboardStore";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";

interface OrdersPageProps {}

export default function OrdersPage({}: OrdersPageProps) {
  useInitialDashboardStore();
  const t = useTranslations<"Orders">();
  const dashboardStore = useSnapshot(DashboardStore);

  const { data: { getUserMealsGroupedCountAdmin } = {} } = useGqlQuery(
    GET_USER_MEALS_GROUPED_COUNT_ADMIN,
    {
      data: {
        dateFrom: dayjs(dashboardStore.daysThatWeek.at(0)).toISOString(),
        dateTo: dayjs(dashboardStore.daysThatWeek.at(-1)).toISOString(),
        mealBoardPlanId: Number(dashboardStore.activeMealBoardPlan?.id),
      },
    },
    { enabled: !!dashboardStore.activeMealBoardPlan },
  );

  return (
    <>
      <MenuPagination />
      <main className="mt-5 w-full max-w-3xl rounded-lg bg-default-50 p-5">
        <Table className="mt-5" isStriped>
          <TableHeader>
            <TableColumn>{t("DATE")}</TableColumn>
            <TableColumn>{t("MEAL")}</TableColumn>
            <TableColumn>{t("COUNT")}</TableColumn>
          </TableHeader>
          <TableBody>
            {(getUserMealsGroupedCountAdmin || []).map((userMeal) => {
              return (
                <TableRow key={userMeal.meal + userMeal.date}>
                  <TableCell>
                    {dayjs(userMeal.date).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>{userMeal.meal}</TableCell>
                  <TableCell>{userMeal.count}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </main>
    </>
  );
}
