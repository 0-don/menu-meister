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
  id: Scalars['ID']['output'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedIngredientsInput;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars['String']['input'];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedIngredientsInput;
};

export type IngredientCreateManyCreatedByUserInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IngredientCreateManyCreatedByUserInputEnvelope = {
  data: Array<IngredientCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IngredientCreateManyInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IngredientCreateManyUpdatedByUserInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars['String']['input'];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedIngredientsInput;
};

export type IngredientCreateWithoutMealIngredientsInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedIngredientsInput;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedIngredientsInput;
};

export type IngredientCreateWithoutNutritionsInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedIngredientsInput;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedIngredientsInput;
};

export type IngredientCreateWithoutUpdatedByUserInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedIngredientsInput;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars['String']['input'];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<SortOrder>;
  createdByUser?: InputMaybe<UserOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  mealIngredients?: InputMaybe<MealIngredientOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  nutritions?: InputMaybe<NutritionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IngredientUpdateInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedIngredientsNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutIngredientNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutritions?: InputMaybe<NutritionUpdateManyWithoutIngredientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedIngredientsNestedInput>;
};

export type IngredientUpdateManyMutationInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutIngredientNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutritions?: InputMaybe<NutritionUpdateManyWithoutIngredientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedIngredientsNestedInput>;
};

export type IngredientUpdateWithoutMealIngredientsInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedIngredientsNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutritions?: InputMaybe<NutritionUpdateManyWithoutIngredientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedIngredientsNestedInput>;
};

export type IngredientUpdateWithoutNutritionsInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedIngredientsNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutIngredientNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedIngredientsNestedInput>;
};

export type IngredientUpdateWithoutUpdatedByUserInput = {
  allergens?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedIngredientsNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutIngredientNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutritions?: InputMaybe<NutritionUpdateManyWithoutIngredientNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  mealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nutritions?: InputMaybe<NutritionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type IngredientWhereUniqueInput = {
  AND?: InputMaybe<Array<IngredientWhereInput>>;
  NOT?: InputMaybe<Array<IngredientWhereInput>>;
  OR?: InputMaybe<Array<IngredientWhereInput>>;
  allergens?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  mealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nutritions?: InputMaybe<NutritionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
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
  id: Scalars['ID']['output'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
};

export type MealCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
};

export type MealCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutFridayMealGroupsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutMealIngredientsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutMondayMealGroupsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutSaturdayMealGroupsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutSundayMealGroupsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutThursdayMealGroupsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutTuesdayMealGroupsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutWednesdayMealGroupsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealIngredientsInput;
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealIngredientsInput;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ingredientId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealIngredientCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealIngredientCreateManyIngredientInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  mealId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyIngredientInputEnvelope = {
  data: Array<MealIngredientCreateManyIngredientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealIngredientCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ingredientId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyMealInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ingredientId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateManyMealInputEnvelope = {
  data: Array<MealIngredientCreateManyMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealIngredientCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ingredientId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealIngredientsInput;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateWithoutIngredientInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealIngredientsInput;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateWithoutMealInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealIngredientsInput;
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealIngredientsInput;
  weightGrams: Scalars['Decimal']['input'];
};

export type MealIngredientCreateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealIngredientsInput;
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<SortOrder>;
  createdByUser?: InputMaybe<UserOrderByWithRelationInput>;
  ingredient?: InputMaybe<IngredientOrderByWithRelationInput>;
  ingredientId?: InputMaybe<SortOrder>;
  meal?: InputMaybe<MealOrderByWithRelationInput>;
  mealId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  mealId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weightGrams?: InputMaybe<DecimalFilter>;
};

export type MealIngredientUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealIngredientsNestedInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealIngredientsNestedInput>;
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealIngredientsNestedInput>;
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpdateWithoutIngredientInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealIngredientsNestedInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealIngredientsNestedInput>;
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpdateWithoutMealInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealIngredientsNestedInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealIngredientsNestedInput>;
  weightGrams?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type MealIngredientUpdateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealIngredientsNestedInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealIngredientsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  meal?: InputMaybe<MealRelationFilter>;
  mealId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
  weightGrams?: InputMaybe<DecimalFilter>;
};

export type MealIngredientWhereUniqueInput = {
  AND?: InputMaybe<Array<MealIngredientWhereInput>>;
  NOT?: InputMaybe<Array<MealIngredientWhereInput>>;
  OR?: InputMaybe<Array<MealIngredientWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  meal?: InputMaybe<MealRelationFilter>;
  mealId?: InputMaybe<IntFilter>;
  mealId_ingredientId?: InputMaybe<MealIngredientMealIdIngredientIdCompoundUniqueInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
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
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  createdByUser?: InputMaybe<UserOrderByWithRelationInput>;
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
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
};

export type MealUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutFridayMealGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutMealIngredientsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutMondayMealGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutSaturdayMealGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutSundayMealGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutThursdayMealGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutTuesdayMealGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutWednesdayMealGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
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
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
};

export type MealWhereUniqueInput = {
  AND?: InputMaybe<Array<MealWhereInput>>;
  NOT?: InputMaybe<Array<MealWhereInput>>;
  OR?: InputMaybe<Array<MealWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
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
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedNutritionsInput;
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredient: IngredientCreateNestedOneWithoutNutritionsInput;
  protein: Scalars['Decimal']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedNutritionsInput;
};

export type NutritionCreateManyCreatedByUserInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredientId: Scalars['Int']['input'];
  protein: Scalars['Decimal']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NutritionCreateManyCreatedByUserInputEnvelope = {
  data: Array<NutritionCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NutritionCreateManyIngredientInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  protein: Scalars['Decimal']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NutritionCreateManyIngredientInputEnvelope = {
  data: Array<NutritionCreateManyIngredientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NutritionCreateManyInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredientId: Scalars['Int']['input'];
  protein: Scalars['Decimal']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NutritionCreateManyUpdatedByUserInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredientId: Scalars['Int']['input'];
  protein: Scalars['Decimal']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredient: IngredientCreateNestedOneWithoutNutritionsInput;
  protein: Scalars['Decimal']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedNutritionsInput;
};

export type NutritionCreateWithoutIngredientInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedNutritionsInput;
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  protein: Scalars['Decimal']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedNutritionsInput;
};

export type NutritionCreateWithoutUpdatedByUserInput = {
  calories: Scalars['Decimal']['input'];
  carbohydrates: Scalars['Decimal']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedNutritionsInput;
  fats: Scalars['Decimal']['input'];
  fiber: Scalars['Decimal']['input'];
  ingredient: IngredientCreateNestedOneWithoutNutritionsInput;
  protein: Scalars['Decimal']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<SortOrder>;
  createdByUser?: InputMaybe<UserOrderByWithRelationInput>;
  fats?: InputMaybe<SortOrder>;
  fiber?: InputMaybe<SortOrder>;
  ingredient?: InputMaybe<IngredientOrderByWithRelationInput>;
  ingredientId?: InputMaybe<SortOrder>;
  protein?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  fats?: InputMaybe<DecimalFilter>;
  fiber?: InputMaybe<DecimalFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  protein?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type NutritionUpdateInput = {
  calories?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedNutritionsNestedInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutNutritionsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedNutritionsNestedInput>;
};

export type NutritionUpdateManyMutationInput = {
  calories?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutNutritionsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedNutritionsNestedInput>;
};

export type NutritionUpdateWithoutIngredientInput = {
  calories?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedNutritionsNestedInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedNutritionsNestedInput>;
};

export type NutritionUpdateWithoutUpdatedByUserInput = {
  calories?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedNutritionsNestedInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fiber?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutNutritionsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  fats?: InputMaybe<DecimalFilter>;
  fiber?: InputMaybe<DecimalFilter>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  protein?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type NutritionWhereUniqueInput = {
  AND?: InputMaybe<Array<NutritionWhereInput>>;
  NOT?: InputMaybe<Array<NutritionWhereInput>>;
  OR?: InputMaybe<Array<NutritionWhereInput>>;
  calories?: InputMaybe<DecimalFilter>;
  carbohydrates?: InputMaybe<DecimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  fats?: InputMaybe<DecimalFilter>;
  fiber?: InputMaybe<DecimalFilter>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<Scalars['Int']['input']>;
  protein?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
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
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type TokenCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresIn: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TokenCreateManyCreatedByUserInputEnvelope = {
  data: Array<TokenCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TokenCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresIn: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresIn: Scalars['DateTime']['input'];
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedTokenInput;
};

export type TokenCreateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedTokenInput;
  expiresIn: Scalars['DateTime']['input'];
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresIn?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TokenUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresIn?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresIn?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedTokenNestedInput>;
};

export type TokenUpdateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedTokenNestedInput>;
  expiresIn?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  expiresIn?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type TokenWhereUniqueInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  NOT?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  expiresIn?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
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
  id: Scalars['ID']['output'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateManyCreatedByUserInputEnvelope = {
  data: Array<UserCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type UserCreateNestedOneWithoutCreatedIngredientsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedIngredientsInput>;
};

export type UserCreateNestedOneWithoutCreatedMealIngredientsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMealIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMealIngredientsInput>;
};

export type UserCreateNestedOneWithoutCreatedMealsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMealsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMealsInput>;
};

export type UserCreateNestedOneWithoutCreatedNutritionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedNutritionsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedNutritionsInput>;
};

export type UserCreateNestedOneWithoutCreatedTokenInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedTokenInput>;
  create?: InputMaybe<UserCreateWithoutCreatedTokenInput>;
};

export type UserCreateNestedOneWithoutCreatedUserInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedUserInput>;
  create?: InputMaybe<UserCreateWithoutCreatedUserInput>;
};

export type UserCreateNestedOneWithoutCreatedUserRolesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedUserRolesInput>;
  create?: InputMaybe<UserCreateWithoutCreatedUserRolesInput>;
};

export type UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedWeeklyMealGroupsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedWeeklyMealGroupsInput>;
};

export type UserCreateNestedOneWithoutUpdatedIngredientsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedIngredientsInput>;
};

export type UserCreateNestedOneWithoutUpdatedMealIngredientsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedMealIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedMealIngredientsInput>;
};

export type UserCreateNestedOneWithoutUpdatedMealsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedMealsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedMealsInput>;
};

export type UserCreateNestedOneWithoutUpdatedNutritionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedNutritionsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedNutritionsInput>;
};

export type UserCreateNestedOneWithoutUpdatedTokenInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedTokenInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedTokenInput>;
};

export type UserCreateNestedOneWithoutUpdatedUserInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedUserInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedUserInput>;
};

export type UserCreateNestedOneWithoutUpdatedUserRolesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedUserRolesInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedUserRolesInput>;
};

export type UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedWeeklyMealGroupsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedWeeklyMealGroupsInput>;
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

export type UserCreateOrConnectWithoutCreatedIngredientsInput = {
  create: UserCreateWithoutCreatedIngredientsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedMealIngredientsInput = {
  create: UserCreateWithoutCreatedMealIngredientsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedMealsInput = {
  create: UserCreateWithoutCreatedMealsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedNutritionsInput = {
  create: UserCreateWithoutCreatedNutritionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedTokenInput = {
  create: UserCreateWithoutCreatedTokenInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedUserInput = {
  create: UserCreateWithoutCreatedUserInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedUserRolesInput = {
  create: UserCreateWithoutCreatedUserRolesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedWeeklyMealGroupsInput = {
  create: UserCreateWithoutCreatedWeeklyMealGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedByUserInput = {
  create: UserCreateWithoutUpdatedByUserInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedIngredientsInput = {
  create: UserCreateWithoutUpdatedIngredientsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedMealIngredientsInput = {
  create: UserCreateWithoutUpdatedMealIngredientsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedMealsInput = {
  create: UserCreateWithoutUpdatedMealsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedNutritionsInput = {
  create: UserCreateWithoutUpdatedNutritionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedTokenInput = {
  create: UserCreateWithoutUpdatedTokenInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedUserInput = {
  create: UserCreateWithoutUpdatedUserInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedUserRolesInput = {
  create: UserCreateWithoutUpdatedUserRolesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedWeeklyMealGroupsInput = {
  create: UserCreateWithoutUpdatedWeeklyMealGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserRoleInput = {
  create: UserCreateWithoutUserRoleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCreatedByUserInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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

export type UserCreateWithoutCreatedIngredientsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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

export type UserCreateWithoutCreatedMealIngredientsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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

export type UserCreateWithoutCreatedMealsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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

export type UserCreateWithoutCreatedNutritionsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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

export type UserCreateWithoutCreatedTokenInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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

export type UserCreateWithoutCreatedUserInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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

export type UserCreateWithoutCreatedUserRolesInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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

export type UserCreateWithoutCreatedWeeklyMealGroupsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type UserCreateWithoutUpdatedIngredientsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUpdatedMealIngredientsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUpdatedMealsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUpdatedNutritionsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUpdatedTokenInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUpdatedUserInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUpdatedUserRolesInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUpdatedWeeklyMealGroupsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUserRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
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
  updatedAt?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
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
  id: Scalars['ID']['output'];
  name: UserRoleName;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
  userId: Scalars['Int']['output'];
};

export type UserRoleCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['Int']['input'];
};

export type UserRoleCreateManyCreatedByUserInputEnvelope = {
  data: Array<UserRoleCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserRoleCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['Int']['input'];
};

export type UserRoleCreateManyUpdatedByUserInputEnvelope = {
  data: Array<UserRoleCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserRoleCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedUserRolesInput;
};

export type UserRoleCreateWithoutUpdatedByUserInput = {
  User: UserCreateNestedOneWithoutUserRoleInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedUserRolesInput;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserRoleCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedUserRolesInput;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedUserRolesInput;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserRoleUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedUserRolesNestedInput>;
};

export type UserRoleUpdateWithoutUpdatedByUserInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutUserRoleNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedUserRolesNestedInput>;
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserRoleUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedUserRolesNestedInput>;
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedUserRolesNestedInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserRoleWhereUniqueInput = {
  AND?: InputMaybe<Array<UserRoleWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleWhereInput>>;
  OR?: InputMaybe<Array<UserRoleWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastOnline?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserUpdateInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpdateOneRequiredWithoutCreatedIngredientsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedIngredientsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedIngredientsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedIngredientsInput>;
};

export type UserUpdateOneRequiredWithoutCreatedMealIngredientsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMealIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMealIngredientsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedMealIngredientsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedMealIngredientsInput>;
};

export type UserUpdateOneRequiredWithoutCreatedMealsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMealsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMealsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedMealsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedMealsInput>;
};

export type UserUpdateOneRequiredWithoutCreatedNutritionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedNutritionsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedNutritionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedNutritionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedNutritionsInput>;
};

export type UserUpdateOneRequiredWithoutCreatedTokenNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedTokenInput>;
  create?: InputMaybe<UserCreateWithoutCreatedTokenInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedTokenInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedTokenInput>;
};

export type UserUpdateOneRequiredWithoutCreatedUserRolesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedUserRolesInput>;
  create?: InputMaybe<UserCreateWithoutCreatedUserRolesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedUserRolesInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedUserRolesInput>;
};

export type UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedWeeklyMealGroupsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedWeeklyMealGroupsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedWeeklyMealGroupsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedWeeklyMealGroupsInput>;
};

export type UserUpdateOneRequiredWithoutUpdatedIngredientsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedIngredientsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedIngredientsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedIngredientsInput>;
};

export type UserUpdateOneRequiredWithoutUpdatedMealIngredientsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedMealIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedMealIngredientsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedMealIngredientsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedMealIngredientsInput>;
};

export type UserUpdateOneRequiredWithoutUpdatedMealsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedMealsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedMealsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedMealsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedMealsInput>;
};

export type UserUpdateOneRequiredWithoutUpdatedNutritionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedNutritionsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedNutritionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedNutritionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedNutritionsInput>;
};

export type UserUpdateOneRequiredWithoutUpdatedTokenNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedTokenInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedTokenInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedTokenInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedTokenInput>;
};

export type UserUpdateOneRequiredWithoutUpdatedUserRolesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedUserRolesInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedUserRolesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedUserRolesInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedUserRolesInput>;
};

export type UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedWeeklyMealGroupsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedWeeklyMealGroupsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedWeeklyMealGroupsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedWeeklyMealGroupsInput>;
};

export type UserUpdateOneRequiredWithoutUserRoleNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserRoleInput>;
  create?: InputMaybe<UserCreateWithoutUserRoleInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserRoleInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserRoleInput>;
};

export type UserUpdateOneWithoutCreatedUserNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedUserInput>;
  create?: InputMaybe<UserCreateWithoutCreatedUserInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedUserInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedUserInput>;
};

export type UserUpdateOneWithoutUpdatedUserNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedUserInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedUserInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedUserInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedUserInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedIngredientsInput = {
  data: UserUpdateWithoutCreatedIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedMealIngredientsInput = {
  data: UserUpdateWithoutCreatedMealIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedMealsInput = {
  data: UserUpdateWithoutCreatedMealsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedNutritionsInput = {
  data: UserUpdateWithoutCreatedNutritionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedTokenInput = {
  data: UserUpdateWithoutCreatedTokenInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedUserInput = {
  data: UserUpdateWithoutCreatedUserInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedUserRolesInput = {
  data: UserUpdateWithoutCreatedUserRolesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedWeeklyMealGroupsInput = {
  data: UserUpdateWithoutCreatedWeeklyMealGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedIngredientsInput = {
  data: UserUpdateWithoutUpdatedIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedMealIngredientsInput = {
  data: UserUpdateWithoutUpdatedMealIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedMealsInput = {
  data: UserUpdateWithoutUpdatedMealsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedNutritionsInput = {
  data: UserUpdateWithoutUpdatedNutritionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedTokenInput = {
  data: UserUpdateWithoutUpdatedTokenInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedUserInput = {
  data: UserUpdateWithoutUpdatedUserInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedUserRolesInput = {
  data: UserUpdateWithoutUpdatedUserRolesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedWeeklyMealGroupsInput = {
  data: UserUpdateWithoutUpdatedWeeklyMealGroupsInput;
  where?: InputMaybe<UserWhereInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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

export type UserUpdateWithoutCreatedIngredientsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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

export type UserUpdateWithoutCreatedMealIngredientsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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

export type UserUpdateWithoutCreatedMealsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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

export type UserUpdateWithoutCreatedNutritionsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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

export type UserUpdateWithoutCreatedTokenInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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

export type UserUpdateWithoutCreatedUserInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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

export type UserUpdateWithoutCreatedUserRolesInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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

export type UserUpdateWithoutCreatedWeeklyMealGroupsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpdateWithoutUpdatedIngredientsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedMealIngredientsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedMealsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedNutritionsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedTokenInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedUserInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedUserRolesInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedWeeklyMealGroupsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserRoleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
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

export type UserUpsertWithoutCreatedIngredientsInput = {
  create: UserCreateWithoutCreatedIngredientsInput;
  update: UserUpdateWithoutCreatedIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedMealIngredientsInput = {
  create: UserCreateWithoutCreatedMealIngredientsInput;
  update: UserUpdateWithoutCreatedMealIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedMealsInput = {
  create: UserCreateWithoutCreatedMealsInput;
  update: UserUpdateWithoutCreatedMealsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedNutritionsInput = {
  create: UserCreateWithoutCreatedNutritionsInput;
  update: UserUpdateWithoutCreatedNutritionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedTokenInput = {
  create: UserCreateWithoutCreatedTokenInput;
  update: UserUpdateWithoutCreatedTokenInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedUserInput = {
  create: UserCreateWithoutCreatedUserInput;
  update: UserUpdateWithoutCreatedUserInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedUserRolesInput = {
  create: UserCreateWithoutCreatedUserRolesInput;
  update: UserUpdateWithoutCreatedUserRolesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedWeeklyMealGroupsInput = {
  create: UserCreateWithoutCreatedWeeklyMealGroupsInput;
  update: UserUpdateWithoutCreatedWeeklyMealGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedIngredientsInput = {
  create: UserCreateWithoutUpdatedIngredientsInput;
  update: UserUpdateWithoutUpdatedIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedMealIngredientsInput = {
  create: UserCreateWithoutUpdatedMealIngredientsInput;
  update: UserUpdateWithoutUpdatedMealIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedMealsInput = {
  create: UserCreateWithoutUpdatedMealsInput;
  update: UserUpdateWithoutUpdatedMealsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedNutritionsInput = {
  create: UserCreateWithoutUpdatedNutritionsInput;
  update: UserUpdateWithoutUpdatedNutritionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedTokenInput = {
  create: UserCreateWithoutUpdatedTokenInput;
  update: UserUpdateWithoutUpdatedTokenInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedUserInput = {
  create: UserCreateWithoutUpdatedUserInput;
  update: UserUpdateWithoutUpdatedUserInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedUserRolesInput = {
  create: UserCreateWithoutUpdatedUserRolesInput;
  update: UserUpdateWithoutUpdatedUserRolesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedWeeklyMealGroupsInput = {
  create: UserCreateWithoutUpdatedWeeklyMealGroupsInput;
  update: UserUpdateWithoutUpdatedWeeklyMealGroupsInput;
  where?: InputMaybe<UserWhereInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserNullableRelationFilter>;
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
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserNullableRelationFilter>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUser?: InputMaybe<UserNullableRelationFilter>;
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
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserNullableRelationFilter>;
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
  id: Scalars['ID']['output'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyCreatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyMondayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['Int']['input'];
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy: Scalars['Int']['input'];
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutFridayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutMondayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutSaturdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutSundayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutThursdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutTuesdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutUpdatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutWednesdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdByUser: UserCreateNestedOneWithoutCreatedWeeklyMealGroupsInput;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedWeeklyMealGroupsInput;
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
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  createdByUser?: InputMaybe<UserOrderByWithRelationInput>;
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
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
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
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  wednesdayMealId?: InputMaybe<IntNullableFilter>;
  weekOfYear?: InputMaybe<IntFilter>;
  year?: InputMaybe<IntFilter>;
};

export type WeeklyMealGroupUpdateInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateManyMutationInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutFridayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutMondayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutSaturdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutSundayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutThursdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutTuesdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutUpdatedByUserInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutWednesdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedWeeklyMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedWeeklyMealGroupsNestedInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
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
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
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
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
  wednesdayMeal?: InputMaybe<MealNullableRelationFilter>;
  wednesdayMealId?: InputMaybe<IntNullableFilter>;
  weekOfYear?: InputMaybe<IntFilter>;
  year?: InputMaybe<IntFilter>;
};

export type RegisterUserMutationVariables = Exact<{
  data: RegisterUserInput;
}>;


export type RegisterUserMutation = { registerUser?: { id: string, username: string, email: string, lastOnline: any, status: boolean, createdAt: any, updatedAt: any, UserRole?: Array<{ id: string, name: UserRoleName }> | null } | null };

export type LoginUserMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginUserMutation = { loginUser?: { id: string, username: string, email: string, lastOnline: any, status: boolean, createdAt: any, updatedAt: any, UserRole?: Array<{ id: string, name: UserRoleName }> | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout?: boolean | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { id: string, username: string, email: string, lastOnline: any, status: boolean, createdAt: any, updatedAt: any, UserRole?: Array<{ id: string, name: UserRoleName }> | null } | null };

export type GetAllWeeklyMealGroupsAdminQueryVariables = Exact<{
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
  orderBy?: InputMaybe<Array<WeeklyMealGroupOrderByWithRelationInput> | WeeklyMealGroupOrderByWithRelationInput>;
  cursor?: InputMaybe<WeeklyMealGroupWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<WeeklyMealGroupScalarFieldEnum> | WeeklyMealGroupScalarFieldEnum>;
}>;


export type GetAllWeeklyMealGroupsAdminQuery = { getAllWeeklyMealGroupsAdmin?: Array<{ id: string, name: string, color?: string | null, description?: string | null, year: number, weekOfYear: number, orderIndex: number, mondayMeal?: { id: string, name: string, description?: string | null, image?: string | null } | null, tuesdayMeal?: { id: string, name: string, description?: string | null, image?: string | null } | null, wednesdayMeal?: { id: string, name: string, description?: string | null, image?: string | null } | null, thursdayMeal?: { id: string, name: string, description?: string | null, image?: string | null } | null, fridayMeal?: { id: string, name: string, description?: string | null, image?: string | null } | null, saturdayMeal?: { id: string, name: string, description?: string | null, image?: string | null } | null, sundayMeal?: { id: string, name: string, description?: string | null, image?: string | null } | null }> | null };


export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UserRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UserRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"UserRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAllWeeklyMealGroupsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllWeeklyMealGroupsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllWeeklyMealGroupsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllWeeklyMealGroupsAdminQuery, GetAllWeeklyMealGroupsAdminQueryVariables>;