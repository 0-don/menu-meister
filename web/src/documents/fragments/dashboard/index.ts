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
      imageName
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
      imageName
    }
    thursdayMeal {
      id
      name
      description
      image
      imageName
    }
    fridayMeal {
      id
      name
      description
      image
      imageName
    }
    saturdayMeal {
      id
      name
      description
      image
      imageName
    }
    sundayMeal {
      id
      name
      description
      image
      imageName
    }
  }
`);
