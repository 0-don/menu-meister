import { gql } from "@/fetcher";

export const UPDATE_SETTINGS_ADMIN = gql(`
  mutation UpdateSettingsAdmin(
    $data: SettingsUpdateInput!
    $where: SettingsWhereUniqueInput!
  ) {
    updateSettingsAdmin(data: $data, where: $where) {
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
