import { GET_USER_MEALS_GROUPED_COUNT_ADMIN } from "@/documents/query/orders";
import { useGqlQuery } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
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
import React from "react";
import { useSnapshot } from "valtio";

interface OrdersGroupedCountProps {}

export const OrdersGroupedCount: React.FC<OrdersGroupedCountProps> = ({}) => {
  const t = useTranslations<"Orders">();
  const dashboardStore = useSnapshot(DashboardStore);

  const { data: { getUserMealsGroupedCountAdmin } = {} } = useGqlQuery(
    GET_USER_MEALS_GROUPED_COUNT_ADMIN,
    {
      data: {
        dateFrom: dayjs(dashboardStore.daysThatWeek.at(0))
          .add(1, "day")
          .toISOString(),
        dateTo: dayjs(dashboardStore.daysThatWeek.at(-1))
          .add(1, "day")
          .toISOString(),
        mealBoardPlanId: Number(dashboardStore.activeMealBoardPlan?.id),
      },
    },
    {
      enabled: !!dashboardStore.activeMealBoardPlan?.id && dashboardStore.init,
    },
  );

  return (
    <>
      <h2 className="text-xl font-bold">{t("ORDERED_MEALS_FOR_THE_WEEK")}</h2>
      <Table className="mt-2" isStriped>
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
    </>
  );
};
