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
      mealId
      servingDate
      createdAt
      updatedAt
      meal {
        name
        description
        id
        createdAt
        image
      }
    }
  }
`);
