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
      userRole {
        id
        name
      }
    }
  }
`);
