import { graphql } from "@/gql";

export const UPDATE_USER_ADMIN = graphql(/* GraphQL */ `
  mutation UpdateUserAdmin(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateUserAdmin(data: $data, where: $where) {
      id
    }
  }
`);

export const CREATE_USER_MEAL_LOCATION_ADMIN = graphql(/* GraphQL */ `
  mutation CreateUserMealLocationAdmin(
    $data: UserMealLocationUncheckedCreateInput!
  ) {
    createUserMealLocationAdmin(data: $data) {
      id
      userId
      timeOfDay
      mealLocation
      createdAt
      updatedAt
    }
  }
`);

export const DELETE_USER_MEAL_LOCATION_ADMIN = graphql(/* GraphQL */ `
  mutation DeleteUserMealLocationAdmin(
    $where: UserMealLocationWhereUniqueInput!
  ) {
    deleteUserMealLocationAdmin(where: $where) {
      id
      userId
      timeOfDay
      mealLocation
      createdAt
      updatedAt
    }
  }
`);
