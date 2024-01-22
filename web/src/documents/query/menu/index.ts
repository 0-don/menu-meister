import { graphql } from "@/gql";

export const GET_ALL_USER_MEALS_USER = graphql(/* GraphQL */ `
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
      Meal {
        id
        name
      }
    }
  }
`);
