import { graphql } from "@/gql";

export const GET_ALL_ALLERGENS_USER = graphql(/* GraphQL */ `
  query GetAllAllergensUser(
    $where: AllergensWhereInput
    $orderBy: [AllergensOrderByWithRelationInput!]
    $cursor: AllergensWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [AllergensScalarFieldEnum!]
  ) {
    getAllAllergensUser(
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
