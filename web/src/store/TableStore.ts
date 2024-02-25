"use client";
import { type WEEKLY_MEAL_GROUP_FRAGMENT } from "@/documents/fragments/dashboard";
import { GET_ALL_WEEKLY_MEAL_GROUPS_USER } from "@/documents/query/dashboard";
import { GET_ALL_USER_MEALS_USER } from "@/documents/query/menu";
import { Meal, WeekDay } from "@/utils/types";
import { Active, UniqueIdentifier } from "@dnd-kit/core";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { FragmentOf, ResultOf } from "gql.tada";

import { proxy } from "valtio";

export const TableStore = proxy({
  orderedMeals: [] as ResultOf<
    typeof GET_ALL_USER_MEALS_USER
  >["getAllUserMealsUser"],
  active: undefined as Active | undefined,
  data: [] as FragmentOf<typeof WEEKLY_MEAL_GROUP_FRAGMENT>[],
  get dataSorted() {
    return (TableStore.data || []).sort((a, b) => a.orderIndex - b.orderIndex);
  },
  getGroup: (id: UniqueIdentifier) =>
    TableStore.data?.find((group) => group.id === id),

  getGroupMeal: (id: UniqueIdentifier, day: WeekDay): Meal | undefined =>
    TableStore.data?.find((group) => group.id === id)?.[`${day}Meal`] as Meal,

  refetchWeeklyMealGroups: (() => {}) as (
    options?: RefetchOptions | undefined,
  ) => Promise<
    QueryObserverResult<
      ResultOf<typeof GET_ALL_WEEKLY_MEAL_GROUPS_USER>,
      unknown
    >
  >,
});
