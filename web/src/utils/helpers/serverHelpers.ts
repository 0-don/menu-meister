"use server";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { dehydrate } from "@tanstack/react-query";
import { print } from "graphql";
import { cookies, headers } from "next/headers";
import fs from "node:fs";
import { BACKEND_INTERNAL_URL, TOKEN, X_URL } from "../constants";
import getQueryClient from "../getQueryClient";
import { getKey } from "./clientHelpers";

export const ssrUrl = (): URL =>
  new URL(headers().get(X_URL) || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);

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
  const queryClient = getQueryClient();
  const authorization = ssrHeaders();

  const promises = documents.map(({ document, variables }) =>
    customFetcherServer(document, variables, authorization)
      .then((res) => queryClient.setQueryData(getKey(document), res))
      .catch((_) => {}),
  );

  await Promise.all(promises);

  return { state: dehydrate(queryClient), queryClient };
};

export const customFetcherServer = async <
  TData,
  TVariables,
  T extends boolean = false,
>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: RequestInit["headers"],
  withHeaders: T = false as T,
): Promise<T extends false ? TData : { data: TData; headers: Headers }> => {
  const res = await fetch(
    isDocker()
      ? BACKEND_INTERNAL_URL
      : process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
        ...options,
      },
      cache: "no-store",
      body: JSON.stringify({
        query: print(document),
        variables,
      }),
    },
  );

  const json = await res.json();
  if (json.errors) {
    const errorText = JSON.stringify(
      json.errors.map((e: { message: string | string[] }) => e.message).flat(),
    );
    throw new Error(errorText);
  }
  return withHeaders ? { data: json.data, headers: res.headers } : json.data;
};

export function isDocker() {
  let isDockerCached: boolean | undefined;

  function hasDockerEnv() {
    try {
      fs.statSync("/.dockerenv");
      return true;
    } catch {
      return false;
    }
  }

  function hasDockerCGroup() {
    try {
      return fs.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
    } catch {
      return false;
    }
  }

  if (isDockerCached === undefined) {
    isDockerCached = hasDockerEnv() || hasDockerCGroup();
  }

  return isDockerCached;
}
