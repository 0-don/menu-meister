import { graphql } from "@/gql";

export const CREATE_USER_MEAL_USER = graphql(/* GraphQL */ `
  mutation CreateUserMealUser($data: UserMealCreateInput!) {
    createUserMealUser(data: $data) {
      id
      date
      mealId
      mealBoardPlanId
      Meal {
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
      Meal {
        id
        name
      }
    }
  }
`);
