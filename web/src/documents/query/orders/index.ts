import { graphql } from "@/gql";

export const GET_USER_MEALS_GROUPED_ADMIN = graphql(/* GraphQL */ `
  query GetUserMealsGroupedAdmin(
    $where: UserMealWhereInput
    $orderBy: [UserMealOrderByWithAggregationInput!]
    $having: UserMealScalarWhereWithAggregatesInput
    $take: Int
    $skip: Int
    $count: UserMealCountAggregateInput
    $avg: UserMealAvgAggregateInput
    $sum: UserMealSumAggregateInput
    $min: UserMealMinAggregateInput
    $max: UserMealMaxAggregateInput
    $by: [UserMealScalarFieldEnum!]!
  ) {
    getUserMealsGroupedAdmin(
      where: $where
      orderBy: $orderBy
      having: $having
      take: $take
      skip: $skip
      _count: $count
      _avg: $avg
      _sum: $sum
      _min: $min
      _max: $max
      by: $by
    ) {
      mealId
      _count {
        mealId
      }
      date
    }
  }
`);
