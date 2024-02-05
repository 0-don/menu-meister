import { graphql } from "@/gql";

export const ME = graphql(/* GraphQL */ `
  query Me {
    me {
      id
      username
      email
      userRole {
        id
        name
      }
      # UserMealLocation {
      #   id
      #   timeOfDay
      #   mealLocation
      # }
      allergens {
        id
        name
      }
    }
  }
`);
