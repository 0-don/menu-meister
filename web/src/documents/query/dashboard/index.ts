import { gql } from "@/fetcher";
import { WEEKLY_MEAL_GROUP_FRAGMENT } from "../../fragments/dashboard";

export const GET_ALL_MEAL_BOARD_PLANS_USER = gql(`
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

export const GET_ALL_WEEKLY_MEAL_GROUPS_USER = gql(
  /* GraphQL */ `
    query GetAllWeeklyMealGroupsUser(
      $where: WeeklyMealGroupWhereInput
      $orderBy: [WeeklyMealGroupOrderByWithRelationInput!]
      $cursor: WeeklyMealGroupWhereUniqueInput
      $take: Int
      $skip: Int
      $distinct: [WeeklyMealGroupScalarFieldEnum!]
    ) {
      getAllWeeklyMealGroupsUser(
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
  `,
  [WEEKLY_MEAL_GROUP_FRAGMENT],
);

export const GET_ALL_MEALS_USER = gql(`
  query GetAllMealsUser(
    $where: MealWhereInput
    $orderBy: [MealOrderByWithRelationInput!]
    $cursor: MealWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MealScalarFieldEnum!]
  ) {
    getAllMealsUser(
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

export const GET_ALL_USER_MEALS_ADMIN = gql(`
  query GetAllUserMealsAdmin(
    $where: UserMealWhereInput
    $orderBy: [UserMealOrderByWithRelationInput!]
    $cursor: UserMealWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UserMealScalarFieldEnum!]
  ) {
    getAllUserMealsAdmin(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      mealId
      mealBoardPlanId
      date
      userId
      weeklyMealGroupId
    }
  }
`);
