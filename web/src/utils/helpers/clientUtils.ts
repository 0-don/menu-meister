import { GeneralStore } from "@/store/GeneralStore";
import { TadaDocumentNode, graphql } from "gql.tada";
import { ExecutableDefinitionNode } from "graphql";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";
import { UserRoleName } from "../types/enum";

export const uid = () =>
  Math.random().toString(36).substring(2).replace(/[0-9]/g, "");

export const getKey = <TData = any, TVariables = unknown>(
  document: TadaDocumentNode<TData, TVariables>,
) => [
  (document?.definitions?.[0] as ExecutableDefinitionNode)?.name?.value || "",
];


export function useIsSSR(): boolean {
  const IsSSRContext = React.createContext(false);

  function subscribe(onStoreChange: () => void): () => void {
    // noop
    return () => {};
  }

  function getSnapshot() {
    return false;
  }

  function getServerSnapshot() {
    return true;
  }
  if (typeof React["useSyncExternalStore"] === "function") {
    return React["useSyncExternalStore"](
      subscribe,
      getSnapshot,
      getServerSnapshot,
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useContext(IsSSRContext);
}

export function classNames(
  ...classes: (string | undefined | null | false | { [key: string]: any })[]
): string {
  return classes
    .flatMap((c) => {
      if (typeof c === "string") {
        return c;
      } else if (c instanceof Object) {
        return Object.entries(c)
          .filter(([_, value]) => value)
          .map(([key, _]) => key);
      }
      return [];
    })
    .join(" ");
}

export const getMenu = (
  roles: ReturnType<typeof graphql.scalar<"UserRoleName">>[],
) =>
  [
    {
      link: "/",
      name: "HOME",
      display:
        !roles.includes(UserRoleName.Admin) &&
        !roles.includes(UserRoleName.Mod) &&
        !roles.includes(UserRoleName.User),
    },
    {
      link: "/about",
      name: "ABOUT",
      display:
        !roles.includes(UserRoleName.Admin) &&
        !roles.includes(UserRoleName.Mod) &&
        !roles.includes(UserRoleName.User),
    },
    {
      link: "/dashboard",
      name: "DASHBOARD",
      display:
        roles.includes(UserRoleName.Admin) || roles.includes(UserRoleName.Mod),
    },
    {
      link: "/orders",
      name: "ORDERS",
      display:
        roles.includes(UserRoleName.Admin) || roles.includes(UserRoleName.Mod),
    },
    {
      link: "/menu",
      name: "MENU",
      display:
        roles.includes(UserRoleName.Admin) ||
        roles.includes(UserRoleName.Mod) ||
        roles.includes(UserRoleName.User),
    },
    {
      link: "/users",
      name: "USERS",
      display:
        roles.includes(UserRoleName.Admin) || roles.includes(UserRoleName.Mod),
    },
  ].filter((link) => link.display);

export const catchErrorAlerts = (
  err: unknown,
  t?: ReturnType<typeof useTranslations>,
) => {
  const msgs = JSON.parse((err as Error).message) as string[];

  for (const msg of msgs) {
    GeneralStore.addAlert({
      msg: t ? t(msg as any) : msg,
      type: "failure",
    });
  }
};
