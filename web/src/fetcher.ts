import { type TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { print } from "graphql";
import { getKey } from "./utils/helpers/clientHelpers";

export const useGqlQuery = <
  TData = any,
  TVariables = unknown,
  TError = unknown,
>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: Omit<UseQueryOptions<TData, TError, TData>, "queryKey">,
) =>
  useQuery<TData, TError, TData>({
    ...options,
    queryKey: [...getKey(document), variables],
    queryFn: customFetcher(document, variables),
  });

export const useGqlMutation = <
  TData = any,
  TVariables = unknown,
  TError = unknown,
  TContext = unknown,
>(
  document: TypedDocumentNode<TData, TVariables>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    "mutationKey"
  >,
) =>
  useMutation<TData, TError, TVariables, TContext>({
    ...options,
    mutationKey: getKey(document),
    mutationFn: (variables) => customFetcher(document, variables)(),
  });

export const useGqlInfinite = <
  TData = any,
  TVariables = unknown,
  TError = unknown,
>(
  document: TypedDocumentNode<TData, TVariables>,
  variables: TVariables,
  options?: Omit<
    UseInfiniteQueryOptions<TData, TError, TData>,
    "queryKey" | "queryFn" | "initialPageParam"
  >,
) =>
  useInfiniteQuery<TData, TError, TData>({
    queryKey: [`${getKey(document).join("")}.infinite`, variables],
    queryFn: ({ pageParam }: any) =>
      customFetcher<TData, TVariables>(document, {
        ...variables,
        ...(pageParam ?? {}),
      })(),
    initialPageParam: undefined,
    ...(options as any),
  });

export const customFetcher = <TData, TVariables, T extends boolean = false>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: RequestInit["headers"],
  withHeaders: T = false as T,
): (() => T extends false
  ? Promise<TData>
  : Promise<{ data: TData; headers: Headers }>) => {
  return async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
      method: "POST",
      credentials: "include",
      headers: {
        ...options,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: print(document),
        variables,
      }),
    });

    const json = await res.json();
    if (json.errors) {
      const errorText = JSON.stringify(
        json.errors
          .map((e: { message: string | string[] }) => e.message)
          .flat(),
      );
      throw new Error(errorText);
    }

    return withHeaders ? { data: json.data, headers: res.headers } : json.data;
  };
};
