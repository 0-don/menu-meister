import { gql } from "@/fetcher";

export const UPDATE_USER_ADMIN = gql(`
  mutation UpdateUserAdmin(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateUserAdmin(data: $data, where: $where) {
      id
    }
  }
`);

export const CREATE_USER_MEAL_LOCATION_ADMIN = gql(`
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

export const DELETE_USER_MEAL_LOCATION_ADMIN = gql(`
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
