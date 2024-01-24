"use client";

import {
  GetAllUserMealsAdminQuery,
  GetAllWeeklyMealGroupsUserQuery,
  Meal,
  WeeklyMealGroupFragmentFragment,
} from "@/gql/graphql";
import { WeekDay } from "@/utils/types";
import { Active, UniqueIdentifier } from "@dnd-kit/core";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { proxy } from "valtio";

const TableStore = proxy({
  orderedMeals: [] as GetAllUserMealsAdminQuery["getAllUserMealsAdmin"],
  active: undefined as Active | undefined,
  data: [] as WeeklyMealGroupFragmentFragment[],
  get dataSorted() {
    return (TableStore.data || []).sort((a, b) => a.orderIndex - b.orderIndex);
  },
  getGroup: (id: UniqueIdentifier) =>
    TableStore.data?.find((group) => group.id === id),

  getGroupMeal: (id: UniqueIdentifier, day: WeekDay): Meal | undefined =>
    TableStore.data?.find((group) => group.id === id)?.[`${day}Meal`] as Meal,

  refetchWeeklyMealGroups: (() => {}) as (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<GetAllWeeklyMealGroupsUserQuery, unknown>>,
});

export default TableStore;
