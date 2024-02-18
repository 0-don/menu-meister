"use client";
import { GET_ALL_MEALS_USER } from "@/documents/query/dashboard";
import { customFetcher } from "@/fetcher";
import { GetAllMealsUserQuery } from "@/gql/graphql";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQuery } from "@tanstack/react-query";

export const useMealHook = () => {
  const { data: { getAllMealsUser } = {}, refetch: refetchMeals } =
    useQuery<GetAllMealsUserQuery>({
      queryKey: getKey(GET_ALL_MEALS_USER),
      enabled: false,
      queryFn: customFetcher(GET_ALL_MEALS_USER),
    });

  return { meals: getAllMealsUser };
};
