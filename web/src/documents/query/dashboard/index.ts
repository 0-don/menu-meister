import { graphql } from "@/gql";

export const GET_ALL_WEEKLY_MEAL_GROUPS_ADMIN = graphql(/* GraphQL */ `
  query GetAllWeeklyMealGroupsAdmin(
    $where: WeeklyMealGroupWhereInput
    $orderBy: [WeeklyMealGroupOrderByWithRelationInput!]
    $cursor: WeeklyMealGroupWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [WeeklyMealGroupScalarFieldEnum!]
  ) {
    getAllWeeklyMealGroupsAdmin(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
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
