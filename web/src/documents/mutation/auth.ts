import { graphql } from "@/gql";

export const REGISTER_USER = graphql(/* GraphQL */ `
  mutation RegisterUser($data: RegisterUserInput!) {
    registerUser(data: $data) {
      id
      username
      email
      lastOnline
      status
      createdAt
      updatedAt
      UserRole {
        id
        name
      }
    }
  }
`);

export const LOGIN_USER = graphql(/* GraphQL */ `
  mutation LoginUser($data: LoginUserInput!) {
    loginUser(data: $data) {
      id
      username
      email
      lastOnline
      status
      createdAt
      updatedAt
      UserRole {
        id
        name
      }
    }
  }
`);
