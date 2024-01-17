"use client";

import {
  GET_ALL_MEALS_ADMIN,
  GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN,
} from "@/documents/query/dashboard";
import { useGqlQuery } from "@/fetcher";
import { WeeklyMealGroupFragmentFragment } from "@/gql/graphql";
import DashboardStore from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { MyPopover } from "./elements/MyPopover";
import { TableContext } from "./table/TableContext";
interface DashboardPageProps {}

export function MainTable({}: DashboardPageProps) {
  const t = useTranslations<"Dashboard">();
  const dashboardStore = useSnapshot(DashboardStore);

  const {
    data: { getAllWeeklyMealGroupsAdmin } = {},
    refetch: refetchWeeklyMealGroups,
  } = useGqlQuery(GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN, {
    where: {
      year: { equals: dashboardStore.calendar.year },
      weekOfYear: { equals: dashboardStore.calendar.week },
    },
  });

  const { data: { getAllMealsAdmin } = {}, refetch: refetchMeals } =
    useGqlQuery(GET_ALL_MEALS_ADMIN);

  useEffect(() => {
    TableStore.data =
      getAllWeeklyMealGroupsAdmin as WeeklyMealGroupFragmentFragment[];
    TableStore.refetchWeeklyMealGroups = refetchWeeklyMealGroups;
  }, [getAllWeeklyMealGroupsAdmin]);

  useEffect(() => {
    TableStore.meals = getAllMealsAdmin;
    TableStore.refetchMeals = refetchMeals;
  }, [getAllMealsAdmin]);

  return (
    <>
      <TableContext />
      <MyPopover text="Add new row" Icon={FaRegPlusSquare} className="mt-5">
        <div className="flex justify-center">
          <button
            className="w-full rounded-lg bg-primary-500 p-2 text-white"
            onClick={() => {
              TableStore.refetchWeeklyMealGroups();
              TableStore.refetchMeals();
            }}
          >
            asdas
          </button>
        </div>
      </MyPopover>
      {/* <AddNewRow /> */}
    </>
  );
}
