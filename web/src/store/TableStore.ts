"use client";

import {
  GetAllMealsAdminQuery,
  GetAllWeeklyMealGroupsAdminQuery,
  Meal,
} from "@/gql/graphql";
import { WeekDay } from "@/utils/types";
import { Active, UniqueIdentifier } from "@dnd-kit/core";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { proxy } from "valtio";

const TableStore = proxy({
  active: undefined as Active | undefined,
  data: undefined as GetAllWeeklyMealGroupsAdminQuery["getAllWeeklyMealGroupsAdmin"],
  meals: [] as GetAllMealsAdminQuery["getAllMealsAdmin"],
  get dataSorted() {
    return (TableStore.data || []).sort((a, b) => a.orderIndex - b.orderIndex);
  },
  get mealsSorted() {
    return (TableStore.meals || []).sort((a, b) => Number(a.id) - Number(b.id));
  },
  getGroup: (id: UniqueIdentifier) =>
    TableStore.data?.find((group) => group.id === id),

  getGroupMeal: (id: UniqueIdentifier, day: WeekDay): Meal | undefined =>
    TableStore.data?.find((group) => group.id === id)?.[`${day}Meal`] as Meal,

  refetchWeeklyMealGroups: (() => {}) as (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<GetAllWeeklyMealGroupsAdminQuery, unknown>>,
  refetchMeals: (() => {}) as (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<GetAllMealsAdminQuery, unknown>>,
});

export default TableStore;
