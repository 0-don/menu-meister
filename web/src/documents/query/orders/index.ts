import { graphql } from "gql.tada";

export const GET_USER_MEALS_GROUPED_COUNT_ADMIN = graphql(`
  query GetUserMealsGroupedCountAdmin($data: UserMealGroupedCountAdminInput!) {
    getUserMealsGroupedCountAdmin(data: $data) {
      date
      count
      meal
    }
  }
`);

export const GET_USER_MEALS_GROUPED_USERS_ADMIN = graphql(`
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
