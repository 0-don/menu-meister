import { graphql } from "@/gql";

export const CREATE_WEEKLY_MEAL_GROUP_ADMIN = graphql(/* GraphQL */ `
  mutation CreateWeeklyMealGroupAdmin($data: WeeklyMealGroupCreateInput!) {
    createWeeklyMealGroupAdmin(data: $data) {
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
  }
`);

export const DELETE_WEEKLY_MEAL_GROUP_ADMIN = graphql(/* GraphQL */ `
  mutation DeleteWeeklyMealGroupAdmin($id: String!) {
    deleteWeeklyMealGroupAdmin(id: $id)
  }
`);
