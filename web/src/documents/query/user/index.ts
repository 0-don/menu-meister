import { gql } from "@/fetcher";

export const GET_USER_ADMIN = gql(`
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
      firstname
      lastname
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

export const GET_ALL_USERS_ADMIN = gql(`
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
      firstname
      lastname
      email
      createdAt
    }
  }
`);
