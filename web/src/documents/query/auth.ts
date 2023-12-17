import { graphql } from "@/gql";

export const ME = graphql(/* GraphQL */ `
  query Me {
    me {
      id
      username
      email
      lastOnline
      status
      createdAt
      updatedAt
      UserRole {
        id
        name
      }
    }
  }
`);
