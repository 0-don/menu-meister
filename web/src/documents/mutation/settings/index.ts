import { graphql } from "gql.tada";


export const UPDATE_SETTINGS_ADMIN = graphql(`
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
