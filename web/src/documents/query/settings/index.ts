import { gql } from "@/fetcher";

export const GET_SETTINGS_ADMIN = gql(`
  query GetSettingsAdmin(
    $where: SettingsWhereInput
    $orderBy: [SettingsOrderByWithRelationInput!]
    $cursor: SettingsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [SettingsScalarFieldEnum!]
  ) {
    getSettingsAdmin(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      id
      maxEditOrderDays
      createdAt
      updatedAt
      createdByUser {
        username
      }
      updatedByUser {
        username
      }
    }
  }
`);
export const GET_SETTINGS_USER = gql(`
  query GetSettingsUser {
    getSettingsUser {
      maxEditOrderDays
    }
  }
`);
