import { graphql } from "@/gql";

export const GET_ALL_USERS = graphql(/* GraphQL */ `
  query GetAllUsersUser($where: UserWhereInput) {
    getAllUsersUser(where: $where) {
      id
    }
  }
`);
