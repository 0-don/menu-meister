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
  /** An arbitrary-precision Decimal type */
  Decimal: { input: any; output: any; }
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
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

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']['input']>;
  divide?: InputMaybe<Scalars['Decimal']['input']>;
  increment?: InputMaybe<Scalars['Decimal']['input']>;
  multiply?: InputMaybe<Scalars['Decimal']['input']>;
  set?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type EnumUserRoleNameFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRoleName>;
};

export type EnumUserRoleNameFilter = {
  equals?: InputMaybe<UserRoleName>;
  in?: InputMaybe<Array<UserRoleName>>;
  not?: InputMaybe<NestedEnumUserRoleNameFilter>;
  notIn?: InputMaybe<Array<UserRoleName>>;
};

export type Ingredient = {
  _count: IngredientCount;
  allergens?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  mealIngredients?: Maybe<Array<MealIngredient>>;
  name: Scalars['String']['output'];
  nutritions?: Maybe<Array<Nutrition>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type IngredientCount = {
  mealIngredients: Scalars['Int']['output'];
  nutritions: Scalars['Int']['output'];
};

export type IngredientCreateInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars['String']['input'];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
};

export type IngredientCreateManyCreatedByUserInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type IngredientCreateManyCreatedByUserInputEnvelope = {
  data: Array<IngredientCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IngredientCreateManyInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type IngredientCreateManyUpdatedByUserInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type IngredientCreateManyUpdatedByUserInputEnvelope = {
  data: Array<IngredientCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IngredientCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<IngredientCreateManyCreatedByUserInputEnvelope>;
};

export type IngredientCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<IngredientCreateManyUpdatedByUserInputEnvelope>;
};

export type IngredientCreateNestedOneWithoutMealIngredientsInput = {
  connect?: InputMaybe<IngredientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IngredientCreateOrConnectWithoutMealIngredientsInput>;
  create?: InputMaybe<IngredientCreateWithoutMealIngredientsInput>;
};

export type IngredientCreateNestedOneWithoutNutritionsInput = {
  connect?: InputMaybe<IngredientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IngredientCreateOrConnectWithoutNutritionsInput>;
  create?: InputMaybe<IngredientCreateWithoutNutritionsInput>;
};

export type IngredientCreateOrConnectWithoutCreatedByUserInput = {
  create: IngredientCreateWithoutCreatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutMealIngredientsInput = {
  create: IngredientCreateWithoutMealIngredientsInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutNutritionsInput = {
  create: IngredientCreateWithoutNutritionsInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutUpdatedByUserInput = {
  create: IngredientCreateWithoutUpdatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateWithoutCreatedByUserInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars['String']['input'];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
};

export type IngredientCreateWithoutMealIngredientsInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
};

export type IngredientCreateWithoutNutritionsInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars['String']['input'];
};

export type IngredientCreateWithoutUpdatedByUserInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars['String']['input'];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
};

export type IngredientListRelationFilter = {
  every?: InputMaybe<IngredientWhereInput>;
  none?: InputMaybe<IngredientWhereInput>;
  some?: InputMaybe<IngredientWhereInput>;
};

export type IngredientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IngredientOrderByWithRelationInput = {
  allergens?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  mealIngredients?: InputMaybe<MealIngredientOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  nutritions?: InputMaybe<NutritionOrderByRelationAggregateInput>;
};

export type IngredientRelationFilter = {
  is?: InputMaybe<IngredientWhereInput>;
  isNot?: InputMaybe<IngredientWhereInput>;
};

export enum IngredientScalarFieldEnum {
  Allergens = 'allergens',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type IngredientScalarWhereInput = {
  AND?: InputMaybe<Array<IngredientScalarWhereInput>>;
  NOT?: InputMaybe<Array<IngredientScalarWhereInput>>;
  OR?: InputMaybe<Array<IngredientScalarWhereInput>>;
  allergens?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
};

export type IngredientUpdateInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutIngredientNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutritions?: InputMaybe<NutritionUpdateManyWithoutIngredientNestedInput>;
};

export type IngredientUpdateManyMutationInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type IngredientUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<IngredientCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<IngredientUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<IngredientUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<IngredientUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type IngredientUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<IngredientCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<IngredientUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<IngredientUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<IngredientUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput = {
  connect?: InputMaybe<IngredientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IngredientCreateOrConnectWithoutMealIngredientsInput>;
  create?: InputMaybe<IngredientCreateWithoutMealIngredientsInput>;
  update?: InputMaybe<IngredientUpdateToOneWithWhereWithoutMealIngredientsInput>;
  upsert?: InputMaybe<IngredientUpsertWithoutMealIngredientsInput>;
};

export type IngredientUpdateOneRequiredWithoutNutritionsNestedInput = {
  connect?: InputMaybe<IngredientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IngredientCreateOrConnectWithoutNutritionsInput>;
  create?: InputMaybe<IngredientCreateWithoutNutritionsInput>;
  update?: InputMaybe<IngredientUpdateToOneWithWhereWithoutNutritionsInput>;
  upsert?: InputMaybe<IngredientUpsertWithoutNutritionsInput>;
};

export type IngredientUpdateToOneWithWhereWithoutMealIngredientsInput = {
  data: IngredientUpdateWithoutMealIngredientsInput;
  where?: InputMaybe<IngredientWhereInput>;
};

export type IngredientUpdateToOneWithWhereWithoutNutritionsInput = {
  data: IngredientUpdateWithoutNutritionsInput;
  where?: InputMaybe<IngredientWhereInput>;
};

export type IngredientUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: IngredientUpdateWithoutCreatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: IngredientUpdateWithoutUpdatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithoutCreatedByUserInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutIngredientNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutritions?: InputMaybe<NutritionUpdateManyWithoutIngredientNestedInput>;
};

export type IngredientUpdateWithoutMealIngredientsInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutritions?: InputMaybe<NutritionUpdateManyWithoutIngredientNestedInput>;
};

export type IngredientUpdateWithoutNutritionsInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutIngredientNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutUpdatedByUserInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutIngredientNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutritions?: InputMaybe<NutritionUpdateManyWithoutIngredientNestedInput>;
};

export type IngredientUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: IngredientCreateWithoutCreatedByUserInput;
  update: IngredientUpdateWithoutCreatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: IngredientCreateWithoutUpdatedByUserInput;
  update: IngredientUpdateWithoutUpdatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithoutMealIngredientsInput = {
  create: IngredientCreateWithoutMealIngredientsInput;
  update: IngredientUpdateWithoutMealIngredientsInput;
  where?: InputMaybe<IngredientWhereInput>;
};

export type IngredientUpsertWithoutNutritionsInput = {
  create: IngredientCreateWithoutNutritionsInput;
  update: IngredientUpdateWithoutNutritionsInput;
  where?: InputMaybe<IngredientWhereInput>;
};

export type IngredientWhereInput = {
  AND?: InputMaybe<Array<IngredientWhereInput>>;
  NOT?: InputMaybe<Array<IngredientWhereInput>>;
  OR?: InputMaybe<Array<IngredientWhereInput>>;
  allergens?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  mealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nutritions?: InputMaybe<NutritionListRelationFilter>;
};

export type IngredientWhereUniqueInput = {
  AND?: InputMaybe<Array<IngredientWhereInput>>;
  NOT?: InputMaybe<Array<IngredientWhereInput>>;
  OR?: InputMaybe<Array<IngredientWhereInput>>;
  allergens?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  mealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nutritions?: InputMaybe<NutritionListRelationFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Meal = {
  _count: MealCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  description?: Maybe<Scalars['String']['output']>;
  fridayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  mealIngredients?: Maybe<Array<MealIngredient>>;
  mondayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  name: Scalars['String']['output'];
  saturdayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  sundayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  thursdayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  tuesdayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
  wednesdayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
};

export type MealCount = {
  fridayMealGroups: Scalars['Int']['output'];
  mealIngredients: Scalars['Int']['output'];
  mondayMealGroups: Scalars['Int']['output'];
  saturdayMealGroups: Scalars['Int']['output'];
  sundayMealGroups: Scalars['Int']['output'];
  thursdayMealGroups: Scalars['Int']['output'];
  tuesdayMealGroups: Scalars['Int']['output'];
  wednesdayMealGroups: Scalars['Int']['output'];
};

export type MealCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateManyCreatedByUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MealCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MealCreateManyUpdatedByUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MealCreateManyUpdatedByUserInputEnvelope = {
  data: Array<MealCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<MealCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealCreateManyCreatedByUserInputEnvelope>;
};

export type MealCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<MealCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealCreateManyUpdatedByUserInputEnvelope>;
};

export type MealCreateNestedOneWithoutFridayMealGroupsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutFridayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutFridayMealGroupsInput>;
};

export type MealCreateNestedOneWithoutMealIngredientsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutMealIngredientsInput>;
  create?: InputMaybe<MealCreateWithoutMealIngredientsInput>;
};

export type MealCreateNestedOneWithoutMondayMealGroupsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutMondayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutMondayMealGroupsInput>;
};

export type MealCreateNestedOneWithoutSaturdayMealGroupsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutSaturdayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutSaturdayMealGroupsInput>;
};

export type MealCreateNestedOneWithoutSundayMealGroupsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutSundayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutSundayMealGroupsInput>;
};

export type MealCreateNestedOneWithoutThursdayMealGroupsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutThursdayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutThursdayMealGroupsInput>;
};

export type MealCreateNestedOneWithoutTuesdayMealGroupsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutTuesdayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutTuesdayMealGroupsInput>;
};

export type MealCreateNestedOneWithoutWednesdayMealGroupsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutWednesdayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutWednesdayMealGroupsInput>;
};

export type MealCreateOrConnectWithoutCreatedByUserInput = {
  create: MealCreateWithoutCreatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutFridayMealGroupsInput = {
  create: MealCreateWithoutFridayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutMealIngredientsInput = {
  create: MealCreateWithoutMealIngredientsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutMondayMealGroupsInput = {
  create: MealCreateWithoutMondayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutSaturdayMealGroupsInput = {
  create: MealCreateWithoutSaturdayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutSundayMealGroupsInput = {
  create: MealCreateWithoutSundayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutThursdayMealGroupsInput = {
  create: MealCreateWithoutThursdayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutTuesdayMealGroupsInput = {
  create: MealCreateWithoutTuesdayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutUpdatedByUserInput = {
  create: MealCreateWithoutUpdatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutWednesdayMealGroupsInput = {
  create: MealCreateWithoutWednesdayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateWithoutCreatedByUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutFridayMealGroupsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutMealIngredientsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutMondayMealGroupsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutSaturdayMealGroupsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutSundayMealGroupsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutThursdayMealGroupsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutTuesdayMealGroupsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutUpdatedByUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutWednesdayMealGroupsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
};

export type MealIngredient = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  ingredient: Ingredient;
  ingredientId: Scalars['Int']['output'];
  meal: Meal;
  mealId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
  weightGrams: Scalars['Decimal']['output'];
};

export type MealIngredientCreateInput = {
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyCreatedByUserInput = {
  ingredientId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealIngredientCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealIngredientCreateManyIngredientInput = {
  mealId: Scalars['Int']['input'];
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyIngredientInputEnvelope = {
  data: Array<MealIngredientCreateManyIngredientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealIngredientCreateManyInput = {
  ingredientId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyMealInput = {
  ingredientId: Scalars['Int']['input'];
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyMealInputEnvelope = {
  data: Array<MealIngredientCreateManyMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealIngredientCreateManyUpdatedByUserInput = {
  ingredientId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyUpdatedByUserInputEnvelope = {
  data: Array<MealIngredientCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealIngredientCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealIngredientCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<MealIngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyCreatedByUserInputEnvelope>;
};

export type MealIngredientCreateNestedManyWithoutIngredientInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealIngredientCreateOrConnectWithoutIngredientInput>>;
  create?: InputMaybe<Array<MealIngredientCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyIngredientInputEnvelope>;
};

export type MealIngredientCreateNestedManyWithoutMealInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealIngredientCreateOrConnectWithoutMealInput>>;
  create?: InputMaybe<Array<MealIngredientCreateWithoutMealInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyMealInputEnvelope>;
};

export type MealIngredientCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealIngredientCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<MealIngredientCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyUpdatedByUserInputEnvelope>;
};

export type MealIngredientCreateOrConnectWithoutCreatedByUserInput = {
  create: MealIngredientCreateWithoutCreatedByUserInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientCreateOrConnectWithoutIngredientInput = {
  create: MealIngredientCreateWithoutIngredientInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientCreateOrConnectWithoutMealInput = {
  create: MealIngredientCreateWithoutMealInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientCreateOrConnectWithoutUpdatedByUserInput = {
  create: MealIngredientCreateWithoutUpdatedByUserInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientCreateWithoutCreatedByUserInput = {
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateWithoutIngredientInput = {
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateWithoutMealInput = {
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateWithoutUpdatedByUserInput = {
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientListRelationFilter = {
  every?: InputMaybe<MealIngredientWhereInput>;
  none?: InputMaybe<MealIngredientWhereInput>;
  some?: InputMaybe<MealIngredientWhereInput>;
};

export type MealIngredientMealIdIngredientIdCompoundUniqueInput = {
  ingredientId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
};

export type MealIngredientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MealIngredientOrderByWithRelationInput = {
  ingredient?: InputMaybe<IngredientOrderByWithRelationInput>;
  ingredientId?: InputMaybe<SortOrder>;
  meal?: InputMaybe<MealOrderByWithRelationInput>;
  mealId?: InputMaybe<SortOrder>;
  weightGrams?: InputMaybe<SortOrder>;
};

export enum MealIngredientScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  IngredientId = 'ingredientId',
  MealId = 'mealId',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  WeightGrams = 'weightGrams'
}

export type MealIngredientScalarWhereInput = {
  AND?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  NOT?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  OR?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  ingredientId?: InputMaybe<IntFilter>;
  mealId?: InputMaybe<IntFilter>;
  weightGrams?: InputMaybe<DecimalFilter>;
};

export type MealIngredientUpdateInput = {
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpdateManyMutationInput = {
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: MealIngredientUpdateManyMutationInput;
  where: MealIngredientScalarWhereInput;
};

export type MealIngredientUpdateManyWithWhereWithoutIngredientInput = {
  data: MealIngredientUpdateManyMutationInput;
  where: MealIngredientScalarWhereInput;
};

export type MealIngredientUpdateManyWithWhereWithoutMealInput = {
  data: MealIngredientUpdateManyMutationInput;
  where: MealIngredientScalarWhereInput;
};

export type MealIngredientUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: MealIngredientUpdateManyMutationInput;
  where: MealIngredientScalarWhereInput;
};

export type MealIngredientUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealIngredientCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<MealIngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<MealIngredientUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<MealIngredientUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<MealIngredientUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type MealIngredientUpdateManyWithoutIngredientNestedInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealIngredientCreateOrConnectWithoutIngredientInput>>;
  create?: InputMaybe<Array<MealIngredientCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyIngredientInputEnvelope>;
  delete?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<MealIngredientUpdateWithWhereUniqueWithoutIngredientInput>>;
  updateMany?: InputMaybe<Array<MealIngredientUpdateManyWithWhereWithoutIngredientInput>>;
  upsert?: InputMaybe<Array<MealIngredientUpsertWithWhereUniqueWithoutIngredientInput>>;
};

export type MealIngredientUpdateManyWithoutMealNestedInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealIngredientCreateOrConnectWithoutMealInput>>;
  create?: InputMaybe<Array<MealIngredientCreateWithoutMealInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyMealInputEnvelope>;
  delete?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<MealIngredientUpdateWithWhereUniqueWithoutMealInput>>;
  updateMany?: InputMaybe<Array<MealIngredientUpdateManyWithWhereWithoutMealInput>>;
  upsert?: InputMaybe<Array<MealIngredientUpsertWithWhereUniqueWithoutMealInput>>;
};

export type MealIngredientUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealIngredientCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<MealIngredientCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<MealIngredientUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<MealIngredientUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<MealIngredientUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type MealIngredientUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: MealIngredientUpdateWithoutCreatedByUserInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
  data: MealIngredientUpdateWithoutIngredientInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientUpdateWithWhereUniqueWithoutMealInput = {
  data: MealIngredientUpdateWithoutMealInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: MealIngredientUpdateWithoutUpdatedByUserInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientUpdateWithoutCreatedByUserInput = {
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpdateWithoutIngredientInput = {
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpdateWithoutMealInput = {
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpdateWithoutUpdatedByUserInput = {
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: MealIngredientCreateWithoutCreatedByUserInput;
  update: MealIngredientUpdateWithoutCreatedByUserInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
  create: MealIngredientCreateWithoutIngredientInput;
  update: MealIngredientUpdateWithoutIngredientInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientUpsertWithWhereUniqueWithoutMealInput = {
  create: MealIngredientCreateWithoutMealInput;
  update: MealIngredientUpdateWithoutMealInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: MealIngredientCreateWithoutUpdatedByUserInput;
  update: MealIngredientUpdateWithoutUpdatedByUserInput;
  where: MealIngredientWhereUniqueInput;
};

export type MealIngredientWhereInput = {
  AND?: InputMaybe<Array<MealIngredientWhereInput>>;
  NOT?: InputMaybe<Array<MealIngredientWhereInput>>;
  OR?: InputMaybe<Array<MealIngredientWhereInput>>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  meal?: InputMaybe<MealRelationFilter>;
  mealId?: InputMaybe<IntFilter>;
  weightGrams?: InputMaybe<DecimalFilter>;
};

export type MealIngredientWhereUniqueInput = {
  AND?: InputMaybe<Array<MealIngredientWhereInput>>;
  NOT?: InputMaybe<Array<MealIngredientWhereInput>>;
  OR?: InputMaybe<Array<MealIngredientWhereInput>>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  meal?: InputMaybe<MealRelationFilter>;
  mealId?: InputMaybe<IntFilter>;
  mealId_ingredientId?: InputMaybe<MealIngredientMealIdIngredientIdCompoundUniqueInput>;
  weightGrams?: InputMaybe<DecimalFilter>;
};

export type MealListRelationFilter = {
  every?: InputMaybe<MealWhereInput>;
  none?: InputMaybe<MealWhereInput>;
  some?: InputMaybe<MealWhereInput>;
};

export type MealNullableRelationFilter = {
  is?: InputMaybe<MealWhereInput>;
  isNot?: InputMaybe<MealWhereInput>;
};

export type MealOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MealOrderByWithRelationInput = {
  description?: InputMaybe<SortOrderInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  mealIngredients?: InputMaybe<MealIngredientOrderByRelationAggregateInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
};

export type MealRelationFilter = {
  is?: InputMaybe<MealWhereInput>;
  isNot?: InputMaybe<MealWhereInput>;
};

export enum MealScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type MealScalarWhereInput = {
  AND?: InputMaybe<Array<MealScalarWhereInput>>;
  NOT?: InputMaybe<Array<MealScalarWhereInput>>;
  OR?: InputMaybe<Array<MealScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MealUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<MealCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<Array<MealUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<MealUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<MealUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type MealUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<MealCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<Array<MealUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<MealUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<MealUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type MealUpdateOneRequiredWithoutMealIngredientsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutMealIngredientsInput>;
  create?: InputMaybe<MealCreateWithoutMealIngredientsInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutMealIngredientsInput>;
  upsert?: InputMaybe<MealUpsertWithoutMealIngredientsInput>;
};

export type MealUpdateOneWithoutFridayMealGroupsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutFridayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutFridayMealGroupsInput>;
  delete?: InputMaybe<MealWhereInput>;
  disconnect?: InputMaybe<MealWhereInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutFridayMealGroupsInput>;
  upsert?: InputMaybe<MealUpsertWithoutFridayMealGroupsInput>;
};

export type MealUpdateOneWithoutMondayMealGroupsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutMondayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutMondayMealGroupsInput>;
  delete?: InputMaybe<MealWhereInput>;
  disconnect?: InputMaybe<MealWhereInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutMondayMealGroupsInput>;
  upsert?: InputMaybe<MealUpsertWithoutMondayMealGroupsInput>;
};

export type MealUpdateOneWithoutSaturdayMealGroupsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutSaturdayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutSaturdayMealGroupsInput>;
  delete?: InputMaybe<MealWhereInput>;
  disconnect?: InputMaybe<MealWhereInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutSaturdayMealGroupsInput>;
  upsert?: InputMaybe<MealUpsertWithoutSaturdayMealGroupsInput>;
};

export type MealUpdateOneWithoutSundayMealGroupsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutSundayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutSundayMealGroupsInput>;
  delete?: InputMaybe<MealWhereInput>;
  disconnect?: InputMaybe<MealWhereInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutSundayMealGroupsInput>;
  upsert?: InputMaybe<MealUpsertWithoutSundayMealGroupsInput>;
};

export type MealUpdateOneWithoutThursdayMealGroupsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutThursdayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutThursdayMealGroupsInput>;
  delete?: InputMaybe<MealWhereInput>;
  disconnect?: InputMaybe<MealWhereInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutThursdayMealGroupsInput>;
  upsert?: InputMaybe<MealUpsertWithoutThursdayMealGroupsInput>;
};

export type MealUpdateOneWithoutTuesdayMealGroupsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutTuesdayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutTuesdayMealGroupsInput>;
  delete?: InputMaybe<MealWhereInput>;
  disconnect?: InputMaybe<MealWhereInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutTuesdayMealGroupsInput>;
  upsert?: InputMaybe<MealUpsertWithoutTuesdayMealGroupsInput>;
};

export type MealUpdateOneWithoutWednesdayMealGroupsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutWednesdayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutWednesdayMealGroupsInput>;
  delete?: InputMaybe<MealWhereInput>;
  disconnect?: InputMaybe<MealWhereInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutWednesdayMealGroupsInput>;
  upsert?: InputMaybe<MealUpsertWithoutWednesdayMealGroupsInput>;
};

export type MealUpdateToOneWithWhereWithoutFridayMealGroupsInput = {
  data: MealUpdateWithoutFridayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateToOneWithWhereWithoutMealIngredientsInput = {
  data: MealUpdateWithoutMealIngredientsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateToOneWithWhereWithoutMondayMealGroupsInput = {
  data: MealUpdateWithoutMondayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateToOneWithWhereWithoutSaturdayMealGroupsInput = {
  data: MealUpdateWithoutSaturdayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateToOneWithWhereWithoutSundayMealGroupsInput = {
  data: MealUpdateWithoutSundayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateToOneWithWhereWithoutThursdayMealGroupsInput = {
  data: MealUpdateWithoutThursdayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateToOneWithWhereWithoutTuesdayMealGroupsInput = {
  data: MealUpdateWithoutTuesdayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateToOneWithWhereWithoutWednesdayMealGroupsInput = {
  data: MealUpdateWithoutWednesdayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: MealUpdateWithoutCreatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: MealUpdateWithoutUpdatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithoutCreatedByUserInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutFridayMealGroupsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutMealIngredientsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutMondayMealGroupsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutSaturdayMealGroupsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutSundayMealGroupsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutThursdayMealGroupsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutTuesdayMealGroupsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutUpdatedByUserInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutWednesdayMealGroupsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
};

export type MealUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: MealCreateWithoutCreatedByUserInput;
  update: MealUpdateWithoutCreatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: MealCreateWithoutUpdatedByUserInput;
  update: MealUpdateWithoutUpdatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithoutFridayMealGroupsInput = {
  create: MealCreateWithoutFridayMealGroupsInput;
  update: MealUpdateWithoutFridayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpsertWithoutMealIngredientsInput = {
  create: MealCreateWithoutMealIngredientsInput;
  update: MealUpdateWithoutMealIngredientsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpsertWithoutMondayMealGroupsInput = {
  create: MealCreateWithoutMondayMealGroupsInput;
  update: MealUpdateWithoutMondayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpsertWithoutSaturdayMealGroupsInput = {
  create: MealCreateWithoutSaturdayMealGroupsInput;
  update: MealUpdateWithoutSaturdayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpsertWithoutSundayMealGroupsInput = {
  create: MealCreateWithoutSundayMealGroupsInput;
  update: MealUpdateWithoutSundayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpsertWithoutThursdayMealGroupsInput = {
  create: MealCreateWithoutThursdayMealGroupsInput;
  update: MealUpdateWithoutThursdayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpsertWithoutTuesdayMealGroupsInput = {
  create: MealCreateWithoutTuesdayMealGroupsInput;
  update: MealUpdateWithoutTuesdayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpsertWithoutWednesdayMealGroupsInput = {
  create: MealCreateWithoutWednesdayMealGroupsInput;
  update: MealUpdateWithoutWednesdayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealWhereInput = {
  AND?: InputMaybe<Array<MealWhereInput>>;
  NOT?: InputMaybe<Array<MealWhereInput>>;
  OR?: InputMaybe<Array<MealWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  mealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
};

export type MealWhereUniqueInput = {
  AND?: InputMaybe<Array<MealWhereInput>>;
  NOT?: InputMaybe<Array<MealWhereInput>>;
  OR?: InputMaybe<Array<MealWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  mealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
};

export type Mutation = {
  changePasswordUser?: Maybe<Scalars['Boolean']['output']>;
  createIngredientAdmin?: Maybe<Ingredient>;
  createManyIngredientsAdmin?: Maybe<Array<Ingredient>>;
  createManyMealIngredientsAdmin?: Maybe<Array<MealIngredient>>;
  createManyMealsAdmin?: Maybe<Array<Meal>>;
  createManyNutritionsAdmin?: Maybe<Array<Nutrition>>;
  createManyUsersAdmin?: Maybe<Array<User>>;
  createManyWeeklyMealGroupsAdmin?: Maybe<Array<WeeklyMealGroup>>;
  createMealAdmin?: Maybe<Meal>;
  createMealIngredientAdmin?: Maybe<MealIngredient>;
  createNutritionAdmin?: Maybe<Nutrition>;
  createUserAdmin?: Maybe<User>;
  createWeeklyMealGroupAdmin?: Maybe<WeeklyMealGroup>;
  deleteAccountTokensUser: Scalars['Boolean']['output'];
  deleteIngredientAdmin?: Maybe<Ingredient>;
  deleteManyIngredientsAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyMealIngredientsAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyMealsAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyNutritionsAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyUsersAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyWeeklyMealGroupsAdmin?: Maybe<Scalars['Int']['output']>;
  deleteMealAdmin?: Maybe<Meal>;
  deleteMealIngredientAdmin?: Maybe<MealIngredient>;
  deleteNutritionAdmin?: Maybe<Nutrition>;
  deleteUserAdmin?: Maybe<User>;
  deleteWeeklyMealGroupAdmin?: Maybe<WeeklyMealGroup>;
  loginUser?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  registerUser?: Maybe<User>;
  updateIngredientAdmin?: Maybe<Ingredient>;
  updateManyIngredientsAdmin?: Maybe<Array<Ingredient>>;
  updateManyMealIngredientsAdmin?: Maybe<Array<MealIngredient>>;
  updateManyMealsAdmin?: Maybe<Array<Meal>>;
  updateManyNutritionsAdmin?: Maybe<Array<Nutrition>>;
  updateManyUsersAdmin?: Maybe<Array<User>>;
  updateManyWeeklyMealGroupsAdmin?: Maybe<Array<WeeklyMealGroup>>;
  updateMealAdmin?: Maybe<Meal>;
  updateMealIngredientAdmin?: Maybe<MealIngredient>;
  updateNutritionAdmin?: Maybe<Nutrition>;
  updateUserAdmin?: Maybe<User>;
  updateWeeklyMealGroupAdmin?: Maybe<WeeklyMealGroup>;
  upsertIngredientAdmin?: Maybe<Ingredient>;
  upsertMealAdmin?: Maybe<Meal>;
  upsertMealIngredientAdmin?: Maybe<MealIngredient>;
  upsertNutritionAdmin?: Maybe<Nutrition>;
  upsertUserAdmin?: Maybe<User>;
  upsertWeeklyMealGroupAdmin?: Maybe<WeeklyMealGroup>;
};


export type MutationChangePasswordUserArgs = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateIngredientAdminArgs = {
  data: IngredientCreateInput;
};


export type MutationCreateManyIngredientsAdminArgs = {
  data: Array<IngredientCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMealIngredientsAdminArgs = {
  data: Array<MealIngredientCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMealsAdminArgs = {
  data: Array<MealCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyNutritionsAdminArgs = {
  data: Array<NutritionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUsersAdminArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyWeeklyMealGroupsAdminArgs = {
  data: Array<WeeklyMealGroupCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMealAdminArgs = {
  data: MealCreateInput;
};


export type MutationCreateMealIngredientAdminArgs = {
  data: MealIngredientCreateInput;
};


export type MutationCreateNutritionAdminArgs = {
  data: NutritionCreateInput;
};


export type MutationCreateUserAdminArgs = {
  data: UserCreateInput;
};


export type MutationCreateWeeklyMealGroupAdminArgs = {
  data: WeeklyMealGroupCreateInput;
};


export type MutationDeleteIngredientAdminArgs = {
  where: IngredientWhereUniqueInput;
};


export type MutationDeleteManyIngredientsAdminArgs = {
  where?: InputMaybe<IngredientWhereInput>;
};


export type MutationDeleteManyMealIngredientsAdminArgs = {
  where?: InputMaybe<MealIngredientWhereInput>;
};


export type MutationDeleteManyMealsAdminArgs = {
  where?: InputMaybe<MealWhereInput>;
};


export type MutationDeleteManyNutritionsAdminArgs = {
  where?: InputMaybe<NutritionWhereInput>;
};


export type MutationDeleteManyUsersAdminArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyWeeklyMealGroupsAdminArgs = {
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
};


export type MutationDeleteMealAdminArgs = {
  where: MealWhereUniqueInput;
};


export type MutationDeleteMealIngredientAdminArgs = {
  where: MealIngredientWhereUniqueInput;
};


export type MutationDeleteNutritionAdminArgs = {
  where: NutritionWhereUniqueInput;
};


export type MutationDeleteUserAdminArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteWeeklyMealGroupAdminArgs = {
  where: WeeklyMealGroupWhereUniqueInput;
};


export type MutationLoginUserArgs = {
  data: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  data: RegisterUserInput;
};


export type MutationUpdateIngredientAdminArgs = {
  data: IngredientUpdateInput;
  where: IngredientWhereUniqueInput;
};


export type MutationUpdateManyIngredientsAdminArgs = {
  data: IngredientUpdateManyMutationInput;
  where?: InputMaybe<IngredientWhereInput>;
};


export type MutationUpdateManyMealIngredientsAdminArgs = {
  data: MealIngredientUpdateManyMutationInput;
  where?: InputMaybe<MealIngredientWhereInput>;
};


export type MutationUpdateManyMealsAdminArgs = {
  data: MealUpdateManyMutationInput;
  where?: InputMaybe<MealWhereInput>;
};


export type MutationUpdateManyNutritionsAdminArgs = {
  data: NutritionUpdateManyMutationInput;
  where?: InputMaybe<NutritionWhereInput>;
};


export type MutationUpdateManyUsersAdminArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyWeeklyMealGroupsAdminArgs = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
};


export type MutationUpdateMealAdminArgs = {
  data: MealUpdateInput;
  where: MealWhereUniqueInput;
};


export type MutationUpdateMealIngredientAdminArgs = {
  data: MealIngredientUpdateInput;
  where: MealIngredientWhereUniqueInput;
};


export type MutationUpdateNutritionAdminArgs = {
  data: NutritionUpdateInput;
  where: NutritionWhereUniqueInput;
};


export type MutationUpdateUserAdminArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateWeeklyMealGroupAdminArgs = {
  data: WeeklyMealGroupUpdateInput;
  where: WeeklyMealGroupWhereUniqueInput;
};


export type MutationUpsertIngredientAdminArgs = {
  create: IngredientCreateInput;
  update: IngredientUpdateInput;
  where: IngredientWhereUniqueInput;
};


export type MutationUpsertMealAdminArgs = {
  create: MealCreateInput;
  update: MealUpdateInput;
  where: MealWhereUniqueInput;
};


export type MutationUpsertMealIngredientAdminArgs = {
  create: MealIngredientCreateInput;
  update: MealIngredientUpdateInput;
  where: MealIngredientWhereUniqueInput;
};


export type MutationUpsertNutritionAdminArgs = {
  create: NutritionCreateInput;
  update: NutritionUpdateInput;
  where: NutritionWhereUniqueInput;
};


export type MutationUpsertUserAdminArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertWeeklyMealGroupAdminArgs = {
  create: WeeklyMealGroupCreateInput;
  update: WeeklyMealGroupUpdateInput;
  where: WeeklyMealGroupWhereUniqueInput;
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

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedEnumUserRoleNameFilter = {
  equals?: InputMaybe<UserRoleName>;
  in?: InputMaybe<Array<UserRoleName>>;
  not?: InputMaybe<NestedEnumUserRoleNameFilter>;
  notIn?: InputMaybe<Array<UserRoleName>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
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

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Nutrition = {
  calories: Scalars['Decimal']['output'];
  carbohydrates: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  fats: Scalars['Decimal']['output'];
  fiber: Scalars['Decimal']['output'];
  ingredient: Ingredient;
  ingredientId: Scalars['Int']['output'];
  protein: Scalars['Decimal']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type NutritionCreateInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredient: IngredientCreateNestedOneWithoutNutritionsInput;
  protein: Scalars['Decimal']['input'];
};

export type NutritionCreateManyCreatedByUserInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredientId: Scalars['Int']['input'];
  protein: Scalars['Decimal']['input'];
};

export type NutritionCreateManyCreatedByUserInputEnvelope = {
  data: Array<NutritionCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NutritionCreateManyIngredientInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  protein: Scalars['Decimal']['input'];
};

export type NutritionCreateManyIngredientInputEnvelope = {
  data: Array<NutritionCreateManyIngredientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NutritionCreateManyInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredientId: Scalars['Int']['input'];
  protein: Scalars['Decimal']['input'];
};

export type NutritionCreateManyUpdatedByUserInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredientId: Scalars['Int']['input'];
  protein: Scalars['Decimal']['input'];
};

export type NutritionCreateManyUpdatedByUserInputEnvelope = {
  data: Array<NutritionCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NutritionCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutritionCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<NutritionCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<NutritionCreateManyCreatedByUserInputEnvelope>;
};

export type NutritionCreateNestedManyWithoutIngredientInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutritionCreateOrConnectWithoutIngredientInput>>;
  create?: InputMaybe<Array<NutritionCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<NutritionCreateManyIngredientInputEnvelope>;
};

export type NutritionCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutritionCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<NutritionCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<NutritionCreateManyUpdatedByUserInputEnvelope>;
};

export type NutritionCreateOrConnectWithoutCreatedByUserInput = {
  create: NutritionCreateWithoutCreatedByUserInput;
  where: NutritionWhereUniqueInput;
};

export type NutritionCreateOrConnectWithoutIngredientInput = {
  create: NutritionCreateWithoutIngredientInput;
  where: NutritionWhereUniqueInput;
};

export type NutritionCreateOrConnectWithoutUpdatedByUserInput = {
  create: NutritionCreateWithoutUpdatedByUserInput;
  where: NutritionWhereUniqueInput;
};

export type NutritionCreateWithoutCreatedByUserInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredient: IngredientCreateNestedOneWithoutNutritionsInput;
  protein: Scalars['Decimal']['input'];
};

export type NutritionCreateWithoutIngredientInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  protein: Scalars['Decimal']['input'];
};

export type NutritionCreateWithoutUpdatedByUserInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredient: IngredientCreateNestedOneWithoutNutritionsInput;
  protein: Scalars['Decimal']['input'];
};

export type NutritionListRelationFilter = {
  every?: InputMaybe<NutritionWhereInput>;
  none?: InputMaybe<NutritionWhereInput>;
  some?: InputMaybe<NutritionWhereInput>;
};

export type NutritionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NutritionOrderByWithRelationInput = {
  calories?: InputMaybe<SortOrder>;
  carbohydrates?: InputMaybe<SortOrder>;
  fats?: InputMaybe<SortOrder>;
  fiber?: InputMaybe<SortOrder>;
  ingredient?: InputMaybe<IngredientOrderByWithRelationInput>;
  ingredientId?: InputMaybe<SortOrder>;
  protein?: InputMaybe<SortOrder>;
};

export enum NutritionScalarFieldEnum {
  Calories = 'calories',
  Carbohydrates = 'carbohydrates',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Fats = 'fats',
  Fiber = 'fiber',
  IngredientId = 'ingredientId',
  Protein = 'protein',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type NutritionScalarWhereInput = {
  AND?: InputMaybe<Array<NutritionScalarWhereInput>>;
  NOT?: InputMaybe<Array<NutritionScalarWhereInput>>;
  OR?: InputMaybe<Array<NutritionScalarWhereInput>>;
  calories?: InputMaybe<DecimalFilter>;
  carbohydrates?: InputMaybe<DecimalFilter>;
  fats?: InputMaybe<DecimalFilter>;
  fiber?: InputMaybe<DecimalFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  protein?: InputMaybe<DecimalFilter>;
};

export type NutritionUpdateInput = {
  calories?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutNutritionsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type NutritionUpdateManyMutationInput = {
  calories?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type NutritionUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: NutritionUpdateManyMutationInput;
  where: NutritionScalarWhereInput;
};

export type NutritionUpdateManyWithWhereWithoutIngredientInput = {
  data: NutritionUpdateManyMutationInput;
  where: NutritionScalarWhereInput;
};

export type NutritionUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: NutritionUpdateManyMutationInput;
  where: NutritionScalarWhereInput;
};

export type NutritionUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutritionCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<NutritionCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<NutritionCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NutritionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  set?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  update?: InputMaybe<Array<NutritionUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<NutritionUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<NutritionUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type NutritionUpdateManyWithoutIngredientNestedInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutritionCreateOrConnectWithoutIngredientInput>>;
  create?: InputMaybe<Array<NutritionCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<NutritionCreateManyIngredientInputEnvelope>;
  delete?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NutritionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  set?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  update?: InputMaybe<Array<NutritionUpdateWithWhereUniqueWithoutIngredientInput>>;
  updateMany?: InputMaybe<Array<NutritionUpdateManyWithWhereWithoutIngredientInput>>;
  upsert?: InputMaybe<Array<NutritionUpsertWithWhereUniqueWithoutIngredientInput>>;
};

export type NutritionUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NutritionCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<NutritionCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<NutritionCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NutritionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  set?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  update?: InputMaybe<Array<NutritionUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<NutritionUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<NutritionUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type NutritionUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: NutritionUpdateWithoutCreatedByUserInput;
  where: NutritionWhereUniqueInput;
};

export type NutritionUpdateWithWhereUniqueWithoutIngredientInput = {
  data: NutritionUpdateWithoutIngredientInput;
  where: NutritionWhereUniqueInput;
};

export type NutritionUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: NutritionUpdateWithoutUpdatedByUserInput;
  where: NutritionWhereUniqueInput;
};

export type NutritionUpdateWithoutCreatedByUserInput = {
  calories?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutNutritionsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type NutritionUpdateWithoutIngredientInput = {
  calories?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type NutritionUpdateWithoutUpdatedByUserInput = {
  calories?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutNutritionsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type NutritionUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: NutritionCreateWithoutCreatedByUserInput;
  update: NutritionUpdateWithoutCreatedByUserInput;
  where: NutritionWhereUniqueInput;
};

export type NutritionUpsertWithWhereUniqueWithoutIngredientInput = {
  create: NutritionCreateWithoutIngredientInput;
  update: NutritionUpdateWithoutIngredientInput;
  where: NutritionWhereUniqueInput;
};

export type NutritionUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: NutritionCreateWithoutUpdatedByUserInput;
  update: NutritionUpdateWithoutUpdatedByUserInput;
  where: NutritionWhereUniqueInput;
};

export type NutritionWhereInput = {
  AND?: InputMaybe<Array<NutritionWhereInput>>;
  NOT?: InputMaybe<Array<NutritionWhereInput>>;
  OR?: InputMaybe<Array<NutritionWhereInput>>;
  calories?: InputMaybe<DecimalFilter>;
  carbohydrates?: InputMaybe<DecimalFilter>;
  fats?: InputMaybe<DecimalFilter>;
  fiber?: InputMaybe<DecimalFilter>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  protein?: InputMaybe<DecimalFilter>;
};

export type NutritionWhereUniqueInput = {
  AND?: InputMaybe<Array<NutritionWhereInput>>;
  NOT?: InputMaybe<Array<NutritionWhereInput>>;
  OR?: InputMaybe<Array<NutritionWhereInput>>;
  calories?: InputMaybe<DecimalFilter>;
  carbohydrates?: InputMaybe<DecimalFilter>;
  fats?: InputMaybe<DecimalFilter>;
  fiber?: InputMaybe<DecimalFilter>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<Scalars['Int']['input']>;
  protein?: InputMaybe<DecimalFilter>;
};

export type Query = {
  getAllIngredientsAdmin?: Maybe<Array<Ingredient>>;
  getAllMealIngredientsAdmin?: Maybe<Array<MealIngredient>>;
  getAllMealsAdmin?: Maybe<Array<Meal>>;
  getAllNutritionsAdmin?: Maybe<Array<Nutrition>>;
  getAllUsersAdmin?: Maybe<Array<User>>;
  getAllWeeklyMealGroupsAdmin?: Maybe<Array<WeeklyMealGroup>>;
  getIngredientAdmin?: Maybe<Ingredient>;
  getMealAdmin?: Maybe<Meal>;
  getMealIngredientAdmin?: Maybe<MealIngredient>;
  getNutritionAdmin?: Maybe<Nutrition>;
  getUserAdmin?: Maybe<User>;
  getWeeklyMealGroupAdmin?: Maybe<WeeklyMealGroup>;
  me?: Maybe<User>;
};


export type QueryGetAllIngredientsAdminArgs = {
  cursor?: InputMaybe<IngredientWhereUniqueInput>;
  distinct?: InputMaybe<Array<IngredientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IngredientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IngredientWhereInput>;
};


export type QueryGetAllMealIngredientsAdminArgs = {
  cursor?: InputMaybe<MealIngredientWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealIngredientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealIngredientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MealIngredientWhereInput>;
};


export type QueryGetAllMealsAdminArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MealWhereInput>;
};


export type QueryGetAllNutritionsAdminArgs = {
  cursor?: InputMaybe<NutritionWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutritionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutritionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutritionWhereInput>;
};


export type QueryGetAllUsersAdminArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetAllWeeklyMealGroupsAdminArgs = {
  cursor?: InputMaybe<WeeklyMealGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<WeeklyMealGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WeeklyMealGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
};


export type QueryGetIngredientAdminArgs = {
  cursor?: InputMaybe<IngredientWhereUniqueInput>;
  distinct?: InputMaybe<Array<IngredientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IngredientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IngredientWhereInput>;
};


export type QueryGetMealAdminArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MealWhereInput>;
};


export type QueryGetMealIngredientAdminArgs = {
  cursor?: InputMaybe<MealIngredientWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealIngredientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealIngredientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MealIngredientWhereInput>;
};


export type QueryGetNutritionAdminArgs = {
  cursor?: InputMaybe<NutritionWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutritionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutritionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NutritionWhereInput>;
};


export type QueryGetUserAdminArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetWeeklyMealGroupAdminArgs = {
  cursor?: InputMaybe<WeeklyMealGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<WeeklyMealGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WeeklyMealGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

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

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  expiresIn: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type TokenCreateManyCreatedByUserInput = {
  expiresIn: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  token: Scalars['String']['input'];
};

export type TokenCreateManyCreatedByUserInputEnvelope = {
  data: Array<TokenCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TokenCreateManyUpdatedByUserInput = {
  expiresIn: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  token: Scalars['String']['input'];
};

export type TokenCreateManyUpdatedByUserInputEnvelope = {
  data: Array<TokenCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TokenCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TokenCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<TokenCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<TokenCreateManyCreatedByUserInputEnvelope>;
};

export type TokenCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TokenCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<TokenCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<TokenCreateManyUpdatedByUserInputEnvelope>;
};

export type TokenCreateOrConnectWithoutCreatedByUserInput = {
  create: TokenCreateWithoutCreatedByUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenCreateOrConnectWithoutUpdatedByUserInput = {
  create: TokenCreateWithoutUpdatedByUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenCreateWithoutCreatedByUserInput = {
  expiresIn: Scalars['DateTime']['input'];
  token: Scalars['String']['input'];
};

export type TokenCreateWithoutUpdatedByUserInput = {
  expiresIn: Scalars['DateTime']['input'];
  token: Scalars['String']['input'];
};

export type TokenListRelationFilter = {
  every?: InputMaybe<TokenWhereInput>;
  none?: InputMaybe<TokenWhereInput>;
  some?: InputMaybe<TokenWhereInput>;
};

export type TokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TokenScalarWhereInput = {
  AND?: InputMaybe<Array<TokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<TokenScalarWhereInput>>;
  OR?: InputMaybe<Array<TokenScalarWhereInput>>;
  expiresIn?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
};

export type TokenUpdateManyMutationInput = {
  expiresIn?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: TokenUpdateManyMutationInput;
  where: TokenScalarWhereInput;
};

export type TokenUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: TokenUpdateManyMutationInput;
  where: TokenScalarWhereInput;
};

export type TokenUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TokenCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<TokenCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<TokenCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<TokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  set?: InputMaybe<Array<TokenWhereUniqueInput>>;
  update?: InputMaybe<Array<TokenUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<TokenUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<TokenUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type TokenUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TokenCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<TokenCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<TokenCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<TokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  set?: InputMaybe<Array<TokenWhereUniqueInput>>;
  update?: InputMaybe<Array<TokenUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<TokenUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<TokenUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type TokenUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: TokenUpdateWithoutCreatedByUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: TokenUpdateWithoutUpdatedByUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenUpdateWithoutCreatedByUserInput = {
  expiresIn?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpdateWithoutUpdatedByUserInput = {
  expiresIn?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TokenUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: TokenCreateWithoutCreatedByUserInput;
  update: TokenUpdateWithoutCreatedByUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: TokenCreateWithoutUpdatedByUserInput;
  update: TokenUpdateWithoutUpdatedByUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  NOT?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  expiresIn?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
};

export type TokenWhereUniqueInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  NOT?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  expiresIn?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  UserRole?: Maybe<Array<UserRole>>;
  _count: UserCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdByUser?: Maybe<User>;
  createdIngredients?: Maybe<Array<Ingredient>>;
  createdMealIngredients?: Maybe<Array<MealIngredient>>;
  createdMeals?: Maybe<Array<Meal>>;
  createdNutritions?: Maybe<Array<Nutrition>>;
  createdToken?: Maybe<Array<Token>>;
  createdUser?: Maybe<Array<User>>;
  createdUserRoles?: Maybe<Array<UserRole>>;
  createdWeeklyMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastOnline: Scalars['DateTime']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['Int']['output']>;
  updatedByUser?: Maybe<User>;
  updatedIngredients?: Maybe<Array<Ingredient>>;
  updatedMealIngredients?: Maybe<Array<MealIngredient>>;
  updatedMeals?: Maybe<Array<Meal>>;
  updatedNutritions?: Maybe<Array<Nutrition>>;
  updatedToken?: Maybe<Array<Token>>;
  updatedUser?: Maybe<Array<User>>;
  updatedUserRoles?: Maybe<Array<UserRole>>;
  updatedWeeklyMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  username: Scalars['String']['output'];
};

export type UserCount = {
  UserRole: Scalars['Int']['output'];
  createdIngredients: Scalars['Int']['output'];
  createdMealIngredients: Scalars['Int']['output'];
  createdMeals: Scalars['Int']['output'];
  createdNutritions: Scalars['Int']['output'];
  createdToken: Scalars['Int']['output'];
  createdUser: Scalars['Int']['output'];
  createdUserRoles: Scalars['Int']['output'];
  createdWeeklyMealGroups: Scalars['Int']['output'];
  updatedIngredients: Scalars['Int']['output'];
  updatedMealIngredients: Scalars['Int']['output'];
  updatedMeals: Scalars['Int']['output'];
  updatedNutritions: Scalars['Int']['output'];
  updatedToken: Scalars['Int']['output'];
  updatedUser: Scalars['Int']['output'];
  updatedUserRoles: Scalars['Int']['output'];
  updatedWeeklyMealGroups: Scalars['Int']['output'];
};

export type UserCreateInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateManyCreatedByUserInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateManyCreatedByUserInputEnvelope = {
  data: Array<UserCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateManyInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateManyUpdatedByUserInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateManyUpdatedByUserInputEnvelope = {
  data: Array<UserCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserCreateManyCreatedByUserInputEnvelope>;
};

export type UserCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<UserCreateManyUpdatedByUserInputEnvelope>;
};

export type UserCreateNestedOneWithoutUserRoleInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserRoleInput>;
  create?: InputMaybe<UserCreateWithoutUserRoleInput>;
};

export type UserCreateOrConnectWithoutCreatedByUserInput = {
  create: UserCreateWithoutCreatedByUserInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedByUserInput = {
  create: UserCreateWithoutUpdatedByUserInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserRoleInput = {
  create: UserCreateWithoutUserRoleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCreatedByUserInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUpdatedByUserInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUserRoleInput = {
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  UserRole?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  createdIngredients?: InputMaybe<IngredientOrderByRelationAggregateInput>;
  createdMealIngredients?: InputMaybe<MealIngredientOrderByRelationAggregateInput>;
  createdMeals?: InputMaybe<MealOrderByRelationAggregateInput>;
  createdNutritions?: InputMaybe<NutritionOrderByRelationAggregateInput>;
  createdToken?: InputMaybe<TokenOrderByRelationAggregateInput>;
  createdUser?: InputMaybe<UserOrderByRelationAggregateInput>;
  createdUserRoles?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  lastOnline?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedIngredients?: InputMaybe<IngredientOrderByRelationAggregateInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientOrderByRelationAggregateInput>;
  updatedMeals?: InputMaybe<MealOrderByRelationAggregateInput>;
  updatedNutritions?: InputMaybe<NutritionOrderByRelationAggregateInput>;
  updatedToken?: InputMaybe<TokenOrderByRelationAggregateInput>;
  updatedUser?: InputMaybe<UserOrderByRelationAggregateInput>;
  updatedUserRoles?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserRole = {
  User: User;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  name: UserRoleName;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
  userId: Scalars['Int']['output'];
};

export type UserRoleCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: UserRoleName;
  userId: Scalars['Int']['input'];
};

export type UserRoleCreateManyCreatedByUserInputEnvelope = {
  data: Array<UserRoleCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserRoleCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: UserRoleName;
  userId: Scalars['Int']['input'];
};

export type UserRoleCreateManyUpdatedByUserInputEnvelope = {
  data: Array<UserRoleCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserRoleCreateManyUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: UserRoleName;
};

export type UserRoleCreateManyUserInputEnvelope = {
  data: Array<UserRoleCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserRoleCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyCreatedByUserInputEnvelope>;
};

export type UserRoleCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyUpdatedByUserInputEnvelope>;
};

export type UserRoleCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyUserInputEnvelope>;
};

export type UserRoleCreateOrConnectWithoutCreatedByUserInput = {
  create: UserRoleCreateWithoutCreatedByUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleCreateOrConnectWithoutUpdatedByUserInput = {
  create: UserRoleCreateWithoutUpdatedByUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleCreateOrConnectWithoutUserInput = {
  create: UserRoleCreateWithoutUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleCreateWithoutCreatedByUserInput = {
  User: UserCreateNestedOneWithoutUserRoleInput;
  name: UserRoleName;
};

export type UserRoleCreateWithoutUpdatedByUserInput = {
  User: UserCreateNestedOneWithoutUserRoleInput;
  name: UserRoleName;
};

export type UserRoleCreateWithoutUserInput = {
  name: UserRoleName;
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

export type UserRoleScalarWhereInput = {
  AND?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  OR?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserRoleUpdateManyMutationInput = {
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
};

export type UserRoleUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: UserRoleUpdateManyMutationInput;
  where: UserRoleScalarWhereInput;
};

export type UserRoleUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: UserRoleUpdateManyMutationInput;
  where: UserRoleScalarWhereInput;
};

export type UserRoleUpdateManyWithWhereWithoutUserInput = {
  data: UserRoleUpdateManyMutationInput;
  where: UserRoleScalarWhereInput;
};

export type UserRoleUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  set?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  update?: InputMaybe<Array<UserRoleUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<UserRoleUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<UserRoleUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type UserRoleUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  set?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  update?: InputMaybe<Array<UserRoleUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<UserRoleUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<UserRoleUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type UserRoleUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserRoleCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserRoleCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  set?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  update?: InputMaybe<Array<UserRoleUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserRoleUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserRoleUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserRoleUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: UserRoleUpdateWithoutCreatedByUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: UserRoleUpdateWithoutUpdatedByUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
  data: UserRoleUpdateWithoutUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpdateWithoutCreatedByUserInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutUserRoleNestedInput>;
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
};

export type UserRoleUpdateWithoutUpdatedByUserInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutUserRoleNestedInput>;
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
};

export type UserRoleUpdateWithoutUserInput = {
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
};

export type UserRoleUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: UserRoleCreateWithoutCreatedByUserInput;
  update: UserRoleUpdateWithoutCreatedByUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: UserRoleCreateWithoutUpdatedByUserInput;
  update: UserRoleUpdateWithoutUpdatedByUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
  create: UserRoleCreateWithoutUserInput;
  update: UserRoleUpdateWithoutUserInput;
  where: UserRoleWhereUniqueInput;
};

export type UserRoleUser_Role_UserId_Name_UniqueCompoundUniqueInput = {
  name: UserRoleName;
  userId: Scalars['Int']['input'];
};

export type UserRoleWhereInput = {
  AND?: InputMaybe<Array<UserRoleWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleWhereInput>>;
  OR?: InputMaybe<Array<UserRoleWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserRoleWhereUniqueInput = {
  AND?: InputMaybe<Array<UserRoleWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleWhereInput>>;
  OR?: InputMaybe<Array<UserRoleWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  userId?: InputMaybe<IntFilter>;
  user_role_userId_name_unique?: InputMaybe<UserRoleUser_Role_UserId_Name_UniqueCompoundUniqueInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Email = 'email',
  Id = 'id',
  Image = 'image',
  LastOnline = 'lastOnline',
  Password = 'password',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  Username = 'username'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastOnline?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<BoolFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserUpdateInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type UserUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<UserCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type UserUpdateOneRequiredWithoutUserRoleNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserRoleInput>;
  create?: InputMaybe<UserCreateWithoutUserRoleInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserRoleInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserRoleInput>;
};

export type UserUpdateToOneWithWhereWithoutUserRoleInput = {
  data: UserUpdateWithoutUserRoleInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: UserUpdateWithoutCreatedByUserInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: UserUpdateWithoutUpdatedByUserInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutCreatedByUserInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedByUserInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserRoleInput = {
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: UserCreateWithoutCreatedByUserInput;
  update: UserUpdateWithoutCreatedByUserInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: UserCreateWithoutUpdatedByUserInput;
  update: UserUpdateWithoutUpdatedByUserInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutUserRoleInput = {
  create: UserCreateWithoutUserRoleInput;
  update: UserUpdateWithoutUserRoleInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  UserRole?: InputMaybe<UserRoleListRelationFilter>;
  createdIngredients?: InputMaybe<IngredientListRelationFilter>;
  createdMealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  createdMeals?: InputMaybe<MealListRelationFilter>;
  createdNutritions?: InputMaybe<NutritionListRelationFilter>;
  createdToken?: InputMaybe<TokenListRelationFilter>;
  createdUser?: InputMaybe<UserListRelationFilter>;
  createdUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastOnline?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedIngredients?: InputMaybe<IngredientListRelationFilter>;
  updatedMealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  updatedMeals?: InputMaybe<MealListRelationFilter>;
  updatedNutritions?: InputMaybe<NutritionListRelationFilter>;
  updatedToken?: InputMaybe<TokenListRelationFilter>;
  updatedUser?: InputMaybe<UserListRelationFilter>;
  updatedUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  UserRole?: InputMaybe<UserRoleListRelationFilter>;
  createdIngredients?: InputMaybe<IngredientListRelationFilter>;
  createdMealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  createdMeals?: InputMaybe<MealListRelationFilter>;
  createdNutritions?: InputMaybe<NutritionListRelationFilter>;
  createdToken?: InputMaybe<TokenListRelationFilter>;
  createdUser?: InputMaybe<UserListRelationFilter>;
  createdUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  lastOnline?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedIngredients?: InputMaybe<IngredientListRelationFilter>;
  updatedMealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  updatedMeals?: InputMaybe<MealListRelationFilter>;
  updatedNutritions?: InputMaybe<NutritionListRelationFilter>;
  updatedToken?: InputMaybe<TokenListRelationFilter>;
  updatedUser?: InputMaybe<UserListRelationFilter>;
  updatedUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type WeeklyMealGroup = {
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  description?: Maybe<Scalars['String']['output']>;
  fridayMeal?: Maybe<Meal>;
  fridayMealId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  mondayMeal?: Maybe<Meal>;
  mondayMealId?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  orderIndex: Scalars['Int']['output'];
  saturdayMeal?: Maybe<Meal>;
  saturdayMealId?: Maybe<Scalars['Int']['output']>;
  sundayMeal?: Maybe<Meal>;
  sundayMealId?: Maybe<Scalars['Int']['output']>;
  thursdayMeal?: Maybe<Meal>;
  thursdayMealId?: Maybe<Scalars['Int']['output']>;
  tuesdayMeal?: Maybe<Meal>;
  tuesdayMealId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
  wednesdayMeal?: Maybe<Meal>;
  wednesdayMealId?: Maybe<Scalars['Int']['output']>;
  weekOfYear: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type WeeklyMealGroupCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyCreatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyCreatedByUserInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateManyFridayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyFridayMealInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManyFridayMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateManyInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyMondayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyMondayMealInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManyMondayMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateManySaturdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManySaturdayMealInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManySaturdayMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateManySundayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManySundayMealInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManySundayMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateManyThursdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyThursdayMealInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManyThursdayMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateManyTuesdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyTuesdayMealInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManyTuesdayMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateManyUpdatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyUpdatedByUserInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateManyWednesdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyWednesdayMealInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManyWednesdayMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyCreatedByUserInputEnvelope>;
};

export type WeeklyMealGroupCreateNestedManyWithoutFridayMealInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutFridayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutFridayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyFridayMealInputEnvelope>;
};

export type WeeklyMealGroupCreateNestedManyWithoutMondayMealInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutMondayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutMondayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyMondayMealInputEnvelope>;
};

export type WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutSaturdayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutSaturdayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManySaturdayMealInputEnvelope>;
};

export type WeeklyMealGroupCreateNestedManyWithoutSundayMealInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutSundayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutSundayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManySundayMealInputEnvelope>;
};

export type WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutThursdayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutThursdayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyThursdayMealInputEnvelope>;
};

export type WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutTuesdayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutTuesdayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyTuesdayMealInputEnvelope>;
};

export type WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyUpdatedByUserInputEnvelope>;
};

export type WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutWednesdayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutWednesdayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyWednesdayMealInputEnvelope>;
};

export type WeeklyMealGroupCreateOrConnectWithoutCreatedByUserInput = {
  create: WeeklyMealGroupCreateWithoutCreatedByUserInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutFridayMealInput = {
  create: WeeklyMealGroupCreateWithoutFridayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutMondayMealInput = {
  create: WeeklyMealGroupCreateWithoutMondayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutSaturdayMealInput = {
  create: WeeklyMealGroupCreateWithoutSaturdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutSundayMealInput = {
  create: WeeklyMealGroupCreateWithoutSundayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutThursdayMealInput = {
  create: WeeklyMealGroupCreateWithoutThursdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutTuesdayMealInput = {
  create: WeeklyMealGroupCreateWithoutTuesdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutUpdatedByUserInput = {
  create: WeeklyMealGroupCreateWithoutUpdatedByUserInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutWednesdayMealInput = {
  create: WeeklyMealGroupCreateWithoutWednesdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateWithoutCreatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutFridayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutMondayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutSaturdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutSundayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutThursdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutTuesdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutUpdatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutWednesdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupListRelationFilter = {
  every?: InputMaybe<WeeklyMealGroupWhereInput>;
  none?: InputMaybe<WeeklyMealGroupWhereInput>;
  some?: InputMaybe<WeeklyMealGroupWhereInput>;
};

export type WeeklyMealGroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WeeklyMealGroupOrderByWithRelationInput = {
  color?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  fridayMeal?: InputMaybe<MealOrderByWithRelationInput>;
  fridayMealId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  mondayMeal?: InputMaybe<MealOrderByWithRelationInput>;
  mondayMealId?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  orderIndex?: InputMaybe<SortOrder>;
  saturdayMeal?: InputMaybe<MealOrderByWithRelationInput>;
  saturdayMealId?: InputMaybe<SortOrderInput>;
  sundayMeal?: InputMaybe<MealOrderByWithRelationInput>;
  sundayMealId?: InputMaybe<SortOrderInput>;
  thursdayMeal?: InputMaybe<MealOrderByWithRelationInput>;
  thursdayMealId?: InputMaybe<SortOrderInput>;
  tuesdayMeal?: InputMaybe<MealOrderByWithRelationInput>;
  tuesdayMealId?: InputMaybe<SortOrderInput>;
  wednesdayMeal?: InputMaybe<MealOrderByWithRelationInput>;
  wednesdayMealId?: InputMaybe<SortOrderInput>;
  weekOfYear?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export enum WeeklyMealGroupScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  FridayMealId = 'fridayMealId',
  Id = 'id',
  MondayMealId = 'mondayMealId',
  Name = 'name',
  OrderIndex = 'orderIndex',
  SaturdayMealId = 'saturdayMealId',
  SundayMealId = 'sundayMealId',
  ThursdayMealId = 'thursdayMealId',
  TuesdayMealId = 'tuesdayMealId',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  WednesdayMealId = 'wednesdayMealId',
  WeekOfYear = 'weekOfYear',
  Year = 'year'
}

export type WeeklyMealGroupScalarWhereInput = {
  AND?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  NOT?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  OR?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  fridayMealId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  mondayMealId?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  orderIndex?: InputMaybe<IntFilter>;
  saturdayMealId?: InputMaybe<IntNullableFilter>;
  sundayMealId?: InputMaybe<IntNullableFilter>;
  thursdayMealId?: InputMaybe<IntNullableFilter>;
  tuesdayMealId?: InputMaybe<IntNullableFilter>;
  wednesdayMealId?: InputMaybe<IntNullableFilter>;
  weekOfYear?: InputMaybe<IntFilter>;
  year?: InputMaybe<IntFilter>;
};

export type WeeklyMealGroupUpdateInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateManyMutationInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where: WeeklyMealGroupScalarWhereInput;
};

export type WeeklyMealGroupUpdateManyWithWhereWithoutFridayMealInput = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where: WeeklyMealGroupScalarWhereInput;
};

export type WeeklyMealGroupUpdateManyWithWhereWithoutMondayMealInput = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where: WeeklyMealGroupScalarWhereInput;
};

export type WeeklyMealGroupUpdateManyWithWhereWithoutSaturdayMealInput = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where: WeeklyMealGroupScalarWhereInput;
};

export type WeeklyMealGroupUpdateManyWithWhereWithoutSundayMealInput = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where: WeeklyMealGroupScalarWhereInput;
};

export type WeeklyMealGroupUpdateManyWithWhereWithoutThursdayMealInput = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where: WeeklyMealGroupScalarWhereInput;
};

export type WeeklyMealGroupUpdateManyWithWhereWithoutTuesdayMealInput = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where: WeeklyMealGroupScalarWhereInput;
};

export type WeeklyMealGroupUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where: WeeklyMealGroupScalarWhereInput;
};

export type WeeklyMealGroupUpdateManyWithWhereWithoutWednesdayMealInput = {
  data: WeeklyMealGroupUpdateManyMutationInput;
  where: WeeklyMealGroupScalarWhereInput;
};

export type WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutFridayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutFridayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyFridayMealInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutFridayMealInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutFridayMealInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutFridayMealInput>>;
};

export type WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutMondayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutMondayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyMondayMealInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutMondayMealInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutMondayMealInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutMondayMealInput>>;
};

export type WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutSaturdayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutSaturdayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManySaturdayMealInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutSaturdayMealInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutSaturdayMealInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutSaturdayMealInput>>;
};

export type WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutSundayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutSundayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManySundayMealInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutSundayMealInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutSundayMealInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutSundayMealInput>>;
};

export type WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutThursdayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutThursdayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyThursdayMealInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutThursdayMealInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutThursdayMealInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutThursdayMealInput>>;
};

export type WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutTuesdayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutTuesdayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyTuesdayMealInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutTuesdayMealInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutTuesdayMealInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutTuesdayMealInput>>;
};

export type WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutWednesdayMealInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutWednesdayMealInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyWednesdayMealInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutWednesdayMealInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutWednesdayMealInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutWednesdayMealInput>>;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: WeeklyMealGroupUpdateWithoutCreatedByUserInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutFridayMealInput = {
  data: WeeklyMealGroupUpdateWithoutFridayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutMondayMealInput = {
  data: WeeklyMealGroupUpdateWithoutMondayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutSaturdayMealInput = {
  data: WeeklyMealGroupUpdateWithoutSaturdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutSundayMealInput = {
  data: WeeklyMealGroupUpdateWithoutSundayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutThursdayMealInput = {
  data: WeeklyMealGroupUpdateWithoutThursdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutTuesdayMealInput = {
  data: WeeklyMealGroupUpdateWithoutTuesdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: WeeklyMealGroupUpdateWithoutUpdatedByUserInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutWednesdayMealInput = {
  data: WeeklyMealGroupUpdateWithoutWednesdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithoutCreatedByUserInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutFridayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutMondayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutSaturdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutSundayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutThursdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutTuesdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutUpdatedByUserInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutWednesdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: WeeklyMealGroupCreateWithoutCreatedByUserInput;
  update: WeeklyMealGroupUpdateWithoutCreatedByUserInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutFridayMealInput = {
  create: WeeklyMealGroupCreateWithoutFridayMealInput;
  update: WeeklyMealGroupUpdateWithoutFridayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutMondayMealInput = {
  create: WeeklyMealGroupCreateWithoutMondayMealInput;
  update: WeeklyMealGroupUpdateWithoutMondayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutSaturdayMealInput = {
  create: WeeklyMealGroupCreateWithoutSaturdayMealInput;
  update: WeeklyMealGroupUpdateWithoutSaturdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutSundayMealInput = {
  create: WeeklyMealGroupCreateWithoutSundayMealInput;
  update: WeeklyMealGroupUpdateWithoutSundayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutThursdayMealInput = {
  create: WeeklyMealGroupCreateWithoutThursdayMealInput;
  update: WeeklyMealGroupUpdateWithoutThursdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutTuesdayMealInput = {
  create: WeeklyMealGroupCreateWithoutTuesdayMealInput;
  update: WeeklyMealGroupUpdateWithoutTuesdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: WeeklyMealGroupCreateWithoutUpdatedByUserInput;
  update: WeeklyMealGroupUpdateWithoutUpdatedByUserInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutWednesdayMealInput = {
  create: WeeklyMealGroupCreateWithoutWednesdayMealInput;
  update: WeeklyMealGroupUpdateWithoutWednesdayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupWhereInput = {
  AND?: InputMaybe<Array<WeeklyMealGroupWhereInput>>;
  NOT?: InputMaybe<Array<WeeklyMealGroupWhereInput>>;
  OR?: InputMaybe<Array<WeeklyMealGroupWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  fridayMeal?: InputMaybe<MealNullableRelationFilter>;
  fridayMealId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  mondayMeal?: InputMaybe<MealNullableRelationFilter>;
  mondayMealId?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  orderIndex?: InputMaybe<IntFilter>;
  saturdayMeal?: InputMaybe<MealNullableRelationFilter>;
  saturdayMealId?: InputMaybe<IntNullableFilter>;
  sundayMeal?: InputMaybe<MealNullableRelationFilter>;
  sundayMealId?: InputMaybe<IntNullableFilter>;
  thursdayMeal?: InputMaybe<MealNullableRelationFilter>;
  thursdayMealId?: InputMaybe<IntNullableFilter>;
  tuesdayMeal?: InputMaybe<MealNullableRelationFilter>;
  tuesdayMealId?: InputMaybe<IntNullableFilter>;
  wednesdayMeal?: InputMaybe<MealNullableRelationFilter>;
  wednesdayMealId?: InputMaybe<IntNullableFilter>;
  weekOfYear?: InputMaybe<IntFilter>;
  year?: InputMaybe<IntFilter>;
};

export type WeeklyMealGroupWhereUniqueInput = {
  AND?: InputMaybe<Array<WeeklyMealGroupWhereInput>>;
  NOT?: InputMaybe<Array<WeeklyMealGroupWhereInput>>;
  OR?: InputMaybe<Array<WeeklyMealGroupWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  fridayMeal?: InputMaybe<MealNullableRelationFilter>;
  fridayMealId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMeal?: InputMaybe<MealNullableRelationFilter>;
  mondayMealId?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  orderIndex?: InputMaybe<IntFilter>;
  saturdayMeal?: InputMaybe<MealNullableRelationFilter>;
  saturdayMealId?: InputMaybe<IntNullableFilter>;
  sundayMeal?: InputMaybe<MealNullableRelationFilter>;
  sundayMealId?: InputMaybe<IntNullableFilter>;
  thursdayMeal?: InputMaybe<MealNullableRelationFilter>;
  thursdayMealId?: InputMaybe<IntNullableFilter>;
  tuesdayMeal?: InputMaybe<MealNullableRelationFilter>;
  tuesdayMealId?: InputMaybe<IntNullableFilter>;
  wednesdayMeal?: InputMaybe<MealNullableRelationFilter>;
  wednesdayMealId?: InputMaybe<IntNullableFilter>;
  weekOfYear?: InputMaybe<IntFilter>;
  year?: InputMaybe<IntFilter>;
};

export type WeeklyMealGroupFragmentFragment = { id: number, name: string, color?: string | null, description?: string | null, year: number, weekOfYear: number, orderIndex: number, mondayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, tuesdayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, wednesdayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, thursdayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, fridayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, saturdayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, sundayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null } & { ' $fragmentName'?: 'WeeklyMealGroupFragmentFragment' };

export type RegisterUserMutationVariables = Exact<{
  data: RegisterUserInput;
}>;


export type RegisterUserMutation = { registerUser?: { id: number, username: string, email: string, lastOnline: any, status: boolean, createdAt: any, updatedAt: any, UserRole?: Array<{ id: number, name: UserRoleName }> | null } | null };

export type LoginUserMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginUserMutation = { loginUser?: { id: number, username: string, email: string, lastOnline: any, status: boolean, createdAt: any, updatedAt: any, UserRole?: Array<{ id: number, name: UserRoleName }> | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout?: boolean | null };

export type CreateWeeklyMealGroupAdminMutationVariables = Exact<{
  data: WeeklyMealGroupCreateInput;
}>;


export type CreateWeeklyMealGroupAdminMutation = { createWeeklyMealGroupAdmin?: { ' $fragmentRefs'?: { 'WeeklyMealGroupFragmentFragment': WeeklyMealGroupFragmentFragment } } | null };

export type DeleteWeeklyMealGroupAdminMutationVariables = Exact<{
  where: WeeklyMealGroupWhereUniqueInput;
}>;


export type DeleteWeeklyMealGroupAdminMutation = { deleteWeeklyMealGroupAdmin?: { ' $fragmentRefs'?: { 'WeeklyMealGroupFragmentFragment': WeeklyMealGroupFragmentFragment } } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { id: number, username: string, email: string, lastOnline: any, status: boolean, createdAt: any, updatedAt: any, UserRole?: Array<{ id: number, name: UserRoleName }> | null } | null };

export type GetAllWeeklyMealGroupsAdminQueryVariables = Exact<{
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
  orderBy?: InputMaybe<Array<WeeklyMealGroupOrderByWithRelationInput> | WeeklyMealGroupOrderByWithRelationInput>;
  cursor?: InputMaybe<WeeklyMealGroupWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<WeeklyMealGroupScalarFieldEnum> | WeeklyMealGroupScalarFieldEnum>;
}>;


export type GetAllWeeklyMealGroupsAdminQuery = { getAllWeeklyMealGroupsAdmin?: Array<{ ' $fragmentRefs'?: { 'WeeklyMealGroupFragmentFragment': WeeklyMealGroupFragmentFragment } }> | null };

export type GetAllMealsAdminQueryVariables = Exact<{
  where?: InputMaybe<MealWhereInput>;
  orderBy?: InputMaybe<Array<MealOrderByWithRelationInput> | MealOrderByWithRelationInput>;
  cursor?: InputMaybe<MealWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<MealScalarFieldEnum> | MealScalarFieldEnum>;
}>;


export type GetAllMealsAdminQuery = { getAllMealsAdmin?: Array<{ id: number, name: string }> | null };

export const WeeklyMealGroupFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeeklyMealGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<WeeklyMealGroupFragmentFragment, unknown>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UserRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UserRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const CreateWeeklyMealGroupAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWeeklyMealGroupAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWeeklyMealGroupAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WeeklyMealGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeeklyMealGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<CreateWeeklyMealGroupAdminMutation, CreateWeeklyMealGroupAdminMutationVariables>;
export const DeleteWeeklyMealGroupAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteWeeklyMealGroupAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteWeeklyMealGroupAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WeeklyMealGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeeklyMealGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<DeleteWeeklyMealGroupAdminMutation, DeleteWeeklyMealGroupAdminMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UserRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAllWeeklyMealGroupsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllWeeklyMealGroupsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllWeeklyMealGroupsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WeeklyMealGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeeklyMealGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetAllWeeklyMealGroupsAdminQuery, GetAllWeeklyMealGroupsAdminQueryVariables>;
export const GetAllMealsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMealsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MealWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MealOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MealWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MealScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllMealsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllMealsAdminQuery, GetAllMealsAdminQueryVariables>;