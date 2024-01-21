import { graphql } from "@/gql";

export const GET_ALL_MEAL_BOARD_PLANS_USER = graphql(/* GraphQL */ `
  query GetAllMealBoardPlansUser(
    $where: MealBoardPlanWhereInput
    $orderBy: [MealBoardPlanOrderByWithRelationInput!]
    $cursor: MealBoardPlanWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MealBoardPlanScalarFieldEnum!]
  ) {
    getAllMealBoardPlansUser(
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
    }
  }
`);

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
      ...WeeklyMealGroupFragment
    }
  }
`);

export const GET_ALL_MEALS_ADMIN = graphql(/* GraphQL */ `
  query GetAllMealsAdmin(
    $where: MealWhereInput
    $orderBy: [MealOrderByWithRelationInput!]
    $cursor: MealWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MealScalarFieldEnum!]
  ) {
    getAllMealsAdmin(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      name
    }
  }
`);
