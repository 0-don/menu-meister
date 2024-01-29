import { GraphQLScalarType } from "graphql";

export const FileScalar = new GraphQLScalarType({
  name: "File",
  description: "The `File` scalar type represents a file upload.",
});
