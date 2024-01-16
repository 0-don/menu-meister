import { WEEKLY_MEAL_GROUP_FRAGMENT } from "@/documents/fragments/dashboard";
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
      ...WeeklyMealGroupFragment
    }
  }
  ${WEEKLY_MEAL_GROUP_FRAGMENT}
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
