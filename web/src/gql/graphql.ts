/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  changePasswordUser?: Maybe<Scalars['Boolean']['output']>;
  deleteAccountTokensUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  registerUser?: Maybe<User>;
};


export type MutationChangePasswordUserArgs = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  data: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  data: RegisterUserInput;
};

export type Query = {
  me?: Maybe<User>;
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Token = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdByUser: User;
  expiresIn: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedByUser: User;
};

export type User = {
  UserRole?: Maybe<Array<UserRole>>;
  _count: UserCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<User>;
  createdToken?: Maybe<Array<Token>>;
  createdUser?: Maybe<Array<User>>;
  createdUserRoles?: Maybe<Array<UserRole>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastOnline: Scalars['DateTime']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedByUser?: Maybe<User>;
  updatedToken?: Maybe<Array<Token>>;
  updatedUser?: Maybe<Array<User>>;
  updatedUserRoles?: Maybe<Array<UserRole>>;
  username: Scalars['String']['output'];
};

export type UserCount = {
  UserRole: Scalars['Int']['output'];
  createdToken: Scalars['Int']['output'];
  createdUser: Scalars['Int']['output'];
  createdUserRoles: Scalars['Int']['output'];
  updatedToken: Scalars['Int']['output'];
  updatedUser: Scalars['Int']['output'];
  updatedUserRoles: Scalars['Int']['output'];
};

export type UserRole = {
  User: User;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdByUser: User;
  id: Scalars['ID']['output'];
  name: UserRoleName;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedByUser: User;
  userId: Scalars['String']['output'];
};

export enum UserRoleName {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  Mod = 'MOD',
  User = 'USER'
}

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { id: string, username: string, lastOnline: any, createdAt: any, updatedAt: any, UserRole?: Array<{ id: string, name: UserRoleName }> | null } | null };


export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UserRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;