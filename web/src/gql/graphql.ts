/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
  /** An arbitrary-precision Decimal type */
  Decimal: { input: any; output: any };
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Decimal"]["input"]>;
  divide?: InputMaybe<Scalars["Decimal"]["input"]>;
  increment?: InputMaybe<Scalars["Decimal"]["input"]>;
  multiply?: InputMaybe<Scalars["Decimal"]["input"]>;
  set?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars["Decimal"]["input"]>;
  gt?: InputMaybe<Scalars["Decimal"]["input"]>;
  gte?: InputMaybe<Scalars["Decimal"]["input"]>;
  in?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
  lt?: InputMaybe<Scalars["Decimal"]["input"]>;
  lte?: InputMaybe<Scalars["Decimal"]["input"]>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
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
  allergens?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  createdBy: Scalars["Int"]["output"];
  createdByUser: User;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  mealIngredients?: Maybe<Array<MealIngredient>>;
  name: Scalars["String"]["output"];
  nutritions?: Maybe<Array<Nutrition>>;
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy: Scalars["Int"]["output"];
  updatedByUser: User;
};

export type IngredientCount = {
  mealIngredients: Scalars["Int"]["output"];
  nutritions: Scalars["Int"]["output"];
};

export type IngredientCreateInput = {
  allergens?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedIngredientsInput;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars["String"]["input"];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedIngredientsInput;
};

export type IngredientCreateManyCreatedByUserInput = {
  allergens?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type IngredientCreateManyCreatedByUserInputEnvelope = {
  data: Array<IngredientCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type IngredientCreateManyInput = {
  allergens?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type IngredientCreateManyUpdatedByUserInput = {
  allergens?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type IngredientCreateManyUpdatedByUserInputEnvelope = {
  data: Array<IngredientCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type IngredientCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<IngredientCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<IngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<IngredientCreateManyCreatedByUserInputEnvelope>;
};

export type IngredientCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<IngredientCreateOrConnectWithoutUpdatedByUserInput>
  >;
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
  allergens?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars["String"]["input"];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedIngredientsInput;
};

export type IngredientCreateWithoutMealIngredientsInput = {
  allergens?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedIngredientsInput;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedIngredientsInput;
};

export type IngredientCreateWithoutNutritionsInput = {
  allergens?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedIngredientsInput;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedIngredientsInput;
};

export type IngredientCreateWithoutUpdatedByUserInput = {
  allergens?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedIngredientsInput;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutIngredientInput>;
  name: Scalars["String"]["input"];
  nutritions?: InputMaybe<NutritionCreateNestedManyWithoutIngredientInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
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
  Allergens = "allergens",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Id = "id",
  Image = "image",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
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
  connectOrCreate?: InputMaybe<
    Array<IngredientCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<IngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<IngredientCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<
    Array<IngredientUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<IngredientUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<IngredientUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type IngredientUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<IngredientCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<IngredientCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<IngredientCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<
    Array<IngredientUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<IngredientUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<IngredientUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
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
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<StringNullableFilter>;
  mealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nutritions?: InputMaybe<NutritionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type LoginUserInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Meal = {
  _count: MealCount;
  createdAt: Scalars["DateTime"]["output"];
  createdBy: Scalars["Int"]["output"];
  createdByUser: User;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  mealGroups?: Maybe<Array<MealGroup>>;
  mealIngredients?: Maybe<Array<MealIngredient>>;
  name: Scalars["String"]["output"];
  scheduledMeals?: Maybe<Array<ScheduleMeal>>;
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy: Scalars["Int"]["output"];
  updatedByUser: User;
};

export type MealCount = {
  mealGroups: Scalars["Int"]["output"];
  mealIngredients: Scalars["Int"]["output"];
  scheduledMeals: Scalars["Int"]["output"];
};

export type MealCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutMealsInput>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  name: Scalars["String"]["input"];
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
};

export type MealCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy: Scalars["Int"]["input"];
};

export type MealCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealCreateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy: Scalars["Int"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy: Scalars["Int"]["input"];
};

export type MealCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy: Scalars["Int"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MealCreateManyUpdatedByUserInputEnvelope = {
  data: Array<MealCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<MealCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealCreateManyCreatedByUserInputEnvelope>;
};

export type MealCreateNestedManyWithoutMealGroupsInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealCreateOrConnectWithoutMealGroupsInput>
  >;
  create?: InputMaybe<Array<MealCreateWithoutMealGroupsInput>>;
};

export type MealCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<MealCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealCreateManyUpdatedByUserInputEnvelope>;
};

export type MealCreateNestedOneWithoutMealIngredientsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutMealIngredientsInput>;
  create?: InputMaybe<MealCreateWithoutMealIngredientsInput>;
};

export type MealCreateNestedOneWithoutScheduledMealsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutScheduledMealsInput>;
  create?: InputMaybe<MealCreateWithoutScheduledMealsInput>;
};

export type MealCreateOrConnectWithoutCreatedByUserInput = {
  create: MealCreateWithoutCreatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutMealGroupsInput = {
  create: MealCreateWithoutMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutMealIngredientsInput = {
  create: MealCreateWithoutMealIngredientsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutScheduledMealsInput = {
  create: MealCreateWithoutScheduledMealsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutUpdatedByUserInput = {
  create: MealCreateWithoutUpdatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealCreateWithoutCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutMealsInput>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  name: Scalars["String"]["input"];
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
};

export type MealCreateWithoutMealGroupsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  name: Scalars["String"]["input"];
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
};

export type MealCreateWithoutMealIngredientsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutMealsInput>;
  name: Scalars["String"]["input"];
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
};

export type MealCreateWithoutScheduledMealsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutMealsInput>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealsInput;
};

export type MealCreateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealsInput;
  description?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  mealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutMealsInput>;
  mealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutMealInput>;
  name: Scalars["String"]["input"];
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MealGroup = {
  _count: MealGroupCount;
  createdAt: Scalars["DateTime"]["output"];
  createdBy: Scalars["Int"]["output"];
  createdByUser: User;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  meals?: Maybe<Array<Meal>>;
  name: Scalars["String"]["output"];
  scheduledMeals?: Maybe<Array<ScheduleMeal>>;
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy: Scalars["Int"]["output"];
  updatedByUser: User;
};

export type MealGroupCount = {
  meals: Scalars["Int"]["output"];
  scheduledMeals: Scalars["Int"]["output"];
};

export type MealGroupCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealGroupsInput;
  description?: InputMaybe<Scalars["String"]["input"]>;
  meals?: InputMaybe<MealCreateNestedManyWithoutMealGroupsInput>;
  name: Scalars["String"]["input"];
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealGroupInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealGroupsInput;
};

export type MealGroupCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy: Scalars["Int"]["input"];
};

export type MealGroupCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealGroupCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealGroupCreateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy: Scalars["Int"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy: Scalars["Int"]["input"];
};

export type MealGroupCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy: Scalars["Int"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MealGroupCreateManyUpdatedByUserInputEnvelope = {
  data: Array<MealGroupCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealGroupCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealGroupCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<MealGroupCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealGroupCreateManyCreatedByUserInputEnvelope>;
};

export type MealGroupCreateNestedManyWithoutMealsInput = {
  connect?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealGroupCreateOrConnectWithoutMealsInput>
  >;
  create?: InputMaybe<Array<MealGroupCreateWithoutMealsInput>>;
};

export type MealGroupCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealGroupCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<MealGroupCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealGroupCreateManyUpdatedByUserInputEnvelope>;
};

export type MealGroupCreateNestedOneWithoutScheduledMealsInput = {
  connect?: InputMaybe<MealGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealGroupCreateOrConnectWithoutScheduledMealsInput>;
  create?: InputMaybe<MealGroupCreateWithoutScheduledMealsInput>;
};

export type MealGroupCreateOrConnectWithoutCreatedByUserInput = {
  create: MealGroupCreateWithoutCreatedByUserInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupCreateOrConnectWithoutMealsInput = {
  create: MealGroupCreateWithoutMealsInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupCreateOrConnectWithoutScheduledMealsInput = {
  create: MealGroupCreateWithoutScheduledMealsInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupCreateOrConnectWithoutUpdatedByUserInput = {
  create: MealGroupCreateWithoutUpdatedByUserInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupCreateWithoutCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  meals?: InputMaybe<MealCreateNestedManyWithoutMealGroupsInput>;
  name: Scalars["String"]["input"];
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealGroupInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealGroupsInput;
};

export type MealGroupCreateWithoutMealsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealGroupsInput;
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealGroupInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealGroupsInput;
};

export type MealGroupCreateWithoutScheduledMealsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealGroupsInput;
  description?: InputMaybe<Scalars["String"]["input"]>;
  meals?: InputMaybe<MealCreateNestedManyWithoutMealGroupsInput>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealGroupsInput;
};

export type MealGroupCreateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealGroupsInput;
  description?: InputMaybe<Scalars["String"]["input"]>;
  meals?: InputMaybe<MealCreateNestedManyWithoutMealGroupsInput>;
  name: Scalars["String"]["input"];
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealGroupInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MealGroupListRelationFilter = {
  every?: InputMaybe<MealGroupWhereInput>;
  none?: InputMaybe<MealGroupWhereInput>;
  some?: InputMaybe<MealGroupWhereInput>;
};

export type MealGroupNullableRelationFilter = {
  is?: InputMaybe<MealGroupWhereInput>;
  isNot?: InputMaybe<MealGroupWhereInput>;
};

export type MealGroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MealGroupOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  createdByUser?: InputMaybe<UserOrderByWithRelationInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  meals?: InputMaybe<MealOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  scheduledMeals?: InputMaybe<ScheduleMealOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
};

export enum MealGroupScalarFieldEnum {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Description = "description",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type MealGroupScalarWhereInput = {
  AND?: InputMaybe<Array<MealGroupScalarWhereInput>>;
  NOT?: InputMaybe<Array<MealGroupScalarWhereInput>>;
  OR?: InputMaybe<Array<MealGroupScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
};

export type MealGroupUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meals?: InputMaybe<MealUpdateManyWithoutMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealGroupNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealGroupsNestedInput>;
};

export type MealGroupUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MealGroupUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: MealGroupUpdateManyMutationInput;
  where: MealGroupScalarWhereInput;
};

export type MealGroupUpdateManyWithWhereWithoutMealsInput = {
  data: MealGroupUpdateManyMutationInput;
  where: MealGroupScalarWhereInput;
};

export type MealGroupUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: MealGroupUpdateManyMutationInput;
  where: MealGroupScalarWhereInput;
};

export type MealGroupUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealGroupCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<MealGroupCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealGroupCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealGroupUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MealGroupUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<MealGroupUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type MealGroupUpdateManyWithoutMealsNestedInput = {
  connect?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealGroupCreateOrConnectWithoutMealsInput>
  >;
  create?: InputMaybe<Array<MealGroupCreateWithoutMealsInput>>;
  delete?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<MealGroupUpdateWithWhereUniqueWithoutMealsInput>>;
  updateMany?: InputMaybe<Array<MealGroupUpdateManyWithWhereWithoutMealsInput>>;
  upsert?: InputMaybe<Array<MealGroupUpsertWithWhereUniqueWithoutMealsInput>>;
};

export type MealGroupUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealGroupCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<MealGroupCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealGroupCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<MealGroupWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealGroupUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MealGroupUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<MealGroupUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
};

export type MealGroupUpdateOneWithoutScheduledMealsNestedInput = {
  connect?: InputMaybe<MealGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealGroupCreateOrConnectWithoutScheduledMealsInput>;
  create?: InputMaybe<MealGroupCreateWithoutScheduledMealsInput>;
  delete?: InputMaybe<MealGroupWhereInput>;
  disconnect?: InputMaybe<MealGroupWhereInput>;
  update?: InputMaybe<MealGroupUpdateToOneWithWhereWithoutScheduledMealsInput>;
  upsert?: InputMaybe<MealGroupUpsertWithoutScheduledMealsInput>;
};

export type MealGroupUpdateToOneWithWhereWithoutScheduledMealsInput = {
  data: MealGroupUpdateWithoutScheduledMealsInput;
  where?: InputMaybe<MealGroupWhereInput>;
};

export type MealGroupUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: MealGroupUpdateWithoutCreatedByUserInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupUpdateWithWhereUniqueWithoutMealsInput = {
  data: MealGroupUpdateWithoutMealsInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: MealGroupUpdateWithoutUpdatedByUserInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupUpdateWithoutCreatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meals?: InputMaybe<MealUpdateManyWithoutMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealGroupNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealGroupsNestedInput>;
};

export type MealGroupUpdateWithoutMealsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealGroupNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealGroupsNestedInput>;
};

export type MealGroupUpdateWithoutScheduledMealsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meals?: InputMaybe<MealUpdateManyWithoutMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealGroupsNestedInput>;
};

export type MealGroupUpdateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealGroupsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  meals?: InputMaybe<MealUpdateManyWithoutMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealGroupNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MealGroupUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: MealGroupCreateWithoutCreatedByUserInput;
  update: MealGroupUpdateWithoutCreatedByUserInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupUpsertWithWhereUniqueWithoutMealsInput = {
  create: MealGroupCreateWithoutMealsInput;
  update: MealGroupUpdateWithoutMealsInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: MealGroupCreateWithoutUpdatedByUserInput;
  update: MealGroupUpdateWithoutUpdatedByUserInput;
  where: MealGroupWhereUniqueInput;
};

export type MealGroupUpsertWithoutScheduledMealsInput = {
  create: MealGroupCreateWithoutScheduledMealsInput;
  update: MealGroupUpdateWithoutScheduledMealsInput;
  where?: InputMaybe<MealGroupWhereInput>;
};

export type MealGroupWhereInput = {
  AND?: InputMaybe<Array<MealGroupWhereInput>>;
  NOT?: InputMaybe<Array<MealGroupWhereInput>>;
  OR?: InputMaybe<Array<MealGroupWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  scheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type MealGroupWhereUniqueInput = {
  AND?: InputMaybe<Array<MealGroupWhereInput>>;
  NOT?: InputMaybe<Array<MealGroupWhereInput>>;
  OR?: InputMaybe<Array<MealGroupWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  scheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type MealIngredient = {
  createdAt: Scalars["DateTime"]["output"];
  createdBy: Scalars["Int"]["output"];
  createdByUser: User;
  ingredient: Ingredient;
  ingredientId: Scalars["Int"]["output"];
  meal: Meal;
  mealId: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy: Scalars["Int"]["output"];
  updatedByUser: User;
  weightGrams: Scalars["Decimal"]["output"];
};

export type MealIngredientCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealIngredientsInput;
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealIngredientsInput;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ingredientId: Scalars["Int"]["input"];
  mealId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealIngredientCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealIngredientCreateManyIngredientInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  mealId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientCreateManyIngredientInputEnvelope = {
  data: Array<MealIngredientCreateManyIngredientInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealIngredientCreateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ingredientId: Scalars["Int"]["input"];
  mealId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientCreateManyMealInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ingredientId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientCreateManyMealInputEnvelope = {
  data: Array<MealIngredientCreateManyMealInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealIngredientCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ingredientId: Scalars["Int"]["input"];
  mealId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientCreateManyUpdatedByUserInputEnvelope = {
  data: Array<MealIngredientCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealIngredientCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealIngredientCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<MealIngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyCreatedByUserInputEnvelope>;
};

export type MealIngredientCreateNestedManyWithoutIngredientInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealIngredientCreateOrConnectWithoutIngredientInput>
  >;
  create?: InputMaybe<Array<MealIngredientCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyIngredientInputEnvelope>;
};

export type MealIngredientCreateNestedManyWithoutMealInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealIngredientCreateOrConnectWithoutMealInput>
  >;
  create?: InputMaybe<Array<MealIngredientCreateWithoutMealInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyMealInputEnvelope>;
};

export type MealIngredientCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealIngredientCreateOrConnectWithoutUpdatedByUserInput>
  >;
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
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealIngredientsInput;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientCreateWithoutIngredientInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealIngredientsInput;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientCreateWithoutMealInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealIngredientsInput;
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedMealIngredientsInput;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientCreateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedMealIngredientsInput;
  ingredient: IngredientCreateNestedOneWithoutMealIngredientsInput;
  meal: MealCreateNestedOneWithoutMealIngredientsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  weightGrams: Scalars["Decimal"]["input"];
};

export type MealIngredientListRelationFilter = {
  every?: InputMaybe<MealIngredientWhereInput>;
  none?: InputMaybe<MealIngredientWhereInput>;
  some?: InputMaybe<MealIngredientWhereInput>;
};

export type MealIngredientMealIdIngredientIdCompoundUniqueInput = {
  ingredientId: Scalars["Int"]["input"];
  mealId: Scalars["Int"]["input"];
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
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  IngredientId = "ingredientId",
  MealId = "mealId",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  WeightGrams = "weightGrams",
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
  connectOrCreate?: InputMaybe<
    Array<MealIngredientCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<MealIngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealIngredientUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MealIngredientUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<MealIngredientUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type MealIngredientUpdateManyWithoutIngredientNestedInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealIngredientCreateOrConnectWithoutIngredientInput>
  >;
  create?: InputMaybe<Array<MealIngredientCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyIngredientInputEnvelope>;
  delete?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealIngredientUpdateWithWhereUniqueWithoutIngredientInput>
  >;
  updateMany?: InputMaybe<
    Array<MealIngredientUpdateManyWithWhereWithoutIngredientInput>
  >;
  upsert?: InputMaybe<
    Array<MealIngredientUpsertWithWhereUniqueWithoutIngredientInput>
  >;
};

export type MealIngredientUpdateManyWithoutMealNestedInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealIngredientCreateOrConnectWithoutMealInput>
  >;
  create?: InputMaybe<Array<MealIngredientCreateWithoutMealInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyMealInputEnvelope>;
  delete?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealIngredientUpdateWithWhereUniqueWithoutMealInput>
  >;
  updateMany?: InputMaybe<
    Array<MealIngredientUpdateManyWithWhereWithoutMealInput>
  >;
  upsert?: InputMaybe<
    Array<MealIngredientUpsertWithWhereUniqueWithoutMealInput>
  >;
};

export type MealIngredientUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealIngredientCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<MealIngredientCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealIngredientCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<MealIngredientWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealIngredientUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MealIngredientUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<MealIngredientUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
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
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  mealGroups?: InputMaybe<MealGroupOrderByRelationAggregateInput>;
  mealIngredients?: InputMaybe<MealIngredientOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  scheduledMeals?: InputMaybe<ScheduleMealOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
};

export type MealRelationFilter = {
  is?: InputMaybe<MealWhereInput>;
  isNot?: InputMaybe<MealWhereInput>;
};

export enum MealScalarFieldEnum {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Description = "description",
  Id = "id",
  Image = "image",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
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

export type MealSchedule = {
  _count: MealScheduleCount;
  createdAt: Scalars["DateTime"]["output"];
  createdBy?: Maybe<Scalars["Int"]["output"]>;
  createdByUser?: Maybe<User>;
  id: Scalars["ID"]["output"];
  scheduledMeals?: Maybe<Array<ScheduleMeal>>;
  servingDate: Scalars["DateTime"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy?: Maybe<Scalars["Int"]["output"]>;
  updatedByUser?: Maybe<User>;
};

export type MealScheduleCount = {
  scheduledMeals: Scalars["Int"]["output"];
};

export type MealScheduleCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedMealSchedulersInput>;
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealScheduleInput>;
  servingDate: Scalars["DateTime"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedMealSchedulersInput>;
};

export type MealScheduleCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  servingDate: Scalars["DateTime"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MealScheduleCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealScheduleCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealScheduleCreateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  servingDate: Scalars["DateTime"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MealScheduleCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  servingDate: Scalars["DateTime"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MealScheduleCreateManyUpdatedByUserInputEnvelope = {
  data: Array<MealScheduleCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MealScheduleCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealScheduleCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<MealScheduleCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealScheduleCreateManyCreatedByUserInputEnvelope>;
};

export type MealScheduleCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealScheduleCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<MealScheduleCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealScheduleCreateManyUpdatedByUserInputEnvelope>;
};

export type MealScheduleCreateNestedOneWithoutScheduledMealsInput = {
  connect?: InputMaybe<MealScheduleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealScheduleCreateOrConnectWithoutScheduledMealsInput>;
  create?: InputMaybe<MealScheduleCreateWithoutScheduledMealsInput>;
};

export type MealScheduleCreateOrConnectWithoutCreatedByUserInput = {
  create: MealScheduleCreateWithoutCreatedByUserInput;
  where: MealScheduleWhereUniqueInput;
};

export type MealScheduleCreateOrConnectWithoutScheduledMealsInput = {
  create: MealScheduleCreateWithoutScheduledMealsInput;
  where: MealScheduleWhereUniqueInput;
};

export type MealScheduleCreateOrConnectWithoutUpdatedByUserInput = {
  create: MealScheduleCreateWithoutUpdatedByUserInput;
  where: MealScheduleWhereUniqueInput;
};

export type MealScheduleCreateWithoutCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealScheduleInput>;
  servingDate: Scalars["DateTime"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedMealSchedulersInput>;
};

export type MealScheduleCreateWithoutScheduledMealsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedMealSchedulersInput>;
  servingDate: Scalars["DateTime"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedMealSchedulersInput>;
};

export type MealScheduleCreateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedMealSchedulersInput>;
  scheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutMealScheduleInput>;
  servingDate: Scalars["DateTime"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MealScheduleListRelationFilter = {
  every?: InputMaybe<MealScheduleWhereInput>;
  none?: InputMaybe<MealScheduleWhereInput>;
  some?: InputMaybe<MealScheduleWhereInput>;
};

export type MealScheduleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MealScheduleOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  createdByUser?: InputMaybe<UserOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  scheduledMeals?: InputMaybe<ScheduleMealOrderByRelationAggregateInput>;
  servingDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrderInput>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
};

export type MealScheduleRelationFilter = {
  is?: InputMaybe<MealScheduleWhereInput>;
  isNot?: InputMaybe<MealScheduleWhereInput>;
};

export enum MealScheduleScalarFieldEnum {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Id = "id",
  ServingDate = "servingDate",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type MealScheduleScalarWhereInput = {
  AND?: InputMaybe<Array<MealScheduleScalarWhereInput>>;
  NOT?: InputMaybe<Array<MealScheduleScalarWhereInput>>;
  OR?: InputMaybe<Array<MealScheduleScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  servingDate?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntNullableFilter>;
};

export type MealScheduleUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedMealSchedulersNestedInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealScheduleNestedInput>;
  servingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedMealSchedulersNestedInput>;
};

export type MealScheduleUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  servingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MealScheduleUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: MealScheduleUpdateManyMutationInput;
  where: MealScheduleScalarWhereInput;
};

export type MealScheduleUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: MealScheduleUpdateManyMutationInput;
  where: MealScheduleScalarWhereInput;
};

export type MealScheduleUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealScheduleCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<MealScheduleCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealScheduleCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScheduleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  set?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealScheduleUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MealScheduleUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<MealScheduleUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type MealScheduleUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealScheduleCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<MealScheduleCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealScheduleCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScheduleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  set?: InputMaybe<Array<MealScheduleWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealScheduleUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MealScheduleUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<MealScheduleUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
};

export type MealScheduleUpdateOneRequiredWithoutScheduledMealsNestedInput = {
  connect?: InputMaybe<MealScheduleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealScheduleCreateOrConnectWithoutScheduledMealsInput>;
  create?: InputMaybe<MealScheduleCreateWithoutScheduledMealsInput>;
  update?: InputMaybe<MealScheduleUpdateToOneWithWhereWithoutScheduledMealsInput>;
  upsert?: InputMaybe<MealScheduleUpsertWithoutScheduledMealsInput>;
};

export type MealScheduleUpdateToOneWithWhereWithoutScheduledMealsInput = {
  data: MealScheduleUpdateWithoutScheduledMealsInput;
  where?: InputMaybe<MealScheduleWhereInput>;
};

export type MealScheduleUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: MealScheduleUpdateWithoutCreatedByUserInput;
  where: MealScheduleWhereUniqueInput;
};

export type MealScheduleUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: MealScheduleUpdateWithoutUpdatedByUserInput;
  where: MealScheduleWhereUniqueInput;
};

export type MealScheduleUpdateWithoutCreatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealScheduleNestedInput>;
  servingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedMealSchedulersNestedInput>;
};

export type MealScheduleUpdateWithoutScheduledMealsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedMealSchedulersNestedInput>;
  servingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedMealSchedulersNestedInput>;
};

export type MealScheduleUpdateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedMealSchedulersNestedInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealScheduleNestedInput>;
  servingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MealScheduleUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: MealScheduleCreateWithoutCreatedByUserInput;
  update: MealScheduleUpdateWithoutCreatedByUserInput;
  where: MealScheduleWhereUniqueInput;
};

export type MealScheduleUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: MealScheduleCreateWithoutUpdatedByUserInput;
  update: MealScheduleUpdateWithoutUpdatedByUserInput;
  where: MealScheduleWhereUniqueInput;
};

export type MealScheduleUpsertWithoutScheduledMealsInput = {
  create: MealScheduleCreateWithoutScheduledMealsInput;
  update: MealScheduleUpdateWithoutScheduledMealsInput;
  where?: InputMaybe<MealScheduleWhereInput>;
};

export type MealScheduleWhereInput = {
  AND?: InputMaybe<Array<MealScheduleWhereInput>>;
  NOT?: InputMaybe<Array<MealScheduleWhereInput>>;
  OR?: InputMaybe<Array<MealScheduleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntNullableFilter>;
  createdByUser?: InputMaybe<UserNullableRelationFilter>;
  id?: InputMaybe<IntFilter>;
  scheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  servingDate?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntNullableFilter>;
  updatedByUser?: InputMaybe<UserNullableRelationFilter>;
};

export type MealScheduleWhereUniqueInput = {
  AND?: InputMaybe<Array<MealScheduleWhereInput>>;
  NOT?: InputMaybe<Array<MealScheduleWhereInput>>;
  OR?: InputMaybe<Array<MealScheduleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntNullableFilter>;
  createdByUser?: InputMaybe<UserNullableRelationFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  scheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  servingDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntNullableFilter>;
  updatedByUser?: InputMaybe<UserNullableRelationFilter>;
};

export type MealUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealGroups?: InputMaybe<MealGroupUpdateManyWithoutMealsNestedInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
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

export type MealUpdateManyWithWhereWithoutMealGroupsInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<MealCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MealUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<MealUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type MealUpdateManyWithoutMealGroupsNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealCreateOrConnectWithoutMealGroupsInput>
  >;
  create?: InputMaybe<Array<MealCreateWithoutMealGroupsInput>>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<Array<MealUpdateWithWhereUniqueWithoutMealGroupsInput>>;
  updateMany?: InputMaybe<Array<MealUpdateManyWithWhereWithoutMealGroupsInput>>;
  upsert?: InputMaybe<Array<MealUpsertWithWhereUniqueWithoutMealGroupsInput>>;
};

export type MealUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MealCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<MealCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MealUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<MealUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<MealUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
};

export type MealUpdateOneRequiredWithoutMealIngredientsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutMealIngredientsInput>;
  create?: InputMaybe<MealCreateWithoutMealIngredientsInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutMealIngredientsInput>;
  upsert?: InputMaybe<MealUpsertWithoutMealIngredientsInput>;
};

export type MealUpdateOneWithoutScheduledMealsNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutScheduledMealsInput>;
  create?: InputMaybe<MealCreateWithoutScheduledMealsInput>;
  delete?: InputMaybe<MealWhereInput>;
  disconnect?: InputMaybe<MealWhereInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutScheduledMealsInput>;
  upsert?: InputMaybe<MealUpsertWithoutScheduledMealsInput>;
};

export type MealUpdateToOneWithWhereWithoutMealIngredientsInput = {
  data: MealUpdateWithoutMealIngredientsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateToOneWithWhereWithoutScheduledMealsInput = {
  data: MealUpdateWithoutScheduledMealsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: MealUpdateWithoutCreatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutMealGroupsInput = {
  data: MealUpdateWithoutMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: MealUpdateWithoutUpdatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithoutCreatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealGroups?: InputMaybe<MealGroupUpdateManyWithoutMealsNestedInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
};

export type MealUpdateWithoutMealGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
};

export type MealUpdateWithoutMealIngredientsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealGroups?: InputMaybe<MealGroupUpdateManyWithoutMealsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
};

export type MealUpdateWithoutScheduledMealsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealGroups?: InputMaybe<MealGroupUpdateManyWithoutMealsNestedInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedMealsNestedInput>;
};

export type MealUpdateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealGroups?: InputMaybe<MealGroupUpdateManyWithoutMealsNestedInput>;
  mealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  scheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutMealNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MealUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: MealCreateWithoutCreatedByUserInput;
  update: MealUpdateWithoutCreatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutMealGroupsInput = {
  create: MealCreateWithoutMealGroupsInput;
  update: MealUpdateWithoutMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: MealCreateWithoutUpdatedByUserInput;
  update: MealUpdateWithoutUpdatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithoutMealIngredientsInput = {
  create: MealCreateWithoutMealIngredientsInput;
  update: MealUpdateWithoutMealIngredientsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpsertWithoutScheduledMealsInput = {
  create: MealCreateWithoutScheduledMealsInput;
  update: MealUpdateWithoutScheduledMealsInput;
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
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  mealGroups?: InputMaybe<MealGroupListRelationFilter>;
  mealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  scheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type MealWhereUniqueInput = {
  AND?: InputMaybe<Array<MealWhereInput>>;
  NOT?: InputMaybe<Array<MealWhereInput>>;
  OR?: InputMaybe<Array<MealWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<StringNullableFilter>;
  mealGroups?: InputMaybe<MealGroupListRelationFilter>;
  mealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  scheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type Mutation = {
  changePasswordUser?: Maybe<Scalars["Boolean"]["output"]>;
  createIngredientAdmin?: Maybe<Ingredient>;
  createManyIngredientsAdmin?: Maybe<Array<Ingredient>>;
  createManyMealGroupsAdmin?: Maybe<Array<MealGroup>>;
  createManyMealIngredientsAdmin?: Maybe<Array<MealIngredient>>;
  createManyMealSchedulesAdmin?: Maybe<Array<MealSchedule>>;
  createManyMealsAdmin?: Maybe<Array<Meal>>;
  createManyNutritionsAdmin?: Maybe<Array<Nutrition>>;
  createManyScheduleMealsAdmin?: Maybe<Array<ScheduleMeal>>;
  createManyUsersAdmin?: Maybe<Array<User>>;
  createMealAdmin?: Maybe<Meal>;
  createMealGroupAdmin?: Maybe<MealGroup>;
  createMealIngredientAdmin?: Maybe<MealIngredient>;
  createMealScheduleAdmin?: Maybe<MealSchedule>;
  createNutritionAdmin?: Maybe<Nutrition>;
  createScheduleMealAdmin?: Maybe<ScheduleMeal>;
  createUserAdmin?: Maybe<User>;
  deleteAccountTokensUser: Scalars["Boolean"]["output"];
  deleteIngredientAdmin?: Maybe<Ingredient>;
  deleteManyIngredientsAdmin?: Maybe<Scalars["Int"]["output"]>;
  deleteManyMealGroupsAdmin?: Maybe<Scalars["Int"]["output"]>;
  deleteManyMealIngredientsAdmin?: Maybe<Scalars["Int"]["output"]>;
  deleteManyMealSchedulesAdmin?: Maybe<Scalars["Int"]["output"]>;
  deleteManyMealsAdmin?: Maybe<Scalars["Int"]["output"]>;
  deleteManyNutritionsAdmin?: Maybe<Scalars["Int"]["output"]>;
  deleteManyScheduleMealsAdmin?: Maybe<Scalars["Int"]["output"]>;
  deleteManyUsersAdmin?: Maybe<Scalars["Int"]["output"]>;
  deleteMealAdmin?: Maybe<Meal>;
  deleteMealGroupAdmin?: Maybe<MealGroup>;
  deleteMealIngredientAdmin?: Maybe<MealIngredient>;
  deleteMealScheduleAdmin?: Maybe<MealSchedule>;
  deleteNutritionAdmin?: Maybe<Nutrition>;
  deleteScheduleMealAdmin?: Maybe<ScheduleMeal>;
  deleteUserAdmin?: Maybe<User>;
  loginUser?: Maybe<User>;
  logout?: Maybe<Scalars["Boolean"]["output"]>;
  registerUser?: Maybe<User>;
  updateIngredientAdmin?: Maybe<Ingredient>;
  updateManyIngredientsAdmin?: Maybe<Array<Ingredient>>;
  updateManyMealGroupsAdmin?: Maybe<Array<MealGroup>>;
  updateManyMealIngredientsAdmin?: Maybe<Array<MealIngredient>>;
  updateManyMealSchedulesAdmin?: Maybe<Array<MealSchedule>>;
  updateManyMealsAdmin?: Maybe<Array<Meal>>;
  updateManyNutritionsAdmin?: Maybe<Array<Nutrition>>;
  updateManyScheduleMealsAdmin?: Maybe<Array<ScheduleMeal>>;
  updateManyUsersAdmin?: Maybe<Array<User>>;
  updateMealAdmin?: Maybe<Meal>;
  updateMealGroupAdmin?: Maybe<MealGroup>;
  updateMealIngredientAdmin?: Maybe<MealIngredient>;
  updateMealScheduleAdmin?: Maybe<MealSchedule>;
  updateNutritionAdmin?: Maybe<Nutrition>;
  updateScheduleMealAdmin?: Maybe<ScheduleMeal>;
  updateUserAdmin?: Maybe<User>;
  upsertIngredientAdmin?: Maybe<Ingredient>;
  upsertMealAdmin?: Maybe<Meal>;
  upsertMealGroupAdmin?: Maybe<MealGroup>;
  upsertMealIngredientAdmin?: Maybe<MealIngredient>;
  upsertMealScheduleAdmin?: Maybe<MealSchedule>;
  upsertNutritionAdmin?: Maybe<Nutrition>;
  upsertScheduleMealAdmin?: Maybe<ScheduleMeal>;
  upsertUserAdmin?: Maybe<User>;
};

export type MutationChangePasswordUserArgs = {
  newPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationCreateIngredientAdminArgs = {
  data: IngredientCreateInput;
};

export type MutationCreateManyIngredientsAdminArgs = {
  data: Array<IngredientCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyMealGroupsAdminArgs = {
  data: Array<MealGroupCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyMealIngredientsAdminArgs = {
  data: Array<MealIngredientCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyMealSchedulesAdminArgs = {
  data: Array<MealScheduleCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyMealsAdminArgs = {
  data: Array<MealCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyNutritionsAdminArgs = {
  data: Array<NutritionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyScheduleMealsAdminArgs = {
  data: Array<ScheduleMealCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateManyUsersAdminArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationCreateMealAdminArgs = {
  data: MealCreateInput;
};

export type MutationCreateMealGroupAdminArgs = {
  data: MealGroupCreateInput;
};

export type MutationCreateMealIngredientAdminArgs = {
  data: MealIngredientCreateInput;
};

export type MutationCreateMealScheduleAdminArgs = {
  data: MealScheduleCreateInput;
};

export type MutationCreateNutritionAdminArgs = {
  data: NutritionCreateInput;
};

export type MutationCreateScheduleMealAdminArgs = {
  data: ScheduleMealCreateInput;
};

export type MutationCreateUserAdminArgs = {
  data: UserCreateInput;
};

export type MutationDeleteIngredientAdminArgs = {
  where: IngredientWhereUniqueInput;
};

export type MutationDeleteManyIngredientsAdminArgs = {
  where?: InputMaybe<IngredientWhereInput>;
};

export type MutationDeleteManyMealGroupsAdminArgs = {
  where?: InputMaybe<MealGroupWhereInput>;
};

export type MutationDeleteManyMealIngredientsAdminArgs = {
  where?: InputMaybe<MealIngredientWhereInput>;
};

export type MutationDeleteManyMealSchedulesAdminArgs = {
  where?: InputMaybe<MealScheduleWhereInput>;
};

export type MutationDeleteManyMealsAdminArgs = {
  where?: InputMaybe<MealWhereInput>;
};

export type MutationDeleteManyNutritionsAdminArgs = {
  where?: InputMaybe<NutritionWhereInput>;
};

export type MutationDeleteManyScheduleMealsAdminArgs = {
  where?: InputMaybe<ScheduleMealWhereInput>;
};

export type MutationDeleteManyUsersAdminArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type MutationDeleteMealAdminArgs = {
  where: MealWhereUniqueInput;
};

export type MutationDeleteMealGroupAdminArgs = {
  where: MealGroupWhereUniqueInput;
};

export type MutationDeleteMealIngredientAdminArgs = {
  where: MealIngredientWhereUniqueInput;
};

export type MutationDeleteMealScheduleAdminArgs = {
  where: MealScheduleWhereUniqueInput;
};

export type MutationDeleteNutritionAdminArgs = {
  where: NutritionWhereUniqueInput;
};

export type MutationDeleteScheduleMealAdminArgs = {
  where: ScheduleMealWhereUniqueInput;
};

export type MutationDeleteUserAdminArgs = {
  where: UserWhereUniqueInput;
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

export type MutationUpdateManyMealGroupsAdminArgs = {
  data: MealGroupUpdateManyMutationInput;
  where?: InputMaybe<MealGroupWhereInput>;
};

export type MutationUpdateManyMealIngredientsAdminArgs = {
  data: MealIngredientUpdateManyMutationInput;
  where?: InputMaybe<MealIngredientWhereInput>;
};

export type MutationUpdateManyMealSchedulesAdminArgs = {
  data: MealScheduleUpdateManyMutationInput;
  where?: InputMaybe<MealScheduleWhereInput>;
};

export type MutationUpdateManyMealsAdminArgs = {
  data: MealUpdateManyMutationInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MutationUpdateManyNutritionsAdminArgs = {
  data: NutritionUpdateManyMutationInput;
  where?: InputMaybe<NutritionWhereInput>;
};

export type MutationUpdateManyScheduleMealsAdminArgs = {
  data: ScheduleMealUpdateManyMutationInput;
  where?: InputMaybe<ScheduleMealWhereInput>;
};

export type MutationUpdateManyUsersAdminArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type MutationUpdateMealAdminArgs = {
  data: MealUpdateInput;
  where: MealWhereUniqueInput;
};

export type MutationUpdateMealGroupAdminArgs = {
  data: MealGroupUpdateInput;
  where: MealGroupWhereUniqueInput;
};

export type MutationUpdateMealIngredientAdminArgs = {
  data: MealIngredientUpdateInput;
  where: MealIngredientWhereUniqueInput;
};

export type MutationUpdateMealScheduleAdminArgs = {
  data: MealScheduleUpdateInput;
  where: MealScheduleWhereUniqueInput;
};

export type MutationUpdateNutritionAdminArgs = {
  data: NutritionUpdateInput;
  where: NutritionWhereUniqueInput;
};

export type MutationUpdateScheduleMealAdminArgs = {
  data: ScheduleMealUpdateInput;
  where: ScheduleMealWhereUniqueInput;
};

export type MutationUpdateUserAdminArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
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

export type MutationUpsertMealGroupAdminArgs = {
  create: MealGroupCreateInput;
  update: MealGroupUpdateInput;
  where: MealGroupWhereUniqueInput;
};

export type MutationUpsertMealIngredientAdminArgs = {
  create: MealIngredientCreateInput;
  update: MealIngredientUpdateInput;
  where: MealIngredientWhereUniqueInput;
};

export type MutationUpsertMealScheduleAdminArgs = {
  create: MealScheduleCreateInput;
  update: MealScheduleUpdateInput;
  where: MealScheduleWhereUniqueInput;
};

export type MutationUpsertNutritionAdminArgs = {
  create: NutritionCreateInput;
  update: NutritionUpdateInput;
  where: NutritionWhereUniqueInput;
};

export type MutationUpsertScheduleMealAdminArgs = {
  create: ScheduleMealCreateInput;
  update: ScheduleMealUpdateInput;
  where: ScheduleMealWhereUniqueInput;
};

export type MutationUpsertUserAdminArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars["Decimal"]["input"]>;
  gt?: InputMaybe<Scalars["Decimal"]["input"]>;
  gte?: InputMaybe<Scalars["Decimal"]["input"]>;
  in?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
  lt?: InputMaybe<Scalars["Decimal"]["input"]>;
  lte?: InputMaybe<Scalars["Decimal"]["input"]>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
};

export type NestedEnumUserRoleNameFilter = {
  equals?: InputMaybe<UserRoleName>;
  in?: InputMaybe<Array<UserRoleName>>;
  not?: InputMaybe<NestedEnumUserRoleNameFilter>;
  notIn?: InputMaybe<Array<UserRoleName>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]["input"]>;
};

export enum NullsOrder {
  First = "first",
  Last = "last",
}

export type Nutrition = {
  calories: Scalars["Decimal"]["output"];
  carbohydrates: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdBy: Scalars["Int"]["output"];
  createdByUser: User;
  fats: Scalars["Decimal"]["output"];
  fiber: Scalars["Decimal"]["output"];
  ingredient: Ingredient;
  ingredientId: Scalars["Int"]["output"];
  protein: Scalars["Decimal"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy: Scalars["Int"]["output"];
  updatedByUser: User;
};

export type NutritionCreateInput = {
  calories: Scalars["Decimal"]["input"];
  carbohydrates: Scalars["Decimal"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedNutritionsInput;
  fats: Scalars["Decimal"]["input"];
  fiber: Scalars["Decimal"]["input"];
  ingredient: IngredientCreateNestedOneWithoutNutritionsInput;
  protein: Scalars["Decimal"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedNutritionsInput;
};

export type NutritionCreateManyCreatedByUserInput = {
  calories: Scalars["Decimal"]["input"];
  carbohydrates: Scalars["Decimal"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fats: Scalars["Decimal"]["input"];
  fiber: Scalars["Decimal"]["input"];
  ingredientId: Scalars["Int"]["input"];
  protein: Scalars["Decimal"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type NutritionCreateManyCreatedByUserInputEnvelope = {
  data: Array<NutritionCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NutritionCreateManyIngredientInput = {
  calories: Scalars["Decimal"]["input"];
  carbohydrates: Scalars["Decimal"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fats: Scalars["Decimal"]["input"];
  fiber: Scalars["Decimal"]["input"];
  protein: Scalars["Decimal"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type NutritionCreateManyIngredientInputEnvelope = {
  data: Array<NutritionCreateManyIngredientInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NutritionCreateManyInput = {
  calories: Scalars["Decimal"]["input"];
  carbohydrates: Scalars["Decimal"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fats: Scalars["Decimal"]["input"];
  fiber: Scalars["Decimal"]["input"];
  ingredientId: Scalars["Int"]["input"];
  protein: Scalars["Decimal"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type NutritionCreateManyUpdatedByUserInput = {
  calories: Scalars["Decimal"]["input"];
  carbohydrates: Scalars["Decimal"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fats: Scalars["Decimal"]["input"];
  fiber: Scalars["Decimal"]["input"];
  ingredientId: Scalars["Int"]["input"];
  protein: Scalars["Decimal"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type NutritionCreateManyUpdatedByUserInputEnvelope = {
  data: Array<NutritionCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NutritionCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<NutritionCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<NutritionCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<NutritionCreateManyCreatedByUserInputEnvelope>;
};

export type NutritionCreateNestedManyWithoutIngredientInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<NutritionCreateOrConnectWithoutIngredientInput>
  >;
  create?: InputMaybe<Array<NutritionCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<NutritionCreateManyIngredientInputEnvelope>;
};

export type NutritionCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<NutritionCreateOrConnectWithoutUpdatedByUserInput>
  >;
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
  calories: Scalars["Decimal"]["input"];
  carbohydrates: Scalars["Decimal"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fats: Scalars["Decimal"]["input"];
  fiber: Scalars["Decimal"]["input"];
  ingredient: IngredientCreateNestedOneWithoutNutritionsInput;
  protein: Scalars["Decimal"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedNutritionsInput;
};

export type NutritionCreateWithoutIngredientInput = {
  calories: Scalars["Decimal"]["input"];
  carbohydrates: Scalars["Decimal"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedNutritionsInput;
  fats: Scalars["Decimal"]["input"];
  fiber: Scalars["Decimal"]["input"];
  protein: Scalars["Decimal"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedNutritionsInput;
};

export type NutritionCreateWithoutUpdatedByUserInput = {
  calories: Scalars["Decimal"]["input"];
  carbohydrates: Scalars["Decimal"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedNutritionsInput;
  fats: Scalars["Decimal"]["input"];
  fiber: Scalars["Decimal"]["input"];
  ingredient: IngredientCreateNestedOneWithoutNutritionsInput;
  protein: Scalars["Decimal"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
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
  Calories = "calories",
  Carbohydrates = "carbohydrates",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Fats = "fats",
  Fiber = "fiber",
  IngredientId = "ingredientId",
  Protein = "protein",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
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
  connectOrCreate?: InputMaybe<
    Array<NutritionCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<NutritionCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<NutritionCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NutritionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  set?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<NutritionUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<NutritionUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<NutritionUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type NutritionUpdateManyWithoutIngredientNestedInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<NutritionCreateOrConnectWithoutIngredientInput>
  >;
  create?: InputMaybe<Array<NutritionCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<NutritionCreateManyIngredientInputEnvelope>;
  delete?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NutritionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  set?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<NutritionUpdateWithWhereUniqueWithoutIngredientInput>
  >;
  updateMany?: InputMaybe<
    Array<NutritionUpdateManyWithWhereWithoutIngredientInput>
  >;
  upsert?: InputMaybe<
    Array<NutritionUpsertWithWhereUniqueWithoutIngredientInput>
  >;
};

export type NutritionUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<NutritionCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<NutritionCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<NutritionCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NutritionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  set?: InputMaybe<Array<NutritionWhereUniqueInput>>;
  update?: InputMaybe<
    Array<NutritionUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<NutritionUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<NutritionUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
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
  ingredientId?: InputMaybe<Scalars["Int"]["input"]>;
  protein?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type Query = {
  getAllIngredientsAdmin?: Maybe<Array<Ingredient>>;
  getAllMealGroupsAdmin?: Maybe<Array<MealGroup>>;
  getAllMealIngredientsAdmin?: Maybe<Array<MealIngredient>>;
  getAllMealSchedulesAdmin?: Maybe<Array<MealSchedule>>;
  getAllMealsAdmin?: Maybe<Array<Meal>>;
  getAllNutritionsAdmin?: Maybe<Array<Nutrition>>;
  getAllScheduleMealsAdmin?: Maybe<Array<ScheduleMeal>>;
  getAllUsersAdmin?: Maybe<Array<User>>;
  getIngredientAdmin?: Maybe<Ingredient>;
  getMealAdmin?: Maybe<Meal>;
  getMealGroupAdmin?: Maybe<MealGroup>;
  getMealIngredientAdmin?: Maybe<MealIngredient>;
  getMealScheduleAdmin?: Maybe<MealSchedule>;
  getNutritionAdmin?: Maybe<Nutrition>;
  getScheduleMealAdmin?: Maybe<ScheduleMeal>;
  getUserAdmin?: Maybe<User>;
  me?: Maybe<User>;
};

export type QueryGetAllIngredientsAdminArgs = {
  cursor?: InputMaybe<IngredientWhereUniqueInput>;
  distinct?: InputMaybe<Array<IngredientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IngredientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<IngredientWhereInput>;
};

export type QueryGetAllMealGroupsAdminArgs = {
  cursor?: InputMaybe<MealGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MealGroupWhereInput>;
};

export type QueryGetAllMealIngredientsAdminArgs = {
  cursor?: InputMaybe<MealIngredientWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealIngredientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealIngredientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MealIngredientWhereInput>;
};

export type QueryGetAllMealSchedulesAdminArgs = {
  cursor?: InputMaybe<MealScheduleWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealScheduleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealScheduleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MealScheduleWhereInput>;
};

export type QueryGetAllMealsAdminArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MealWhereInput>;
};

export type QueryGetAllNutritionsAdminArgs = {
  cursor?: InputMaybe<NutritionWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutritionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutritionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<NutritionWhereInput>;
};

export type QueryGetAllScheduleMealsAdminArgs = {
  cursor?: InputMaybe<ScheduleMealWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScheduleMealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScheduleMealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduleMealWhereInput>;
};

export type QueryGetAllUsersAdminArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryGetIngredientAdminArgs = {
  cursor?: InputMaybe<IngredientWhereUniqueInput>;
  distinct?: InputMaybe<Array<IngredientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IngredientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<IngredientWhereInput>;
};

export type QueryGetMealAdminArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MealWhereInput>;
};

export type QueryGetMealGroupAdminArgs = {
  cursor?: InputMaybe<MealGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MealGroupWhereInput>;
};

export type QueryGetMealIngredientAdminArgs = {
  cursor?: InputMaybe<MealIngredientWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealIngredientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealIngredientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MealIngredientWhereInput>;
};

export type QueryGetMealScheduleAdminArgs = {
  cursor?: InputMaybe<MealScheduleWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealScheduleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealScheduleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MealScheduleWhereInput>;
};

export type QueryGetNutritionAdminArgs = {
  cursor?: InputMaybe<NutritionWhereUniqueInput>;
  distinct?: InputMaybe<Array<NutritionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NutritionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<NutritionWhereInput>;
};

export type QueryGetScheduleMealAdminArgs = {
  cursor?: InputMaybe<ScheduleMealWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScheduleMealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScheduleMealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduleMealWhereInput>;
};

export type QueryGetUserAdminArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type RegisterUserInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type ScheduleMeal = {
  createdAt: Scalars["DateTime"]["output"];
  createdBy: Scalars["Int"]["output"];
  createdByUser: User;
  id: Scalars["ID"]["output"];
  meal?: Maybe<Meal>;
  mealGroup?: Maybe<MealGroup>;
  mealGroupId?: Maybe<Scalars["Int"]["output"]>;
  mealId?: Maybe<Scalars["Int"]["output"]>;
  mealSchedule: MealSchedule;
  mealScheduleId: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy: Scalars["Int"]["output"];
  updatedByUser: User;
};

export type ScheduleMealCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedScheduledMealsInput;
  meal?: InputMaybe<MealCreateNestedOneWithoutScheduledMealsInput>;
  mealGroup?: InputMaybe<MealGroupCreateNestedOneWithoutScheduledMealsInput>;
  mealSchedule: MealScheduleCreateNestedOneWithoutScheduledMealsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedScheduledMealsInput;
};

export type ScheduleMealCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mealGroupId?: InputMaybe<Scalars["Int"]["input"]>;
  mealId?: InputMaybe<Scalars["Int"]["input"]>;
  mealScheduleId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy: Scalars["Int"]["input"];
};

export type ScheduleMealCreateManyCreatedByUserInputEnvelope = {
  data: Array<ScheduleMealCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ScheduleMealCreateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mealGroupId?: InputMaybe<Scalars["Int"]["input"]>;
  mealId?: InputMaybe<Scalars["Int"]["input"]>;
  mealScheduleId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy: Scalars["Int"]["input"];
};

export type ScheduleMealCreateManyMealGroupInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mealId?: InputMaybe<Scalars["Int"]["input"]>;
  mealScheduleId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy: Scalars["Int"]["input"];
};

export type ScheduleMealCreateManyMealGroupInputEnvelope = {
  data: Array<ScheduleMealCreateManyMealGroupInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ScheduleMealCreateManyMealInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mealGroupId?: InputMaybe<Scalars["Int"]["input"]>;
  mealScheduleId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy: Scalars["Int"]["input"];
};

export type ScheduleMealCreateManyMealInputEnvelope = {
  data: Array<ScheduleMealCreateManyMealInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ScheduleMealCreateManyMealScheduleInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mealGroupId?: InputMaybe<Scalars["Int"]["input"]>;
  mealId?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedBy: Scalars["Int"]["input"];
};

export type ScheduleMealCreateManyMealScheduleInputEnvelope = {
  data: Array<ScheduleMealCreateManyMealScheduleInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ScheduleMealCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdBy: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mealGroupId?: InputMaybe<Scalars["Int"]["input"]>;
  mealId?: InputMaybe<Scalars["Int"]["input"]>;
  mealScheduleId: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ScheduleMealCreateManyUpdatedByUserInputEnvelope = {
  data: Array<ScheduleMealCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ScheduleMealCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyCreatedByUserInputEnvelope>;
};

export type ScheduleMealCreateNestedManyWithoutMealGroupInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutMealGroupInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutMealGroupInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyMealGroupInputEnvelope>;
};

export type ScheduleMealCreateNestedManyWithoutMealInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutMealInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutMealInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyMealInputEnvelope>;
};

export type ScheduleMealCreateNestedManyWithoutMealScheduleInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutMealScheduleInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutMealScheduleInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyMealScheduleInputEnvelope>;
};

export type ScheduleMealCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyUpdatedByUserInputEnvelope>;
};

export type ScheduleMealCreateOrConnectWithoutCreatedByUserInput = {
  create: ScheduleMealCreateWithoutCreatedByUserInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealCreateOrConnectWithoutMealGroupInput = {
  create: ScheduleMealCreateWithoutMealGroupInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealCreateOrConnectWithoutMealInput = {
  create: ScheduleMealCreateWithoutMealInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealCreateOrConnectWithoutMealScheduleInput = {
  create: ScheduleMealCreateWithoutMealScheduleInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealCreateOrConnectWithoutUpdatedByUserInput = {
  create: ScheduleMealCreateWithoutUpdatedByUserInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealCreateWithoutCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  meal?: InputMaybe<MealCreateNestedOneWithoutScheduledMealsInput>;
  mealGroup?: InputMaybe<MealGroupCreateNestedOneWithoutScheduledMealsInput>;
  mealSchedule: MealScheduleCreateNestedOneWithoutScheduledMealsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedScheduledMealsInput;
};

export type ScheduleMealCreateWithoutMealGroupInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedScheduledMealsInput;
  meal?: InputMaybe<MealCreateNestedOneWithoutScheduledMealsInput>;
  mealSchedule: MealScheduleCreateNestedOneWithoutScheduledMealsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedScheduledMealsInput;
};

export type ScheduleMealCreateWithoutMealInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedScheduledMealsInput;
  mealGroup?: InputMaybe<MealGroupCreateNestedOneWithoutScheduledMealsInput>;
  mealSchedule: MealScheduleCreateNestedOneWithoutScheduledMealsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedScheduledMealsInput;
};

export type ScheduleMealCreateWithoutMealScheduleInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedScheduledMealsInput;
  meal?: InputMaybe<MealCreateNestedOneWithoutScheduledMealsInput>;
  mealGroup?: InputMaybe<MealGroupCreateNestedOneWithoutScheduledMealsInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedScheduledMealsInput;
};

export type ScheduleMealCreateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedScheduledMealsInput;
  meal?: InputMaybe<MealCreateNestedOneWithoutScheduledMealsInput>;
  mealGroup?: InputMaybe<MealGroupCreateNestedOneWithoutScheduledMealsInput>;
  mealSchedule: MealScheduleCreateNestedOneWithoutScheduledMealsInput;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ScheduleMealListRelationFilter = {
  every?: InputMaybe<ScheduleMealWhereInput>;
  none?: InputMaybe<ScheduleMealWhereInput>;
  some?: InputMaybe<ScheduleMealWhereInput>;
};

export type ScheduleMealMealScheduleIdMealGroupIdMealIdCompoundUniqueInput = {
  mealGroupId: Scalars["Int"]["input"];
  mealId: Scalars["Int"]["input"];
  mealScheduleId: Scalars["Int"]["input"];
};

export type ScheduleMealOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ScheduleMealOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  createdByUser?: InputMaybe<UserOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  meal?: InputMaybe<MealOrderByWithRelationInput>;
  mealGroup?: InputMaybe<MealGroupOrderByWithRelationInput>;
  mealGroupId?: InputMaybe<SortOrderInput>;
  mealId?: InputMaybe<SortOrderInput>;
  mealSchedule?: InputMaybe<MealScheduleOrderByWithRelationInput>;
  mealScheduleId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBy?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
};

export enum ScheduleMealScalarFieldEnum {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Id = "id",
  MealGroupId = "mealGroupId",
  MealId = "mealId",
  MealScheduleId = "mealScheduleId",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ScheduleMealScalarWhereInput = {
  AND?: InputMaybe<Array<ScheduleMealScalarWhereInput>>;
  NOT?: InputMaybe<Array<ScheduleMealScalarWhereInput>>;
  OR?: InputMaybe<Array<ScheduleMealScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  mealGroupId?: InputMaybe<IntNullableFilter>;
  mealId?: InputMaybe<IntNullableFilter>;
  mealScheduleId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
};

export type ScheduleMealUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedScheduledMealsNestedInput>;
  meal?: InputMaybe<MealUpdateOneWithoutScheduledMealsNestedInput>;
  mealGroup?: InputMaybe<MealGroupUpdateOneWithoutScheduledMealsNestedInput>;
  mealSchedule?: InputMaybe<MealScheduleUpdateOneRequiredWithoutScheduledMealsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedScheduledMealsNestedInput>;
};

export type ScheduleMealUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleMealUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: ScheduleMealUpdateManyMutationInput;
  where: ScheduleMealScalarWhereInput;
};

export type ScheduleMealUpdateManyWithWhereWithoutMealGroupInput = {
  data: ScheduleMealUpdateManyMutationInput;
  where: ScheduleMealScalarWhereInput;
};

export type ScheduleMealUpdateManyWithWhereWithoutMealInput = {
  data: ScheduleMealUpdateManyMutationInput;
  where: ScheduleMealScalarWhereInput;
};

export type ScheduleMealUpdateManyWithWhereWithoutMealScheduleInput = {
  data: ScheduleMealUpdateManyMutationInput;
  where: ScheduleMealScalarWhereInput;
};

export type ScheduleMealUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: ScheduleMealUpdateManyMutationInput;
  where: ScheduleMealScalarWhereInput;
};

export type ScheduleMealUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScheduleMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ScheduleMealUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<ScheduleMealUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<ScheduleMealUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type ScheduleMealUpdateManyWithoutMealGroupNestedInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutMealGroupInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutMealGroupInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyMealGroupInputEnvelope>;
  delete?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScheduleMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ScheduleMealUpdateWithWhereUniqueWithoutMealGroupInput>
  >;
  updateMany?: InputMaybe<
    Array<ScheduleMealUpdateManyWithWhereWithoutMealGroupInput>
  >;
  upsert?: InputMaybe<
    Array<ScheduleMealUpsertWithWhereUniqueWithoutMealGroupInput>
  >;
};

export type ScheduleMealUpdateManyWithoutMealNestedInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutMealInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutMealInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyMealInputEnvelope>;
  delete?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScheduleMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  update?: InputMaybe<Array<ScheduleMealUpdateWithWhereUniqueWithoutMealInput>>;
  updateMany?: InputMaybe<
    Array<ScheduleMealUpdateManyWithWhereWithoutMealInput>
  >;
  upsert?: InputMaybe<Array<ScheduleMealUpsertWithWhereUniqueWithoutMealInput>>;
};

export type ScheduleMealUpdateManyWithoutMealScheduleNestedInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutMealScheduleInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutMealScheduleInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyMealScheduleInputEnvelope>;
  delete?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScheduleMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ScheduleMealUpdateWithWhereUniqueWithoutMealScheduleInput>
  >;
  updateMany?: InputMaybe<
    Array<ScheduleMealUpdateManyWithWhereWithoutMealScheduleInput>
  >;
  upsert?: InputMaybe<
    Array<ScheduleMealUpsertWithWhereUniqueWithoutMealScheduleInput>
  >;
};

export type ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ScheduleMealCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<ScheduleMealCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<ScheduleMealCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScheduleMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduleMealWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ScheduleMealUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<ScheduleMealUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<ScheduleMealUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
};

export type ScheduleMealUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: ScheduleMealUpdateWithoutCreatedByUserInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealUpdateWithWhereUniqueWithoutMealGroupInput = {
  data: ScheduleMealUpdateWithoutMealGroupInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealUpdateWithWhereUniqueWithoutMealInput = {
  data: ScheduleMealUpdateWithoutMealInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealUpdateWithWhereUniqueWithoutMealScheduleInput = {
  data: ScheduleMealUpdateWithoutMealScheduleInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: ScheduleMealUpdateWithoutUpdatedByUserInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealUpdateWithoutCreatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  meal?: InputMaybe<MealUpdateOneWithoutScheduledMealsNestedInput>;
  mealGroup?: InputMaybe<MealGroupUpdateOneWithoutScheduledMealsNestedInput>;
  mealSchedule?: InputMaybe<MealScheduleUpdateOneRequiredWithoutScheduledMealsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedScheduledMealsNestedInput>;
};

export type ScheduleMealUpdateWithoutMealGroupInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedScheduledMealsNestedInput>;
  meal?: InputMaybe<MealUpdateOneWithoutScheduledMealsNestedInput>;
  mealSchedule?: InputMaybe<MealScheduleUpdateOneRequiredWithoutScheduledMealsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedScheduledMealsNestedInput>;
};

export type ScheduleMealUpdateWithoutMealInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedScheduledMealsNestedInput>;
  mealGroup?: InputMaybe<MealGroupUpdateOneWithoutScheduledMealsNestedInput>;
  mealSchedule?: InputMaybe<MealScheduleUpdateOneRequiredWithoutScheduledMealsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedScheduledMealsNestedInput>;
};

export type ScheduleMealUpdateWithoutMealScheduleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedScheduledMealsNestedInput>;
  meal?: InputMaybe<MealUpdateOneWithoutScheduledMealsNestedInput>;
  mealGroup?: InputMaybe<MealGroupUpdateOneWithoutScheduledMealsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneRequiredWithoutUpdatedScheduledMealsNestedInput>;
};

export type ScheduleMealUpdateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneRequiredWithoutCreatedScheduledMealsNestedInput>;
  meal?: InputMaybe<MealUpdateOneWithoutScheduledMealsNestedInput>;
  mealGroup?: InputMaybe<MealGroupUpdateOneWithoutScheduledMealsNestedInput>;
  mealSchedule?: InputMaybe<MealScheduleUpdateOneRequiredWithoutScheduledMealsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleMealUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: ScheduleMealCreateWithoutCreatedByUserInput;
  update: ScheduleMealUpdateWithoutCreatedByUserInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealUpsertWithWhereUniqueWithoutMealGroupInput = {
  create: ScheduleMealCreateWithoutMealGroupInput;
  update: ScheduleMealUpdateWithoutMealGroupInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealUpsertWithWhereUniqueWithoutMealInput = {
  create: ScheduleMealCreateWithoutMealInput;
  update: ScheduleMealUpdateWithoutMealInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealUpsertWithWhereUniqueWithoutMealScheduleInput = {
  create: ScheduleMealCreateWithoutMealScheduleInput;
  update: ScheduleMealUpdateWithoutMealScheduleInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: ScheduleMealCreateWithoutUpdatedByUserInput;
  update: ScheduleMealUpdateWithoutUpdatedByUserInput;
  where: ScheduleMealWhereUniqueInput;
};

export type ScheduleMealWhereInput = {
  AND?: InputMaybe<Array<ScheduleMealWhereInput>>;
  NOT?: InputMaybe<Array<ScheduleMealWhereInput>>;
  OR?: InputMaybe<Array<ScheduleMealWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<IntFilter>;
  meal?: InputMaybe<MealNullableRelationFilter>;
  mealGroup?: InputMaybe<MealGroupNullableRelationFilter>;
  mealGroupId?: InputMaybe<IntNullableFilter>;
  mealId?: InputMaybe<IntNullableFilter>;
  mealSchedule?: InputMaybe<MealScheduleRelationFilter>;
  mealScheduleId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type ScheduleMealWhereUniqueInput = {
  AND?: InputMaybe<Array<ScheduleMealWhereInput>>;
  NOT?: InputMaybe<Array<ScheduleMealWhereInput>>;
  OR?: InputMaybe<Array<ScheduleMealWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<IntFilter>;
  createdByUser?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  meal?: InputMaybe<MealNullableRelationFilter>;
  mealGroup?: InputMaybe<MealGroupNullableRelationFilter>;
  mealGroupId?: InputMaybe<IntNullableFilter>;
  mealId?: InputMaybe<IntNullableFilter>;
  mealSchedule?: InputMaybe<MealScheduleRelationFilter>;
  mealScheduleId?: InputMaybe<IntFilter>;
  mealScheduleId_mealGroupId_mealId?: InputMaybe<ScheduleMealMealScheduleIdMealGroupIdMealIdCompoundUniqueInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<IntFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type Token = {
  createdAt: Scalars["DateTime"]["output"];
  createdBy: Scalars["Int"]["output"];
  createdByUser: User;
  expiresIn: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  token: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy: Scalars["Int"]["output"];
  updatedByUser: User;
};

export type TokenCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  expiresIn: Scalars["DateTime"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  token: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type TokenCreateManyCreatedByUserInputEnvelope = {
  data: Array<TokenCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TokenCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  expiresIn: Scalars["DateTime"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  token: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type TokenCreateManyUpdatedByUserInputEnvelope = {
  data: Array<TokenCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TokenCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TokenCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<TokenCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<TokenCreateManyCreatedByUserInputEnvelope>;
};

export type TokenCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TokenCreateOrConnectWithoutUpdatedByUserInput>
  >;
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
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  expiresIn: Scalars["DateTime"]["input"];
  token: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedTokenInput;
};

export type TokenCreateWithoutUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedTokenInput;
  expiresIn: Scalars["DateTime"]["input"];
  token: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
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
  connectOrCreate?: InputMaybe<
    Array<TokenCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<TokenCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<TokenCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<TokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  set?: InputMaybe<Array<TokenWhereUniqueInput>>;
  update?: InputMaybe<
    Array<TokenUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<TokenUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<TokenUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type TokenUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TokenCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<TokenCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<TokenCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<TokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  set?: InputMaybe<Array<TokenWhereUniqueInput>>;
  update?: InputMaybe<
    Array<TokenUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<TokenUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<TokenUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
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
  id?: InputMaybe<Scalars["Int"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
};

export type User = {
  UserRole?: Maybe<Array<UserRole>>;
  _count: UserCount;
  createdAt: Scalars["DateTime"]["output"];
  createdBy?: Maybe<Scalars["Int"]["output"]>;
  createdByUser?: Maybe<User>;
  createdIngredients?: Maybe<Array<Ingredient>>;
  createdMealGroups?: Maybe<Array<MealGroup>>;
  createdMealIngredients?: Maybe<Array<MealIngredient>>;
  createdMealSchedulers?: Maybe<Array<MealSchedule>>;
  createdMeals?: Maybe<Array<Meal>>;
  createdNutritions?: Maybe<Array<Nutrition>>;
  createdScheduledMeals?: Maybe<Array<ScheduleMeal>>;
  createdToken?: Maybe<Array<Token>>;
  createdUser?: Maybe<Array<User>>;
  createdUserRoles?: Maybe<Array<UserRole>>;
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  lastOnline: Scalars["DateTime"]["output"];
  status: Scalars["Boolean"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy?: Maybe<Scalars["Int"]["output"]>;
  updatedByUser?: Maybe<User>;
  updatedIngredients?: Maybe<Array<Ingredient>>;
  updatedMealGroups?: Maybe<Array<MealGroup>>;
  updatedMealIngredients?: Maybe<Array<MealIngredient>>;
  updatedMealSchedulers?: Maybe<Array<MealSchedule>>;
  updatedMeals?: Maybe<Array<Meal>>;
  updatedNutritions?: Maybe<Array<Nutrition>>;
  updatedScheduledMeals?: Maybe<Array<ScheduleMeal>>;
  updatedToken?: Maybe<Array<Token>>;
  updatedUser?: Maybe<Array<User>>;
  updatedUserRoles?: Maybe<Array<UserRole>>;
  username: Scalars["String"]["output"];
};

export type UserCount = {
  UserRole: Scalars["Int"]["output"];
  createdIngredients: Scalars["Int"]["output"];
  createdMealGroups: Scalars["Int"]["output"];
  createdMealIngredients: Scalars["Int"]["output"];
  createdMealSchedulers: Scalars["Int"]["output"];
  createdMeals: Scalars["Int"]["output"];
  createdNutritions: Scalars["Int"]["output"];
  createdScheduledMeals: Scalars["Int"]["output"];
  createdToken: Scalars["Int"]["output"];
  createdUser: Scalars["Int"]["output"];
  createdUserRoles: Scalars["Int"]["output"];
  updatedIngredients: Scalars["Int"]["output"];
  updatedMealGroups: Scalars["Int"]["output"];
  updatedMealIngredients: Scalars["Int"]["output"];
  updatedMealSchedulers: Scalars["Int"]["output"];
  updatedMeals: Scalars["Int"]["output"];
  updatedNutritions: Scalars["Int"]["output"];
  updatedScheduledMeals: Scalars["Int"]["output"];
  updatedToken: Scalars["Int"]["output"];
  updatedUser: Scalars["Int"]["output"];
  updatedUserRoles: Scalars["Int"]["output"];
};

export type UserCreateInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  username: Scalars["String"]["input"];
};

export type UserCreateManyCreatedByUserInputEnvelope = {
  data: Array<UserCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  username: Scalars["String"]["input"];
};

export type UserCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  username: Scalars["String"]["input"];
};

export type UserCreateManyUpdatedByUserInputEnvelope = {
  data: Array<UserCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<UserCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserCreateManyCreatedByUserInputEnvelope>;
};

export type UserCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<UserCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<UserCreateManyUpdatedByUserInputEnvelope>;
};

export type UserCreateNestedOneWithoutCreatedIngredientsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedIngredientsInput>;
};

export type UserCreateNestedOneWithoutCreatedMealGroupsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMealGroupsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMealGroupsInput>;
};

export type UserCreateNestedOneWithoutCreatedMealIngredientsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMealIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMealIngredientsInput>;
};

export type UserCreateNestedOneWithoutCreatedMealSchedulersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMealSchedulersInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMealSchedulersInput>;
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

export type UserCreateNestedOneWithoutCreatedScheduledMealsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedScheduledMealsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedScheduledMealsInput>;
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

export type UserCreateNestedOneWithoutUpdatedIngredientsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedIngredientsInput>;
};

export type UserCreateNestedOneWithoutUpdatedMealGroupsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedMealGroupsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedMealGroupsInput>;
};

export type UserCreateNestedOneWithoutUpdatedMealIngredientsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedMealIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedMealIngredientsInput>;
};

export type UserCreateNestedOneWithoutUpdatedMealSchedulersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedMealSchedulersInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedMealSchedulersInput>;
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

export type UserCreateNestedOneWithoutUpdatedScheduledMealsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedScheduledMealsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedScheduledMealsInput>;
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

export type UserCreateOrConnectWithoutCreatedMealGroupsInput = {
  create: UserCreateWithoutCreatedMealGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedMealIngredientsInput = {
  create: UserCreateWithoutCreatedMealIngredientsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedMealSchedulersInput = {
  create: UserCreateWithoutCreatedMealSchedulersInput;
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

export type UserCreateOrConnectWithoutCreatedScheduledMealsInput = {
  create: UserCreateWithoutCreatedScheduledMealsInput;
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

export type UserCreateOrConnectWithoutUpdatedByUserInput = {
  create: UserCreateWithoutUpdatedByUserInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedIngredientsInput = {
  create: UserCreateWithoutUpdatedIngredientsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedMealGroupsInput = {
  create: UserCreateWithoutUpdatedMealGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedMealIngredientsInput = {
  create: UserCreateWithoutUpdatedMealIngredientsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUpdatedMealSchedulersInput = {
  create: UserCreateWithoutUpdatedMealSchedulersInput;
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

export type UserCreateOrConnectWithoutUpdatedScheduledMealsInput = {
  create: UserCreateWithoutUpdatedScheduledMealsInput;
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

export type UserCreateOrConnectWithoutUserRoleInput = {
  create: UserCreateWithoutUserRoleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCreatedByUserInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedIngredientsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedMealGroupsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedMealIngredientsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedMealSchedulersInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedMealsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedNutritionsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedScheduledMealsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedTokenInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedUserInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutCreatedUserRolesInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedByUserInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedIngredientsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedMealGroupsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedMealIngredientsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedMealSchedulersInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedMealsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedNutritionsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedScheduledMealsInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedTokenInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedUserInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUpdatedUserRolesInput = {
  UserRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
};

export type UserCreateWithoutUserRoleInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser?: InputMaybe<UserCreateNestedOneWithoutCreatedUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutCreatedByUserInput>;
  createdMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdNutritions?: InputMaybe<NutritionCreateNestedManyWithoutCreatedByUserInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  lastOnline?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser?: InputMaybe<UserCreateNestedOneWithoutUpdatedUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealGroups?: InputMaybe<MealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedNutritions?: InputMaybe<NutritionCreateNestedManyWithoutUpdatedByUserInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  username: Scalars["String"]["input"];
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
  createdMealGroups?: InputMaybe<MealGroupOrderByRelationAggregateInput>;
  createdMealIngredients?: InputMaybe<MealIngredientOrderByRelationAggregateInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleOrderByRelationAggregateInput>;
  createdMeals?: InputMaybe<MealOrderByRelationAggregateInput>;
  createdNutritions?: InputMaybe<NutritionOrderByRelationAggregateInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealOrderByRelationAggregateInput>;
  createdToken?: InputMaybe<TokenOrderByRelationAggregateInput>;
  createdUser?: InputMaybe<UserOrderByRelationAggregateInput>;
  createdUserRoles?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  lastOnline?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedByUser?: InputMaybe<UserOrderByWithRelationInput>;
  updatedIngredients?: InputMaybe<IngredientOrderByRelationAggregateInput>;
  updatedMealGroups?: InputMaybe<MealGroupOrderByRelationAggregateInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientOrderByRelationAggregateInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleOrderByRelationAggregateInput>;
  updatedMeals?: InputMaybe<MealOrderByRelationAggregateInput>;
  updatedNutritions?: InputMaybe<NutritionOrderByRelationAggregateInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealOrderByRelationAggregateInput>;
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
  createdAt: Scalars["DateTime"]["output"];
  createdBy: Scalars["Int"]["output"];
  createdByUser: User;
  id: Scalars["ID"]["output"];
  name: UserRoleName;
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy: Scalars["Int"]["output"];
  updatedByUser: User;
  userId: Scalars["Int"]["output"];
};

export type UserRoleCreateManyCreatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type UserRoleCreateManyCreatedByUserInputEnvelope = {
  data: Array<UserRoleCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserRoleCreateManyUpdatedByUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  userId: Scalars["Int"]["input"];
};

export type UserRoleCreateManyUpdatedByUserInputEnvelope = {
  data: Array<UserRoleCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserRoleCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserRoleCreateManyUserInputEnvelope = {
  data: Array<UserRoleCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserRoleCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserRoleCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<UserRoleCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyCreatedByUserInputEnvelope>;
};

export type UserRoleCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserRoleCreateOrConnectWithoutUpdatedByUserInput>
  >;
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
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedUserRolesInput;
};

export type UserRoleCreateWithoutUpdatedByUserInput = {
  User: UserCreateNestedOneWithoutUserRoleInput;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedUserRolesInput;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserRoleCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdByUser: UserCreateNestedOneWithoutCreatedUserRolesInput;
  name: UserRoleName;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedByUser: UserCreateNestedOneWithoutUpdatedUserRolesInput;
};

export type UserRoleListRelationFilter = {
  every?: InputMaybe<UserRoleWhereInput>;
  none?: InputMaybe<UserRoleWhereInput>;
  some?: InputMaybe<UserRoleWhereInput>;
};

export enum UserRoleName {
  Admin = "ADMIN",
  Guest = "GUEST",
  Mod = "MOD",
  User = "USER",
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
  connectOrCreate?: InputMaybe<
    Array<UserRoleCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<UserRoleCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  set?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UserRoleUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<UserRoleUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<UserRoleUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type UserRoleUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserRoleCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<UserRoleCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<UserRoleCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserRoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  set?: InputMaybe<Array<UserRoleWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UserRoleUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<UserRoleUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<UserRoleUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
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
  userId: Scalars["Int"]["input"];
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
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  user_role_userId_name_unique?: InputMaybe<UserRoleUser_Role_UserId_Name_UniqueCompoundUniqueInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Email = "email",
  Id = "id",
  Image = "image",
  LastOnline = "lastOnline",
  Password = "password",
  Status = "status",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  Username = "username",
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
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
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
  connectOrCreate?: InputMaybe<
    Array<UserCreateOrConnectWithoutCreatedByUserInput>
  >;
  create?: InputMaybe<Array<UserCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UserUpdateWithWhereUniqueWithoutCreatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<UserUpdateManyWithWhereWithoutCreatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<UserUpsertWithWhereUniqueWithoutCreatedByUserInput>
  >;
};

export type UserUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<UserCreateOrConnectWithoutUpdatedByUserInput>
  >;
  create?: InputMaybe<Array<UserCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<UserCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<
    Array<UserUpdateWithWhereUniqueWithoutUpdatedByUserInput>
  >;
  updateMany?: InputMaybe<
    Array<UserUpdateManyWithWhereWithoutUpdatedByUserInput>
  >;
  upsert?: InputMaybe<
    Array<UserUpsertWithWhereUniqueWithoutUpdatedByUserInput>
  >;
};

export type UserUpdateOneRequiredWithoutCreatedIngredientsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedIngredientsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedIngredientsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedIngredientsInput>;
};

export type UserUpdateOneRequiredWithoutCreatedMealGroupsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMealGroupsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMealGroupsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedMealGroupsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedMealGroupsInput>;
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

export type UserUpdateOneRequiredWithoutCreatedScheduledMealsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedScheduledMealsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedScheduledMealsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedScheduledMealsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedScheduledMealsInput>;
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

export type UserUpdateOneRequiredWithoutUpdatedIngredientsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedIngredientsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedIngredientsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedIngredientsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedIngredientsInput>;
};

export type UserUpdateOneRequiredWithoutUpdatedMealGroupsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedMealGroupsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedMealGroupsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedMealGroupsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedMealGroupsInput>;
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

export type UserUpdateOneRequiredWithoutUpdatedScheduledMealsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedScheduledMealsInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedScheduledMealsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedScheduledMealsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedScheduledMealsInput>;
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

export type UserUpdateOneRequiredWithoutUserRoleNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserRoleInput>;
  create?: InputMaybe<UserCreateWithoutUserRoleInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserRoleInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserRoleInput>;
};

export type UserUpdateOneWithoutCreatedMealSchedulersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedMealSchedulersInput>;
  create?: InputMaybe<UserCreateWithoutCreatedMealSchedulersInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedMealSchedulersInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedMealSchedulersInput>;
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

export type UserUpdateOneWithoutUpdatedMealSchedulersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUpdatedMealSchedulersInput>;
  create?: InputMaybe<UserCreateWithoutUpdatedMealSchedulersInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUpdatedMealSchedulersInput>;
  upsert?: InputMaybe<UserUpsertWithoutUpdatedMealSchedulersInput>;
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

export type UserUpdateToOneWithWhereWithoutCreatedMealGroupsInput = {
  data: UserUpdateWithoutCreatedMealGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedMealIngredientsInput = {
  data: UserUpdateWithoutCreatedMealIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedMealSchedulersInput = {
  data: UserUpdateWithoutCreatedMealSchedulersInput;
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

export type UserUpdateToOneWithWhereWithoutCreatedScheduledMealsInput = {
  data: UserUpdateWithoutCreatedScheduledMealsInput;
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

export type UserUpdateToOneWithWhereWithoutUpdatedIngredientsInput = {
  data: UserUpdateWithoutUpdatedIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedMealGroupsInput = {
  data: UserUpdateWithoutUpdatedMealGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedMealIngredientsInput = {
  data: UserUpdateWithoutUpdatedMealIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUpdatedMealSchedulersInput = {
  data: UserUpdateWithoutUpdatedMealSchedulersInput;
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

export type UserUpdateToOneWithWhereWithoutUpdatedScheduledMealsInput = {
  data: UserUpdateWithoutUpdatedScheduledMealsInput;
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
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedIngredientsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedMealGroupsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedMealIngredientsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedMealSchedulersInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedMealsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedNutritionsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedScheduledMealsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedTokenInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedUserInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedUserRolesInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedByUserInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedIngredientsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedByUser?: InputMaybe<UserUpdateOneWithoutUpdatedUserNestedInput>;
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedMealGroupsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedMealIngredientsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedMealSchedulersInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedMealsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedNutritionsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedScheduledMealsInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedTokenInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedUserInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedUserRolesInput = {
  UserRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserRoleInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdByUser?: InputMaybe<UserUpdateOneWithoutCreatedUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealGroups?: InputMaybe<MealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdNutritions?: InputMaybe<NutritionUpdateManyWithoutCreatedByUserNestedInput>;
  createdScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutCreatedByUserNestedInput>;
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
  updatedMealGroups?: InputMaybe<MealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealIngredients?: InputMaybe<MealIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealSchedulers?: InputMaybe<MealScheduleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedNutritions?: InputMaybe<NutritionUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
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

export type UserUpsertWithoutCreatedMealGroupsInput = {
  create: UserCreateWithoutCreatedMealGroupsInput;
  update: UserUpdateWithoutCreatedMealGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedMealIngredientsInput = {
  create: UserCreateWithoutCreatedMealIngredientsInput;
  update: UserUpdateWithoutCreatedMealIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedMealSchedulersInput = {
  create: UserCreateWithoutCreatedMealSchedulersInput;
  update: UserUpdateWithoutCreatedMealSchedulersInput;
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

export type UserUpsertWithoutCreatedScheduledMealsInput = {
  create: UserCreateWithoutCreatedScheduledMealsInput;
  update: UserUpdateWithoutCreatedScheduledMealsInput;
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

export type UserUpsertWithoutUpdatedIngredientsInput = {
  create: UserCreateWithoutUpdatedIngredientsInput;
  update: UserUpdateWithoutUpdatedIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedMealGroupsInput = {
  create: UserCreateWithoutUpdatedMealGroupsInput;
  update: UserUpdateWithoutUpdatedMealGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedMealIngredientsInput = {
  create: UserCreateWithoutUpdatedMealIngredientsInput;
  update: UserUpdateWithoutUpdatedMealIngredientsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUpdatedMealSchedulersInput = {
  create: UserCreateWithoutUpdatedMealSchedulersInput;
  update: UserUpdateWithoutUpdatedMealSchedulersInput;
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

export type UserUpsertWithoutUpdatedScheduledMealsInput = {
  create: UserCreateWithoutUpdatedScheduledMealsInput;
  update: UserUpdateWithoutUpdatedScheduledMealsInput;
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
  createdMealGroups?: InputMaybe<MealGroupListRelationFilter>;
  createdMealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  createdMealSchedulers?: InputMaybe<MealScheduleListRelationFilter>;
  createdMeals?: InputMaybe<MealListRelationFilter>;
  createdNutritions?: InputMaybe<NutritionListRelationFilter>;
  createdScheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  createdToken?: InputMaybe<TokenListRelationFilter>;
  createdUser?: InputMaybe<UserListRelationFilter>;
  createdUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastOnline?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserNullableRelationFilter>;
  updatedIngredients?: InputMaybe<IngredientListRelationFilter>;
  updatedMealGroups?: InputMaybe<MealGroupListRelationFilter>;
  updatedMealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  updatedMealSchedulers?: InputMaybe<MealScheduleListRelationFilter>;
  updatedMeals?: InputMaybe<MealListRelationFilter>;
  updatedNutritions?: InputMaybe<NutritionListRelationFilter>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  updatedToken?: InputMaybe<TokenListRelationFilter>;
  updatedUser?: InputMaybe<UserListRelationFilter>;
  updatedUserRoles?: InputMaybe<UserRoleListRelationFilter>;
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
  createdMealGroups?: InputMaybe<MealGroupListRelationFilter>;
  createdMealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  createdMealSchedulers?: InputMaybe<MealScheduleListRelationFilter>;
  createdMeals?: InputMaybe<MealListRelationFilter>;
  createdNutritions?: InputMaybe<NutritionListRelationFilter>;
  createdScheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  createdToken?: InputMaybe<TokenListRelationFilter>;
  createdUser?: InputMaybe<UserListRelationFilter>;
  createdUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  image?: InputMaybe<StringNullableFilter>;
  lastOnline?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUser?: InputMaybe<UserNullableRelationFilter>;
  updatedIngredients?: InputMaybe<IngredientListRelationFilter>;
  updatedMealGroups?: InputMaybe<MealGroupListRelationFilter>;
  updatedMealIngredients?: InputMaybe<MealIngredientListRelationFilter>;
  updatedMealSchedulers?: InputMaybe<MealScheduleListRelationFilter>;
  updatedMeals?: InputMaybe<MealListRelationFilter>;
  updatedNutritions?: InputMaybe<NutritionListRelationFilter>;
  updatedScheduledMeals?: InputMaybe<ScheduleMealListRelationFilter>;
  updatedToken?: InputMaybe<TokenListRelationFilter>;
  updatedUser?: InputMaybe<UserListRelationFilter>;
  updatedUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterUserMutationVariables = Exact<{
  data: RegisterUserInput;
}>;

export type RegisterUserMutation = {
  registerUser?: {
    id: string;
    username: string;
    email: string;
    lastOnline: any;
    status: boolean;
    createdAt: any;
    updatedAt: any;
    UserRole?: Array<{ id: string; name: UserRoleName }> | null;
  } | null;
};

export type LoginUserMutationVariables = Exact<{
  data: LoginUserInput;
}>;

export type LoginUserMutation = {
  loginUser?: {
    id: string;
    username: string;
    email: string;
    lastOnline: any;
    status: boolean;
    createdAt: any;
    updatedAt: any;
    UserRole?: Array<{ id: string; name: UserRoleName }> | null;
  } | null;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { logout?: boolean | null };

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  me?: {
    id: string;
    username: string;
    email: string;
    lastOnline: any;
    status: boolean;
    createdAt: any;
    updatedAt: any;
    UserRole?: Array<{ id: string; name: UserRoleName }> | null;
  } | null;
};

export type GetAllMealSchedulesAdminQueryVariables = Exact<{
  where?: InputMaybe<MealScheduleWhereInput>;
  orderBy?: InputMaybe<
    | Array<MealScheduleOrderByWithRelationInput>
    | MealScheduleOrderByWithRelationInput
  >;
  cursor?: InputMaybe<MealScheduleWhereUniqueInput>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  distinct?: InputMaybe<
    Array<MealScheduleScalarFieldEnum> | MealScheduleScalarFieldEnum
  >;
}>;

export type GetAllMealSchedulesAdminQuery = {
  getAllMealSchedulesAdmin?: Array<{
    id: string;
    servingDate: any;
    createdAt: any;
    updatedAt: any;
    scheduledMeals?: Array<{
      id: string;
      mealGroupId?: number | null;
      mealId?: number | null;
      createdAt: any;
      updatedAt: any;
      meal?: {
        id: string;
        name: string;
        description?: string | null;
        image?: string | null;
      } | null;
      mealGroup?: {
        id: string;
        name: string;
        description?: string | null;
        meals?: Array<{
          id: string;
          name: string;
          description?: string | null;
          image?: string | null;
        }> | null;
      } | null;
    }> | null;
  }> | null;
};

export const RegisterUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RegisterUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "RegisterUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "registerUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "lastOnline" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "UserRole" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterUserMutation,
  RegisterUserMutationVariables
>;
export const LoginUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LoginUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LoginUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loginUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "lastOnline" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "UserRole" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Logout" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "logout" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "lastOnline" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "UserRole" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAllMealSchedulesAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllMealSchedulesAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "MealScheduleWhereInput" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "MealScheduleOrderByWithRelationInput",
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "cursor" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "MealScheduleWhereUniqueInput" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "take" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "distinct" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "MealScheduleScalarFieldEnum" },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getAllMealSchedulesAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "cursor" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "cursor" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "take" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "distinct" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "distinct" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "servingDate" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "scheduledMeals" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mealGroupId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mealId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "meal" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "image" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mealGroup" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "meals" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "description",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "image" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllMealSchedulesAdminQuery,
  GetAllMealSchedulesAdminQueryVariables
>;
