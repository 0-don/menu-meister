import { UserRoleName } from "@/gql/graphql";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies, headers } from "next/headers";
import { ROLES, TOKEN, X_URL } from "../constants";
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

export const prefetchQuery = async (
  documents: {
    document: TypedDocumentNode<any, any>;
    variables?: any;
  }[],
) => {
  const queryClient = new QueryClient();
  // const queryClient = getQueryClient();
  const authorization = ssrHeaders();

  const promises = documents.map(({ document, variables }) =>
    customFetcherServer(document, variables, authorization)
      .then((res) => queryClient.setQueryData(getKey(document), res))
      .catch((_) => {}),
  );

  await Promise.all(promises);

  return { state: dehydrate(queryClient), queryClient };
};
