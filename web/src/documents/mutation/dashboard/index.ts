import { gql } from "@/fetcher";
import { WEEKLY_MEAL_GROUP_FRAGMENT } from "../../fragments/dashboard";

export const SWITCH_WEEKLY_MEAL_GROUP_ADMIN = gql(`
  mutation SwitchWeeklyMealGroupAdmin($data: SwitchWeeklyMealGroupInput!) {
    switchWeeklyMealGroupAdmin(data: $data)
  }
`);

export const SWITCH_DATE_WEEKLY_MEAL_GRPOUP_ADMIN = gql(`
  mutation SwitchDateWeeklyMealGroupAdmin(
    $dateFrom: String!
    $dateTo: String!
  ) {
    switchDateWeeklyMealGroupAdmin(dateFrom: $dateFrom, dateTo: $dateTo)
  }
`);

export const CREATE_WEEKLY_MEAL_GROUP_ADMIN = gql(
  `
    mutation CreateWeeklyMealGroupAdmin(
      $data: WeeklyMealGroupUncheckedCreateInput!
    ) {
      createWeeklyMealGroupAdmin(data: $data) {
        ...WeeklyMealGroupFragment
      }
    }
  `,
  [WEEKLY_MEAL_GROUP_FRAGMENT],
);

export const DELETE_WEEKLY_MEAL_GROUP_ADMIN = gql(
  `
    mutation DeleteWeeklyMealGroupAdmin(
      $where: WeeklyMealGroupWhereUniqueInput!
    ) {
      deleteWeeklyMealGroupAdmin(where: $where) {
        ...WeeklyMealGroupFragment
      }
    }
  `,
  [WEEKLY_MEAL_GROUP_FRAGMENT],
);

export const UPDATE_WEEKLY_MEAL_GROUP_ADMIN = gql(
  `
    mutation UpdateWeeklyMealGroupAdmin(
      $data: WeeklyMealGroupUncheckedUpdateInput!
      $where: WeeklyMealGroupWhereUniqueInput!
    ) {
      updateWeeklyMealGroupAdmin(data: $data, where: $where) {
        ...WeeklyMealGroupFragment
      }
    }
  `,
  [WEEKLY_MEAL_GROUP_FRAGMENT],
);
