"use client";
import { GET_ALL_USER_MEALS_ADMIN } from "@/documents/query/dashboard";
import { GET_ALL_USER_MEALS_USER } from "@/documents/query/menu";
import { useGqlMutation, useGqlQuery } from "@/fetcher";
import { DashboardStore } from "@/store/DashboardStore";
import {
  CREATE_USER_MEAL_USER,
  DELETE_USER_MEAL_USER,
} from "@/store/hooks/menu";
import { useSnapshot } from "valtio";
import { useMeHook } from "./useMeHook";

export const useUserMealHook = () => {
  const dashboardStore = useSnapshot(DashboardStore);
  const { me, isOrderMenu } = useMeHook();

  const { data: { getAllUserMealsUser } = {}, refetch: refetchUserMealsUser } =
    useGqlQuery(
      GET_ALL_USER_MEALS_USER,
      {
        where: {
          userId: { equals: me?.id },
          mealBoardPlanId: { equals: dashboardStore.activeMealBoardPlan?.id },
          date: {
            gte: dashboardStore.daysThatWeek.at(0),
            lte: dashboardStore.daysThatWeek.at(-1),
          },
        },
      },
      { enabled: dashboardStore.activeMealBoardPlan && isOrderMenu },
    );

  const {
    data: { getAllUserMealsAdmin } = {},
    refetch: refetchUserMealsAdmin,
  } = useGqlQuery(
    GET_ALL_USER_MEALS_ADMIN,
    {
      where: {
        mealBoardPlanId: { equals: dashboardStore.activeMealBoardPlan?.id },
        date: {
          gte: dashboardStore.daysThatWeek.at(0),
          lte: dashboardStore.daysThatWeek.at(-1),
        },
      },
    },
    { enabled: dashboardStore.activeMealBoardPlan && !isOrderMenu },
  );

  const { mutateAsync: createUserMeal } = useGqlMutation(CREATE_USER_MEAL_USER);
  const { mutateAsync: deleteUserMeal } = useGqlMutation(DELETE_USER_MEAL_USER);

  return {
    userMealsUser: getAllUserMealsUser || [],
    userMealsAdmin: getAllUserMealsAdmin || [],
    refetchUserMealsAdmin,
    refetchUserMealsUser,
    createUserMeal,
    deleteUserMeal,
  };
};
