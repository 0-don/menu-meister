import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: ["src/gql/**/*.gql"],
  ignoreNoDocuments: true,
  config: {
    scalars: {
      File: "File",
    },
  },
  hooks: {},
  generates: {
    "src/gql/": {
      preset: "client",
      documents: ["src/documents/**/*.ts"],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;
