import { graphql } from "@/gql";

export const ME = graphql(/* GraphQL */ `
  query Me {
    me {
      id
      firstName
      lastName
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
