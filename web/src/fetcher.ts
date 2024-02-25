import {
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { TadaDocumentNode, initGraphQLTada } from "gql.tada";
import { print } from "graphql";
import type { introspection } from "./graphql-env.d.ts";
import { getKey } from "./utils/helpers/clientUtils";

export const gql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    DateTime: string;
    JSON: any;
  };
}>();

export const useGqlQuery = <
  TData = any,
  TVariables = unknown,
  TError = unknown,
>(
  document: TadaDocumentNode<TData, TVariables>,
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
  document: TadaDocumentNode<TData, TVariables>,
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
  document: TadaDocumentNode<TData, TVariables>,
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
  document: TadaDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: RequestInit["headers"],
  withHeaders: T = false as T,
): (() => T extends false
  ? Promise<TData>
  : Promise<{ data: TData; headers: Headers }>) => {
  return async () => {
    let body: FormData | string;
    const isFileUpload = Object.values(variables || {}).some(
      (v) => v instanceof File || v instanceof Blob,
    );

    if (isFileUpload) {
      const formData = new FormData();
      const fileMap: Record<string, string[]> = {};
      let fileIndex = 0;

      Object.entries(variables || {}).forEach(([key, value]) => {
        // Check if the value is an array
        if (Array.isArray(value)) {
          // Iterate over each item in the array
          value.forEach((item, index) => {
            if (item instanceof File || item instanceof Blob) {
              // Append file to formData and update fileMap for files
              formData.append(fileIndex.toString(), item);
              fileMap[fileIndex.toString()] = [`variables.${key}.${index}`];
              fileIndex++;
            } else {
              // Append non-file array items as JSON strings
              formData.append(`${key}[${index}]`, JSON.stringify(item));
            }
          });
        } else if (value instanceof File || value instanceof Blob) {
          // Handle a single file
          formData.append(fileIndex.toString(), value);
          fileMap[fileIndex.toString()] = [`variables.${key}`];
          fileIndex++;
        } else {
          // Append other types of non-file, non-array values as JSON strings
          formData.append(key, JSON.stringify(value));
        }
      });

      formData.append(
        "operations",
        JSON.stringify({ query: print(document), variables }),
      );
      formData.append("map", JSON.stringify(fileMap));

      body = formData;
    } else {
      body = JSON.stringify({ query: print(document), variables });
    }

    const headers: RequestInit["headers"] = isFileUpload
      ? options
      : { ...options, "Content-Type": "application/json" };
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
      method: "POST",
      credentials: "include",
      headers,
      body,
    });

    const json = await res.json();

    if (json.errors) {
      throw new Error(
        JSON.stringify(json.errors.map((e: any) => e.message).flat()),
      );
    }

    return withHeaders ? { data: json.data, headers: res.headers } : json.data;
  };
};
