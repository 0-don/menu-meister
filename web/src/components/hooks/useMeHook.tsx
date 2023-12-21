import { ME } from "@/documents/query/auth";
import { customFetcher } from "@/fetcher";
import { MeQuery } from "@/gql/graphql";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQuery } from "@tanstack/react-query";

export const useMeHook = () => {
  const { data: { me } = {}, refetch } = useQuery<MeQuery>({
    queryKey: getKey(ME),
    enabled: true,
    queryFn: customFetcher(ME),
  });

  return { me, refetchMe: refetch };
};
