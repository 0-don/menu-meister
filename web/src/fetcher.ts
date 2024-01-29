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
import { getKey } from "./utils/helpers/clientUtils";

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
    let body;
    let isFileUpload = false;

    // Check if any variable is a file
    if (variables) {
      for (const key in variables) {
        if (variables[key] instanceof File || variables[key] instanceof Blob) {
          isFileUpload = true;
          break;
        }
      }
    }

    if (isFileUpload) {
      const formData = new FormData();
      const operations = {
        query: print(document),
        variables: { ...variables },
      };

      const map = {};
      let index = 0;
      for (const key in variables) {
        if (variables[key] instanceof File || variables[key] instanceof Blob) {
          formData.append(index.toString(), variables[key]);
          map[index.toString()] = [`variables.${key}`];
          operations.variables[key] = null;
          index++;
        }
      }

      formData.append("operations", JSON.stringify(operations));
      formData.append("map", JSON.stringify(map));

      body = formData;
    } else {
      body = JSON.stringify({
        query: print(document),
        variables,
      });
    }

    const headers: RequestInit["headers"] = isFileUpload ? options : {
      ...options,
      "Content-Type": "application/json",
    };

    const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
      method: "POST",
      credentials: "include",
      headers: headers,
      body: body,
    });

    const json = await response.json();
    if (json.errors) {
      throw new Error(json.errors.map((e: any) => e.message).join(', '));
    }

    return withHeaders ? { data: json.data, headers: response.headers } : json.data;
  };
};
