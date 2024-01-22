import { ME } from "@/documents/query/auth";
import { customFetcher } from "@/fetcher";
import { MeQuery, UserRoleName } from "@/gql/graphql";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQuery } from "@tanstack/react-query";

export const useMeHook = () => {
  const { data: { me } = {}, refetch } = useQuery<MeQuery>({
    queryKey: getKey(ME),
    enabled: false,
    queryFn: customFetcher(ME),
  });

  const isHighRank = me?.userRole?.some(
    (role) =>
      role.name === UserRoleName.Admin || role.name === UserRoleName.Mod,
  );

  return { me, refetchMe: refetch, isHighRank };
};
