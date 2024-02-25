import { gql } from "@/fetcher";

export const ME = gql(`
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
