import { GET_USER_MEALS_GROUPED_USERS_ADMIN } from "@/documents/query/orders";
import { useGqlQuery } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React from "react";
import { useSnapshot } from "valtio";

interface OrdersGroupedUsersProps {}

export const OrdersGroupedUsers: React.FC<OrdersGroupedUsersProps> = ({}) => {
  const t = useTranslations<"Orders">();
  const dashboardStore = useSnapshot(DashboardStore);

  const { data: { getUserMealsGroupedUsersAdmin } = {} } = useGqlQuery(
    GET_USER_MEALS_GROUPED_USERS_ADMIN,
    {
      data: {
        date: dayjs(dashboardStore.daysThatWeek.at(0)).toISOString(),
        mealBoardPlanId: Number(dashboardStore.activeMealBoardPlan?.id),
      },
    },
    { enabled: !!dashboardStore.activeMealBoardPlan?.id },
  );

  return (
    <>
      <h2 className="text-xl font-bold mt-2">{t("ALL_ORDERED_MEALS_BY_USERS")}</h2>
    </>
  );
};
