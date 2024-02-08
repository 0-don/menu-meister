import { GET_USER_MEALS_GROUPED_USERS_ADMIN } from "@/documents/query/orders";
import { useGqlQuery } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
import { TIME_OF_DAY_CONFIGS } from "@/utils/constants";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Tab,
  Tabs,
} from "@nextui-org/react";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React from "react";
import { useSnapshot } from "valtio";

interface OrdersGroupedUsersProps {}

export const OrdersGroupedUsers: React.FC<OrdersGroupedUsersProps> = ({}) => {
  const t = useTranslations<"Orders" | "Enums">();
  const dashboardStore = useSnapshot(DashboardStore);

  const { data: { getUserMealsGroupedUsersAdmin } = {} } = useGqlQuery(
    GET_USER_MEALS_GROUPED_USERS_ADMIN,
    {
      data: {
        date: dayjs(dashboardStore.daysThatWeek.at(0))
          .add(1, "day")
          .toISOString(),
        mealBoardPlanId: Number(dashboardStore.activeMealBoardPlan?.id),
      },
    },
    { enabled: !!dashboardStore.activeMealBoardPlan?.id },
  );

  return (
    <>
      <h2 className="my-2 text-xl font-bold">
        {t("ALL_ORDERED_MEALS_BY_USERS")}
      </h2>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="photos" title="Photos">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Music">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        {getUserMealsGroupedUsersAdmin?.map((user) => (
          <Card className="mb-5 md:min-w-[500px]" key={user.userId}>
            <CardHeader className="flex gap-3">
              <p className="text-md font-bold">
                {user.firstname} {user.lastname}
              </p>
            </CardHeader>
            <Divider />
            <CardBody>
              {user.meals.map(({ meal, mealId, mealLocation, timeOfDay }) => {
                const Icon = TIME_OF_DAY_CONFIGS.find(
                  (config) => config.time === timeOfDay,
                )!.icon;
                return (
                  <div key={mealId} className="flex space-x-2 text-sm">
                    <div className="flex items-center space-x-1 text-secondary-500">
                      <Icon />
                      <p>{t(timeOfDay)}</p>
                    </div>
                    <p className="text-default-500">{meal}</p>
                    <p className="text-primary">{t(mealLocation)}</p>
                  </div>
                );
              })}
            </CardBody>
            <Divider />
          </Card>
        ))}
      </div>
    </>
  );
};
