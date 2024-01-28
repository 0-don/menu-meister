import { graphql } from "@/gql";

export const UPLOAD_MEAL_IMAGE_ADMIN = graphql(/* GraphQL */ `
  mutation UploadMealImageAdmin($mealId: Float!, $file: Upload!) {
    uploadMealImageAdmin(mealId: $mealId, file: $file)
  }
`);

export const CREATE_USER_MEAL_USER = graphql(/* GraphQL */ `
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

export const DELETE_USER_MEAL_USER = graphql(/* GraphQL */ `
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
