"use client";

import { LOGOUT } from "@/documents/mutation/auth";
import { useGqlMutation } from "@/fetcher";
import { useRouter } from "@/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();
  const { mutateAsync: logoutAsync } = useGqlMutation(LOGOUT);

  useEffect(() => {
    const logout = async () => {
      await logoutAsync({});
      router.push("/");
    };
    logout();
  }, []);

  return <></>;
}
