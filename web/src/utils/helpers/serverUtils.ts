"use server";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import fs from "fs";
import { print } from "graphql";
import { BACKEND_INTERNAL_URL } from "../constants";

export const customFetcherServer = <
  TData,
  TVariables,
  T extends boolean = false,
>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: RequestInit["headers"],
  withHeaders: T = false as T,
): (() => T extends false
  ? Promise<TData>
  : Promise<{ data: TData; headers: Headers }>) => {
  return async () => {
    const res = await fetch(
      (await isDocker())
        ? BACKEND_INTERNAL_URL
        : process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options,
        },
        next: {
          revalidate: 1,
          tags: [(options as any)?.["authorization"] || ""],
        },
        body: JSON.stringify({
          query: print(document),
          variables,
        }),
      },
    );

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

export async function isDocker() {
  "use server";
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

  return hasDockerEnv() || hasDockerCGroup();
}
