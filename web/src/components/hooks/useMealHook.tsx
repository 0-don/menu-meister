"use client";
import { GET_ALL_MEALS_USER } from "@/documents/query/dashboard";
import { customFetcher } from "@/fetcher";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQuery } from "@tanstack/react-query";
import { ResultOf } from "gql.tada";

export const useMealHook = () => {
  const { data: { getAllMealsUser } = {}, refetch: refetchMeals } = useQuery<
    ResultOf<typeof GET_ALL_MEALS_USER>
  >({
    queryKey: getKey(GET_ALL_MEALS_USER),
    enabled: false,
    queryFn: customFetcher(GET_ALL_MEALS_USER),
  });

  return { meals: getAllMealsUser };
};
