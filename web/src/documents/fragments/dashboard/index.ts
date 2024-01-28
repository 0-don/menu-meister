import { graphql } from "@/gql";

export const WEEKLY_MEAL_GROUP_FRAGMENT = graphql(/* GraphQL */ `
  fragment WeeklyMealGroupFragment on WeeklyMealGroup {
    id
    name
    color
    description
    year
    weekOfYear
    orderIndex
    mondayMeal {
      id
      name
      description
      image
    }
    tuesdayMeal {
      id
      name
      description
      image
    }
    wednesdayMeal {
      id
      name
      description
      image
    }
    thursdayMeal {
      id
      name
      description
      image
    }
    fridayMeal {
      id
      name
      description
      image
    }
    saturdayMeal {
      id
      name
      description
      image
    }
    sundayMeal {
      id
      name
      description
      image
    }
  }
`);
