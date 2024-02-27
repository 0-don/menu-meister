"use client";

import { GET_ALL_USERS_ADMIN } from "@/documents/query/user";
import { useGqlQuery } from "@/fetcher";

export const useUsersHook = () => {
  const { data: { getAllUsersAdmin } = {}, refetch: refetchAllUsers } =
    useGqlQuery(GET_ALL_USERS_ADMIN, {
      orderBy: [{ id: "asc" }],
    });

  return { allUsers: getAllUsersAdmin || [], refetchAllUsers };
};
