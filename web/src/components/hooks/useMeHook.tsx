"use client";

import {
  CREATE_USER_MEAL_LOCATION_ADMIN,
  DELETE_USER_MEAL_LOCATION_ADMIN,
  UPDATE_USER_ADMIN,
} from "@/documents/mutation/user";
import { ME } from "@/documents/query/auth";
import { customFetcher, useGqlMutation } from "@/fetcher";
import { usePathname } from "@/navigation";
import { getKey } from "@/utils/helpers/clientUtils";
import { UserRoleName } from "@/utils/types/enum";
import { useQuery } from "@tanstack/react-query";
import { ResultOf } from "gql.tada";

export const useMeHook = () => {
  const pathname = usePathname();

  const { data: { me } = {}, refetch } = useQuery<ResultOf<typeof ME>>({
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
