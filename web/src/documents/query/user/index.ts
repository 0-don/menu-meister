import { graphql } from "@/gql";

export const GET_USER_ADMIN = graphql(/* GraphQL */ `
  query GetUserAdmin(
    $where: UserWhereInput
    $orderBy: [UserOrderByWithRelationInput!]
    $cursor: UserWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UserScalarFieldEnum!]
  ) {
    getUserAdmin(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      firstName
      lastName
      username
      email
      userRole {
        id
        name
      }
      userMealLocation {
        id
        timeOfDay
        mealLocation
      }
      allergens {
        id
        name
      }
    }
  }
`);

export const GET_ALL_USERS_ADMIN = graphql(/* GraphQL */ `
  query GetAllUsersAdmin(
    $where: UserWhereInput
    $orderBy: [UserOrderByWithRelationInput!]
    $cursor: UserWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UserScalarFieldEnum!]
  ) {
    getAllUsersAdmin(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      firstName
      lastName
      email
      createdAt
    }
  }
`);
