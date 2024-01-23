"use client"
import { GET_ALL_MEAL_BOARD_PLANS_USER } from "@/documents/query/dashboard";
import { customFetcher } from "@/fetcher";
import { GetAllMealBoardPlansUserQuery } from "@/gql/graphql";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQuery } from "@tanstack/react-query";

export const useMealBoardPlanHook = () => {
  const { data: { getAllMealBoardPlansUser } = {}, refetch } =
    useQuery<GetAllMealBoardPlansUserQuery>({
      queryKey: getKey(GET_ALL_MEAL_BOARD_PLANS_USER),
      enabled: false,
      queryFn: customFetcher(GET_ALL_MEAL_BOARD_PLANS_USER),
    });

  return { mealBoardPlans: getAllMealBoardPlansUser };
};
