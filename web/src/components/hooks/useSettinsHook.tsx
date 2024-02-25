"use client";
import { GET_SETTINGS_USER } from "@/documents/query/settings";
import { customFetcher } from "@/fetcher";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQuery } from "@tanstack/react-query";
import { ResultOf } from "gql.tada";

export const useSettingsHook = () => {
  const { data: { getSettingsUser } = {}, refetch: refetchSettings } = useQuery<
    ResultOf<typeof GET_SETTINGS_USER>
  >({
    queryKey: getKey(GET_SETTINGS_USER),
    enabled: false,
    queryFn: customFetcher(GET_SETTINGS_USER),
  });

  return { settings: getSettingsUser };
};
