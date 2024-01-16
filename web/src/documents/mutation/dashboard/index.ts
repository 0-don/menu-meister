import { WEEKLY_MEAL_GROUP_FRAGMENT } from "@/documents/fragments/dashboard";
import { graphql } from "@/gql";

export const CREATE_WEEKLY_MEAL_GROUP_ADMIN = graphql(/* GraphQL */ `
  mutation CreateWeeklyMealGroupAdmin($data: WeeklyMealGroupCreateInput!) {
    createWeeklyMealGroupAdmin(data: $data) {
      ...WeeklyMealGroupFragment
    }
  }
`);

export const DELETE_WEEKLY_MEAL_GROUP_ADMIN = graphql(/* GraphQL */ `
  mutation DeleteWeeklyMealGroupAdmin(
    $where: WeeklyMealGroupWhereUniqueInput!
  ) {
    deleteWeeklyMealGroupAdmin(where: $where) {
      ...WeeklyMealGroupFragment
    }
  }
`);
