import { graphql } from "@/gql";

export const GET_USER_MEALS_GROUPED_COUNT_ADMIN = graphql(/* GraphQL */ `
  query GetUserMealsGroupedCountAdmin($data: UserMealUserInput!) {
    getUserMealsGroupedCountAdmin(data: $data) {
      date
      meal
      count
    }
  }
`);
