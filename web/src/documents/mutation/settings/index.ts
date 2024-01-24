import { graphql } from "@/gql";

export const UPDATE_SETTINGS_ADMIN = graphql(/* GraphQL */ `
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
