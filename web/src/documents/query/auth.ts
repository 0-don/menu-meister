import { graphql } from "@/graphql";

export const ME = graphql(/* GraphQL */ `
  query Me {
    me {
      id
      firstname
      lastname
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
