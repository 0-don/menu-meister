import { graphql } from "@/gql";

export const SWITCH_WEEKLY_MEAL_GROUP_ADMIN = graphql(/* GraphQL */ `
  mutation SwitchWeeklyMealGroupAdmin($data: SwitchWeeklyMealGroupInput!) {
    switchWeeklyMealGroupAdmin(data: $data)
  }
`);

export const SWITCH_DATE_WEEKLY_MEAL_GRPOUP_ADMIN = graphql(/* GraphQL */ `
  mutation SwitchDateWeeklyMealGroupAdmin(
    $dateFrom: String!
    $dateTo: String!
  ) {
    switchDateWeeklyMealGroupAdmin(dateFrom: $dateFrom, dateTo: $dateTo)
  }
`);

export const CREATE_WEEKLY_MEAL_GROUP_ADMIN = graphql(/* GraphQL */ `
  mutation CreateWeeklyMealGroupAdmin(
    $data: WeeklyMealGroupUncheckedCreateInput!
  ) {
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

export const UPDATE_WEEKLY_MEAL_GROUP_ADMIN = graphql(/* GraphQL */ `
  mutation UpdateWeeklyMealGroupAdmin(
    $data: WeeklyMealGroupUncheckedUpdateInput!
    $where: WeeklyMealGroupWhereUniqueInput!
  ) {
    updateWeeklyMealGroupAdmin(data: $data, where: $where) {
      ...WeeklyMealGroupFragment
    }
  }
`);
