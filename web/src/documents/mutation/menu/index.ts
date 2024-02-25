import { gql } from "@/fetcher";

export const UPLOAD_MEAL_IMAGE_ADMIN = gql(`
  mutation UploadMealImageAdmin($mealId: Int!, $file: File!) {
    uploadMealImageAdmin(mealId: $mealId, file: $file)
  }
`);

export const CREATE_USER_MEAL_USER = gql(`
  mutation CreateUserMealUser($data: UserMealUncheckedCreateInput!) {
    createUserMealUser(data: $data) {
      id
      date
      mealId
      mealBoardPlanId
      weeklyMealGroupId
      meal {
        id
        name
      }
    }
  }
`);

export const DELETE_USER_MEAL_USER = gql(`
  mutation DeleteUserMealUser($where: UserMealWhereUniqueInput!) {
    deleteUserMealUser(where: $where) {
      id
      date
      mealId
      mealBoardPlanId
      weeklyMealGroupId
      meal {
        id
        name
      }
    }
  }
`);
