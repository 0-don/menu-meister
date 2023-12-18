"use server";
import { headers } from "next/headers";
import { X_URL } from "../constants";

export const ssrUrl = (): URL =>
  new URL(headers().get(X_URL) || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);
