import { GeneralStore } from "@/store/GeneralStore";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DirectiveDefinitionNode } from "graphql";
import { useTranslations } from "next-intl";

export const classNames = (
  ...classes: (boolean | string | null | undefined)[]
) => classes.filter(Boolean).join(" ");

export const uid = () =>
  Math.random().toString(36).substring(2).replace(/[0-9]/g, "");

export const getKey = <TData = any, TVariables = unknown>(
  document: TypedDocumentNode<TData, TVariables>,
) => [(document?.definitions?.[0] as DirectiveDefinitionNode)?.name?.value];

export const catchErrorAlerts = (
  err: unknown,
  t?: ReturnType<typeof useTranslations>,
) => {
  const msgs = JSON.parse((err as Error).message) as string[];

  // console.clear();

  for (const msg of msgs) {
    GeneralStore.addAlert({
      msg: t ? t(msg as any) : msg,
      type: "failure",
    });
  }
};
