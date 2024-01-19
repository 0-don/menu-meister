"use client";

import { LOGOUT } from "@/documents/mutation/auth";
import { ME } from "@/documents/query/auth";
import { useGqlMutation } from "@/fetcher";
import { useRouter } from "@/navigation";
import getQueryClient from "@/utils/getQueryClient";
import { getKey } from "@/utils/helpers/clientUtils";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutateAsync: logoutAsync } = useGqlMutation(LOGOUT);

  useEffect(() => {
    const logout = async () => {
      await logoutAsync({});
      queryClient.removeQueries({ queryKey: getKey(ME) });
      // getQueryClient().resetQueries({ queryKey: getKey(ME) });
      router.push("/");
    };
    logout();
  }, []);

  return <></>;
}
