import { gql } from "@/fetcher";

export const REGISTER_USER = gql(`
  mutation RegisterUser($data: RegisterUserInput!) {
    registerUser(data: $data) {
      id
      username
      email
      lastOnline
      status
      createdAt
      updatedAt
      userRole {
        id
        name
      }
    }
  }
`);

export const LOGIN_USER = gql(`
  mutation LoginUser($data: LoginUserInput!) {
    loginUser(data: $data) {
      id
      username
      email
      lastOnline
      status
      createdAt
      updatedAt
      userRole {
        id
        name
      }
    }
  }
`);

export const LOGOUT = gql(`
  mutation Logout {
    logout
  }
`);
