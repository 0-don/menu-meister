import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies, headers } from "next/headers";
import { ROLES, TOKEN } from "../constants";
import getQueryClient from "../getQueryClient";
import { getKey } from "./clientUtils";
import { customFetcherServer } from "./serverUtils";
import { UserRoleName } from "../types/enum";
import { TadaDocumentNode } from "gql.tada";

export const X_URL = "x-url";

export const ssrUrl = (): URL =>
  new URL(headers().get(X_URL) || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);

export const ssrGetRoles = (): UserRoleName[] =>
  (headers().get(ROLES)?.split(",") || []) as UserRoleName[];

export const ssrHeaders = (): HeadersInit => {
  const referer =
    headers().get("origin") ||
    headers().get("referer") ||
    new URL(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT).origin;
  const token = cookies().get(TOKEN)?.value;

  const authorization = token ? `Bearer ${token}` : "";

  return { authorization, referer };
};

type PrefetchItem<TData, TVariables> = {
  document: TadaDocumentNode<TData, TVariables>;
  variables?: TVariables;
};

export const prefetchQuery = async <T extends PrefetchItem<any, any>[]>(
  documents: T,
): Promise<{ state: DehydratedState; queryClient: QueryClient }> => {
  const queryClient = getQueryClient();
  const authorization = ssrHeaders();

  const promises = documents.map(({ document, variables }) =>
    queryClient.prefetchQuery({
      queryKey: getKey(document),
      queryFn: () => customFetcherServer(document, variables, authorization),
    }),
  );

  await Promise.all(promises);

  return { state: dehydrate(queryClient), queryClient };
};
