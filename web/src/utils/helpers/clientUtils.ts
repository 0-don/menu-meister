import { UserRoleName } from "@/gql/graphql";
import { GeneralStore } from "@/store/GeneralStore";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DirectiveDefinitionNode } from "graphql";
import { useTranslations } from "next-intl";

export const uid = () =>
  Math.random().toString(36).substring(2).replace(/[0-9]/g, "");

export const getKey = <TData = any, TVariables = unknown>(
  document: TypedDocumentNode<TData, TVariables>,
) => [(document?.definitions?.[0] as DirectiveDefinitionNode)?.name?.value];

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

export const getMenu = (roles: UserRoleName[]) =>
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
      link: "/menu",
      name: "MENU",
      display:
        roles.includes(UserRoleName.Admin) ||
        roles.includes(UserRoleName.Mod) ||
        roles.includes(UserRoleName.User),
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
