"use client";
import { GET_ALL_MEAL_BOARD_PLANS_USER } from "@/documents/query/dashboard";
import { customFetcher } from "@/fetcher";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQuery } from "@tanstack/react-query";
import { ResultOf } from "gql.tada";

export const useMealBoardPlanHook = () => {
  const { data: { getAllMealBoardPlansUser } = {}, refetch } = useQuery<
    ResultOf<typeof GET_ALL_MEAL_BOARD_PLANS_USER>
  >({
    queryKey: getKey(GET_ALL_MEAL_BOARD_PLANS_USER),
    enabled: false,
    queryFn: customFetcher(GET_ALL_MEAL_BOARD_PLANS_USER),
  });

  return { mealBoardPlans: getAllMealBoardPlansUser };
};
