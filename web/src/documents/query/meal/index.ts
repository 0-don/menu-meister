import { graphql } from "@/gql";

export const GET_MEAL_USER = graphql(/* GraphQL */ `
  query GetMealUser(
    $where: MealWhereInput
    $orderBy: [MealOrderByWithRelationInput!]
    $cursor: MealWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [MealScalarFieldEnum!]
  ) {
    getMealUser(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      name
      description
      image
      createdAt
      updatedAt
      allergens {
        id
        name
      }
      additives {
        id
        name
      }
      properties {
        id
        name
      }
      categories {
        id
        name
      }
      seasons {
        id
        name
      }
      foodForms {
        id
        name
      }
      mealRecipe {
        id
        recipe {
          id
          name
          allergens {
            id
            name
          }
          additives {
            id
            name
          }
          properties {
            id
            name
          }
          categories {
            id
            name
          }
          seasons {
            id
            name
          }
          foodForms {
            id
            name
          }
          kitchens {
            id
            name
          }
          recipeIngredient {
            id
            amount
            unit
            ingredient {
              id
              name
              blsIdentifier
              energyKcal
              energyKj
              breadUnits
              carbohydrates
              sugars
              salt
              fats
              unsaturatedFats
              saturatedFats
              protein
              allergens {
                id
                name
              }
              additives {
                id
                name
              }
              properties {
                id
                name
              }
              categories {
                id
                name
              }
              seasons {
                id
                name
              }
              foodForms {
                id
                name
              }
              kitchens {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`);
