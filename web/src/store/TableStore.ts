"use client";

import { GetAllWeeklyMealGroupsAdminQuery, Meal } from "@/gql/graphql";
import { WeekDay } from "@/utils/types";
import { Active, UniqueIdentifier } from "@dnd-kit/core";
import { proxy } from "valtio";

const TableStore = proxy({
  active: undefined as Active | undefined,
  data: undefined as GetAllWeeklyMealGroupsAdminQuery["getAllWeeklyMealGroupsAdmin"],
  get dataSorted() {
    return (TableStore.data || []).sort((a, b) => a.orderIndex - b.orderIndex);
  },
  getGroup: (id: UniqueIdentifier) =>
    TableStore.data?.find((group) => group.id === id),

  getGroupMeal: (id: UniqueIdentifier, day: WeekDay): Meal | undefined =>
    TableStore.data?.find((group) => group.id === id)?.[`${day}Meal`] as Meal,
});

export default TableStore;
