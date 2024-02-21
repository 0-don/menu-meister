"use client";

import {
  CREATE_USER_MEAL_LOCATION_ADMIN,
  DELETE_USER_MEAL_LOCATION_ADMIN,
  UPDATE_USER_ADMIN,
} from "@/documents/mutation/user";
import { ME } from "@/documents/query/auth";
import { customFetcher, useGqlMutation } from "@/fetcher";
import { MeQuery, UserRoleName } from "@/gql/graphql";
import { usePathname } from "@/navigation";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQuery } from "@tanstack/react-query";

export const useMeHook = () => {
  const pathname = usePathname();

  const { data: { me } = {}, refetch } = useQuery<MeQuery>({
    queryKey: getKey(ME),
    enabled: false,
    queryFn: customFetcher(ME),
  });

  const { mutateAsync: updateUser } = useGqlMutation(UPDATE_USER_ADMIN);
  const { mutateAsync: createUserMealLocation } = useGqlMutation(
    CREATE_USER_MEAL_LOCATION_ADMIN,
  );
  const { mutateAsync: deleteUserMealLocation } = useGqlMutation(
    DELETE_USER_MEAL_LOCATION_ADMIN,
  );

  const isHighRank = me?.userRole?.some(
    (role) =>
      role.name === UserRoleName.Admin || role.name === UserRoleName.Mod,
  );

  const isOrderMenu = pathname.includes("menu");

  const meAllergens = me?.allergens?.map((a) => a.name) || [];

  return {
    me,
    refetchMe: refetch,
    isHighRank,
    isOrderMenu,
    updateUser,
    createUserMealLocation,
    deleteUserMealLocation,
    meAllergens,
  };
};
