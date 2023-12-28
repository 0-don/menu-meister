import { graphql } from "@/gql";

export const GET_ALL_MEAL_SCHEDULES_ADMIN = graphql(/* GraphQL */ `
  query GetAllMealSchedulesAdmin(
    $where: MealScheduleWhereInput
    $orderBy: [MealScheduleOrderByWithRelationInput!]
    $cursor: MealScheduleWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MealScheduleScalarFieldEnum!]
  ) {
    getAllMealSchedulesAdmin(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      servingDate
      createdAt
      updatedAt
      scheduledMeals {
        id
        mealGroupId
        mealId
        createdAt
        updatedAt
        meal {
          id
          name
          description
          image
        }
        mealGroup {
          id
          name
          description
          meals {
            id
            name
            description
            image
          }
        }
      }
    }
  }
`);
