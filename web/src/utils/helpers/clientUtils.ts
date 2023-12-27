import { UserRoleName } from "@/gql/graphql";
import { GeneralStore } from "@/store/GeneralStore";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DirectiveDefinitionNode } from "graphql";
import { useTranslations } from "next-intl";
import {
  Quote,
  QuoteMap,
  ReorderQuoteMapArgs,
  ReorderQuoteMapResult,
} from "../types";

export const uid = () =>
  Math.random().toString(36).substring(2).replace(/[0-9]/g, "");

export const getKey = <TData = any, TVariables = unknown>(
  document: TypedDocumentNode<TData, TVariables>,
) => [(document?.definitions?.[0] as DirectiveDefinitionNode)?.name?.value];

export const getMenu = (roles: UserRoleName[]) =>
  [
    { link: "/", name: "HOME" },
    {
      link: "/about",
      name: "ABOUT",
      display:
        roles.includes(UserRoleName.Admin) || roles.includes(UserRoleName.Mod),
    },
  ].filter((link) => !link.display);

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

export function reorder<TItem>(
  list: TItem[],
  startIndex: number,
  endIndex: number,
): TItem[] {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const reorderQuoteMap = ({
  quoteMap,
  source,
  destination,
}: ReorderQuoteMapArgs): ReorderQuoteMapResult => {
  const current: Quote[] = [...quoteMap[source.droppableId]];
  const next: Quote[] = [...quoteMap[destination.droppableId]];
  const target: Quote = current[source.index];

  if (source.droppableId === destination.droppableId) {
    const reordered: Quote[] = reorder(
      current,
      source.index,
      destination.index,
    );
    const result: QuoteMap = {
      ...quoteMap,
      [source.droppableId]: reordered,
    };
    return {
      quoteMap: result,
    };
  }

  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);

  const result: QuoteMap = {
    ...quoteMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };

  return {
    quoteMap: result,
  };
};
