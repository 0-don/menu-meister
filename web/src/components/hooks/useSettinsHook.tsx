"use client";
import { GET_SETTINGS_USER } from "@/documents/query/settings";
import { customFetcher } from "@/fetcher";
import { GetSettingsUserQuery } from "@/gql/graphql";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQuery } from "@tanstack/react-query";

export const useSettingsHook = () => {
  const { data: { getSettingsUser } = {}, refetch: refetchMeals } =
    useQuery<GetSettingsUserQuery>({
      queryKey: getKey(GET_SETTINGS_USER),
      enabled: false,
      queryFn: customFetcher(GET_SETTINGS_USER),
    });

  return { settings: getSettingsUser };
};
