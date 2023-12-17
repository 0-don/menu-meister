"use client";

import { LoginUserMutation, RegisterUserMutation } from "@/gql/graphql";
import { useRouter } from "@/navigation";
import { catchErrorAlerts } from "@/utils/helpers/clientHelpers";
import { FaRegEye } from "@react-icons/all-files/fa/FaRegEye";
import { FaRegEyeSlash } from "@react-icons/all-files/fa/FaRegEyeSlash";
import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { FormEvent, HTMLInputTypeAttribute, useEffect } from "react";
import { proxy, useSnapshot } from "valtio";
import { GeneralStore } from "./GeneralStore";

export type AuthStore = typeof AuthStore;

export const AuthStore = proxy({
  email: process.env.NODE_ENV === "development" ? "admin" : "",
  password: process.env.NODE_ENV === "development" ? "!admin" : "",
  passwordInputType: "password" as HTMLInputTypeAttribute,
  confirmPassword: "",
  displayPassword: false,
  toggleDisplayPassword: () =>
    (AuthStore.displayPassword = !AuthStore.displayPassword),
  register: async (
    e: FormEvent,
    mutateAsync: UseMutateAsyncFunction<RegisterUserMutation, any, any>,
    t: ReturnType<typeof useTranslations<"Auth">>,
    router: ReturnType<typeof useRouter>,
  ) => {
    e.preventDefault();
    const { addAlert } = GeneralStore;

    try {
      const { registerUser } = await mutateAsync({
        data: {
          username: AuthStore.email,
          password: AuthStore.password,
        },
      });

      if (!registerUser)
        return addAlert({
          msg: t("SOMETHING_WENT_WRONG") as string,
          type: "failure",
        });

      if (registerUser.id) {
        addAlert({
          msg: t("ACCOUNT_CREATED") as string,
          type: "success",
        });
        router.push("/");
      }
    } catch (err) {
      catchErrorAlerts(err, t);
    }
  },
  login: async (
    e: FormEvent,
    mutateAsync: UseMutateAsyncFunction<LoginUserMutation, any, any>,
    t: ReturnType<typeof useTranslations<"Auth">>,
    router: ReturnType<typeof useRouter>,
  ) => {
    e.preventDefault();

    const { addAlert } = GeneralStore;

    try {
      const { loginUser } = await mutateAsync({
        data: {
          username: AuthStore.email,
          password: AuthStore.password,
        },
      });

      if (!loginUser)
        return addAlert({
          msg: t("SOMETHING_WENT_WRONG") as string,
          type: "failure",
        });

      if (loginUser.id) {
        addAlert({
          msg: t("ACCOUNT_LOGGED_IN") as string,
          type: "success",
        });
        router.push("/");
      } else {
        addAlert({
          msg: t("ACCOUNT_NOT_FOUND") as string,
          type: "failure",
        });
      }
    } catch (error) {
      catchErrorAlerts(error);
    }
  },
});

export const DisplayPassword = () => {
  const authStore = useSnapshot(AuthStore);

  useEffect(() => {
    AuthStore.passwordInputType = authStore.displayPassword
      ? "text"
      : "password";
  }, [authStore.displayPassword]);

  return authStore.displayPassword ? (
    <FaRegEyeSlash
      className="cursor-pointer"
      onClick={AuthStore.toggleDisplayPassword}
    />
  ) : (
    <FaRegEye
      className="cursor-pointer"
      onClick={AuthStore.toggleDisplayPassword}
    />
  );
};
