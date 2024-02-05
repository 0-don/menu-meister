"use client";
import {
  CREATE_USER_MEAL_LOCATION_USER,
  DELETE_USER_MEAL_LOCATION_USER,
  UPDATE_USER_ALLERGENS_USER,
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

  const { mutateAsync: updateUserAllergens } = useGqlMutation(
    UPDATE_USER_ALLERGENS_USER,
  );
  const { mutateAsync: createUserMealLocation } = useGqlMutation(
    CREATE_USER_MEAL_LOCATION_USER,
  );
  const { mutateAsync: deleteUserMealLocation } = useGqlMutation(
    DELETE_USER_MEAL_LOCATION_USER,
  );

  const isHighRank = me?.userRole?.some(
    (role) =>
      role.name === UserRoleName.Admin || role.name === UserRoleName.Mod,
  );

  const isOrderMenu = pathname.includes("menu");

  return {
    me,
    refetchMe: refetch,
    isHighRank,
    isOrderMenu,
    updateUserAllergens,
    createUserMealLocation,
    deleteUserMealLocation,
  };
};
