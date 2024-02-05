"use client";

import {
  GetAllUserMealsAdminQuery,
  GetAllWeeklyMealGroupsUserQuery,
  Meal,
  TimeOfDay,
  WeeklyMealGroupFragmentFragment,
} from "@/gql/graphql";
import { WeekDay } from "@/utils/types";
import { Active, UniqueIdentifier } from "@dnd-kit/core";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { LuClock10, LuClock12, LuClock2, LuClock6 } from "react-icons/lu";
import { TbCalendarTime } from "react-icons/tb";
import { proxy } from "valtio";

export const TableStore = proxy({
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

export const TIME_OF_DAY_CONFIGS = [
  {
    time: TimeOfDay.Any,
    icon: TbCalendarTime,
    translationKey: TimeOfDay.Any.toUpperCase(),
  },
  {
    time: TimeOfDay.Morning,
    icon: LuClock6,
    translationKey: TimeOfDay.Morning.toUpperCase(),
  },
  {
    time: TimeOfDay.Forenoon,
    icon: LuClock10,
    translationKey: TimeOfDay.Forenoon.toUpperCase(),
  },
  {
    time: TimeOfDay.Noon,
    icon: LuClock12,
    translationKey: TimeOfDay.Noon.toUpperCase(),
  },
  {
    time: TimeOfDay.Afternoon,
    icon: LuClock2,
    translationKey: TimeOfDay.Afternoon.toUpperCase(),
  },
  {
    time: TimeOfDay.Evening,
    icon: LuClock6,
    translationKey: TimeOfDay.Evening.toUpperCase(),
  },
  {
    time: TimeOfDay.Night,
    icon: LuClock12,
    translationKey: TimeOfDay.Night.toUpperCase(),
  },
];
