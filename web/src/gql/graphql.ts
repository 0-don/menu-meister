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

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumUserRoleNameFilter = {
  equals?: InputMaybe<UserRoleName>;
  in?: InputMaybe<Array<UserRoleName>>;
  not?: InputMaybe<NestedEnumUserRoleNameFilter>;
  notIn?: InputMaybe<Array<UserRoleName>>;
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
  updateUserUser: Scalars['Boolean']['output'];
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

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumUserRoleNameFilter = {
  equals?: InputMaybe<UserRoleName>;
  in?: InputMaybe<Array<UserRoleName>>;
  not?: InputMaybe<NestedEnumUserRoleNameFilter>;
  notIn?: InputMaybe<Array<UserRoleName>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  getAllUsersUser?: Maybe<Array<User>>;
  me?: Maybe<User>;
};


export type QueryGetAllUsersUserArgs = {
  orderBy?: InputMaybe<UserOrderByWithRelationInput>;
  where?: InputMaybe<UserWhereInput>;
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
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

export type TokenListRelationFilter = {
  every?: InputMaybe<TokenWhereInput>;
  none?: InputMaybe<TokenWhereInput>;
  some?: InputMaybe<TokenWhereInput>;
};

export type TokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  NOT?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  expiresIn?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
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

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  UserRole?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdByUser?: InputMaybe<UserOrderByWithRelationInput>;
  createdToken?: InputMaybe<TokenOrderByRelationAggregateInput>;
  createdUser?: InputMaybe<UserOrderByRelationAggregateInput>;
  createdUserRoles?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastOnline?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
  updatedToken?: InputMaybe<TokenOrderByRelationAggregateInput>;
  updatedUser?: InputMaybe<UserOrderByRelationAggregateInput>;
  updatedUserRoles?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
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

export type UserRoleListRelationFilter = {
  every?: InputMaybe<UserRoleWhereInput>;
  none?: InputMaybe<UserRoleWhereInput>;
  some?: InputMaybe<UserRoleWhereInput>;
};

export enum UserRoleName {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  Mod = 'MOD',
  User = 'USER'
}

export type UserRoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserRoleWhereInput = {
  AND?: InputMaybe<Array<UserRoleWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleWhereInput>>;
  OR?: InputMaybe<Array<UserRoleWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  UserRole?: InputMaybe<UserRoleListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserNullableRelationFilter>;
  createdToken?: InputMaybe<TokenListRelationFilter>;
  createdUser?: InputMaybe<UserListRelationFilter>;
  createdUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastOnline?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserNullableRelationFilter>;
  updatedToken?: InputMaybe<TokenListRelationFilter>;
  updatedUser?: InputMaybe<UserListRelationFilter>;
  updatedUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { id: string, username: string, lastOnline: any, createdAt: any, updatedAt: any, UserRole?: Array<{ id: string, name: UserRoleName }> | null } | null };

export type GetAllUsersUserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
}>;


export type GetAllUsersUserQuery = { getAllUsersUser?: Array<{ id: string }> | null };


export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UserRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAllUsersUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsersUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUsersUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetAllUsersUserQuery, GetAllUsersUserQueryVariables>;