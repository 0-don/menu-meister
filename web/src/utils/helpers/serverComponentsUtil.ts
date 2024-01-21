import { UserRoleName } from "@/gql/graphql";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies, headers } from "next/headers";
import { ROLES, TOKEN, X_URL } from "../constants";
import getQueryClient from "../getQueryClient";
import { getKey } from "./clientUtils";
import { customFetcherServer } from "./serverUtils";

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
  document: TypedDocumentNode<TData, TVariables>;
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
