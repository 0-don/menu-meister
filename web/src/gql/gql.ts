/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation RegisterUser($data: RegisterUserInput!) {\n    registerUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      UserRole {\n        id\n        name\n      }\n    }\n  }\n": types.RegisterUserDocument,
    "\n  mutation LoginUser($data: LoginUserInput!) {\n    loginUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      UserRole {\n        id\n        name\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  query Me {\n    me {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      UserRole {\n        id\n        name\n      }\n    }\n  }\n": types.MeDocument,
    "\n  query GetAllUsersUser($where: UserWhereInput) {\n    getAllUsersUser(where: $where) {\n      id\n    }\n  }\n": types.GetAllUsersUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser($data: RegisterUserInput!) {\n    registerUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      UserRole {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser($data: RegisterUserInput!) {\n    registerUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      UserRole {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($data: LoginUserInput!) {\n    loginUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      UserRole {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($data: LoginUserInput!) {\n    loginUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      UserRole {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      UserRole {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      UserRole {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllUsersUser($where: UserWhereInput) {\n    getAllUsersUser(where: $where) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetAllUsersUser($where: UserWhereInput) {\n    getAllUsersUser(where: $where) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;