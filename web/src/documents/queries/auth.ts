import { graphql } from "@/gql";

export const ME = graphql(/* GraphQL */ `
  query Me {
    me {
      id
      username
      lastOnline
      createdAt
      updatedAt
      UserRole {
        id
        name
      }
    }
  }
`);
