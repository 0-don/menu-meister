import { initGraphQLTada } from "gql.tada";
import type { introspection } from "./graphql-env.d.ts";

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars:{
    DateTime: any
    Decimal: any,
    File: File
  }
}>();

export { readFragment } from "gql.tada";
export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada";
