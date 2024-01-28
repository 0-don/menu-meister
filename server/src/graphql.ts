import { YogaDriver, YogaDriverConfig } from "@graphql-yoga/nestjs";
import { Logger } from "@nestjs/common";
import { GraphQLError } from "graphql";
import { maskError } from "graphql-yoga";
import { GraphQLContext } from "./app_modules/@types/types";
import { CORS_DOMAINS } from "./constants";

type OriginalError = Error & { response?: string | { message?: string[] } };

export function graphqlModuleFactory(): YogaDriverConfig<"fastify"> {
  return {
    driver: YogaDriver<"fastify">,
    autoSchemaFile: true,
    cors: {
      origin: process.env.NODE_ENV === "production" ? CORS_DOMAINS : "*",
      credentials: true,
    },
    definitions: {
      customScalarTypeMapping: {
        File: "File",
      },
    },
    maskedErrors: {
      maskError: (
        error: GraphQLError & { originalError?: OriginalError },
        message,
        isDev,
      ): Error | GraphQLError => {
        import("flat").then(({ flatten }) =>
          Logger.warn(
            JSON.stringify({
              ...flatten(error?.originalError || {}),
              ...flatten(error || {}),
            }),
          ),
        );

        if (error?.extensions?.code === "DOWNSTREAM_SERVICE_ERROR") {
          return error;
        }

        try {
          const originalError = JSON.parse(
            JSON.stringify(error.originalError),
          ) as OriginalError;

          if (typeof originalError?.response === "string") {
            return {
              message: originalError.response,
            } as GraphQLError;
          }

          if (originalError?.response?.message?.length > 0) {
            return {
              message: originalError.response.message,
            } as unknown as GraphQLError;
          }
        } catch (err) {
          const data = JSON.parse(JSON.stringify(error));
          return {
            message: data?.message,
          } as unknown as GraphQLError;
        }

        return maskError(error, message, isDev);
      },
    },
    context: ({ req, reply }): GraphQLContext => ({ req, reply }),
  };
}
