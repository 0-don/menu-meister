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
    "\n  fragment WeeklyMealGroupFragment on WeeklyMealGroup {\n    id\n    name\n    color\n    description\n    year\n    weekOfYear\n    orderIndex\n    mondayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    tuesdayMeal {\n      id\n      name\n      description\n      image\n    }\n    wednesdayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    thursdayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    fridayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    saturdayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    sundayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n  }\n": types.WeeklyMealGroupFragmentFragmentDoc,
    "\n  mutation RegisterUser($data: RegisterUserInput!) {\n    registerUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      userRole {\n        id\n        name\n      }\n    }\n  }\n": types.RegisterUserDocument,
    "\n  mutation LoginUser($data: LoginUserInput!) {\n    loginUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      userRole {\n        id\n        name\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  mutation SwitchWeeklyMealGroupAdmin($data: SwitchWeeklyMealGroupInput!) {\n    switchWeeklyMealGroupAdmin(data: $data)\n  }\n": types.SwitchWeeklyMealGroupAdminDocument,
    "\n  mutation CreateWeeklyMealGroupAdmin($data: WeeklyMealGroupCreateInput!) {\n    createWeeklyMealGroupAdmin(data: $data) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n": types.CreateWeeklyMealGroupAdminDocument,
    "\n  mutation DeleteWeeklyMealGroupAdmin(\n    $where: WeeklyMealGroupWhereUniqueInput!\n  ) {\n    deleteWeeklyMealGroupAdmin(where: $where) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n": types.DeleteWeeklyMealGroupAdminDocument,
    "\n  mutation UpdateWeeklyMealGroupAdmin(\n    $data: WeeklyMealGroupUncheckedUpdateInput!\n    $where: WeeklyMealGroupWhereUniqueInput!\n  ) {\n    updateWeeklyMealGroupAdmin(data: $data, where: $where) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n": types.UpdateWeeklyMealGroupAdminDocument,
    "\n  mutation CreateUserMealUser($data: UserMealUncheckedCreateInput!) {\n    createUserMealUser(data: $data) {\n      id\n      date\n      mealId\n      mealBoardPlanId\n      weeklyMealGroupId\n      meal {\n        id\n        name\n      }\n    }\n  }\n": types.CreateUserMealUserDocument,
    "\n  mutation DeleteUserMealUser($where: UserMealWhereUniqueInput!) {\n    deleteUserMealUser(where: $where) {\n      id\n      date\n      mealId\n      mealBoardPlanId\n      weeklyMealGroupId\n      meal {\n        id\n        name\n      }\n    }\n  }\n": types.DeleteUserMealUserDocument,
    "\n  query Me {\n    me {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      userRole {\n        id\n        name\n      }\n    }\n  }\n": types.MeDocument,
    "\n  query GetAllMealBoardPlansUser(\n    $where: MealBoardPlanWhereInput\n    $orderBy: [MealBoardPlanOrderByWithRelationInput!]\n    $cursor: MealBoardPlanWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [MealBoardPlanScalarFieldEnum!]\n  ) {\n    getAllMealBoardPlansUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      name\n      color\n    }\n  }\n": types.GetAllMealBoardPlansUserDocument,
    "\n  query GetAllWeeklyMealGroupsUser(\n    $where: WeeklyMealGroupWhereInput\n    $orderBy: [WeeklyMealGroupOrderByWithRelationInput!]\n    $cursor: WeeklyMealGroupWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [WeeklyMealGroupScalarFieldEnum!]\n  ) {\n    getAllWeeklyMealGroupsUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n": types.GetAllWeeklyMealGroupsUserDocument,
    "\n  query GetAllMealsUser(\n    $where: MealWhereInput\n    $orderBy: [MealOrderByWithRelationInput!]\n    $cursor: MealWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [MealScalarFieldEnum!]\n  ) {\n    getAllMealsUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      name\n    }\n  }\n": types.GetAllMealsUserDocument,
    "\n  query GetAllUserMealsUser(\n    $where: UserMealWhereInput\n    $orderBy: [UserMealOrderByWithRelationInput!]\n    $cursor: UserMealWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [UserMealScalarFieldEnum!]\n  ) {\n    getAllUserMealsUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      date\n      mealId\n      mealBoardPlanId\n      weeklyMealGroupId\n      meal {\n        id\n        name\n      }\n    }\n  }\n": types.GetAllUserMealsUserDocument,
    "\n  query GetSettingsAdmin(\n    $where: SettingsWhereInput\n    $orderBy: [SettingsOrderByWithRelationInput!]\n    $cursor: SettingsWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [SettingsScalarFieldEnum!]\n  ) {\n    getSettingsAdmin(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      maxEditOrderDays\n      createdAt\n      updatedAt\n      createdByUser {\n        username\n      }\n      updatedByUser {\n        username\n      }\n    }\n  }\n": types.GetSettingsAdminDocument,
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
export function graphql(source: "\n  fragment WeeklyMealGroupFragment on WeeklyMealGroup {\n    id\n    name\n    color\n    description\n    year\n    weekOfYear\n    orderIndex\n    mondayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    tuesdayMeal {\n      id\n      name\n      description\n      image\n    }\n    wednesdayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    thursdayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    fridayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    saturdayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    sundayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n  }\n"): (typeof documents)["\n  fragment WeeklyMealGroupFragment on WeeklyMealGroup {\n    id\n    name\n    color\n    description\n    year\n    weekOfYear\n    orderIndex\n    mondayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    tuesdayMeal {\n      id\n      name\n      description\n      image\n    }\n    wednesdayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    thursdayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    fridayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    saturdayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n    sundayMeal {\n      id\n      name\n      description\n      image\n      imageName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser($data: RegisterUserInput!) {\n    registerUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      userRole {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser($data: RegisterUserInput!) {\n    registerUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      userRole {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($data: LoginUserInput!) {\n    loginUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      userRole {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($data: LoginUserInput!) {\n    loginUser(data: $data) {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      userRole {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SwitchWeeklyMealGroupAdmin($data: SwitchWeeklyMealGroupInput!) {\n    switchWeeklyMealGroupAdmin(data: $data)\n  }\n"): (typeof documents)["\n  mutation SwitchWeeklyMealGroupAdmin($data: SwitchWeeklyMealGroupInput!) {\n    switchWeeklyMealGroupAdmin(data: $data)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateWeeklyMealGroupAdmin($data: WeeklyMealGroupCreateInput!) {\n    createWeeklyMealGroupAdmin(data: $data) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateWeeklyMealGroupAdmin($data: WeeklyMealGroupCreateInput!) {\n    createWeeklyMealGroupAdmin(data: $data) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteWeeklyMealGroupAdmin(\n    $where: WeeklyMealGroupWhereUniqueInput!\n  ) {\n    deleteWeeklyMealGroupAdmin(where: $where) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteWeeklyMealGroupAdmin(\n    $where: WeeklyMealGroupWhereUniqueInput!\n  ) {\n    deleteWeeklyMealGroupAdmin(where: $where) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateWeeklyMealGroupAdmin(\n    $data: WeeklyMealGroupUncheckedUpdateInput!\n    $where: WeeklyMealGroupWhereUniqueInput!\n  ) {\n    updateWeeklyMealGroupAdmin(data: $data, where: $where) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateWeeklyMealGroupAdmin(\n    $data: WeeklyMealGroupUncheckedUpdateInput!\n    $where: WeeklyMealGroupWhereUniqueInput!\n  ) {\n    updateWeeklyMealGroupAdmin(data: $data, where: $where) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUserMealUser($data: UserMealUncheckedCreateInput!) {\n    createUserMealUser(data: $data) {\n      id\n      date\n      mealId\n      mealBoardPlanId\n      weeklyMealGroupId\n      meal {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserMealUser($data: UserMealUncheckedCreateInput!) {\n    createUserMealUser(data: $data) {\n      id\n      date\n      mealId\n      mealBoardPlanId\n      weeklyMealGroupId\n      meal {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUserMealUser($where: UserMealWhereUniqueInput!) {\n    deleteUserMealUser(where: $where) {\n      id\n      date\n      mealId\n      mealBoardPlanId\n      weeklyMealGroupId\n      meal {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUserMealUser($where: UserMealWhereUniqueInput!) {\n    deleteUserMealUser(where: $where) {\n      id\n      date\n      mealId\n      mealBoardPlanId\n      weeklyMealGroupId\n      meal {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      userRole {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      username\n      email\n      lastOnline\n      status\n      createdAt\n      updatedAt\n      userRole {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllMealBoardPlansUser(\n    $where: MealBoardPlanWhereInput\n    $orderBy: [MealBoardPlanOrderByWithRelationInput!]\n    $cursor: MealBoardPlanWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [MealBoardPlanScalarFieldEnum!]\n  ) {\n    getAllMealBoardPlansUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      name\n      color\n    }\n  }\n"): (typeof documents)["\n  query GetAllMealBoardPlansUser(\n    $where: MealBoardPlanWhereInput\n    $orderBy: [MealBoardPlanOrderByWithRelationInput!]\n    $cursor: MealBoardPlanWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [MealBoardPlanScalarFieldEnum!]\n  ) {\n    getAllMealBoardPlansUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      name\n      color\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllWeeklyMealGroupsUser(\n    $where: WeeklyMealGroupWhereInput\n    $orderBy: [WeeklyMealGroupOrderByWithRelationInput!]\n    $cursor: WeeklyMealGroupWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [WeeklyMealGroupScalarFieldEnum!]\n  ) {\n    getAllWeeklyMealGroupsUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n"): (typeof documents)["\n  query GetAllWeeklyMealGroupsUser(\n    $where: WeeklyMealGroupWhereInput\n    $orderBy: [WeeklyMealGroupOrderByWithRelationInput!]\n    $cursor: WeeklyMealGroupWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [WeeklyMealGroupScalarFieldEnum!]\n  ) {\n    getAllWeeklyMealGroupsUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      ...WeeklyMealGroupFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllMealsUser(\n    $where: MealWhereInput\n    $orderBy: [MealOrderByWithRelationInput!]\n    $cursor: MealWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [MealScalarFieldEnum!]\n  ) {\n    getAllMealsUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetAllMealsUser(\n    $where: MealWhereInput\n    $orderBy: [MealOrderByWithRelationInput!]\n    $cursor: MealWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [MealScalarFieldEnum!]\n  ) {\n    getAllMealsUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllUserMealsUser(\n    $where: UserMealWhereInput\n    $orderBy: [UserMealOrderByWithRelationInput!]\n    $cursor: UserMealWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [UserMealScalarFieldEnum!]\n  ) {\n    getAllUserMealsUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      date\n      mealId\n      mealBoardPlanId\n      weeklyMealGroupId\n      meal {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllUserMealsUser(\n    $where: UserMealWhereInput\n    $orderBy: [UserMealOrderByWithRelationInput!]\n    $cursor: UserMealWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [UserMealScalarFieldEnum!]\n  ) {\n    getAllUserMealsUser(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      date\n      mealId\n      mealBoardPlanId\n      weeklyMealGroupId\n      meal {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSettingsAdmin(\n    $where: SettingsWhereInput\n    $orderBy: [SettingsOrderByWithRelationInput!]\n    $cursor: SettingsWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [SettingsScalarFieldEnum!]\n  ) {\n    getSettingsAdmin(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      maxEditOrderDays\n      createdAt\n      updatedAt\n      createdByUser {\n        username\n      }\n      updatedByUser {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSettingsAdmin(\n    $where: SettingsWhereInput\n    $orderBy: [SettingsOrderByWithRelationInput!]\n    $cursor: SettingsWhereUniqueInput\n    $take: Int\n    $skip: Int\n    $distinct: [SettingsScalarFieldEnum!]\n  ) {\n    getSettingsAdmin(\n      where: $where\n      orderBy: $orderBy\n      cursor: $cursor\n      take: $take\n      skip: $skip\n      distinct: $distinct\n    ) {\n      id\n      maxEditOrderDays\n      createdAt\n      updatedAt\n      createdByUser {\n        username\n      }\n      updatedByUser {\n        username\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;