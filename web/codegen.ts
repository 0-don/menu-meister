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
      Upload: "FileUpload",
    },
  },
  hooks: {},

  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        {
          add: {
            content: "import { FileUpload } from 'graphql-upload-minimal';",
          },
        },
      ],
      documents: ["src/documents/**/*.ts"],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;
