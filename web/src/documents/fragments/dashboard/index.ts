import { gql } from "@/fetcher";

export const WEEKLY_MEAL_GROUP_FRAGMENT = gql(`
  fragment WeeklyMealGroupFragment on WeeklyMealGroup @_unmask {
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
