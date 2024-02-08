import { graphql } from "@/gql";

export const GET_USER_MEALS_GROUPED_COUNT_ADMIN = graphql(/* GraphQL */ `
  query GetUserMealsGroupedCountAdmin($data: UserMealGroupedCountAdminInput!) {
    getUserMealsGroupedCountAdmin(data: $data) {
      date
      meal
      count
    }
  }
`);

export const GET_USER_MEALS_GROUPED_USERS_ADMIN = graphql(/* GraphQL */ `
  query GetUserMealsGroupedUsersAdmin($data: UserMealGroupedUsersAdminInput!) {
    getUserMealsGroupedUsersAdmin(data: $data) {
      userId
      firstname
      lastname
      meals {
        mealId
        meal
        timeOfDay
        mealLocation
      }
    }
  }
`);
