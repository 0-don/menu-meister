import { graphql } from "@/gql";

export const UPDATE_USER_ALLERGENS_ADMIN = graphql(/* GraphQL */ `
  mutation UpdateUserMealLocationAdmin($data: UserUncheckedUpdateInput!) {
    updateUserMealLocationAdmin(data: $data)
  }
`);

export const CREATE_USER_MEAL_LOCATION_ADMIN = graphql(/* GraphQL */ `
  mutation UpdateUserAllergensAdmin($data: UserUncheckedUpdateInput!) {
    updateUserAllergensAdmin(data: $data)
  }
`);

export const DELETE_USER_MEAL_LOCATION_ADMIN = graphql(/* GraphQL */ `
  mutation DeleteUserMealLocationAdmin($where: UserMealLocationWhereUniqueInput!) {
    deleteUserMealLocationAdmin(where: $where)
  }
`);

export const UPDATE_USER_ALLERGENS_USER = graphql(/* GraphQL */ `
  mutation UpdateUserAllergensUser($data: UserUncheckedUpdateInput!) {
    updateUserAllergensUser(data: $data)
  }
`);

export const CREATE_USER_MEAL_LOCATION_USER = graphql(/* GraphQL */ `
  mutation CreateUserMealLocationUser(
    $data: UserMealLocationUncheckedCreateInput!
  ) {
    createUserMealLocationUser(data: $data) {
      id
      userId
      timeOfDay
      mealLocation
      createdAt
      updatedAt
    }
  }
`);

export const DELETE_USER_MEAL_LOCATION_USER = graphql(/* GraphQL */ `
  mutation DeleteUserMealLocationUser(
    $where: UserMealLocationWhereUniqueInput!
  ) {
    deleteUserMealLocationUser(where: $where) {
      id
      userId
      timeOfDay
      mealLocation
      createdAt
      updatedAt
    }
  }
`);
