import { gql } from "@/fetcher";

export const GET_ALL_USER_MEALS_USER = gql(`
  query GetAllUserMealsUser(
    $where: UserMealWhereInput
    $orderBy: [UserMealOrderByWithRelationInput!]
    $cursor: UserMealWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UserMealScalarFieldEnum!]
  ) {
    getAllUserMealsUser(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      date
      mealId
      mealBoardPlanId
      weeklyMealGroupId
      meal {
        id
        name
      }
    }
  }
`);
