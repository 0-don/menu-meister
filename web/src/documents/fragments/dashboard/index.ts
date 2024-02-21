import { graphql } from "@/gql";

export const WEEKLY_MEAL_GROUP_FRAGMENT = graphql(/* GraphQL */ `
  fragment WeeklyMealGroupFragment on WeeklyMealGroup {
    id
    name
    color
    description
    year
    weekOfYear
    timeOfDay
    orderIndex
    mondayMeal {
      id
      name
      description
      image
      allergens {
        name
      }
    }
    tuesdayMeal {
      id
      name
      description
      image
      allergens {
        name
      }
    }
    wednesdayMeal {
      id
      name
      description
      image
      allergens {
        name
      }
    }
    thursdayMeal {
      id
      name
      description
      image
      allergens {
        name
      }
    }
    fridayMeal {
      id
      name
      description
      image
      allergens {
        name
      }
    }
    saturdayMeal {
      id
      name
      description
      image
      allergens {
        name
      }
    }
    sundayMeal {
      id
      name
      description
      image
      allergens {
        name
      }
    }
  }
`);
