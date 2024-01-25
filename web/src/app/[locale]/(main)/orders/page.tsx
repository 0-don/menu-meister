"use client";

import { useMealHook } from "@/components/hooks/useMealHook";
import { MenuPagination } from "@/components/pages/dashboard/utils/MenuPagination";
import { GET_USER_MEALS_GROUPED_ADMIN } from "@/documents/query/orders";
import { useGqlQuery } from "@/fetcher";
import { UserMealScalarFieldEnum } from "@/gql/graphql";
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
  const t = useTranslations<"Dashboard">();
  const dashboardStore = useSnapshot(DashboardStore);
  const { meals } = useMealHook();

  const { data: { getUserMealsGroupedAdmin } = {} } = useGqlQuery(
    GET_USER_MEALS_GROUPED_ADMIN,
    {
      where: {
        mealBoardPlanId: { equals: dashboardStore.activeMealBoardPlan?.id },
        date: {
          gte: dashboardStore.daysThatWeek.at(0),
          lte: dashboardStore.daysThatWeek.at(-1),
        },
      },
      by: [UserMealScalarFieldEnum.Date, UserMealScalarFieldEnum.MealId],
      count: { mealId: true },
    },
    { enabled: !!dashboardStore.activeMealBoardPlan },
  );

  return (
    <>
      <MenuPagination />
      <div className="container mx-auto">
        <Table aria-label="Example static collection table" className="mt-5">
          <TableHeader>
            <TableColumn>{t("DATE")}</TableColumn>
            <TableColumn>{t("MEAL")}</TableColumn>
            <TableColumn>{t("COUNT")}</TableColumn>
          </TableHeader>
          <TableBody>
            {(getUserMealsGroupedAdmin || []).map((userMeal) => {
              const meal = meals?.find((meal) => meal.id === userMeal.mealId);
              return (
                <TableRow key="1">
                  <TableCell>
                    {dayjs(userMeal.date).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>{meal?.name}</TableCell>
                  <TableCell>{userMeal._count?.mealId}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
