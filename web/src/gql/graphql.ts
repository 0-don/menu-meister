/* eslint-disable */
import { FileUpload } from 'graphql-upload-minimal';
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
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: FileUpload; output: FileUpload; }
};

export type Additives = {
  _count: AdditivesCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  ingredients?: Maybe<Array<Ingredient>>;
  meals?: Maybe<Array<Meal>>;
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type AdditivesCount = {
  ingredients: Scalars['Int']['output'];
  meals: Scalars['Int']['output'];
  recipes: Scalars['Int']['output'];
};

export type AdditivesCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type AdditivesCreateManyCreatedByUserInputEnvelope = {
  data: Array<AdditivesCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AdditivesCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type AdditivesCreateManyUpdatedByUserInputEnvelope = {
  data: Array<AdditivesCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AdditivesCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<AdditivesCreateManyCreatedByUserInputEnvelope>;
};

export type AdditivesCreateNestedManyWithoutIngredientsInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutIngredientsInput>>;
};

export type AdditivesCreateNestedManyWithoutMealsInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutMealsInput>>;
};

export type AdditivesCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutRecipesInput>>;
};

export type AdditivesCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<AdditivesCreateManyUpdatedByUserInputEnvelope>;
};

export type AdditivesCreateOrConnectWithoutCreatedByUserInput = {
  create: AdditivesCreateWithoutCreatedByUserInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesCreateOrConnectWithoutIngredientsInput = {
  create: AdditivesCreateWithoutIngredientsInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesCreateOrConnectWithoutMealsInput = {
  create: AdditivesCreateWithoutMealsInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesCreateOrConnectWithoutRecipesInput = {
  create: AdditivesCreateWithoutRecipesInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesCreateOrConnectWithoutUpdatedByUserInput = {
  create: AdditivesCreateWithoutUpdatedByUserInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesCreateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutAdditivesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutAdditivesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutAdditivesInput>;
};

export type AdditivesCreateWithoutIngredientsInput = {
  meals?: InputMaybe<MealCreateNestedManyWithoutAdditivesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutAdditivesInput>;
};

export type AdditivesCreateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutAdditivesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutAdditivesInput>;
};

export type AdditivesCreateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutAdditivesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutAdditivesInput>;
  name: Scalars['String']['input'];
};

export type AdditivesCreateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutAdditivesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutAdditivesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutAdditivesInput>;
};

export type AdditivesListRelationFilter = {
  every?: InputMaybe<AdditivesWhereInput>;
  none?: InputMaybe<AdditivesWhereInput>;
  some?: InputMaybe<AdditivesWhereInput>;
};

export type AdditivesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdditivesScalarWhereInput = {
  AND?: InputMaybe<Array<AdditivesScalarWhereInput>>;
  NOT?: InputMaybe<Array<AdditivesScalarWhereInput>>;
  OR?: InputMaybe<Array<AdditivesScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type AdditivesUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdditivesUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: AdditivesUpdateManyMutationInput;
  where: AdditivesScalarWhereInput;
};

export type AdditivesUpdateManyWithWhereWithoutIngredientsInput = {
  data: AdditivesUpdateManyMutationInput;
  where: AdditivesScalarWhereInput;
};

export type AdditivesUpdateManyWithWhereWithoutMealsInput = {
  data: AdditivesUpdateManyMutationInput;
  where: AdditivesScalarWhereInput;
};

export type AdditivesUpdateManyWithWhereWithoutRecipesInput = {
  data: AdditivesUpdateManyMutationInput;
  where: AdditivesScalarWhereInput;
};

export type AdditivesUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: AdditivesUpdateManyMutationInput;
  where: AdditivesScalarWhereInput;
};

export type AdditivesUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<AdditivesCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdditivesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  set?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  update?: InputMaybe<Array<AdditivesUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<AdditivesUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<AdditivesUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type AdditivesUpdateManyWithoutIngredientsNestedInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutIngredientsInput>>;
  delete?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdditivesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  set?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  update?: InputMaybe<Array<AdditivesUpdateWithWhereUniqueWithoutIngredientsInput>>;
  updateMany?: InputMaybe<Array<AdditivesUpdateManyWithWhereWithoutIngredientsInput>>;
  upsert?: InputMaybe<Array<AdditivesUpsertWithWhereUniqueWithoutIngredientsInput>>;
};

export type AdditivesUpdateManyWithoutMealsNestedInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutMealsInput>>;
  delete?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdditivesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  set?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  update?: InputMaybe<Array<AdditivesUpdateWithWhereUniqueWithoutMealsInput>>;
  updateMany?: InputMaybe<Array<AdditivesUpdateManyWithWhereWithoutMealsInput>>;
  upsert?: InputMaybe<Array<AdditivesUpsertWithWhereUniqueWithoutMealsInput>>;
};

export type AdditivesUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdditivesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  set?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  update?: InputMaybe<Array<AdditivesUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<AdditivesUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<AdditivesUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type AdditivesUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdditivesCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<AdditivesCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<AdditivesCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdditivesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  set?: InputMaybe<Array<AdditivesWhereUniqueInput>>;
  update?: InputMaybe<Array<AdditivesUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<AdditivesUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<AdditivesUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type AdditivesUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: AdditivesUpdateWithoutCreatedByUserInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesUpdateWithWhereUniqueWithoutIngredientsInput = {
  data: AdditivesUpdateWithoutIngredientsInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesUpdateWithWhereUniqueWithoutMealsInput = {
  data: AdditivesUpdateWithoutMealsInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesUpdateWithWhereUniqueWithoutRecipesInput = {
  data: AdditivesUpdateWithoutRecipesInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: AdditivesUpdateWithoutUpdatedByUserInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesUpdateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutAdditivesNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutAdditivesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutAdditivesNestedInput>;
};

export type AdditivesUpdateWithoutIngredientsInput = {
  meals?: InputMaybe<MealUpdateManyWithoutAdditivesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutAdditivesNestedInput>;
};

export type AdditivesUpdateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutAdditivesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutAdditivesNestedInput>;
};

export type AdditivesUpdateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutAdditivesNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutAdditivesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdditivesUpdateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutAdditivesNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutAdditivesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutAdditivesNestedInput>;
};

export type AdditivesUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: AdditivesCreateWithoutCreatedByUserInput;
  update: AdditivesUpdateWithoutCreatedByUserInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesUpsertWithWhereUniqueWithoutIngredientsInput = {
  create: AdditivesCreateWithoutIngredientsInput;
  update: AdditivesUpdateWithoutIngredientsInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesUpsertWithWhereUniqueWithoutMealsInput = {
  create: AdditivesCreateWithoutMealsInput;
  update: AdditivesUpdateWithoutMealsInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesUpsertWithWhereUniqueWithoutRecipesInput = {
  create: AdditivesCreateWithoutRecipesInput;
  update: AdditivesUpdateWithoutRecipesInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: AdditivesCreateWithoutUpdatedByUserInput;
  update: AdditivesUpdateWithoutUpdatedByUserInput;
  where: AdditivesWhereUniqueInput;
};

export type AdditivesWhereInput = {
  AND?: InputMaybe<Array<AdditivesWhereInput>>;
  NOT?: InputMaybe<Array<AdditivesWhereInput>>;
  OR?: InputMaybe<Array<AdditivesWhereInput>>;
  id?: InputMaybe<IntFilter>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type AdditivesWhereUniqueInput = {
  AND?: InputMaybe<Array<AdditivesWhereInput>>;
  NOT?: InputMaybe<Array<AdditivesWhereInput>>;
  OR?: InputMaybe<Array<AdditivesWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type Allergens = {
  _count: AllergensCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  ingredients?: Maybe<Array<Ingredient>>;
  meals?: Maybe<Array<Meal>>;
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type AllergensCount = {
  ingredients: Scalars['Int']['output'];
  meals: Scalars['Int']['output'];
  recipes: Scalars['Int']['output'];
};

export type AllergensCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type AllergensCreateManyCreatedByUserInputEnvelope = {
  data: Array<AllergensCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AllergensCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type AllergensCreateManyUpdatedByUserInputEnvelope = {
  data: Array<AllergensCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AllergensCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<AllergensCreateManyCreatedByUserInputEnvelope>;
};

export type AllergensCreateNestedManyWithoutIngredientsInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutIngredientsInput>>;
};

export type AllergensCreateNestedManyWithoutMealsInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutMealsInput>>;
};

export type AllergensCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutRecipesInput>>;
};

export type AllergensCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<AllergensCreateManyUpdatedByUserInputEnvelope>;
};

export type AllergensCreateOrConnectWithoutCreatedByUserInput = {
  create: AllergensCreateWithoutCreatedByUserInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensCreateOrConnectWithoutIngredientsInput = {
  create: AllergensCreateWithoutIngredientsInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensCreateOrConnectWithoutMealsInput = {
  create: AllergensCreateWithoutMealsInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensCreateOrConnectWithoutRecipesInput = {
  create: AllergensCreateWithoutRecipesInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensCreateOrConnectWithoutUpdatedByUserInput = {
  create: AllergensCreateWithoutUpdatedByUserInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensCreateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutAllergensInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutAllergensInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutAllergensInput>;
};

export type AllergensCreateWithoutIngredientsInput = {
  meals?: InputMaybe<MealCreateNestedManyWithoutAllergensInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutAllergensInput>;
};

export type AllergensCreateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutAllergensInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutAllergensInput>;
};

export type AllergensCreateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutAllergensInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutAllergensInput>;
  name: Scalars['String']['input'];
};

export type AllergensCreateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutAllergensInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutAllergensInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutAllergensInput>;
};

export type AllergensListRelationFilter = {
  every?: InputMaybe<AllergensWhereInput>;
  none?: InputMaybe<AllergensWhereInput>;
  some?: InputMaybe<AllergensWhereInput>;
};

export type AllergensOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AllergensScalarWhereInput = {
  AND?: InputMaybe<Array<AllergensScalarWhereInput>>;
  NOT?: InputMaybe<Array<AllergensScalarWhereInput>>;
  OR?: InputMaybe<Array<AllergensScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type AllergensUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AllergensUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: AllergensUpdateManyMutationInput;
  where: AllergensScalarWhereInput;
};

export type AllergensUpdateManyWithWhereWithoutIngredientsInput = {
  data: AllergensUpdateManyMutationInput;
  where: AllergensScalarWhereInput;
};

export type AllergensUpdateManyWithWhereWithoutMealsInput = {
  data: AllergensUpdateManyMutationInput;
  where: AllergensScalarWhereInput;
};

export type AllergensUpdateManyWithWhereWithoutRecipesInput = {
  data: AllergensUpdateManyMutationInput;
  where: AllergensScalarWhereInput;
};

export type AllergensUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: AllergensUpdateManyMutationInput;
  where: AllergensScalarWhereInput;
};

export type AllergensUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<AllergensCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AllergensScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  set?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  update?: InputMaybe<Array<AllergensUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<AllergensUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<AllergensUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type AllergensUpdateManyWithoutIngredientsNestedInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutIngredientsInput>>;
  delete?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AllergensScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  set?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  update?: InputMaybe<Array<AllergensUpdateWithWhereUniqueWithoutIngredientsInput>>;
  updateMany?: InputMaybe<Array<AllergensUpdateManyWithWhereWithoutIngredientsInput>>;
  upsert?: InputMaybe<Array<AllergensUpsertWithWhereUniqueWithoutIngredientsInput>>;
};

export type AllergensUpdateManyWithoutMealsNestedInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutMealsInput>>;
  delete?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AllergensScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  set?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  update?: InputMaybe<Array<AllergensUpdateWithWhereUniqueWithoutMealsInput>>;
  updateMany?: InputMaybe<Array<AllergensUpdateManyWithWhereWithoutMealsInput>>;
  upsert?: InputMaybe<Array<AllergensUpsertWithWhereUniqueWithoutMealsInput>>;
};

export type AllergensUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AllergensScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  set?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  update?: InputMaybe<Array<AllergensUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<AllergensUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<AllergensUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type AllergensUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AllergensCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<AllergensCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<AllergensCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AllergensScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  set?: InputMaybe<Array<AllergensWhereUniqueInput>>;
  update?: InputMaybe<Array<AllergensUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<AllergensUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<AllergensUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type AllergensUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: AllergensUpdateWithoutCreatedByUserInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensUpdateWithWhereUniqueWithoutIngredientsInput = {
  data: AllergensUpdateWithoutIngredientsInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensUpdateWithWhereUniqueWithoutMealsInput = {
  data: AllergensUpdateWithoutMealsInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensUpdateWithWhereUniqueWithoutRecipesInput = {
  data: AllergensUpdateWithoutRecipesInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: AllergensUpdateWithoutUpdatedByUserInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensUpdateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutAllergensNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutAllergensNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutAllergensNestedInput>;
};

export type AllergensUpdateWithoutIngredientsInput = {
  meals?: InputMaybe<MealUpdateManyWithoutAllergensNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutAllergensNestedInput>;
};

export type AllergensUpdateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutAllergensNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutAllergensNestedInput>;
};

export type AllergensUpdateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutAllergensNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutAllergensNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AllergensUpdateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutAllergensNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutAllergensNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutAllergensNestedInput>;
};

export type AllergensUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: AllergensCreateWithoutCreatedByUserInput;
  update: AllergensUpdateWithoutCreatedByUserInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensUpsertWithWhereUniqueWithoutIngredientsInput = {
  create: AllergensCreateWithoutIngredientsInput;
  update: AllergensUpdateWithoutIngredientsInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensUpsertWithWhereUniqueWithoutMealsInput = {
  create: AllergensCreateWithoutMealsInput;
  update: AllergensUpdateWithoutMealsInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensUpsertWithWhereUniqueWithoutRecipesInput = {
  create: AllergensCreateWithoutRecipesInput;
  update: AllergensUpdateWithoutRecipesInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: AllergensCreateWithoutUpdatedByUserInput;
  update: AllergensUpdateWithoutUpdatedByUserInput;
  where: AllergensWhereUniqueInput;
};

export type AllergensWhereInput = {
  AND?: InputMaybe<Array<AllergensWhereInput>>;
  NOT?: InputMaybe<Array<AllergensWhereInput>>;
  OR?: InputMaybe<Array<AllergensWhereInput>>;
  id?: InputMaybe<IntFilter>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type AllergensWhereUniqueInput = {
  AND?: InputMaybe<Array<AllergensWhereInput>>;
  NOT?: InputMaybe<Array<AllergensWhereInput>>;
  OR?: InputMaybe<Array<AllergensWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Categories = {
  _count: CategoriesCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  ingredients?: Maybe<Array<Ingredient>>;
  meals?: Maybe<Array<Meal>>;
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type CategoriesCount = {
  ingredients: Scalars['Int']['output'];
  meals: Scalars['Int']['output'];
  recipes: Scalars['Int']['output'];
};

export type CategoriesCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type CategoriesCreateManyCreatedByUserInputEnvelope = {
  data: Array<CategoriesCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoriesCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type CategoriesCreateManyUpdatedByUserInputEnvelope = {
  data: Array<CategoriesCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoriesCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<CategoriesCreateManyCreatedByUserInputEnvelope>;
};

export type CategoriesCreateNestedManyWithoutIngredientsInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutIngredientsInput>>;
};

export type CategoriesCreateNestedManyWithoutMealsInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutMealsInput>>;
};

export type CategoriesCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutRecipesInput>>;
};

export type CategoriesCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<CategoriesCreateManyUpdatedByUserInputEnvelope>;
};

export type CategoriesCreateOrConnectWithoutCreatedByUserInput = {
  create: CategoriesCreateWithoutCreatedByUserInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesCreateOrConnectWithoutIngredientsInput = {
  create: CategoriesCreateWithoutIngredientsInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesCreateOrConnectWithoutMealsInput = {
  create: CategoriesCreateWithoutMealsInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesCreateOrConnectWithoutRecipesInput = {
  create: CategoriesCreateWithoutRecipesInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesCreateOrConnectWithoutUpdatedByUserInput = {
  create: CategoriesCreateWithoutUpdatedByUserInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesCreateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutCategoriesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutCategoriesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutCategoriesInput>;
};

export type CategoriesCreateWithoutIngredientsInput = {
  meals?: InputMaybe<MealCreateNestedManyWithoutCategoriesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutCategoriesInput>;
};

export type CategoriesCreateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutCategoriesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutCategoriesInput>;
};

export type CategoriesCreateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutCategoriesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutCategoriesInput>;
  name: Scalars['String']['input'];
};

export type CategoriesCreateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutCategoriesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutCategoriesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutCategoriesInput>;
};

export type CategoriesListRelationFilter = {
  every?: InputMaybe<CategoriesWhereInput>;
  none?: InputMaybe<CategoriesWhereInput>;
  some?: InputMaybe<CategoriesWhereInput>;
};

export type CategoriesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoriesScalarWhereInput = {
  AND?: InputMaybe<Array<CategoriesScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoriesScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoriesScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CategoriesUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoriesUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: CategoriesUpdateManyMutationInput;
  where: CategoriesScalarWhereInput;
};

export type CategoriesUpdateManyWithWhereWithoutIngredientsInput = {
  data: CategoriesUpdateManyMutationInput;
  where: CategoriesScalarWhereInput;
};

export type CategoriesUpdateManyWithWhereWithoutMealsInput = {
  data: CategoriesUpdateManyMutationInput;
  where: CategoriesScalarWhereInput;
};

export type CategoriesUpdateManyWithWhereWithoutRecipesInput = {
  data: CategoriesUpdateManyMutationInput;
  where: CategoriesScalarWhereInput;
};

export type CategoriesUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: CategoriesUpdateManyMutationInput;
  where: CategoriesScalarWhereInput;
};

export type CategoriesUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<CategoriesCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoriesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoriesUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<CategoriesUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<CategoriesUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type CategoriesUpdateManyWithoutIngredientsNestedInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutIngredientsInput>>;
  delete?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoriesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoriesUpdateWithWhereUniqueWithoutIngredientsInput>>;
  updateMany?: InputMaybe<Array<CategoriesUpdateManyWithWhereWithoutIngredientsInput>>;
  upsert?: InputMaybe<Array<CategoriesUpsertWithWhereUniqueWithoutIngredientsInput>>;
};

export type CategoriesUpdateManyWithoutMealsNestedInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutMealsInput>>;
  delete?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoriesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoriesUpdateWithWhereUniqueWithoutMealsInput>>;
  updateMany?: InputMaybe<Array<CategoriesUpdateManyWithWhereWithoutMealsInput>>;
  upsert?: InputMaybe<Array<CategoriesUpsertWithWhereUniqueWithoutMealsInput>>;
};

export type CategoriesUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoriesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoriesUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<CategoriesUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<CategoriesUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type CategoriesUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoriesCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<CategoriesCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<CategoriesCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoriesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoriesWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoriesUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<CategoriesUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<CategoriesUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type CategoriesUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: CategoriesUpdateWithoutCreatedByUserInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesUpdateWithWhereUniqueWithoutIngredientsInput = {
  data: CategoriesUpdateWithoutIngredientsInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesUpdateWithWhereUniqueWithoutMealsInput = {
  data: CategoriesUpdateWithoutMealsInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesUpdateWithWhereUniqueWithoutRecipesInput = {
  data: CategoriesUpdateWithoutRecipesInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: CategoriesUpdateWithoutUpdatedByUserInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesUpdateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutCategoriesNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutCategoriesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutCategoriesNestedInput>;
};

export type CategoriesUpdateWithoutIngredientsInput = {
  meals?: InputMaybe<MealUpdateManyWithoutCategoriesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutCategoriesNestedInput>;
};

export type CategoriesUpdateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutCategoriesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutCategoriesNestedInput>;
};

export type CategoriesUpdateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutCategoriesNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutCategoriesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoriesUpdateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutCategoriesNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutCategoriesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutCategoriesNestedInput>;
};

export type CategoriesUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: CategoriesCreateWithoutCreatedByUserInput;
  update: CategoriesUpdateWithoutCreatedByUserInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesUpsertWithWhereUniqueWithoutIngredientsInput = {
  create: CategoriesCreateWithoutIngredientsInput;
  update: CategoriesUpdateWithoutIngredientsInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesUpsertWithWhereUniqueWithoutMealsInput = {
  create: CategoriesCreateWithoutMealsInput;
  update: CategoriesUpdateWithoutMealsInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesUpsertWithWhereUniqueWithoutRecipesInput = {
  create: CategoriesCreateWithoutRecipesInput;
  update: CategoriesUpdateWithoutRecipesInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: CategoriesCreateWithoutUpdatedByUserInput;
  update: CategoriesUpdateWithoutUpdatedByUserInput;
  where: CategoriesWhereUniqueInput;
};

export type CategoriesWhereInput = {
  AND?: InputMaybe<Array<CategoriesWhereInput>>;
  NOT?: InputMaybe<Array<CategoriesWhereInput>>;
  OR?: InputMaybe<Array<CategoriesWhereInput>>;
  id?: InputMaybe<IntFilter>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type CategoriesWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoriesWhereInput>>;
  NOT?: InputMaybe<Array<CategoriesWhereInput>>;
  OR?: InputMaybe<Array<CategoriesWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
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

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
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

export type EnumUnitFieldUpdateOperationsInput = {
  set?: InputMaybe<Unit>;
};

export type EnumUnitFilter = {
  equals?: InputMaybe<Unit>;
  in?: InputMaybe<Array<Unit>>;
  not?: InputMaybe<NestedEnumUnitFilter>;
  notIn?: InputMaybe<Array<Unit>>;
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

export type FoodForms = {
  _count: FoodFormsCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  ingredients?: Maybe<Array<Ingredient>>;
  meals?: Maybe<Array<Meal>>;
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type FoodFormsCount = {
  ingredients: Scalars['Int']['output'];
  meals: Scalars['Int']['output'];
  recipes: Scalars['Int']['output'];
};

export type FoodFormsCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type FoodFormsCreateManyCreatedByUserInputEnvelope = {
  data: Array<FoodFormsCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodFormsCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type FoodFormsCreateManyUpdatedByUserInputEnvelope = {
  data: Array<FoodFormsCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodFormsCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<FoodFormsCreateManyCreatedByUserInputEnvelope>;
};

export type FoodFormsCreateNestedManyWithoutIngredientsInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutIngredientsInput>>;
};

export type FoodFormsCreateNestedManyWithoutMealsInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutMealsInput>>;
};

export type FoodFormsCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutRecipesInput>>;
};

export type FoodFormsCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<FoodFormsCreateManyUpdatedByUserInputEnvelope>;
};

export type FoodFormsCreateOrConnectWithoutCreatedByUserInput = {
  create: FoodFormsCreateWithoutCreatedByUserInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsCreateOrConnectWithoutIngredientsInput = {
  create: FoodFormsCreateWithoutIngredientsInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsCreateOrConnectWithoutMealsInput = {
  create: FoodFormsCreateWithoutMealsInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsCreateOrConnectWithoutRecipesInput = {
  create: FoodFormsCreateWithoutRecipesInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsCreateOrConnectWithoutUpdatedByUserInput = {
  create: FoodFormsCreateWithoutUpdatedByUserInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsCreateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutFoodFormsInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutFoodFormsInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutFoodFormsInput>;
};

export type FoodFormsCreateWithoutIngredientsInput = {
  meals?: InputMaybe<MealCreateNestedManyWithoutFoodFormsInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutFoodFormsInput>;
};

export type FoodFormsCreateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutFoodFormsInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutFoodFormsInput>;
};

export type FoodFormsCreateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutFoodFormsInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutFoodFormsInput>;
  name: Scalars['String']['input'];
};

export type FoodFormsCreateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutFoodFormsInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutFoodFormsInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutFoodFormsInput>;
};

export type FoodFormsListRelationFilter = {
  every?: InputMaybe<FoodFormsWhereInput>;
  none?: InputMaybe<FoodFormsWhereInput>;
  some?: InputMaybe<FoodFormsWhereInput>;
};

export type FoodFormsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodFormsScalarWhereInput = {
  AND?: InputMaybe<Array<FoodFormsScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodFormsScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodFormsScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type FoodFormsUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodFormsUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: FoodFormsUpdateManyMutationInput;
  where: FoodFormsScalarWhereInput;
};

export type FoodFormsUpdateManyWithWhereWithoutIngredientsInput = {
  data: FoodFormsUpdateManyMutationInput;
  where: FoodFormsScalarWhereInput;
};

export type FoodFormsUpdateManyWithWhereWithoutMealsInput = {
  data: FoodFormsUpdateManyMutationInput;
  where: FoodFormsScalarWhereInput;
};

export type FoodFormsUpdateManyWithWhereWithoutRecipesInput = {
  data: FoodFormsUpdateManyMutationInput;
  where: FoodFormsScalarWhereInput;
};

export type FoodFormsUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: FoodFormsUpdateManyMutationInput;
  where: FoodFormsScalarWhereInput;
};

export type FoodFormsUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<FoodFormsCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodFormsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodFormsUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<FoodFormsUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<FoodFormsUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type FoodFormsUpdateManyWithoutIngredientsNestedInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutIngredientsInput>>;
  delete?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodFormsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodFormsUpdateWithWhereUniqueWithoutIngredientsInput>>;
  updateMany?: InputMaybe<Array<FoodFormsUpdateManyWithWhereWithoutIngredientsInput>>;
  upsert?: InputMaybe<Array<FoodFormsUpsertWithWhereUniqueWithoutIngredientsInput>>;
};

export type FoodFormsUpdateManyWithoutMealsNestedInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutMealsInput>>;
  delete?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodFormsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodFormsUpdateWithWhereUniqueWithoutMealsInput>>;
  updateMany?: InputMaybe<Array<FoodFormsUpdateManyWithWhereWithoutMealsInput>>;
  upsert?: InputMaybe<Array<FoodFormsUpsertWithWhereUniqueWithoutMealsInput>>;
};

export type FoodFormsUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodFormsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodFormsUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<FoodFormsUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<FoodFormsUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type FoodFormsUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodFormsCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<FoodFormsCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<FoodFormsCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodFormsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodFormsWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodFormsUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<FoodFormsUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<FoodFormsUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type FoodFormsUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: FoodFormsUpdateWithoutCreatedByUserInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsUpdateWithWhereUniqueWithoutIngredientsInput = {
  data: FoodFormsUpdateWithoutIngredientsInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsUpdateWithWhereUniqueWithoutMealsInput = {
  data: FoodFormsUpdateWithoutMealsInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsUpdateWithWhereUniqueWithoutRecipesInput = {
  data: FoodFormsUpdateWithoutRecipesInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: FoodFormsUpdateWithoutUpdatedByUserInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsUpdateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutFoodFormsNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutFoodFormsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutFoodFormsNestedInput>;
};

export type FoodFormsUpdateWithoutIngredientsInput = {
  meals?: InputMaybe<MealUpdateManyWithoutFoodFormsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutFoodFormsNestedInput>;
};

export type FoodFormsUpdateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutFoodFormsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutFoodFormsNestedInput>;
};

export type FoodFormsUpdateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutFoodFormsNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutFoodFormsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodFormsUpdateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutFoodFormsNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutFoodFormsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutFoodFormsNestedInput>;
};

export type FoodFormsUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: FoodFormsCreateWithoutCreatedByUserInput;
  update: FoodFormsUpdateWithoutCreatedByUserInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsUpsertWithWhereUniqueWithoutIngredientsInput = {
  create: FoodFormsCreateWithoutIngredientsInput;
  update: FoodFormsUpdateWithoutIngredientsInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsUpsertWithWhereUniqueWithoutMealsInput = {
  create: FoodFormsCreateWithoutMealsInput;
  update: FoodFormsUpdateWithoutMealsInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsUpsertWithWhereUniqueWithoutRecipesInput = {
  create: FoodFormsCreateWithoutRecipesInput;
  update: FoodFormsUpdateWithoutRecipesInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: FoodFormsCreateWithoutUpdatedByUserInput;
  update: FoodFormsUpdateWithoutUpdatedByUserInput;
  where: FoodFormsWhereUniqueInput;
};

export type FoodFormsWhereInput = {
  AND?: InputMaybe<Array<FoodFormsWhereInput>>;
  NOT?: InputMaybe<Array<FoodFormsWhereInput>>;
  OR?: InputMaybe<Array<FoodFormsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type FoodFormsWhereUniqueInput = {
  AND?: InputMaybe<Array<FoodFormsWhereInput>>;
  NOT?: InputMaybe<Array<FoodFormsWhereInput>>;
  OR?: InputMaybe<Array<FoodFormsWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type Ingredient = {
  _count: IngredientCount;
  additives?: Maybe<Array<Additives>>;
  allergens?: Maybe<Array<Allergens>>;
  blsIdentifier: Scalars['String']['output'];
  breadUnits: Scalars['Decimal']['output'];
  carbohydrates: Scalars['Decimal']['output'];
  categories?: Maybe<Array<Categories>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  energyKcal: Scalars['Decimal']['output'];
  energyKj: Scalars['Decimal']['output'];
  fats: Scalars['Decimal']['output'];
  foodForms?: Maybe<Array<FoodForms>>;
  id: Scalars['Int']['output'];
  kitchens?: Maybe<Array<Kitchens>>;
  name: Scalars['String']['output'];
  properties?: Maybe<Array<Properties>>;
  protein: Scalars['Decimal']['output'];
  recipeIngredient?: Maybe<Array<RecipeIngredient>>;
  salt: Scalars['Decimal']['output'];
  saturatedFats: Scalars['Decimal']['output'];
  seasons?: Maybe<Array<Seasons>>;
  sugars: Scalars['Decimal']['output'];
  unsaturatedFats: Scalars['Decimal']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type IngredientCount = {
  additives: Scalars['Int']['output'];
  allergens: Scalars['Int']['output'];
  categories: Scalars['Int']['output'];
  foodForms: Scalars['Int']['output'];
  kitchens: Scalars['Int']['output'];
  properties: Scalars['Int']['output'];
  recipeIngredient: Scalars['Int']['output'];
  seasons: Scalars['Int']['output'];
};

export type IngredientCreateInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateManyCreatedByUserInput = {
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateManyCreatedByUserInputEnvelope = {
  data: Array<IngredientCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IngredientCreateManyInput = {
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateManyUpdatedByUserInput = {
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateManyUpdatedByUserInputEnvelope = {
  data: Array<IngredientCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IngredientCreateNestedManyWithoutAdditivesInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutAdditivesInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutAdditivesInput>>;
};

export type IngredientCreateNestedManyWithoutAllergensInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutAllergensInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutAllergensInput>>;
};

export type IngredientCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutCategoriesInput>>;
};

export type IngredientCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<IngredientCreateManyCreatedByUserInputEnvelope>;
};

export type IngredientCreateNestedManyWithoutFoodFormsInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutFoodFormsInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutFoodFormsInput>>;
};

export type IngredientCreateNestedManyWithoutKitchensInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutKitchensInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutKitchensInput>>;
};

export type IngredientCreateNestedManyWithoutPropertiesInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutPropertiesInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutPropertiesInput>>;
};

export type IngredientCreateNestedManyWithoutSeasonsInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutSeasonsInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutSeasonsInput>>;
};

export type IngredientCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<IngredientCreateManyUpdatedByUserInputEnvelope>;
};

export type IngredientCreateNestedOneWithoutRecipeIngredientInput = {
  connect?: InputMaybe<IngredientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IngredientCreateOrConnectWithoutRecipeIngredientInput>;
  create?: InputMaybe<IngredientCreateWithoutRecipeIngredientInput>;
};

export type IngredientCreateOrConnectWithoutAdditivesInput = {
  create: IngredientCreateWithoutAdditivesInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutAllergensInput = {
  create: IngredientCreateWithoutAllergensInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutCategoriesInput = {
  create: IngredientCreateWithoutCategoriesInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutCreatedByUserInput = {
  create: IngredientCreateWithoutCreatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutFoodFormsInput = {
  create: IngredientCreateWithoutFoodFormsInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutKitchensInput = {
  create: IngredientCreateWithoutKitchensInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutPropertiesInput = {
  create: IngredientCreateWithoutPropertiesInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutRecipeIngredientInput = {
  create: IngredientCreateWithoutRecipeIngredientInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutSeasonsInput = {
  create: IngredientCreateWithoutSeasonsInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateOrConnectWithoutUpdatedByUserInput = {
  create: IngredientCreateWithoutUpdatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientCreateWithoutAdditivesInput = {
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateWithoutAllergensInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateWithoutCategoriesInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateWithoutCreatedByUserInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateWithoutFoodFormsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateWithoutKitchensInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateWithoutPropertiesInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateWithoutRecipeIngredientInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateWithoutSeasonsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IngredientCreateWithoutUpdatedByUserInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutIngredientsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutIngredientsInput>;
  blsIdentifier: Scalars['String']['input'];
  breadUnits?: InputMaybe<Scalars['Decimal']['input']>;
  carbohydrates?: InputMaybe<Scalars['Decimal']['input']>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutIngredientsInput>;
  energyKcal?: InputMaybe<Scalars['Decimal']['input']>;
  energyKj?: InputMaybe<Scalars['Decimal']['input']>;
  fats?: InputMaybe<Scalars['Decimal']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutIngredientsInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutIngredientsInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutIngredientsInput>;
  protein?: InputMaybe<Scalars['Decimal']['input']>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutIngredientInput>;
  salt?: InputMaybe<Scalars['Decimal']['input']>;
  saturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutIngredientsInput>;
  sugars?: InputMaybe<Scalars['Decimal']['input']>;
  unsaturatedFats?: InputMaybe<Scalars['Decimal']['input']>;
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
  additives?: InputMaybe<AdditivesOrderByRelationAggregateInput>;
  allergens?: InputMaybe<AllergensOrderByRelationAggregateInput>;
  blsIdentifier?: InputMaybe<SortOrder>;
  breadUnits?: InputMaybe<SortOrder>;
  carbohydrates?: InputMaybe<SortOrder>;
  categories?: InputMaybe<CategoriesOrderByRelationAggregateInput>;
  energyKcal?: InputMaybe<SortOrder>;
  energyKj?: InputMaybe<SortOrder>;
  fats?: InputMaybe<SortOrder>;
  foodForms?: InputMaybe<FoodFormsOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  kitchens?: InputMaybe<KitchensOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  properties?: InputMaybe<PropertiesOrderByRelationAggregateInput>;
  protein?: InputMaybe<SortOrder>;
  recipeIngredient?: InputMaybe<RecipeIngredientOrderByRelationAggregateInput>;
  salt?: InputMaybe<SortOrder>;
  saturatedFats?: InputMaybe<SortOrder>;
  seasons?: InputMaybe<SeasonsOrderByRelationAggregateInput>;
  sugars?: InputMaybe<SortOrder>;
  unsaturatedFats?: InputMaybe<SortOrder>;
};

export type IngredientRelationFilter = {
  is?: InputMaybe<IngredientWhereInput>;
  isNot?: InputMaybe<IngredientWhereInput>;
};

export enum IngredientScalarFieldEnum {
  BlsIdentifier = 'blsIdentifier',
  BreadUnits = 'breadUnits',
  Carbohydrates = 'carbohydrates',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  EnergyKcal = 'energyKcal',
  EnergyKj = 'energyKj',
  Fats = 'fats',
  Id = 'id',
  Name = 'name',
  Protein = 'protein',
  Salt = 'salt',
  SaturatedFats = 'saturatedFats',
  Sugars = 'sugars',
  UnsaturatedFats = 'unsaturatedFats',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type IngredientScalarWhereInput = {
  AND?: InputMaybe<Array<IngredientScalarWhereInput>>;
  NOT?: InputMaybe<Array<IngredientScalarWhereInput>>;
  OR?: InputMaybe<Array<IngredientScalarWhereInput>>;
  blsIdentifier?: InputMaybe<StringFilter>;
  breadUnits?: InputMaybe<DecimalFilter>;
  carbohydrates?: InputMaybe<DecimalFilter>;
  energyKcal?: InputMaybe<DecimalFilter>;
  energyKj?: InputMaybe<DecimalFilter>;
  fats?: InputMaybe<DecimalFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  protein?: InputMaybe<DecimalFilter>;
  salt?: InputMaybe<DecimalFilter>;
  saturatedFats?: InputMaybe<DecimalFilter>;
  sugars?: InputMaybe<DecimalFilter>;
  unsaturatedFats?: InputMaybe<DecimalFilter>;
};

export type IngredientUpdateInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateManyMutationInput = {
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateManyWithWhereWithoutAdditivesInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithWhereWithoutAllergensInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithWhereWithoutCategoriesInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithWhereWithoutFoodFormsInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithWhereWithoutKitchensInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithWhereWithoutPropertiesInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithWhereWithoutSeasonsInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: IngredientUpdateManyMutationInput;
  where: IngredientScalarWhereInput;
};

export type IngredientUpdateManyWithoutAdditivesNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutAdditivesInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutAdditivesInput>>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<IngredientUpdateWithWhereUniqueWithoutAdditivesInput>>;
  updateMany?: InputMaybe<Array<IngredientUpdateManyWithWhereWithoutAdditivesInput>>;
  upsert?: InputMaybe<Array<IngredientUpsertWithWhereUniqueWithoutAdditivesInput>>;
};

export type IngredientUpdateManyWithoutAllergensNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutAllergensInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutAllergensInput>>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<IngredientUpdateWithWhereUniqueWithoutAllergensInput>>;
  updateMany?: InputMaybe<Array<IngredientUpdateManyWithWhereWithoutAllergensInput>>;
  upsert?: InputMaybe<Array<IngredientUpsertWithWhereUniqueWithoutAllergensInput>>;
};

export type IngredientUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<IngredientUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<IngredientUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<IngredientUpsertWithWhereUniqueWithoutCategoriesInput>>;
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

export type IngredientUpdateManyWithoutFoodFormsNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutFoodFormsInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutFoodFormsInput>>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<IngredientUpdateWithWhereUniqueWithoutFoodFormsInput>>;
  updateMany?: InputMaybe<Array<IngredientUpdateManyWithWhereWithoutFoodFormsInput>>;
  upsert?: InputMaybe<Array<IngredientUpsertWithWhereUniqueWithoutFoodFormsInput>>;
};

export type IngredientUpdateManyWithoutKitchensNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutKitchensInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutKitchensInput>>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<IngredientUpdateWithWhereUniqueWithoutKitchensInput>>;
  updateMany?: InputMaybe<Array<IngredientUpdateManyWithWhereWithoutKitchensInput>>;
  upsert?: InputMaybe<Array<IngredientUpsertWithWhereUniqueWithoutKitchensInput>>;
};

export type IngredientUpdateManyWithoutPropertiesNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutPropertiesInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutPropertiesInput>>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<IngredientUpdateWithWhereUniqueWithoutPropertiesInput>>;
  updateMany?: InputMaybe<Array<IngredientUpdateManyWithWhereWithoutPropertiesInput>>;
  upsert?: InputMaybe<Array<IngredientUpsertWithWhereUniqueWithoutPropertiesInput>>;
};

export type IngredientUpdateManyWithoutSeasonsNestedInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IngredientCreateOrConnectWithoutSeasonsInput>>;
  create?: InputMaybe<Array<IngredientCreateWithoutSeasonsInput>>;
  delete?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<IngredientUpdateWithWhereUniqueWithoutSeasonsInput>>;
  updateMany?: InputMaybe<Array<IngredientUpdateManyWithWhereWithoutSeasonsInput>>;
  upsert?: InputMaybe<Array<IngredientUpsertWithWhereUniqueWithoutSeasonsInput>>;
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

export type IngredientUpdateOneRequiredWithoutRecipeIngredientNestedInput = {
  connect?: InputMaybe<IngredientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IngredientCreateOrConnectWithoutRecipeIngredientInput>;
  create?: InputMaybe<IngredientCreateWithoutRecipeIngredientInput>;
  update?: InputMaybe<IngredientUpdateToOneWithWhereWithoutRecipeIngredientInput>;
  upsert?: InputMaybe<IngredientUpsertWithoutRecipeIngredientInput>;
};

export type IngredientUpdateToOneWithWhereWithoutRecipeIngredientInput = {
  data: IngredientUpdateWithoutRecipeIngredientInput;
  where?: InputMaybe<IngredientWhereInput>;
};

export type IngredientUpdateWithWhereUniqueWithoutAdditivesInput = {
  data: IngredientUpdateWithoutAdditivesInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithWhereUniqueWithoutAllergensInput = {
  data: IngredientUpdateWithoutAllergensInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: IngredientUpdateWithoutCategoriesInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: IngredientUpdateWithoutCreatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithWhereUniqueWithoutFoodFormsInput = {
  data: IngredientUpdateWithoutFoodFormsInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithWhereUniqueWithoutKitchensInput = {
  data: IngredientUpdateWithoutKitchensInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithWhereUniqueWithoutPropertiesInput = {
  data: IngredientUpdateWithoutPropertiesInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithWhereUniqueWithoutSeasonsInput = {
  data: IngredientUpdateWithoutSeasonsInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: IngredientUpdateWithoutUpdatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateWithoutAdditivesInput = {
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutAllergensInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutCategoriesInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutCreatedByUserInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutFoodFormsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutKitchensInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutPropertiesInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutRecipeIngredientInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutSeasonsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpdateWithoutUpdatedByUserInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutIngredientsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutIngredientsNestedInput>;
  blsIdentifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  breadUnits?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  carbohydrates?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutIngredientsNestedInput>;
  energyKcal?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  energyKj?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  fats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutIngredientsNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutIngredientsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutIngredientsNestedInput>;
  protein?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutIngredientNestedInput>;
  salt?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  saturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutIngredientsNestedInput>;
  sugars?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unsaturatedFats?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type IngredientUpsertWithWhereUniqueWithoutAdditivesInput = {
  create: IngredientCreateWithoutAdditivesInput;
  update: IngredientUpdateWithoutAdditivesInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithWhereUniqueWithoutAllergensInput = {
  create: IngredientCreateWithoutAllergensInput;
  update: IngredientUpdateWithoutAllergensInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: IngredientCreateWithoutCategoriesInput;
  update: IngredientUpdateWithoutCategoriesInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: IngredientCreateWithoutCreatedByUserInput;
  update: IngredientUpdateWithoutCreatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithWhereUniqueWithoutFoodFormsInput = {
  create: IngredientCreateWithoutFoodFormsInput;
  update: IngredientUpdateWithoutFoodFormsInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithWhereUniqueWithoutKitchensInput = {
  create: IngredientCreateWithoutKitchensInput;
  update: IngredientUpdateWithoutKitchensInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithWhereUniqueWithoutPropertiesInput = {
  create: IngredientCreateWithoutPropertiesInput;
  update: IngredientUpdateWithoutPropertiesInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithWhereUniqueWithoutSeasonsInput = {
  create: IngredientCreateWithoutSeasonsInput;
  update: IngredientUpdateWithoutSeasonsInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: IngredientCreateWithoutUpdatedByUserInput;
  update: IngredientUpdateWithoutUpdatedByUserInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpsertWithoutRecipeIngredientInput = {
  create: IngredientCreateWithoutRecipeIngredientInput;
  update: IngredientUpdateWithoutRecipeIngredientInput;
  where?: InputMaybe<IngredientWhereInput>;
};

export type IngredientWhereInput = {
  AND?: InputMaybe<Array<IngredientWhereInput>>;
  NOT?: InputMaybe<Array<IngredientWhereInput>>;
  OR?: InputMaybe<Array<IngredientWhereInput>>;
  additives?: InputMaybe<AdditivesListRelationFilter>;
  allergens?: InputMaybe<AllergensListRelationFilter>;
  blsIdentifier?: InputMaybe<StringFilter>;
  breadUnits?: InputMaybe<DecimalFilter>;
  carbohydrates?: InputMaybe<DecimalFilter>;
  categories?: InputMaybe<CategoriesListRelationFilter>;
  energyKcal?: InputMaybe<DecimalFilter>;
  energyKj?: InputMaybe<DecimalFilter>;
  fats?: InputMaybe<DecimalFilter>;
  foodForms?: InputMaybe<FoodFormsListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  kitchens?: InputMaybe<KitchensListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  properties?: InputMaybe<PropertiesListRelationFilter>;
  protein?: InputMaybe<DecimalFilter>;
  recipeIngredient?: InputMaybe<RecipeIngredientListRelationFilter>;
  salt?: InputMaybe<DecimalFilter>;
  saturatedFats?: InputMaybe<DecimalFilter>;
  seasons?: InputMaybe<SeasonsListRelationFilter>;
  sugars?: InputMaybe<DecimalFilter>;
  unsaturatedFats?: InputMaybe<DecimalFilter>;
};

export type IngredientWhereUniqueInput = {
  AND?: InputMaybe<Array<IngredientWhereInput>>;
  NOT?: InputMaybe<Array<IngredientWhereInput>>;
  OR?: InputMaybe<Array<IngredientWhereInput>>;
  additives?: InputMaybe<AdditivesListRelationFilter>;
  allergens?: InputMaybe<AllergensListRelationFilter>;
  blsIdentifier?: InputMaybe<Scalars['String']['input']>;
  breadUnits?: InputMaybe<DecimalFilter>;
  carbohydrates?: InputMaybe<DecimalFilter>;
  categories?: InputMaybe<CategoriesListRelationFilter>;
  energyKcal?: InputMaybe<DecimalFilter>;
  energyKj?: InputMaybe<DecimalFilter>;
  fats?: InputMaybe<DecimalFilter>;
  foodForms?: InputMaybe<FoodFormsListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  kitchens?: InputMaybe<KitchensListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  properties?: InputMaybe<PropertiesListRelationFilter>;
  protein?: InputMaybe<DecimalFilter>;
  recipeIngredient?: InputMaybe<RecipeIngredientListRelationFilter>;
  salt?: InputMaybe<DecimalFilter>;
  saturatedFats?: InputMaybe<DecimalFilter>;
  seasons?: InputMaybe<SeasonsListRelationFilter>;
  sugars?: InputMaybe<DecimalFilter>;
  unsaturatedFats?: InputMaybe<DecimalFilter>;
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

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Kitchens = {
  _count: KitchensCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  ingredients?: Maybe<Array<Ingredient>>;
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type KitchensCount = {
  ingredients: Scalars['Int']['output'];
  recipes: Scalars['Int']['output'];
};

export type KitchensCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type KitchensCreateManyCreatedByUserInputEnvelope = {
  data: Array<KitchensCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type KitchensCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type KitchensCreateManyUpdatedByUserInputEnvelope = {
  data: Array<KitchensCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type KitchensCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitchensCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<KitchensCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<KitchensCreateManyCreatedByUserInputEnvelope>;
};

export type KitchensCreateNestedManyWithoutIngredientsInput = {
  connect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitchensCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<KitchensCreateWithoutIngredientsInput>>;
};

export type KitchensCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitchensCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<KitchensCreateWithoutRecipesInput>>;
};

export type KitchensCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitchensCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<KitchensCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<KitchensCreateManyUpdatedByUserInputEnvelope>;
};

export type KitchensCreateOrConnectWithoutCreatedByUserInput = {
  create: KitchensCreateWithoutCreatedByUserInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensCreateOrConnectWithoutIngredientsInput = {
  create: KitchensCreateWithoutIngredientsInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensCreateOrConnectWithoutRecipesInput = {
  create: KitchensCreateWithoutRecipesInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensCreateOrConnectWithoutUpdatedByUserInput = {
  create: KitchensCreateWithoutUpdatedByUserInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensCreateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutKitchensInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutKitchensInput>;
};

export type KitchensCreateWithoutIngredientsInput = {
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutKitchensInput>;
};

export type KitchensCreateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutKitchensInput>;
  name: Scalars['String']['input'];
};

export type KitchensCreateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutKitchensInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutKitchensInput>;
};

export type KitchensListRelationFilter = {
  every?: InputMaybe<KitchensWhereInput>;
  none?: InputMaybe<KitchensWhereInput>;
  some?: InputMaybe<KitchensWhereInput>;
};

export type KitchensOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type KitchensScalarWhereInput = {
  AND?: InputMaybe<Array<KitchensScalarWhereInput>>;
  NOT?: InputMaybe<Array<KitchensScalarWhereInput>>;
  OR?: InputMaybe<Array<KitchensScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type KitchensUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type KitchensUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: KitchensUpdateManyMutationInput;
  where: KitchensScalarWhereInput;
};

export type KitchensUpdateManyWithWhereWithoutIngredientsInput = {
  data: KitchensUpdateManyMutationInput;
  where: KitchensScalarWhereInput;
};

export type KitchensUpdateManyWithWhereWithoutRecipesInput = {
  data: KitchensUpdateManyMutationInput;
  where: KitchensScalarWhereInput;
};

export type KitchensUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: KitchensUpdateManyMutationInput;
  where: KitchensScalarWhereInput;
};

export type KitchensUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitchensCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<KitchensCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<KitchensCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<KitchensScalarWhereInput>>;
  disconnect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  set?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  update?: InputMaybe<Array<KitchensUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<KitchensUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<KitchensUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type KitchensUpdateManyWithoutIngredientsNestedInput = {
  connect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitchensCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<KitchensCreateWithoutIngredientsInput>>;
  delete?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<KitchensScalarWhereInput>>;
  disconnect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  set?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  update?: InputMaybe<Array<KitchensUpdateWithWhereUniqueWithoutIngredientsInput>>;
  updateMany?: InputMaybe<Array<KitchensUpdateManyWithWhereWithoutIngredientsInput>>;
  upsert?: InputMaybe<Array<KitchensUpsertWithWhereUniqueWithoutIngredientsInput>>;
};

export type KitchensUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitchensCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<KitchensCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<KitchensScalarWhereInput>>;
  disconnect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  set?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  update?: InputMaybe<Array<KitchensUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<KitchensUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<KitchensUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type KitchensUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<KitchensCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<KitchensCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<KitchensCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<KitchensScalarWhereInput>>;
  disconnect?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  set?: InputMaybe<Array<KitchensWhereUniqueInput>>;
  update?: InputMaybe<Array<KitchensUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<KitchensUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<KitchensUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type KitchensUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: KitchensUpdateWithoutCreatedByUserInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensUpdateWithWhereUniqueWithoutIngredientsInput = {
  data: KitchensUpdateWithoutIngredientsInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensUpdateWithWhereUniqueWithoutRecipesInput = {
  data: KitchensUpdateWithoutRecipesInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: KitchensUpdateWithoutUpdatedByUserInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensUpdateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutKitchensNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutKitchensNestedInput>;
};

export type KitchensUpdateWithoutIngredientsInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutKitchensNestedInput>;
};

export type KitchensUpdateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutKitchensNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type KitchensUpdateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutKitchensNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutKitchensNestedInput>;
};

export type KitchensUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: KitchensCreateWithoutCreatedByUserInput;
  update: KitchensUpdateWithoutCreatedByUserInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensUpsertWithWhereUniqueWithoutIngredientsInput = {
  create: KitchensCreateWithoutIngredientsInput;
  update: KitchensUpdateWithoutIngredientsInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensUpsertWithWhereUniqueWithoutRecipesInput = {
  create: KitchensCreateWithoutRecipesInput;
  update: KitchensUpdateWithoutRecipesInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: KitchensCreateWithoutUpdatedByUserInput;
  update: KitchensUpdateWithoutUpdatedByUserInput;
  where: KitchensWhereUniqueInput;
};

export type KitchensWhereInput = {
  AND?: InputMaybe<Array<KitchensWhereInput>>;
  NOT?: InputMaybe<Array<KitchensWhereInput>>;
  OR?: InputMaybe<Array<KitchensWhereInput>>;
  id?: InputMaybe<IntFilter>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type KitchensWhereUniqueInput = {
  AND?: InputMaybe<Array<KitchensWhereInput>>;
  NOT?: InputMaybe<Array<KitchensWhereInput>>;
  OR?: InputMaybe<Array<KitchensWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Meal = {
  _count: MealCount;
  additives?: Maybe<Array<Additives>>;
  allergens?: Maybe<Array<Allergens>>;
  categories?: Maybe<Array<Categories>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  description?: Maybe<Scalars['String']['output']>;
  foodForms?: Maybe<Array<FoodForms>>;
  fridayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  mealRecipe?: Maybe<Array<MealRecipe>>;
  mondayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  name: Scalars['String']['output'];
  properties?: Maybe<Array<Properties>>;
  saturdayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  seasons?: Maybe<Array<Seasons>>;
  sundayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  thursdayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  tuesdayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
  userMeal?: Maybe<Array<UserMeal>>;
  wednesdayMealGroups?: Maybe<Array<WeeklyMealGroup>>;
};

export type MealBoardPlan = {
  UserMeal?: Maybe<Array<UserMeal>>;
  WeeklyMealGroup?: Maybe<Array<WeeklyMealGroup>>;
  _count: MealBoardPlanCount;
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type MealBoardPlanCount = {
  UserMeal: Scalars['Int']['output'];
  WeeklyMealGroup: Scalars['Int']['output'];
};

export type MealBoardPlanCreateInput = {
  UserMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealBoardPlanInput>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMealBoardPlanInput>;
  color?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MealBoardPlanCreateManyCreatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type MealBoardPlanCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealBoardPlanCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealBoardPlanCreateManyInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type MealBoardPlanCreateManyUpdatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type MealBoardPlanCreateManyUpdatedByUserInputEnvelope = {
  data: Array<MealBoardPlanCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealBoardPlanCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealBoardPlanCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<MealBoardPlanCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealBoardPlanCreateManyCreatedByUserInputEnvelope>;
};

export type MealBoardPlanCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealBoardPlanCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<MealBoardPlanCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealBoardPlanCreateManyUpdatedByUserInputEnvelope>;
};

export type MealBoardPlanCreateNestedOneWithoutUserMealInput = {
  connect?: InputMaybe<MealBoardPlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealBoardPlanCreateOrConnectWithoutUserMealInput>;
  create?: InputMaybe<MealBoardPlanCreateWithoutUserMealInput>;
};

export type MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput = {
  connect?: InputMaybe<MealBoardPlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealBoardPlanCreateOrConnectWithoutWeeklyMealGroupInput>;
  create?: InputMaybe<MealBoardPlanCreateWithoutWeeklyMealGroupInput>;
};

export type MealBoardPlanCreateOrConnectWithoutCreatedByUserInput = {
  create: MealBoardPlanCreateWithoutCreatedByUserInput;
  where: MealBoardPlanWhereUniqueInput;
};

export type MealBoardPlanCreateOrConnectWithoutUpdatedByUserInput = {
  create: MealBoardPlanCreateWithoutUpdatedByUserInput;
  where: MealBoardPlanWhereUniqueInput;
};

export type MealBoardPlanCreateOrConnectWithoutUserMealInput = {
  create: MealBoardPlanCreateWithoutUserMealInput;
  where: MealBoardPlanWhereUniqueInput;
};

export type MealBoardPlanCreateOrConnectWithoutWeeklyMealGroupInput = {
  create: MealBoardPlanCreateWithoutWeeklyMealGroupInput;
  where: MealBoardPlanWhereUniqueInput;
};

export type MealBoardPlanCreateWithoutCreatedByUserInput = {
  UserMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealBoardPlanInput>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMealBoardPlanInput>;
  color?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MealBoardPlanCreateWithoutUpdatedByUserInput = {
  UserMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealBoardPlanInput>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMealBoardPlanInput>;
  color?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MealBoardPlanCreateWithoutUserMealInput = {
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMealBoardPlanInput>;
  color?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MealBoardPlanCreateWithoutWeeklyMealGroupInput = {
  UserMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealBoardPlanInput>;
  color?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MealBoardPlanListRelationFilter = {
  every?: InputMaybe<MealBoardPlanWhereInput>;
  none?: InputMaybe<MealBoardPlanWhereInput>;
  some?: InputMaybe<MealBoardPlanWhereInput>;
};

export type MealBoardPlanOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MealBoardPlanOrderByWithRelationInput = {
  UserMeal?: InputMaybe<UserMealOrderByRelationAggregateInput>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  color?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MealBoardPlanRelationFilter = {
  is?: InputMaybe<MealBoardPlanWhereInput>;
  isNot?: InputMaybe<MealBoardPlanWhereInput>;
};

export enum MealBoardPlanScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type MealBoardPlanScalarWhereInput = {
  AND?: InputMaybe<Array<MealBoardPlanScalarWhereInput>>;
  NOT?: InputMaybe<Array<MealBoardPlanScalarWhereInput>>;
  OR?: InputMaybe<Array<MealBoardPlanScalarWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MealBoardPlanUncheckedUpdateInput = {
  UserMeal?: InputMaybe<UserMealUncheckedUpdateManyWithoutMealBoardPlanNestedInput>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupUncheckedUpdateManyWithoutMealBoardPlanNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealBoardPlanUpdateInput = {
  UserMeal?: InputMaybe<UserMealUpdateManyWithoutMealBoardPlanNestedInput>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMealBoardPlanNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealBoardPlanUpdateManyMutationInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealBoardPlanUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: MealBoardPlanUpdateManyMutationInput;
  where: MealBoardPlanScalarWhereInput;
};

export type MealBoardPlanUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: MealBoardPlanUpdateManyMutationInput;
  where: MealBoardPlanScalarWhereInput;
};

export type MealBoardPlanUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealBoardPlanCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<MealBoardPlanCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealBoardPlanCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealBoardPlanScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  set?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  update?: InputMaybe<Array<MealBoardPlanUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<MealBoardPlanUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<MealBoardPlanUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type MealBoardPlanUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealBoardPlanCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<MealBoardPlanCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealBoardPlanCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealBoardPlanScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  set?: InputMaybe<Array<MealBoardPlanWhereUniqueInput>>;
  update?: InputMaybe<Array<MealBoardPlanUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<MealBoardPlanUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<MealBoardPlanUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type MealBoardPlanUpdateOneRequiredWithoutUserMealNestedInput = {
  connect?: InputMaybe<MealBoardPlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealBoardPlanCreateOrConnectWithoutUserMealInput>;
  create?: InputMaybe<MealBoardPlanCreateWithoutUserMealInput>;
  update?: InputMaybe<MealBoardPlanUpdateToOneWithWhereWithoutUserMealInput>;
  upsert?: InputMaybe<MealBoardPlanUpsertWithoutUserMealInput>;
};

export type MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput = {
  connect?: InputMaybe<MealBoardPlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealBoardPlanCreateOrConnectWithoutWeeklyMealGroupInput>;
  create?: InputMaybe<MealBoardPlanCreateWithoutWeeklyMealGroupInput>;
  update?: InputMaybe<MealBoardPlanUpdateToOneWithWhereWithoutWeeklyMealGroupInput>;
  upsert?: InputMaybe<MealBoardPlanUpsertWithoutWeeklyMealGroupInput>;
};

export type MealBoardPlanUpdateToOneWithWhereWithoutUserMealInput = {
  data: MealBoardPlanUpdateWithoutUserMealInput;
  where?: InputMaybe<MealBoardPlanWhereInput>;
};

export type MealBoardPlanUpdateToOneWithWhereWithoutWeeklyMealGroupInput = {
  data: MealBoardPlanUpdateWithoutWeeklyMealGroupInput;
  where?: InputMaybe<MealBoardPlanWhereInput>;
};

export type MealBoardPlanUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: MealBoardPlanUpdateWithoutCreatedByUserInput;
  where: MealBoardPlanWhereUniqueInput;
};

export type MealBoardPlanUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: MealBoardPlanUpdateWithoutUpdatedByUserInput;
  where: MealBoardPlanWhereUniqueInput;
};

export type MealBoardPlanUpdateWithoutCreatedByUserInput = {
  UserMeal?: InputMaybe<UserMealUpdateManyWithoutMealBoardPlanNestedInput>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMealBoardPlanNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealBoardPlanUpdateWithoutUpdatedByUserInput = {
  UserMeal?: InputMaybe<UserMealUpdateManyWithoutMealBoardPlanNestedInput>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMealBoardPlanNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealBoardPlanUpdateWithoutUserMealInput = {
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMealBoardPlanNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealBoardPlanUpdateWithoutWeeklyMealGroupInput = {
  UserMeal?: InputMaybe<UserMealUpdateManyWithoutMealBoardPlanNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealBoardPlanUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: MealBoardPlanCreateWithoutCreatedByUserInput;
  update: MealBoardPlanUpdateWithoutCreatedByUserInput;
  where: MealBoardPlanWhereUniqueInput;
};

export type MealBoardPlanUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: MealBoardPlanCreateWithoutUpdatedByUserInput;
  update: MealBoardPlanUpdateWithoutUpdatedByUserInput;
  where: MealBoardPlanWhereUniqueInput;
};

export type MealBoardPlanUpsertWithoutUserMealInput = {
  create: MealBoardPlanCreateWithoutUserMealInput;
  update: MealBoardPlanUpdateWithoutUserMealInput;
  where?: InputMaybe<MealBoardPlanWhereInput>;
};

export type MealBoardPlanUpsertWithoutWeeklyMealGroupInput = {
  create: MealBoardPlanCreateWithoutWeeklyMealGroupInput;
  update: MealBoardPlanUpdateWithoutWeeklyMealGroupInput;
  where?: InputMaybe<MealBoardPlanWhereInput>;
};

export type MealBoardPlanWhereInput = {
  AND?: InputMaybe<Array<MealBoardPlanWhereInput>>;
  NOT?: InputMaybe<Array<MealBoardPlanWhereInput>>;
  OR?: InputMaybe<Array<MealBoardPlanWhereInput>>;
  UserMeal?: InputMaybe<UserMealListRelationFilter>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  color?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MealBoardPlanWhereUniqueInput = {
  AND?: InputMaybe<Array<MealBoardPlanWhereInput>>;
  NOT?: InputMaybe<Array<MealBoardPlanWhereInput>>;
  OR?: InputMaybe<Array<MealBoardPlanWhereInput>>;
  UserMeal?: InputMaybe<UserMealListRelationFilter>;
  WeeklyMealGroup?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  color?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
};

export type MealCount = {
  additives: Scalars['Int']['output'];
  allergens: Scalars['Int']['output'];
  categories: Scalars['Int']['output'];
  foodForms: Scalars['Int']['output'];
  fridayMealGroups: Scalars['Int']['output'];
  mealRecipe: Scalars['Int']['output'];
  mondayMealGroups: Scalars['Int']['output'];
  properties: Scalars['Int']['output'];
  saturdayMealGroups: Scalars['Int']['output'];
  seasons: Scalars['Int']['output'];
  sundayMealGroups: Scalars['Int']['output'];
  thursdayMealGroups: Scalars['Int']['output'];
  tuesdayMealGroups: Scalars['Int']['output'];
  userMeal: Scalars['Int']['output'];
  wednesdayMealGroups: Scalars['Int']['output'];
};

export type MealCreateInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
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

export type MealCreateNestedManyWithoutAdditivesInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutAdditivesInput>>;
  create?: InputMaybe<Array<MealCreateWithoutAdditivesInput>>;
};

export type MealCreateNestedManyWithoutAllergensInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutAllergensInput>>;
  create?: InputMaybe<Array<MealCreateWithoutAllergensInput>>;
};

export type MealCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<MealCreateWithoutCategoriesInput>>;
};

export type MealCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<MealCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealCreateManyCreatedByUserInputEnvelope>;
};

export type MealCreateNestedManyWithoutFoodFormsInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutFoodFormsInput>>;
  create?: InputMaybe<Array<MealCreateWithoutFoodFormsInput>>;
};

export type MealCreateNestedManyWithoutPropertiesInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutPropertiesInput>>;
  create?: InputMaybe<Array<MealCreateWithoutPropertiesInput>>;
};

export type MealCreateNestedManyWithoutSeasonsInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutSeasonsInput>>;
  create?: InputMaybe<Array<MealCreateWithoutSeasonsInput>>;
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

export type MealCreateNestedOneWithoutMealRecipeInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutMealRecipeInput>;
  create?: InputMaybe<MealCreateWithoutMealRecipeInput>;
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

export type MealCreateNestedOneWithoutUserMealInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutUserMealInput>;
  create?: InputMaybe<MealCreateWithoutUserMealInput>;
};

export type MealCreateNestedOneWithoutWednesdayMealGroupsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutWednesdayMealGroupsInput>;
  create?: InputMaybe<MealCreateWithoutWednesdayMealGroupsInput>;
};

export type MealCreateOrConnectWithoutAdditivesInput = {
  create: MealCreateWithoutAdditivesInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutAllergensInput = {
  create: MealCreateWithoutAllergensInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutCategoriesInput = {
  create: MealCreateWithoutCategoriesInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutCreatedByUserInput = {
  create: MealCreateWithoutCreatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutFoodFormsInput = {
  create: MealCreateWithoutFoodFormsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutFridayMealGroupsInput = {
  create: MealCreateWithoutFridayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutMealRecipeInput = {
  create: MealCreateWithoutMealRecipeInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutMondayMealGroupsInput = {
  create: MealCreateWithoutMondayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutPropertiesInput = {
  create: MealCreateWithoutPropertiesInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutSaturdayMealGroupsInput = {
  create: MealCreateWithoutSaturdayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutSeasonsInput = {
  create: MealCreateWithoutSeasonsInput;
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

export type MealCreateOrConnectWithoutUserMealInput = {
  create: MealCreateWithoutUserMealInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutWednesdayMealGroupsInput = {
  create: MealCreateWithoutWednesdayMealGroupsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateWithoutAdditivesInput = {
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutAllergensInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutCategoriesInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutCreatedByUserInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutFoodFormsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutFridayMealGroupsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutMealRecipeInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutMondayMealGroupsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutPropertiesInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutSaturdayMealGroupsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutSeasonsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutSundayMealGroupsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutThursdayMealGroupsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutTuesdayMealGroupsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutUpdatedByUserInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutUserMealInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutWednesdayMealInput>;
};

export type MealCreateWithoutWednesdayMealGroupsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutMealsInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutMealsInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutMealsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutMealsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutFridayMealInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutMealInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutMondayMealInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutMealsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSaturdayMealInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutMealsInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutSundayMealInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutThursdayMealInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutTuesdayMealInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutMealInput>;
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
  additives?: InputMaybe<AdditivesOrderByRelationAggregateInput>;
  allergens?: InputMaybe<AllergensOrderByRelationAggregateInput>;
  categories?: InputMaybe<CategoriesOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrderInput>;
  foodForms?: InputMaybe<FoodFormsOrderByRelationAggregateInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  mealRecipe?: InputMaybe<MealRecipeOrderByRelationAggregateInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  properties?: InputMaybe<PropertiesOrderByRelationAggregateInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  seasons?: InputMaybe<SeasonsOrderByRelationAggregateInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  userMeal?: InputMaybe<UserMealOrderByRelationAggregateInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
};

export type MealRecipe = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  meal: Meal;
  mealId: Scalars['Int']['output'];
  note?: Maybe<Scalars['String']['output']>;
  recipe: Recipe;
  recipeId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type MealRecipeCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mealId: Scalars['Int']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  recipeId: Scalars['Int']['input'];
};

export type MealRecipeCreateManyCreatedByUserInputEnvelope = {
  data: Array<MealRecipeCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealRecipeCreateManyMealInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  recipeId: Scalars['Int']['input'];
};

export type MealRecipeCreateManyMealInputEnvelope = {
  data: Array<MealRecipeCreateManyMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealRecipeCreateManyRecipeInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mealId: Scalars['Int']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

export type MealRecipeCreateManyRecipeInputEnvelope = {
  data: Array<MealRecipeCreateManyRecipeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealRecipeCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mealId: Scalars['Int']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  recipeId: Scalars['Int']['input'];
};

export type MealRecipeCreateManyUpdatedByUserInputEnvelope = {
  data: Array<MealRecipeCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MealRecipeCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealRecipeCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<MealRecipeCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealRecipeCreateManyCreatedByUserInputEnvelope>;
};

export type MealRecipeCreateNestedManyWithoutMealInput = {
  connect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealRecipeCreateOrConnectWithoutMealInput>>;
  create?: InputMaybe<Array<MealRecipeCreateWithoutMealInput>>;
  createMany?: InputMaybe<MealRecipeCreateManyMealInputEnvelope>;
};

export type MealRecipeCreateNestedManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealRecipeCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<MealRecipeCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<MealRecipeCreateManyRecipeInputEnvelope>;
};

export type MealRecipeCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealRecipeCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<MealRecipeCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealRecipeCreateManyUpdatedByUserInputEnvelope>;
};

export type MealRecipeCreateOrConnectWithoutCreatedByUserInput = {
  create: MealRecipeCreateWithoutCreatedByUserInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeCreateOrConnectWithoutMealInput = {
  create: MealRecipeCreateWithoutMealInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeCreateOrConnectWithoutRecipeInput = {
  create: MealRecipeCreateWithoutRecipeInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeCreateOrConnectWithoutUpdatedByUserInput = {
  create: MealRecipeCreateWithoutUpdatedByUserInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeCreateWithoutCreatedByUserInput = {
  meal: MealCreateNestedOneWithoutMealRecipeInput;
  note?: InputMaybe<Scalars['String']['input']>;
  recipe: RecipeCreateNestedOneWithoutMealRecipeInput;
};

export type MealRecipeCreateWithoutMealInput = {
  note?: InputMaybe<Scalars['String']['input']>;
  recipe: RecipeCreateNestedOneWithoutMealRecipeInput;
};

export type MealRecipeCreateWithoutRecipeInput = {
  meal: MealCreateNestedOneWithoutMealRecipeInput;
  note?: InputMaybe<Scalars['String']['input']>;
};

export type MealRecipeCreateWithoutUpdatedByUserInput = {
  meal: MealCreateNestedOneWithoutMealRecipeInput;
  note?: InputMaybe<Scalars['String']['input']>;
  recipe: RecipeCreateNestedOneWithoutMealRecipeInput;
};

export type MealRecipeListRelationFilter = {
  every?: InputMaybe<MealRecipeWhereInput>;
  none?: InputMaybe<MealRecipeWhereInput>;
  some?: InputMaybe<MealRecipeWhereInput>;
};

export type MealRecipeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MealRecipeScalarWhereInput = {
  AND?: InputMaybe<Array<MealRecipeScalarWhereInput>>;
  NOT?: InputMaybe<Array<MealRecipeScalarWhereInput>>;
  OR?: InputMaybe<Array<MealRecipeScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  mealId?: InputMaybe<IntFilter>;
  note?: InputMaybe<StringNullableFilter>;
  recipeId?: InputMaybe<IntFilter>;
};

export type MealRecipeUpdateManyMutationInput = {
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type MealRecipeUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: MealRecipeUpdateManyMutationInput;
  where: MealRecipeScalarWhereInput;
};

export type MealRecipeUpdateManyWithWhereWithoutMealInput = {
  data: MealRecipeUpdateManyMutationInput;
  where: MealRecipeScalarWhereInput;
};

export type MealRecipeUpdateManyWithWhereWithoutRecipeInput = {
  data: MealRecipeUpdateManyMutationInput;
  where: MealRecipeScalarWhereInput;
};

export type MealRecipeUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: MealRecipeUpdateManyMutationInput;
  where: MealRecipeScalarWhereInput;
};

export type MealRecipeUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealRecipeCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<MealRecipeCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<MealRecipeCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealRecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<MealRecipeUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<MealRecipeUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<MealRecipeUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type MealRecipeUpdateManyWithoutMealNestedInput = {
  connect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealRecipeCreateOrConnectWithoutMealInput>>;
  create?: InputMaybe<Array<MealRecipeCreateWithoutMealInput>>;
  createMany?: InputMaybe<MealRecipeCreateManyMealInputEnvelope>;
  delete?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealRecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<MealRecipeUpdateWithWhereUniqueWithoutMealInput>>;
  updateMany?: InputMaybe<Array<MealRecipeUpdateManyWithWhereWithoutMealInput>>;
  upsert?: InputMaybe<Array<MealRecipeUpsertWithWhereUniqueWithoutMealInput>>;
};

export type MealRecipeUpdateManyWithoutRecipeNestedInput = {
  connect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealRecipeCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<MealRecipeCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<MealRecipeCreateManyRecipeInputEnvelope>;
  delete?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealRecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<MealRecipeUpdateWithWhereUniqueWithoutRecipeInput>>;
  updateMany?: InputMaybe<Array<MealRecipeUpdateManyWithWhereWithoutRecipeInput>>;
  upsert?: InputMaybe<Array<MealRecipeUpsertWithWhereUniqueWithoutRecipeInput>>;
};

export type MealRecipeUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealRecipeCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<MealRecipeCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<MealRecipeCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealRecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<MealRecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<MealRecipeUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<MealRecipeUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<MealRecipeUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type MealRecipeUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: MealRecipeUpdateWithoutCreatedByUserInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeUpdateWithWhereUniqueWithoutMealInput = {
  data: MealRecipeUpdateWithoutMealInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeUpdateWithWhereUniqueWithoutRecipeInput = {
  data: MealRecipeUpdateWithoutRecipeInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: MealRecipeUpdateWithoutUpdatedByUserInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeUpdateWithoutCreatedByUserInput = {
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealRecipeNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateOneRequiredWithoutMealRecipeNestedInput>;
};

export type MealRecipeUpdateWithoutMealInput = {
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateOneRequiredWithoutMealRecipeNestedInput>;
};

export type MealRecipeUpdateWithoutRecipeInput = {
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealRecipeNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type MealRecipeUpdateWithoutUpdatedByUserInput = {
  meal?: InputMaybe<MealUpdateOneRequiredWithoutMealRecipeNestedInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateOneRequiredWithoutMealRecipeNestedInput>;
};

export type MealRecipeUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: MealRecipeCreateWithoutCreatedByUserInput;
  update: MealRecipeUpdateWithoutCreatedByUserInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeUpsertWithWhereUniqueWithoutMealInput = {
  create: MealRecipeCreateWithoutMealInput;
  update: MealRecipeUpdateWithoutMealInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeUpsertWithWhereUniqueWithoutRecipeInput = {
  create: MealRecipeCreateWithoutRecipeInput;
  update: MealRecipeUpdateWithoutRecipeInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: MealRecipeCreateWithoutUpdatedByUserInput;
  update: MealRecipeUpdateWithoutUpdatedByUserInput;
  where: MealRecipeWhereUniqueInput;
};

export type MealRecipeWhereInput = {
  AND?: InputMaybe<Array<MealRecipeWhereInput>>;
  NOT?: InputMaybe<Array<MealRecipeWhereInput>>;
  OR?: InputMaybe<Array<MealRecipeWhereInput>>;
  id?: InputMaybe<IntFilter>;
  meal?: InputMaybe<MealRelationFilter>;
  mealId?: InputMaybe<IntFilter>;
  note?: InputMaybe<StringNullableFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<IntFilter>;
};

export type MealRecipeWhereUniqueInput = {
  AND?: InputMaybe<Array<MealRecipeWhereInput>>;
  NOT?: InputMaybe<Array<MealRecipeWhereInput>>;
  OR?: InputMaybe<Array<MealRecipeWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  meal?: InputMaybe<MealRelationFilter>;
  mealId?: InputMaybe<IntFilter>;
  note?: InputMaybe<StringNullableFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<IntFilter>;
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
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUpdateManyWithWhereWithoutAdditivesInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutAllergensInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutCategoriesInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutFoodFormsInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutPropertiesInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutSeasonsInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: MealUpdateManyMutationInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithoutAdditivesNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutAdditivesInput>>;
  create?: InputMaybe<Array<MealCreateWithoutAdditivesInput>>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<Array<MealUpdateWithWhereUniqueWithoutAdditivesInput>>;
  updateMany?: InputMaybe<Array<MealUpdateManyWithWhereWithoutAdditivesInput>>;
  upsert?: InputMaybe<Array<MealUpsertWithWhereUniqueWithoutAdditivesInput>>;
};

export type MealUpdateManyWithoutAllergensNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutAllergensInput>>;
  create?: InputMaybe<Array<MealCreateWithoutAllergensInput>>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<Array<MealUpdateWithWhereUniqueWithoutAllergensInput>>;
  updateMany?: InputMaybe<Array<MealUpdateManyWithWhereWithoutAllergensInput>>;
  upsert?: InputMaybe<Array<MealUpsertWithWhereUniqueWithoutAllergensInput>>;
};

export type MealUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<MealCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<Array<MealUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<MealUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<MealUpsertWithWhereUniqueWithoutCategoriesInput>>;
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

export type MealUpdateManyWithoutFoodFormsNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutFoodFormsInput>>;
  create?: InputMaybe<Array<MealCreateWithoutFoodFormsInput>>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<Array<MealUpdateWithWhereUniqueWithoutFoodFormsInput>>;
  updateMany?: InputMaybe<Array<MealUpdateManyWithWhereWithoutFoodFormsInput>>;
  upsert?: InputMaybe<Array<MealUpsertWithWhereUniqueWithoutFoodFormsInput>>;
};

export type MealUpdateManyWithoutPropertiesNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutPropertiesInput>>;
  create?: InputMaybe<Array<MealCreateWithoutPropertiesInput>>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<Array<MealUpdateWithWhereUniqueWithoutPropertiesInput>>;
  updateMany?: InputMaybe<Array<MealUpdateManyWithWhereWithoutPropertiesInput>>;
  upsert?: InputMaybe<Array<MealUpsertWithWhereUniqueWithoutPropertiesInput>>;
};

export type MealUpdateManyWithoutSeasonsNestedInput = {
  connect?: InputMaybe<Array<MealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MealCreateOrConnectWithoutSeasonsInput>>;
  create?: InputMaybe<Array<MealCreateWithoutSeasonsInput>>;
  delete?: InputMaybe<Array<MealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MealWhereUniqueInput>>;
  set?: InputMaybe<Array<MealWhereUniqueInput>>;
  update?: InputMaybe<Array<MealUpdateWithWhereUniqueWithoutSeasonsInput>>;
  updateMany?: InputMaybe<Array<MealUpdateManyWithWhereWithoutSeasonsInput>>;
  upsert?: InputMaybe<Array<MealUpsertWithWhereUniqueWithoutSeasonsInput>>;
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

export type MealUpdateOneRequiredWithoutMealRecipeNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutMealRecipeInput>;
  create?: InputMaybe<MealCreateWithoutMealRecipeInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutMealRecipeInput>;
  upsert?: InputMaybe<MealUpsertWithoutMealRecipeInput>;
};

export type MealUpdateOneRequiredWithoutUserMealNestedInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutUserMealInput>;
  create?: InputMaybe<MealCreateWithoutUserMealInput>;
  update?: InputMaybe<MealUpdateToOneWithWhereWithoutUserMealInput>;
  upsert?: InputMaybe<MealUpsertWithoutUserMealInput>;
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

export type MealUpdateToOneWithWhereWithoutMealRecipeInput = {
  data: MealUpdateWithoutMealRecipeInput;
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

export type MealUpdateToOneWithWhereWithoutUserMealInput = {
  data: MealUpdateWithoutUserMealInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateToOneWithWhereWithoutWednesdayMealGroupsInput = {
  data: MealUpdateWithoutWednesdayMealGroupsInput;
  where?: InputMaybe<MealWhereInput>;
};

export type MealUpdateWithWhereUniqueWithoutAdditivesInput = {
  data: MealUpdateWithoutAdditivesInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutAllergensInput = {
  data: MealUpdateWithoutAllergensInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: MealUpdateWithoutCategoriesInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: MealUpdateWithoutCreatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutFoodFormsInput = {
  data: MealUpdateWithoutFoodFormsInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutPropertiesInput = {
  data: MealUpdateWithoutPropertiesInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutSeasonsInput = {
  data: MealUpdateWithoutSeasonsInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: MealUpdateWithoutUpdatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithoutAdditivesInput = {
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutAllergensInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutCategoriesInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutCreatedByUserInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutFoodFormsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutFridayMealGroupsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutMealRecipeInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutMondayMealGroupsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutPropertiesInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutSaturdayMealGroupsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutSeasonsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutSundayMealGroupsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutThursdayMealGroupsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutTuesdayMealGroupsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutUpdatedByUserInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutUserMealInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutWednesdayMealNestedInput>;
};

export type MealUpdateWithoutWednesdayMealGroupsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutMealsNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutMealsNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutMealsNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutMealsNestedInput>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutFridayMealNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutMealNestedInput>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutMondayMealNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutMealsNestedInput>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSaturdayMealNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutMealsNestedInput>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutSundayMealNestedInput>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutThursdayMealNestedInput>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutTuesdayMealNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutMealNestedInput>;
};

export type MealUpsertWithWhereUniqueWithoutAdditivesInput = {
  create: MealCreateWithoutAdditivesInput;
  update: MealUpdateWithoutAdditivesInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutAllergensInput = {
  create: MealCreateWithoutAllergensInput;
  update: MealUpdateWithoutAllergensInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: MealCreateWithoutCategoriesInput;
  update: MealUpdateWithoutCategoriesInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: MealCreateWithoutCreatedByUserInput;
  update: MealUpdateWithoutCreatedByUserInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutFoodFormsInput = {
  create: MealCreateWithoutFoodFormsInput;
  update: MealUpdateWithoutFoodFormsInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutPropertiesInput = {
  create: MealCreateWithoutPropertiesInput;
  update: MealUpdateWithoutPropertiesInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutSeasonsInput = {
  create: MealCreateWithoutSeasonsInput;
  update: MealUpdateWithoutSeasonsInput;
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

export type MealUpsertWithoutMealRecipeInput = {
  create: MealCreateWithoutMealRecipeInput;
  update: MealUpdateWithoutMealRecipeInput;
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

export type MealUpsertWithoutUserMealInput = {
  create: MealCreateWithoutUserMealInput;
  update: MealUpdateWithoutUserMealInput;
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
  additives?: InputMaybe<AdditivesListRelationFilter>;
  allergens?: InputMaybe<AllergensListRelationFilter>;
  categories?: InputMaybe<CategoriesListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  foodForms?: InputMaybe<FoodFormsListRelationFilter>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  mealRecipe?: InputMaybe<MealRecipeListRelationFilter>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  properties?: InputMaybe<PropertiesListRelationFilter>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  seasons?: InputMaybe<SeasonsListRelationFilter>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  userMeal?: InputMaybe<UserMealListRelationFilter>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
};

export type MealWhereUniqueInput = {
  AND?: InputMaybe<Array<MealWhereInput>>;
  NOT?: InputMaybe<Array<MealWhereInput>>;
  OR?: InputMaybe<Array<MealWhereInput>>;
  additives?: InputMaybe<AdditivesListRelationFilter>;
  allergens?: InputMaybe<AllergensListRelationFilter>;
  categories?: InputMaybe<CategoriesListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  foodForms?: InputMaybe<FoodFormsListRelationFilter>;
  fridayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  mealRecipe?: InputMaybe<MealRecipeListRelationFilter>;
  mondayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  properties?: InputMaybe<PropertiesListRelationFilter>;
  saturdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  seasons?: InputMaybe<SeasonsListRelationFilter>;
  sundayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  thursdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  tuesdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  userMeal?: InputMaybe<UserMealListRelationFilter>;
  wednesdayMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
};

export type Mutation = {
  changePasswordUser?: Maybe<Scalars['Boolean']['output']>;
  createIngredientAdmin?: Maybe<Ingredient>;
  createManyIngredientsAdmin?: Maybe<Array<Ingredient>>;
  createManyMealBoardPlansAdmin?: Maybe<Array<MealBoardPlan>>;
  createManyMealsAdmin?: Maybe<Array<Meal>>;
  createManyRecipesAdmin?: Maybe<Array<Recipe>>;
  createManySettingsAdmin?: Maybe<Array<Settings>>;
  createManyUserMealsUser?: Maybe<Array<UserMeal>>;
  createManyUsersAdmin?: Maybe<Array<User>>;
  createManyWeeklyMealGroupsAdmin?: Maybe<Array<WeeklyMealGroup>>;
  createMealAdmin?: Maybe<Meal>;
  createMealBoardPlanAdmin?: Maybe<MealBoardPlan>;
  createRecipeAdmin?: Maybe<Recipe>;
  createSettingsAdmin?: Maybe<Settings>;
  createUserAdmin?: Maybe<User>;
  createUserMealUser?: Maybe<UserMeal>;
  createWeeklyMealGroupAdmin?: Maybe<WeeklyMealGroup>;
  deleteAccountTokensUser: Scalars['Boolean']['output'];
  deleteIngredientAdmin?: Maybe<Ingredient>;
  deleteManyIngredientsAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyMealBoardPlansAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyMealsAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyRecipesAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManySettingsAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyUserMealsUser?: Maybe<Scalars['Int']['output']>;
  deleteManyUsersAdmin?: Maybe<Scalars['Int']['output']>;
  deleteManyWeeklyMealGroupsAdmin?: Maybe<Scalars['Int']['output']>;
  deleteMealAdmin?: Maybe<Meal>;
  deleteMealBoardPlanAdmin?: Maybe<MealBoardPlan>;
  deleteRecipeAdmin?: Maybe<Recipe>;
  deleteSettingsAdmin?: Maybe<Settings>;
  deleteUserAdmin?: Maybe<User>;
  deleteUserMealUser?: Maybe<UserMeal>;
  deleteWeeklyMealGroupAdmin?: Maybe<WeeklyMealGroup>;
  loginUser?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  registerUser?: Maybe<User>;
  switchWeeklyMealGroupAdmin: Scalars['Boolean']['output'];
  updateIngredientAdmin?: Maybe<Ingredient>;
  updateManyIngredientsAdmin?: Maybe<Array<Ingredient>>;
  updateManyMealBoardPlansAdmin?: Maybe<Array<MealBoardPlan>>;
  updateManyMealsAdmin?: Maybe<Array<Meal>>;
  updateManyRecipesAdmin?: Maybe<Array<Recipe>>;
  updateManySettingsAdmin?: Maybe<Array<Settings>>;
  updateManyUserMealsUser?: Maybe<Array<UserMeal>>;
  updateManyUsersAdmin?: Maybe<Array<User>>;
  updateManyWeeklyMealGroupsAdmin?: Maybe<Array<WeeklyMealGroup>>;
  updateMealAdmin?: Maybe<Meal>;
  updateMealBoardPlanAdmin?: Maybe<MealBoardPlan>;
  updateRecipeAdmin?: Maybe<Recipe>;
  updateSettingsAdmin?: Maybe<Settings>;
  updateUserAdmin?: Maybe<User>;
  updateUserMealUser?: Maybe<UserMeal>;
  updateWeeklyMealGroupAdmin?: Maybe<WeeklyMealGroup>;
  uploadMealImageAdmin?: Maybe<Scalars['Boolean']['output']>;
  upsertIngredientAdmin?: Maybe<Ingredient>;
  upsertMealAdmin?: Maybe<Meal>;
  upsertMealBoardPlanAdmin?: Maybe<MealBoardPlan>;
  upsertRecipeAdmin?: Maybe<Recipe>;
  upsertSettingsAdmin?: Maybe<Settings>;
  upsertUserAdmin?: Maybe<User>;
  upsertUserMealUser?: Maybe<UserMeal>;
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


export type MutationCreateManyMealBoardPlansAdminArgs = {
  data: Array<MealBoardPlanCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMealsAdminArgs = {
  data: Array<MealCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyRecipesAdminArgs = {
  data: Array<RecipeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySettingsAdminArgs = {
  data: Array<SettingsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserMealsUserArgs = {
  data: Array<UserMealCreateManyInput>;
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


export type MutationCreateMealBoardPlanAdminArgs = {
  data: MealBoardPlanCreateInput;
};


export type MutationCreateRecipeAdminArgs = {
  data: RecipeCreateInput;
};


export type MutationCreateSettingsAdminArgs = {
  data: SettingsCreateInput;
};


export type MutationCreateUserAdminArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserMealUserArgs = {
  data: UserMealUncheckedCreateInput;
};


export type MutationCreateWeeklyMealGroupAdminArgs = {
  data: WeeklyMealGroupUncheckedCreateInput;
};


export type MutationDeleteIngredientAdminArgs = {
  where: IngredientWhereUniqueInput;
};


export type MutationDeleteManyIngredientsAdminArgs = {
  where?: InputMaybe<IngredientWhereInput>;
};


export type MutationDeleteManyMealBoardPlansAdminArgs = {
  where?: InputMaybe<MealBoardPlanWhereInput>;
};


export type MutationDeleteManyMealsAdminArgs = {
  where?: InputMaybe<MealWhereInput>;
};


export type MutationDeleteManyRecipesAdminArgs = {
  where?: InputMaybe<RecipeWhereInput>;
};


export type MutationDeleteManySettingsAdminArgs = {
  where?: InputMaybe<SettingsWhereInput>;
};


export type MutationDeleteManyUserMealsUserArgs = {
  where?: InputMaybe<UserMealWhereInput>;
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


export type MutationDeleteMealBoardPlanAdminArgs = {
  where: MealBoardPlanWhereUniqueInput;
};


export type MutationDeleteRecipeAdminArgs = {
  where: RecipeWhereUniqueInput;
};


export type MutationDeleteSettingsAdminArgs = {
  where: SettingsWhereUniqueInput;
};


export type MutationDeleteUserAdminArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserMealUserArgs = {
  where: UserMealWhereUniqueInput;
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


export type MutationSwitchWeeklyMealGroupAdminArgs = {
  data: SwitchWeeklyMealGroupInput;
};


export type MutationUpdateIngredientAdminArgs = {
  data: IngredientUpdateInput;
  where: IngredientWhereUniqueInput;
};


export type MutationUpdateManyIngredientsAdminArgs = {
  data: IngredientUpdateManyMutationInput;
  where?: InputMaybe<IngredientWhereInput>;
};


export type MutationUpdateManyMealBoardPlansAdminArgs = {
  data: MealBoardPlanUpdateManyMutationInput;
  where?: InputMaybe<MealBoardPlanWhereInput>;
};


export type MutationUpdateManyMealsAdminArgs = {
  data: MealUpdateManyMutationInput;
  where?: InputMaybe<MealWhereInput>;
};


export type MutationUpdateManyRecipesAdminArgs = {
  data: RecipeUpdateManyMutationInput;
  where?: InputMaybe<RecipeWhereInput>;
};


export type MutationUpdateManySettingsAdminArgs = {
  data: SettingsUpdateManyMutationInput;
  where?: InputMaybe<SettingsWhereInput>;
};


export type MutationUpdateManyUserMealsUserArgs = {
  data: UserMealUpdateManyMutationInput;
  where?: InputMaybe<UserMealWhereInput>;
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


export type MutationUpdateMealBoardPlanAdminArgs = {
  data: MealBoardPlanUncheckedUpdateInput;
  where: MealBoardPlanWhereUniqueInput;
};


export type MutationUpdateRecipeAdminArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpdateSettingsAdminArgs = {
  data: SettingsUpdateInput;
  where: SettingsWhereUniqueInput;
};


export type MutationUpdateUserAdminArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserMealUserArgs = {
  data: UserMealUpdateInput;
  where: UserMealWhereUniqueInput;
};


export type MutationUpdateWeeklyMealGroupAdminArgs = {
  data: WeeklyMealGroupUncheckedUpdateInput;
  where: WeeklyMealGroupWhereUniqueInput;
};


export type MutationUploadMealImageAdminArgs = {
  file: Scalars['Upload']['input'];
  mealId: Scalars['Float']['input'];
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


export type MutationUpsertMealBoardPlanAdminArgs = {
  create: MealBoardPlanCreateInput;
  update: MealBoardPlanUpdateInput;
  where: MealBoardPlanWhereUniqueInput;
};


export type MutationUpsertRecipeAdminArgs = {
  create: RecipeCreateInput;
  update: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpsertSettingsAdminArgs = {
  create: SettingsCreateInput;
  update: SettingsUpdateInput;
  where: SettingsWhereUniqueInput;
};


export type MutationUpsertUserAdminArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertUserMealUserArgs = {
  create: UserMealCreateInput;
  update: UserMealUpdateInput;
  where: UserMealWhereUniqueInput;
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

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
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

export type NestedEnumUnitFilter = {
  equals?: InputMaybe<Unit>;
  in?: InputMaybe<Array<Unit>>;
  not?: InputMaybe<NestedEnumUnitFilter>;
  notIn?: InputMaybe<Array<Unit>>;
};

export type NestedEnumUserRoleNameFilter = {
  equals?: InputMaybe<UserRoleName>;
  in?: InputMaybe<Array<UserRoleName>>;
  not?: InputMaybe<NestedEnumUserRoleNameFilter>;
  notIn?: InputMaybe<Array<UserRoleName>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
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

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
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

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Properties = {
  _count: PropertiesCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  ingredients?: Maybe<Array<Ingredient>>;
  meals?: Maybe<Array<Meal>>;
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type PropertiesCount = {
  ingredients: Scalars['Int']['output'];
  meals: Scalars['Int']['output'];
  recipes: Scalars['Int']['output'];
};

export type PropertiesCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type PropertiesCreateManyCreatedByUserInputEnvelope = {
  data: Array<PropertiesCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PropertiesCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type PropertiesCreateManyUpdatedByUserInputEnvelope = {
  data: Array<PropertiesCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PropertiesCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<PropertiesCreateManyCreatedByUserInputEnvelope>;
};

export type PropertiesCreateNestedManyWithoutIngredientsInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutIngredientsInput>>;
};

export type PropertiesCreateNestedManyWithoutMealsInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutMealsInput>>;
};

export type PropertiesCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutRecipesInput>>;
};

export type PropertiesCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<PropertiesCreateManyUpdatedByUserInputEnvelope>;
};

export type PropertiesCreateOrConnectWithoutCreatedByUserInput = {
  create: PropertiesCreateWithoutCreatedByUserInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesCreateOrConnectWithoutIngredientsInput = {
  create: PropertiesCreateWithoutIngredientsInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesCreateOrConnectWithoutMealsInput = {
  create: PropertiesCreateWithoutMealsInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesCreateOrConnectWithoutRecipesInput = {
  create: PropertiesCreateWithoutRecipesInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesCreateOrConnectWithoutUpdatedByUserInput = {
  create: PropertiesCreateWithoutUpdatedByUserInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesCreateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutPropertiesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutPropertiesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutPropertiesInput>;
};

export type PropertiesCreateWithoutIngredientsInput = {
  meals?: InputMaybe<MealCreateNestedManyWithoutPropertiesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutPropertiesInput>;
};

export type PropertiesCreateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutPropertiesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutPropertiesInput>;
};

export type PropertiesCreateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutPropertiesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutPropertiesInput>;
  name: Scalars['String']['input'];
};

export type PropertiesCreateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutPropertiesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutPropertiesInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutPropertiesInput>;
};

export type PropertiesListRelationFilter = {
  every?: InputMaybe<PropertiesWhereInput>;
  none?: InputMaybe<PropertiesWhereInput>;
  some?: InputMaybe<PropertiesWhereInput>;
};

export type PropertiesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PropertiesScalarWhereInput = {
  AND?: InputMaybe<Array<PropertiesScalarWhereInput>>;
  NOT?: InputMaybe<Array<PropertiesScalarWhereInput>>;
  OR?: InputMaybe<Array<PropertiesScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type PropertiesUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PropertiesUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: PropertiesUpdateManyMutationInput;
  where: PropertiesScalarWhereInput;
};

export type PropertiesUpdateManyWithWhereWithoutIngredientsInput = {
  data: PropertiesUpdateManyMutationInput;
  where: PropertiesScalarWhereInput;
};

export type PropertiesUpdateManyWithWhereWithoutMealsInput = {
  data: PropertiesUpdateManyMutationInput;
  where: PropertiesScalarWhereInput;
};

export type PropertiesUpdateManyWithWhereWithoutRecipesInput = {
  data: PropertiesUpdateManyMutationInput;
  where: PropertiesScalarWhereInput;
};

export type PropertiesUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: PropertiesUpdateManyMutationInput;
  where: PropertiesScalarWhereInput;
};

export type PropertiesUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<PropertiesCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertiesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertiesUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<PropertiesUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<PropertiesUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type PropertiesUpdateManyWithoutIngredientsNestedInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutIngredientsInput>>;
  delete?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertiesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertiesUpdateWithWhereUniqueWithoutIngredientsInput>>;
  updateMany?: InputMaybe<Array<PropertiesUpdateManyWithWhereWithoutIngredientsInput>>;
  upsert?: InputMaybe<Array<PropertiesUpsertWithWhereUniqueWithoutIngredientsInput>>;
};

export type PropertiesUpdateManyWithoutMealsNestedInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutMealsInput>>;
  delete?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertiesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertiesUpdateWithWhereUniqueWithoutMealsInput>>;
  updateMany?: InputMaybe<Array<PropertiesUpdateManyWithWhereWithoutMealsInput>>;
  upsert?: InputMaybe<Array<PropertiesUpsertWithWhereUniqueWithoutMealsInput>>;
};

export type PropertiesUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertiesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertiesUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<PropertiesUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<PropertiesUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type PropertiesUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertiesCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<PropertiesCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<PropertiesCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertiesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertiesWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertiesUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<PropertiesUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<PropertiesUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type PropertiesUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: PropertiesUpdateWithoutCreatedByUserInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesUpdateWithWhereUniqueWithoutIngredientsInput = {
  data: PropertiesUpdateWithoutIngredientsInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesUpdateWithWhereUniqueWithoutMealsInput = {
  data: PropertiesUpdateWithoutMealsInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesUpdateWithWhereUniqueWithoutRecipesInput = {
  data: PropertiesUpdateWithoutRecipesInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: PropertiesUpdateWithoutUpdatedByUserInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesUpdateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutPropertiesNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutPropertiesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutPropertiesNestedInput>;
};

export type PropertiesUpdateWithoutIngredientsInput = {
  meals?: InputMaybe<MealUpdateManyWithoutPropertiesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutPropertiesNestedInput>;
};

export type PropertiesUpdateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutPropertiesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutPropertiesNestedInput>;
};

export type PropertiesUpdateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutPropertiesNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutPropertiesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PropertiesUpdateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutPropertiesNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutPropertiesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutPropertiesNestedInput>;
};

export type PropertiesUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: PropertiesCreateWithoutCreatedByUserInput;
  update: PropertiesUpdateWithoutCreatedByUserInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesUpsertWithWhereUniqueWithoutIngredientsInput = {
  create: PropertiesCreateWithoutIngredientsInput;
  update: PropertiesUpdateWithoutIngredientsInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesUpsertWithWhereUniqueWithoutMealsInput = {
  create: PropertiesCreateWithoutMealsInput;
  update: PropertiesUpdateWithoutMealsInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesUpsertWithWhereUniqueWithoutRecipesInput = {
  create: PropertiesCreateWithoutRecipesInput;
  update: PropertiesUpdateWithoutRecipesInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: PropertiesCreateWithoutUpdatedByUserInput;
  update: PropertiesUpdateWithoutUpdatedByUserInput;
  where: PropertiesWhereUniqueInput;
};

export type PropertiesWhereInput = {
  AND?: InputMaybe<Array<PropertiesWhereInput>>;
  NOT?: InputMaybe<Array<PropertiesWhereInput>>;
  OR?: InputMaybe<Array<PropertiesWhereInput>>;
  id?: InputMaybe<IntFilter>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type PropertiesWhereUniqueInput = {
  AND?: InputMaybe<Array<PropertiesWhereInput>>;
  NOT?: InputMaybe<Array<PropertiesWhereInput>>;
  OR?: InputMaybe<Array<PropertiesWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type Query = {
  getAllIngredientsAdmin?: Maybe<Array<Ingredient>>;
  getAllMealBoardPlansAdmin?: Maybe<Array<MealBoardPlan>>;
  getAllMealBoardPlansUser?: Maybe<Array<MealBoardPlan>>;
  getAllMealsAdmin?: Maybe<Array<Meal>>;
  getAllMealsUser?: Maybe<Array<Meal>>;
  getAllRecipesAdmin?: Maybe<Array<Recipe>>;
  getAllSettingsAdmin?: Maybe<Array<Settings>>;
  getAllUserMealsAdmin?: Maybe<Array<UserMeal>>;
  getAllUserMealsUser?: Maybe<Array<UserMeal>>;
  getAllUsersAdmin?: Maybe<Array<User>>;
  getAllWeeklyMealGroupsAdmin?: Maybe<Array<WeeklyMealGroup>>;
  getAllWeeklyMealGroupsUser?: Maybe<Array<WeeklyMealGroup>>;
  getIngredientAdmin?: Maybe<Ingredient>;
  getMealAdmin?: Maybe<Meal>;
  getMealBoardPlanAdmin?: Maybe<MealBoardPlan>;
  getRecipeAdmin?: Maybe<Recipe>;
  getSettingsAdmin?: Maybe<Settings>;
  getSettingsUser?: Maybe<SettingsUserOutput>;
  getUserAdmin?: Maybe<User>;
  getUserMealUser?: Maybe<UserMeal>;
  getUserMealsGroupedAdmin?: Maybe<Array<UserMealGroupBy>>;
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


export type QueryGetAllMealBoardPlansAdminArgs = {
  cursor?: InputMaybe<MealBoardPlanWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealBoardPlanScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealBoardPlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MealBoardPlanWhereInput>;
};


export type QueryGetAllMealBoardPlansUserArgs = {
  cursor?: InputMaybe<MealBoardPlanWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealBoardPlanScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealBoardPlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MealBoardPlanWhereInput>;
};


export type QueryGetAllMealsAdminArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MealWhereInput>;
};


export type QueryGetAllMealsUserArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MealWhereInput>;
};


export type QueryGetAllRecipesAdminArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryGetAllSettingsAdminArgs = {
  cursor?: InputMaybe<SettingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SettingsWhereInput>;
};


export type QueryGetAllUserMealsAdminArgs = {
  cursor?: InputMaybe<UserMealWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMealWhereInput>;
};


export type QueryGetAllUserMealsUserArgs = {
  cursor?: InputMaybe<UserMealWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMealWhereInput>;
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


export type QueryGetAllWeeklyMealGroupsUserArgs = {
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


export type QueryGetMealBoardPlanAdminArgs = {
  cursor?: InputMaybe<MealBoardPlanWhereUniqueInput>;
  distinct?: InputMaybe<Array<MealBoardPlanScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MealBoardPlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MealBoardPlanWhereInput>;
};


export type QueryGetRecipeAdminArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryGetSettingsAdminArgs = {
  cursor?: InputMaybe<SettingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SettingsWhereInput>;
};


export type QueryGetUserAdminArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetUserMealUserArgs = {
  cursor?: InputMaybe<UserMealWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMealScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMealOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMealWhereInput>;
};


export type QueryGetUserMealsGroupedAdminArgs = {
  _avg?: InputMaybe<UserMealAvgAggregateInput>;
  _count?: InputMaybe<UserMealCountAggregateInput>;
  _max?: InputMaybe<UserMealMaxAggregateInput>;
  _min?: InputMaybe<UserMealMinAggregateInput>;
  _sum?: InputMaybe<UserMealSumAggregateInput>;
  by: Array<UserMealScalarFieldEnum>;
  having?: InputMaybe<UserMealScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserMealOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMealWhereInput>;
};


export type QueryGetWeeklyMealGroupAdminArgs = {
  cursor?: InputMaybe<WeeklyMealGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<WeeklyMealGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WeeklyMealGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
};

export type Recipe = {
  _count: RecipeCount;
  additives?: Maybe<Array<Additives>>;
  allergens?: Maybe<Array<Allergens>>;
  categories?: Maybe<Array<Categories>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  description?: Maybe<Scalars['String']['output']>;
  foodForms?: Maybe<Array<FoodForms>>;
  id: Scalars['Int']['output'];
  kitchens?: Maybe<Array<Kitchens>>;
  mealRecipe?: Maybe<Array<MealRecipe>>;
  name: Scalars['String']['output'];
  properties?: Maybe<Array<Properties>>;
  recipeIngredient?: Maybe<Array<RecipeIngredient>>;
  seasons?: Maybe<Array<Seasons>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type RecipeCount = {
  additives: Scalars['Int']['output'];
  allergens: Scalars['Int']['output'];
  categories: Scalars['Int']['output'];
  foodForms: Scalars['Int']['output'];
  kitchens: Scalars['Int']['output'];
  mealRecipe: Scalars['Int']['output'];
  properties: Scalars['Int']['output'];
  recipeIngredient: Scalars['Int']['output'];
  seasons: Scalars['Int']['output'];
};

export type RecipeCreateInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateManyCreatedByUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type RecipeCreateManyCreatedByUserInputEnvelope = {
  data: Array<RecipeCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type RecipeCreateManyUpdatedByUserInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type RecipeCreateManyUpdatedByUserInputEnvelope = {
  data: Array<RecipeCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeCreateNestedManyWithoutAdditivesInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutAdditivesInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutAdditivesInput>>;
};

export type RecipeCreateNestedManyWithoutAllergensInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutAllergensInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutAllergensInput>>;
};

export type RecipeCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutCategoriesInput>>;
};

export type RecipeCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<RecipeCreateManyCreatedByUserInputEnvelope>;
};

export type RecipeCreateNestedManyWithoutFoodFormsInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutFoodFormsInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutFoodFormsInput>>;
};

export type RecipeCreateNestedManyWithoutKitchensInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutKitchensInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutKitchensInput>>;
};

export type RecipeCreateNestedManyWithoutPropertiesInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutPropertiesInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutPropertiesInput>>;
};

export type RecipeCreateNestedManyWithoutSeasonsInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutSeasonsInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutSeasonsInput>>;
};

export type RecipeCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<RecipeCreateManyUpdatedByUserInputEnvelope>;
};

export type RecipeCreateNestedOneWithoutMealRecipeInput = {
  connect?: InputMaybe<RecipeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeCreateOrConnectWithoutMealRecipeInput>;
  create?: InputMaybe<RecipeCreateWithoutMealRecipeInput>;
};

export type RecipeCreateNestedOneWithoutRecipeIngredientInput = {
  connect?: InputMaybe<RecipeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeCreateOrConnectWithoutRecipeIngredientInput>;
  create?: InputMaybe<RecipeCreateWithoutRecipeIngredientInput>;
};

export type RecipeCreateOrConnectWithoutAdditivesInput = {
  create: RecipeCreateWithoutAdditivesInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutAllergensInput = {
  create: RecipeCreateWithoutAllergensInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutCategoriesInput = {
  create: RecipeCreateWithoutCategoriesInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutCreatedByUserInput = {
  create: RecipeCreateWithoutCreatedByUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutFoodFormsInput = {
  create: RecipeCreateWithoutFoodFormsInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutKitchensInput = {
  create: RecipeCreateWithoutKitchensInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutMealRecipeInput = {
  create: RecipeCreateWithoutMealRecipeInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutPropertiesInput = {
  create: RecipeCreateWithoutPropertiesInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutRecipeIngredientInput = {
  create: RecipeCreateWithoutRecipeIngredientInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutSeasonsInput = {
  create: RecipeCreateWithoutSeasonsInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateOrConnectWithoutUpdatedByUserInput = {
  create: RecipeCreateWithoutUpdatedByUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateWithoutAdditivesInput = {
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateWithoutAllergensInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateWithoutCategoriesInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateWithoutCreatedByUserInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateWithoutFoodFormsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateWithoutKitchensInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateWithoutMealRecipeInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateWithoutPropertiesInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateWithoutRecipeIngredientInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeCreateWithoutSeasonsInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
};

export type RecipeCreateWithoutUpdatedByUserInput = {
  additives?: InputMaybe<AdditivesCreateNestedManyWithoutRecipesInput>;
  allergens?: InputMaybe<AllergensCreateNestedManyWithoutRecipesInput>;
  categories?: InputMaybe<CategoriesCreateNestedManyWithoutRecipesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  foodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutRecipesInput>;
  kitchens?: InputMaybe<KitchensCreateNestedManyWithoutRecipesInput>;
  mealRecipe?: InputMaybe<MealRecipeCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String']['input'];
  properties?: InputMaybe<PropertiesCreateNestedManyWithoutRecipesInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientCreateNestedManyWithoutRecipeInput>;
  seasons?: InputMaybe<SeasonsCreateNestedManyWithoutRecipesInput>;
};

export type RecipeIngredient = {
  amount: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  ingredient: Ingredient;
  ingredientId: Scalars['Int']['output'];
  recipe: Recipe;
  recipeId: Scalars['Int']['output'];
  unit: Unit;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type RecipeIngredientCreateManyCreatedByUserInput = {
  amount: Scalars['Decimal']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredientId: Scalars['Int']['input'];
  recipeId: Scalars['Int']['input'];
  unit: Unit;
};

export type RecipeIngredientCreateManyCreatedByUserInputEnvelope = {
  data: Array<RecipeIngredientCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeIngredientCreateManyIngredientInput = {
  amount: Scalars['Decimal']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  recipeId: Scalars['Int']['input'];
  unit: Unit;
};

export type RecipeIngredientCreateManyIngredientInputEnvelope = {
  data: Array<RecipeIngredientCreateManyIngredientInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeIngredientCreateManyRecipeInput = {
  amount: Scalars['Decimal']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredientId: Scalars['Int']['input'];
  unit: Unit;
};

export type RecipeIngredientCreateManyRecipeInputEnvelope = {
  data: Array<RecipeIngredientCreateManyRecipeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeIngredientCreateManyUpdatedByUserInput = {
  amount: Scalars['Decimal']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredientId: Scalars['Int']['input'];
  recipeId: Scalars['Int']['input'];
  unit: Unit;
};

export type RecipeIngredientCreateManyUpdatedByUserInputEnvelope = {
  data: Array<RecipeIngredientCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecipeIngredientCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyCreatedByUserInputEnvelope>;
};

export type RecipeIngredientCreateNestedManyWithoutIngredientInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutIngredientInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyIngredientInputEnvelope>;
};

export type RecipeIngredientCreateNestedManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyRecipeInputEnvelope>;
};

export type RecipeIngredientCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyUpdatedByUserInputEnvelope>;
};

export type RecipeIngredientCreateOrConnectWithoutCreatedByUserInput = {
  create: RecipeIngredientCreateWithoutCreatedByUserInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientCreateOrConnectWithoutIngredientInput = {
  create: RecipeIngredientCreateWithoutIngredientInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientCreateOrConnectWithoutRecipeInput = {
  create: RecipeIngredientCreateWithoutRecipeInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientCreateOrConnectWithoutUpdatedByUserInput = {
  create: RecipeIngredientCreateWithoutUpdatedByUserInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientCreateWithoutCreatedByUserInput = {
  amount: Scalars['Decimal']['input'];
  ingredient: IngredientCreateNestedOneWithoutRecipeIngredientInput;
  recipe: RecipeCreateNestedOneWithoutRecipeIngredientInput;
  unit: Unit;
};

export type RecipeIngredientCreateWithoutIngredientInput = {
  amount: Scalars['Decimal']['input'];
  recipe: RecipeCreateNestedOneWithoutRecipeIngredientInput;
  unit: Unit;
};

export type RecipeIngredientCreateWithoutRecipeInput = {
  amount: Scalars['Decimal']['input'];
  ingredient: IngredientCreateNestedOneWithoutRecipeIngredientInput;
  unit: Unit;
};

export type RecipeIngredientCreateWithoutUpdatedByUserInput = {
  amount: Scalars['Decimal']['input'];
  ingredient: IngredientCreateNestedOneWithoutRecipeIngredientInput;
  recipe: RecipeCreateNestedOneWithoutRecipeIngredientInput;
  unit: Unit;
};

export type RecipeIngredientListRelationFilter = {
  every?: InputMaybe<RecipeIngredientWhereInput>;
  none?: InputMaybe<RecipeIngredientWhereInput>;
  some?: InputMaybe<RecipeIngredientWhereInput>;
};

export type RecipeIngredientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeIngredientScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  id?: InputMaybe<IntFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  recipeId?: InputMaybe<IntFilter>;
  unit?: InputMaybe<EnumUnitFilter>;
};

export type RecipeIngredientUpdateManyMutationInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unit?: InputMaybe<EnumUnitFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: RecipeIngredientUpdateManyMutationInput;
  where: RecipeIngredientScalarWhereInput;
};

export type RecipeIngredientUpdateManyWithWhereWithoutIngredientInput = {
  data: RecipeIngredientUpdateManyMutationInput;
  where: RecipeIngredientScalarWhereInput;
};

export type RecipeIngredientUpdateManyWithWhereWithoutRecipeInput = {
  data: RecipeIngredientUpdateManyMutationInput;
  where: RecipeIngredientScalarWhereInput;
};

export type RecipeIngredientUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: RecipeIngredientUpdateManyMutationInput;
  where: RecipeIngredientScalarWhereInput;
};

export type RecipeIngredientUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeIngredientUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<RecipeIngredientUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<RecipeIngredientUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type RecipeIngredientUpdateManyWithoutIngredientNestedInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutIngredientInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutIngredientInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyIngredientInputEnvelope>;
  delete?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput>>;
  updateMany?: InputMaybe<Array<RecipeIngredientUpdateManyWithWhereWithoutIngredientInput>>;
  upsert?: InputMaybe<Array<RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput>>;
};

export type RecipeIngredientUpdateManyWithoutRecipeNestedInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutRecipeInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyRecipeInputEnvelope>;
  delete?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput>>;
  updateMany?: InputMaybe<Array<RecipeIngredientUpdateManyWithWhereWithoutRecipeInput>>;
  upsert?: InputMaybe<Array<RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput>>;
};

export type RecipeIngredientUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<RecipeIngredientCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<RecipeIngredientCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeIngredientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeIngredientWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeIngredientUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<RecipeIngredientUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<RecipeIngredientUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type RecipeIngredientUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: RecipeIngredientUpdateWithoutCreatedByUserInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
  data: RecipeIngredientUpdateWithoutIngredientInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput = {
  data: RecipeIngredientUpdateWithoutRecipeInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: RecipeIngredientUpdateWithoutUpdatedByUserInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpdateWithoutCreatedByUserInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutRecipeIngredientNestedInput>;
  recipe?: InputMaybe<RecipeUpdateOneRequiredWithoutRecipeIngredientNestedInput>;
  unit?: InputMaybe<EnumUnitFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpdateWithoutIngredientInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateOneRequiredWithoutRecipeIngredientNestedInput>;
  unit?: InputMaybe<EnumUnitFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpdateWithoutRecipeInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutRecipeIngredientNestedInput>;
  unit?: InputMaybe<EnumUnitFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpdateWithoutUpdatedByUserInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  ingredient?: InputMaybe<IngredientUpdateOneRequiredWithoutRecipeIngredientNestedInput>;
  recipe?: InputMaybe<RecipeUpdateOneRequiredWithoutRecipeIngredientNestedInput>;
  unit?: InputMaybe<EnumUnitFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: RecipeIngredientCreateWithoutCreatedByUserInput;
  update: RecipeIngredientUpdateWithoutCreatedByUserInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
  create: RecipeIngredientCreateWithoutIngredientInput;
  update: RecipeIngredientUpdateWithoutIngredientInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput = {
  create: RecipeIngredientCreateWithoutRecipeInput;
  update: RecipeIngredientUpdateWithoutRecipeInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: RecipeIngredientCreateWithoutUpdatedByUserInput;
  update: RecipeIngredientUpdateWithoutUpdatedByUserInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientWhereInput = {
  AND?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  OR?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  id?: InputMaybe<IntFilter>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<IntFilter>;
  unit?: InputMaybe<EnumUnitFilter>;
};

export type RecipeIngredientWhereUniqueInput = {
  AND?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  OR?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredient?: InputMaybe<IngredientRelationFilter>;
  ingredientId?: InputMaybe<IntFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<IntFilter>;
  unit?: InputMaybe<EnumUnitFilter>;
};

export type RecipeListRelationFilter = {
  every?: InputMaybe<RecipeWhereInput>;
  none?: InputMaybe<RecipeWhereInput>;
  some?: InputMaybe<RecipeWhereInput>;
};

export type RecipeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeOrderByWithRelationInput = {
  additives?: InputMaybe<AdditivesOrderByRelationAggregateInput>;
  allergens?: InputMaybe<AllergensOrderByRelationAggregateInput>;
  categories?: InputMaybe<CategoriesOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrderInput>;
  foodForms?: InputMaybe<FoodFormsOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  kitchens?: InputMaybe<KitchensOrderByRelationAggregateInput>;
  mealRecipe?: InputMaybe<MealRecipeOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  properties?: InputMaybe<PropertiesOrderByRelationAggregateInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientOrderByRelationAggregateInput>;
  seasons?: InputMaybe<SeasonsOrderByRelationAggregateInput>;
};

export type RecipeRelationFilter = {
  is?: InputMaybe<RecipeWhereInput>;
  isNot?: InputMaybe<RecipeWhereInput>;
};

export enum RecipeScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type RecipeScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type RecipeUpdateInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RecipeUpdateManyWithWhereWithoutAdditivesInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithWhereWithoutAllergensInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithWhereWithoutCategoriesInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithWhereWithoutFoodFormsInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithWhereWithoutKitchensInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithWhereWithoutPropertiesInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithWhereWithoutSeasonsInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithoutAdditivesNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutAdditivesInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutAdditivesInput>>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutAdditivesInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutAdditivesInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutAdditivesInput>>;
};

export type RecipeUpdateManyWithoutAllergensNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutAllergensInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutAllergensInput>>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutAllergensInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutAllergensInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutAllergensInput>>;
};

export type RecipeUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutCategoriesInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type RecipeUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<RecipeCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type RecipeUpdateManyWithoutFoodFormsNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutFoodFormsInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutFoodFormsInput>>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutFoodFormsInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutFoodFormsInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutFoodFormsInput>>;
};

export type RecipeUpdateManyWithoutKitchensNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutKitchensInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutKitchensInput>>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutKitchensInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutKitchensInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutKitchensInput>>;
};

export type RecipeUpdateManyWithoutPropertiesNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutPropertiesInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutPropertiesInput>>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutPropertiesInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutPropertiesInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutPropertiesInput>>;
};

export type RecipeUpdateManyWithoutSeasonsNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutSeasonsInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutSeasonsInput>>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutSeasonsInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutSeasonsInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutSeasonsInput>>;
};

export type RecipeUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<RecipeCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type RecipeUpdateOneRequiredWithoutMealRecipeNestedInput = {
  connect?: InputMaybe<RecipeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeCreateOrConnectWithoutMealRecipeInput>;
  create?: InputMaybe<RecipeCreateWithoutMealRecipeInput>;
  update?: InputMaybe<RecipeUpdateToOneWithWhereWithoutMealRecipeInput>;
  upsert?: InputMaybe<RecipeUpsertWithoutMealRecipeInput>;
};

export type RecipeUpdateOneRequiredWithoutRecipeIngredientNestedInput = {
  connect?: InputMaybe<RecipeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeCreateOrConnectWithoutRecipeIngredientInput>;
  create?: InputMaybe<RecipeCreateWithoutRecipeIngredientInput>;
  update?: InputMaybe<RecipeUpdateToOneWithWhereWithoutRecipeIngredientInput>;
  upsert?: InputMaybe<RecipeUpsertWithoutRecipeIngredientInput>;
};

export type RecipeUpdateToOneWithWhereWithoutMealRecipeInput = {
  data: RecipeUpdateWithoutMealRecipeInput;
  where?: InputMaybe<RecipeWhereInput>;
};

export type RecipeUpdateToOneWithWhereWithoutRecipeIngredientInput = {
  data: RecipeUpdateWithoutRecipeIngredientInput;
  where?: InputMaybe<RecipeWhereInput>;
};

export type RecipeUpdateWithWhereUniqueWithoutAdditivesInput = {
  data: RecipeUpdateWithoutAdditivesInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithWhereUniqueWithoutAllergensInput = {
  data: RecipeUpdateWithoutAllergensInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: RecipeUpdateWithoutCategoriesInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: RecipeUpdateWithoutCreatedByUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithWhereUniqueWithoutFoodFormsInput = {
  data: RecipeUpdateWithoutFoodFormsInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithWhereUniqueWithoutKitchensInput = {
  data: RecipeUpdateWithoutKitchensInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithWhereUniqueWithoutPropertiesInput = {
  data: RecipeUpdateWithoutPropertiesInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithWhereUniqueWithoutSeasonsInput = {
  data: RecipeUpdateWithoutSeasonsInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: RecipeUpdateWithoutUpdatedByUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithoutAdditivesInput = {
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateWithoutAllergensInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateWithoutCategoriesInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateWithoutCreatedByUserInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateWithoutFoodFormsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateWithoutKitchensInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateWithoutMealRecipeInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateWithoutPropertiesInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateWithoutRecipeIngredientInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpdateWithoutSeasonsInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
};

export type RecipeUpdateWithoutUpdatedByUserInput = {
  additives?: InputMaybe<AdditivesUpdateManyWithoutRecipesNestedInput>;
  allergens?: InputMaybe<AllergensUpdateManyWithoutRecipesNestedInput>;
  categories?: InputMaybe<CategoriesUpdateManyWithoutRecipesNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  foodForms?: InputMaybe<FoodFormsUpdateManyWithoutRecipesNestedInput>;
  kitchens?: InputMaybe<KitchensUpdateManyWithoutRecipesNestedInput>;
  mealRecipe?: InputMaybe<MealRecipeUpdateManyWithoutRecipeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertiesUpdateManyWithoutRecipesNestedInput>;
  recipeIngredient?: InputMaybe<RecipeIngredientUpdateManyWithoutRecipeNestedInput>;
  seasons?: InputMaybe<SeasonsUpdateManyWithoutRecipesNestedInput>;
};

export type RecipeUpsertWithWhereUniqueWithoutAdditivesInput = {
  create: RecipeCreateWithoutAdditivesInput;
  update: RecipeUpdateWithoutAdditivesInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpsertWithWhereUniqueWithoutAllergensInput = {
  create: RecipeCreateWithoutAllergensInput;
  update: RecipeUpdateWithoutAllergensInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: RecipeCreateWithoutCategoriesInput;
  update: RecipeUpdateWithoutCategoriesInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: RecipeCreateWithoutCreatedByUserInput;
  update: RecipeUpdateWithoutCreatedByUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpsertWithWhereUniqueWithoutFoodFormsInput = {
  create: RecipeCreateWithoutFoodFormsInput;
  update: RecipeUpdateWithoutFoodFormsInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpsertWithWhereUniqueWithoutKitchensInput = {
  create: RecipeCreateWithoutKitchensInput;
  update: RecipeUpdateWithoutKitchensInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpsertWithWhereUniqueWithoutPropertiesInput = {
  create: RecipeCreateWithoutPropertiesInput;
  update: RecipeUpdateWithoutPropertiesInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpsertWithWhereUniqueWithoutSeasonsInput = {
  create: RecipeCreateWithoutSeasonsInput;
  update: RecipeUpdateWithoutSeasonsInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: RecipeCreateWithoutUpdatedByUserInput;
  update: RecipeUpdateWithoutUpdatedByUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpsertWithoutMealRecipeInput = {
  create: RecipeCreateWithoutMealRecipeInput;
  update: RecipeUpdateWithoutMealRecipeInput;
  where?: InputMaybe<RecipeWhereInput>;
};

export type RecipeUpsertWithoutRecipeIngredientInput = {
  create: RecipeCreateWithoutRecipeIngredientInput;
  update: RecipeUpdateWithoutRecipeIngredientInput;
  where?: InputMaybe<RecipeWhereInput>;
};

export type RecipeWhereInput = {
  AND?: InputMaybe<Array<RecipeWhereInput>>;
  NOT?: InputMaybe<Array<RecipeWhereInput>>;
  OR?: InputMaybe<Array<RecipeWhereInput>>;
  additives?: InputMaybe<AdditivesListRelationFilter>;
  allergens?: InputMaybe<AllergensListRelationFilter>;
  categories?: InputMaybe<CategoriesListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  foodForms?: InputMaybe<FoodFormsListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  kitchens?: InputMaybe<KitchensListRelationFilter>;
  mealRecipe?: InputMaybe<MealRecipeListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  properties?: InputMaybe<PropertiesListRelationFilter>;
  recipeIngredient?: InputMaybe<RecipeIngredientListRelationFilter>;
  seasons?: InputMaybe<SeasonsListRelationFilter>;
};

export type RecipeWhereUniqueInput = {
  AND?: InputMaybe<Array<RecipeWhereInput>>;
  NOT?: InputMaybe<Array<RecipeWhereInput>>;
  OR?: InputMaybe<Array<RecipeWhereInput>>;
  additives?: InputMaybe<AdditivesListRelationFilter>;
  allergens?: InputMaybe<AllergensListRelationFilter>;
  categories?: InputMaybe<CategoriesListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  foodForms?: InputMaybe<FoodFormsListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  kitchens?: InputMaybe<KitchensListRelationFilter>;
  mealRecipe?: InputMaybe<MealRecipeListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  properties?: InputMaybe<PropertiesListRelationFilter>;
  recipeIngredient?: InputMaybe<RecipeIngredientListRelationFilter>;
  seasons?: InputMaybe<SeasonsListRelationFilter>;
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Seasons = {
  _count: SeasonsCount;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  ingredients?: Maybe<Array<Ingredient>>;
  meals?: Maybe<Array<Meal>>;
  name: Scalars['String']['output'];
  recipes?: Maybe<Array<Recipe>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type SeasonsCount = {
  ingredients: Scalars['Int']['output'];
  meals: Scalars['Int']['output'];
  recipes: Scalars['Int']['output'];
};

export type SeasonsCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type SeasonsCreateManyCreatedByUserInputEnvelope = {
  data: Array<SeasonsCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeasonsCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type SeasonsCreateManyUpdatedByUserInputEnvelope = {
  data: Array<SeasonsCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeasonsCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<SeasonsCreateManyCreatedByUserInputEnvelope>;
};

export type SeasonsCreateNestedManyWithoutIngredientsInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutIngredientsInput>>;
};

export type SeasonsCreateNestedManyWithoutMealsInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutMealsInput>>;
};

export type SeasonsCreateNestedManyWithoutRecipesInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutRecipesInput>>;
};

export type SeasonsCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<SeasonsCreateManyUpdatedByUserInputEnvelope>;
};

export type SeasonsCreateOrConnectWithoutCreatedByUserInput = {
  create: SeasonsCreateWithoutCreatedByUserInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsCreateOrConnectWithoutIngredientsInput = {
  create: SeasonsCreateWithoutIngredientsInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsCreateOrConnectWithoutMealsInput = {
  create: SeasonsCreateWithoutMealsInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsCreateOrConnectWithoutRecipesInput = {
  create: SeasonsCreateWithoutRecipesInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsCreateOrConnectWithoutUpdatedByUserInput = {
  create: SeasonsCreateWithoutUpdatedByUserInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsCreateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutSeasonsInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutSeasonsInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutSeasonsInput>;
};

export type SeasonsCreateWithoutIngredientsInput = {
  meals?: InputMaybe<MealCreateNestedManyWithoutSeasonsInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutSeasonsInput>;
};

export type SeasonsCreateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutSeasonsInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutSeasonsInput>;
};

export type SeasonsCreateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutSeasonsInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutSeasonsInput>;
  name: Scalars['String']['input'];
};

export type SeasonsCreateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientCreateNestedManyWithoutSeasonsInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutSeasonsInput>;
  name: Scalars['String']['input'];
  recipes?: InputMaybe<RecipeCreateNestedManyWithoutSeasonsInput>;
};

export type SeasonsListRelationFilter = {
  every?: InputMaybe<SeasonsWhereInput>;
  none?: InputMaybe<SeasonsWhereInput>;
  some?: InputMaybe<SeasonsWhereInput>;
};

export type SeasonsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SeasonsScalarWhereInput = {
  AND?: InputMaybe<Array<SeasonsScalarWhereInput>>;
  NOT?: InputMaybe<Array<SeasonsScalarWhereInput>>;
  OR?: InputMaybe<Array<SeasonsScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type SeasonsUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SeasonsUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: SeasonsUpdateManyMutationInput;
  where: SeasonsScalarWhereInput;
};

export type SeasonsUpdateManyWithWhereWithoutIngredientsInput = {
  data: SeasonsUpdateManyMutationInput;
  where: SeasonsScalarWhereInput;
};

export type SeasonsUpdateManyWithWhereWithoutMealsInput = {
  data: SeasonsUpdateManyMutationInput;
  where: SeasonsScalarWhereInput;
};

export type SeasonsUpdateManyWithWhereWithoutRecipesInput = {
  data: SeasonsUpdateManyMutationInput;
  where: SeasonsScalarWhereInput;
};

export type SeasonsUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: SeasonsUpdateManyMutationInput;
  where: SeasonsScalarWhereInput;
};

export type SeasonsUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<SeasonsCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SeasonsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  set?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  update?: InputMaybe<Array<SeasonsUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<SeasonsUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<SeasonsUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type SeasonsUpdateManyWithoutIngredientsNestedInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutIngredientsInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutIngredientsInput>>;
  delete?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SeasonsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  set?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  update?: InputMaybe<Array<SeasonsUpdateWithWhereUniqueWithoutIngredientsInput>>;
  updateMany?: InputMaybe<Array<SeasonsUpdateManyWithWhereWithoutIngredientsInput>>;
  upsert?: InputMaybe<Array<SeasonsUpsertWithWhereUniqueWithoutIngredientsInput>>;
};

export type SeasonsUpdateManyWithoutMealsNestedInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutMealsInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutMealsInput>>;
  delete?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SeasonsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  set?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  update?: InputMaybe<Array<SeasonsUpdateWithWhereUniqueWithoutMealsInput>>;
  updateMany?: InputMaybe<Array<SeasonsUpdateManyWithWhereWithoutMealsInput>>;
  upsert?: InputMaybe<Array<SeasonsUpsertWithWhereUniqueWithoutMealsInput>>;
};

export type SeasonsUpdateManyWithoutRecipesNestedInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutRecipesInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutRecipesInput>>;
  delete?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SeasonsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  set?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  update?: InputMaybe<Array<SeasonsUpdateWithWhereUniqueWithoutRecipesInput>>;
  updateMany?: InputMaybe<Array<SeasonsUpdateManyWithWhereWithoutRecipesInput>>;
  upsert?: InputMaybe<Array<SeasonsUpsertWithWhereUniqueWithoutRecipesInput>>;
};

export type SeasonsUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SeasonsCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<SeasonsCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<SeasonsCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SeasonsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  set?: InputMaybe<Array<SeasonsWhereUniqueInput>>;
  update?: InputMaybe<Array<SeasonsUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<SeasonsUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<SeasonsUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type SeasonsUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: SeasonsUpdateWithoutCreatedByUserInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsUpdateWithWhereUniqueWithoutIngredientsInput = {
  data: SeasonsUpdateWithoutIngredientsInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsUpdateWithWhereUniqueWithoutMealsInput = {
  data: SeasonsUpdateWithoutMealsInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsUpdateWithWhereUniqueWithoutRecipesInput = {
  data: SeasonsUpdateWithoutRecipesInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: SeasonsUpdateWithoutUpdatedByUserInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsUpdateWithoutCreatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutSeasonsNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutSeasonsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutSeasonsNestedInput>;
};

export type SeasonsUpdateWithoutIngredientsInput = {
  meals?: InputMaybe<MealUpdateManyWithoutSeasonsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutSeasonsNestedInput>;
};

export type SeasonsUpdateWithoutMealsInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutSeasonsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutSeasonsNestedInput>;
};

export type SeasonsUpdateWithoutRecipesInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutSeasonsNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutSeasonsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SeasonsUpdateWithoutUpdatedByUserInput = {
  ingredients?: InputMaybe<IngredientUpdateManyWithoutSeasonsNestedInput>;
  meals?: InputMaybe<MealUpdateManyWithoutSeasonsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<RecipeUpdateManyWithoutSeasonsNestedInput>;
};

export type SeasonsUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: SeasonsCreateWithoutCreatedByUserInput;
  update: SeasonsUpdateWithoutCreatedByUserInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsUpsertWithWhereUniqueWithoutIngredientsInput = {
  create: SeasonsCreateWithoutIngredientsInput;
  update: SeasonsUpdateWithoutIngredientsInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsUpsertWithWhereUniqueWithoutMealsInput = {
  create: SeasonsCreateWithoutMealsInput;
  update: SeasonsUpdateWithoutMealsInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsUpsertWithWhereUniqueWithoutRecipesInput = {
  create: SeasonsCreateWithoutRecipesInput;
  update: SeasonsUpdateWithoutRecipesInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: SeasonsCreateWithoutUpdatedByUserInput;
  update: SeasonsUpdateWithoutUpdatedByUserInput;
  where: SeasonsWhereUniqueInput;
};

export type SeasonsWhereInput = {
  AND?: InputMaybe<Array<SeasonsWhereInput>>;
  NOT?: InputMaybe<Array<SeasonsWhereInput>>;
  OR?: InputMaybe<Array<SeasonsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type SeasonsWhereUniqueInput = {
  AND?: InputMaybe<Array<SeasonsWhereInput>>;
  NOT?: InputMaybe<Array<SeasonsWhereInput>>;
  OR?: InputMaybe<Array<SeasonsWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ingredients?: InputMaybe<IngredientListRelationFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipes?: InputMaybe<RecipeListRelationFilter>;
};

export type Settings = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  maxEditOrderDays: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
};

export type SettingsCreateInput = {
  maxEditOrderDays: Scalars['Int']['input'];
};

export type SettingsCreateManyCreatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  maxEditOrderDays: Scalars['Int']['input'];
};

export type SettingsCreateManyCreatedByUserInputEnvelope = {
  data: Array<SettingsCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SettingsCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  maxEditOrderDays: Scalars['Int']['input'];
};

export type SettingsCreateManyUpdatedByUserInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  maxEditOrderDays: Scalars['Int']['input'];
};

export type SettingsCreateManyUpdatedByUserInputEnvelope = {
  data: Array<SettingsCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SettingsCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SettingsCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<SettingsCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<SettingsCreateManyCreatedByUserInputEnvelope>;
};

export type SettingsCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SettingsCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<SettingsCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<SettingsCreateManyUpdatedByUserInputEnvelope>;
};

export type SettingsCreateOrConnectWithoutCreatedByUserInput = {
  create: SettingsCreateWithoutCreatedByUserInput;
  where: SettingsWhereUniqueInput;
};

export type SettingsCreateOrConnectWithoutUpdatedByUserInput = {
  create: SettingsCreateWithoutUpdatedByUserInput;
  where: SettingsWhereUniqueInput;
};

export type SettingsCreateWithoutCreatedByUserInput = {
  maxEditOrderDays: Scalars['Int']['input'];
};

export type SettingsCreateWithoutUpdatedByUserInput = {
  maxEditOrderDays: Scalars['Int']['input'];
};

export type SettingsListRelationFilter = {
  every?: InputMaybe<SettingsWhereInput>;
  none?: InputMaybe<SettingsWhereInput>;
  some?: InputMaybe<SettingsWhereInput>;
};

export type SettingsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SettingsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  maxEditOrderDays?: InputMaybe<SortOrder>;
};

export enum SettingsScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  MaxEditOrderDays = 'maxEditOrderDays',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy'
}

export type SettingsScalarWhereInput = {
  AND?: InputMaybe<Array<SettingsScalarWhereInput>>;
  NOT?: InputMaybe<Array<SettingsScalarWhereInput>>;
  OR?: InputMaybe<Array<SettingsScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  maxEditOrderDays?: InputMaybe<IntFilter>;
};

export type SettingsUpdateInput = {
  maxEditOrderDays?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SettingsUpdateManyMutationInput = {
  maxEditOrderDays?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SettingsUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: SettingsUpdateManyMutationInput;
  where: SettingsScalarWhereInput;
};

export type SettingsUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: SettingsUpdateManyMutationInput;
  where: SettingsScalarWhereInput;
};

export type SettingsUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SettingsCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<SettingsCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<SettingsCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SettingsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  set?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  update?: InputMaybe<Array<SettingsUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<SettingsUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<SettingsUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type SettingsUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SettingsCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<SettingsCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<SettingsCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SettingsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  set?: InputMaybe<Array<SettingsWhereUniqueInput>>;
  update?: InputMaybe<Array<SettingsUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<SettingsUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<SettingsUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type SettingsUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: SettingsUpdateWithoutCreatedByUserInput;
  where: SettingsWhereUniqueInput;
};

export type SettingsUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: SettingsUpdateWithoutUpdatedByUserInput;
  where: SettingsWhereUniqueInput;
};

export type SettingsUpdateWithoutCreatedByUserInput = {
  maxEditOrderDays?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SettingsUpdateWithoutUpdatedByUserInput = {
  maxEditOrderDays?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SettingsUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: SettingsCreateWithoutCreatedByUserInput;
  update: SettingsUpdateWithoutCreatedByUserInput;
  where: SettingsWhereUniqueInput;
};

export type SettingsUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: SettingsCreateWithoutUpdatedByUserInput;
  update: SettingsUpdateWithoutUpdatedByUserInput;
  where: SettingsWhereUniqueInput;
};

export type SettingsUserOutput = {
  maxEditOrderDays: Scalars['Int']['output'];
};

export type SettingsWhereInput = {
  AND?: InputMaybe<Array<SettingsWhereInput>>;
  NOT?: InputMaybe<Array<SettingsWhereInput>>;
  OR?: InputMaybe<Array<SettingsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  maxEditOrderDays?: InputMaybe<IntFilter>;
};

export type SettingsWhereUniqueInput = {
  AND?: InputMaybe<Array<SettingsWhereInput>>;
  NOT?: InputMaybe<Array<SettingsWhereInput>>;
  OR?: InputMaybe<Array<SettingsWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  maxEditOrderDays?: InputMaybe<IntFilter>;
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

export type SwitchWeeklyMealGroupInput = {
  activeDay: Scalars['String']['input'];
  activeGroupId: Scalars['Int']['input'];
  activeMealId: Scalars['Int']['input'];
  overDay: Scalars['String']['input'];
  overGroupId: Scalars['Int']['input'];
  overMealId?: InputMaybe<Scalars['Int']['input']>;
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

export enum Unit {
  G = 'G',
  Kg = 'KG',
  L = 'L',
  Ml = 'ML'
}

export type User = {
  _count: UserCount;
  createdAdditives?: Maybe<Array<Additives>>;
  createdAllergens?: Maybe<Array<Allergens>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdByUser?: Maybe<User>;
  createdCategories?: Maybe<Array<Categories>>;
  createdFoodForms?: Maybe<Array<FoodForms>>;
  createdIngredients?: Maybe<Array<Ingredient>>;
  createdKitchens?: Maybe<Array<Kitchens>>;
  createdMealBoardPlans?: Maybe<Array<MealBoardPlan>>;
  createdMealRecipes?: Maybe<Array<MealRecipe>>;
  createdMeals?: Maybe<Array<Meal>>;
  createdProperties?: Maybe<Array<Properties>>;
  createdRecipeIngredients?: Maybe<Array<RecipeIngredient>>;
  createdRecipes?: Maybe<Array<Recipe>>;
  createdSeasons?: Maybe<Array<Seasons>>;
  createdSettings?: Maybe<Array<Settings>>;
  createdToken?: Maybe<Array<Token>>;
  createdUser?: Maybe<Array<User>>;
  createdUserMeals?: Maybe<Array<UserMeal>>;
  createdUserRoles?: Maybe<Array<UserRole>>;
  createdWeeklyMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  lastOnline: Scalars['DateTime']['output'];
  status: Scalars['Boolean']['output'];
  updatedAdditives?: Maybe<Array<Additives>>;
  updatedAllergens?: Maybe<Array<Allergens>>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['Int']['output']>;
  updatedByUser?: Maybe<User>;
  updatedCategories?: Maybe<Array<Categories>>;
  updatedFoodForms?: Maybe<Array<FoodForms>>;
  updatedIngredients?: Maybe<Array<Ingredient>>;
  updatedKitchens?: Maybe<Array<Kitchens>>;
  updatedMealBoardPlans?: Maybe<Array<MealBoardPlan>>;
  updatedMealRecipes?: Maybe<Array<MealRecipe>>;
  updatedMeals?: Maybe<Array<Meal>>;
  updatedProperties?: Maybe<Array<Properties>>;
  updatedRecipeIngredients?: Maybe<Array<RecipeIngredient>>;
  updatedRecipes?: Maybe<Array<Recipe>>;
  updatedSeasons?: Maybe<Array<Seasons>>;
  updatedSettings?: Maybe<Array<Settings>>;
  updatedToken?: Maybe<Array<Token>>;
  updatedUser?: Maybe<Array<User>>;
  updatedUserMeals?: Maybe<Array<UserMeal>>;
  updatedUserRoles?: Maybe<Array<UserRole>>;
  updatedWeeklyMealGroups?: Maybe<Array<WeeklyMealGroup>>;
  userMeal?: Maybe<Array<UserMeal>>;
  userRole?: Maybe<Array<UserRole>>;
  username: Scalars['String']['output'];
};

export type UserCount = {
  createdAdditives: Scalars['Int']['output'];
  createdAllergens: Scalars['Int']['output'];
  createdCategories: Scalars['Int']['output'];
  createdFoodForms: Scalars['Int']['output'];
  createdIngredients: Scalars['Int']['output'];
  createdKitchens: Scalars['Int']['output'];
  createdMealBoardPlans: Scalars['Int']['output'];
  createdMealRecipes: Scalars['Int']['output'];
  createdMeals: Scalars['Int']['output'];
  createdProperties: Scalars['Int']['output'];
  createdRecipeIngredients: Scalars['Int']['output'];
  createdRecipes: Scalars['Int']['output'];
  createdSeasons: Scalars['Int']['output'];
  createdSettings: Scalars['Int']['output'];
  createdToken: Scalars['Int']['output'];
  createdUser: Scalars['Int']['output'];
  createdUserMeals: Scalars['Int']['output'];
  createdUserRoles: Scalars['Int']['output'];
  createdWeeklyMealGroups: Scalars['Int']['output'];
  updatedAdditives: Scalars['Int']['output'];
  updatedAllergens: Scalars['Int']['output'];
  updatedCategories: Scalars['Int']['output'];
  updatedFoodForms: Scalars['Int']['output'];
  updatedIngredients: Scalars['Int']['output'];
  updatedKitchens: Scalars['Int']['output'];
  updatedMealBoardPlans: Scalars['Int']['output'];
  updatedMealRecipes: Scalars['Int']['output'];
  updatedMeals: Scalars['Int']['output'];
  updatedProperties: Scalars['Int']['output'];
  updatedRecipeIngredients: Scalars['Int']['output'];
  updatedRecipes: Scalars['Int']['output'];
  updatedSeasons: Scalars['Int']['output'];
  updatedSettings: Scalars['Int']['output'];
  updatedToken: Scalars['Int']['output'];
  updatedUser: Scalars['Int']['output'];
  updatedUserMeals: Scalars['Int']['output'];
  updatedUserRoles: Scalars['Int']['output'];
  updatedWeeklyMealGroups: Scalars['Int']['output'];
  userMeal: Scalars['Int']['output'];
  userRole: Scalars['Int']['output'];
};

export type UserCreateInput = {
  createdAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutCreatedByUserInput>;
  createdAllergens?: InputMaybe<AllergensCreateNestedManyWithoutCreatedByUserInput>;
  createdCategories?: InputMaybe<CategoriesCreateNestedManyWithoutCreatedByUserInput>;
  createdFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutCreatedByUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdKitchens?: InputMaybe<KitchensCreateNestedManyWithoutCreatedByUserInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutCreatedByUserInput>;
  createdMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdProperties?: InputMaybe<PropertiesCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipes?: InputMaybe<RecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutCreatedByUserInput>;
  createdSettings?: InputMaybe<SettingsCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedAllergens?: InputMaybe<AllergensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedCategories?: InputMaybe<CategoriesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedKitchens?: InputMaybe<KitchensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedProperties?: InputMaybe<PropertiesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipes?: InputMaybe<RecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSettings?: InputMaybe<SettingsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutUserInput>;
  userRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
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

export type UserCreateNestedOneWithoutUserMealInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserMealInput>;
  create?: InputMaybe<UserCreateWithoutUserMealInput>;
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

export type UserCreateOrConnectWithoutUserMealInput = {
  create: UserCreateWithoutUserMealInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserRoleInput = {
  create: UserCreateWithoutUserRoleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCreatedByUserInput = {
  createdAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutCreatedByUserInput>;
  createdAllergens?: InputMaybe<AllergensCreateNestedManyWithoutCreatedByUserInput>;
  createdCategories?: InputMaybe<CategoriesCreateNestedManyWithoutCreatedByUserInput>;
  createdFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutCreatedByUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdKitchens?: InputMaybe<KitchensCreateNestedManyWithoutCreatedByUserInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutCreatedByUserInput>;
  createdMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdProperties?: InputMaybe<PropertiesCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipes?: InputMaybe<RecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutCreatedByUserInput>;
  createdSettings?: InputMaybe<SettingsCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedAllergens?: InputMaybe<AllergensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedCategories?: InputMaybe<CategoriesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedKitchens?: InputMaybe<KitchensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedProperties?: InputMaybe<PropertiesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipes?: InputMaybe<RecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSettings?: InputMaybe<SettingsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutUserInput>;
  userRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUpdatedByUserInput = {
  createdAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutCreatedByUserInput>;
  createdAllergens?: InputMaybe<AllergensCreateNestedManyWithoutCreatedByUserInput>;
  createdCategories?: InputMaybe<CategoriesCreateNestedManyWithoutCreatedByUserInput>;
  createdFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutCreatedByUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdKitchens?: InputMaybe<KitchensCreateNestedManyWithoutCreatedByUserInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutCreatedByUserInput>;
  createdMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdProperties?: InputMaybe<PropertiesCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipes?: InputMaybe<RecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutCreatedByUserInput>;
  createdSettings?: InputMaybe<SettingsCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedAllergens?: InputMaybe<AllergensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedCategories?: InputMaybe<CategoriesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedKitchens?: InputMaybe<KitchensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedProperties?: InputMaybe<PropertiesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipes?: InputMaybe<RecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSettings?: InputMaybe<SettingsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutUserInput>;
  userRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUserMealInput = {
  createdAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutCreatedByUserInput>;
  createdAllergens?: InputMaybe<AllergensCreateNestedManyWithoutCreatedByUserInput>;
  createdCategories?: InputMaybe<CategoriesCreateNestedManyWithoutCreatedByUserInput>;
  createdFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutCreatedByUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdKitchens?: InputMaybe<KitchensCreateNestedManyWithoutCreatedByUserInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutCreatedByUserInput>;
  createdMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdProperties?: InputMaybe<PropertiesCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipes?: InputMaybe<RecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutCreatedByUserInput>;
  createdSettings?: InputMaybe<SettingsCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedAllergens?: InputMaybe<AllergensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedCategories?: InputMaybe<CategoriesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedKitchens?: InputMaybe<KitchensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedProperties?: InputMaybe<PropertiesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipes?: InputMaybe<RecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSettings?: InputMaybe<SettingsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  userRole?: InputMaybe<UserRoleCreateNestedManyWithoutUserInput>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutUserRoleInput = {
  createdAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutCreatedByUserInput>;
  createdAllergens?: InputMaybe<AllergensCreateNestedManyWithoutCreatedByUserInput>;
  createdCategories?: InputMaybe<CategoriesCreateNestedManyWithoutCreatedByUserInput>;
  createdFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutCreatedByUserInput>;
  createdIngredients?: InputMaybe<IngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdKitchens?: InputMaybe<KitchensCreateNestedManyWithoutCreatedByUserInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutCreatedByUserInput>;
  createdMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdMeals?: InputMaybe<MealCreateNestedManyWithoutCreatedByUserInput>;
  createdProperties?: InputMaybe<PropertiesCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutCreatedByUserInput>;
  createdRecipes?: InputMaybe<RecipeCreateNestedManyWithoutCreatedByUserInput>;
  createdSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutCreatedByUserInput>;
  createdSettings?: InputMaybe<SettingsCreateNestedManyWithoutCreatedByUserInput>;
  createdToken?: InputMaybe<TokenCreateNestedManyWithoutCreatedByUserInput>;
  createdUser?: InputMaybe<UserCreateNestedManyWithoutCreatedByUserInput>;
  createdUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutCreatedByUserInput>;
  createdUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutCreatedByUserInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutCreatedByUserInput>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  lastOnline?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAdditives?: InputMaybe<AdditivesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedAllergens?: InputMaybe<AllergensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedCategories?: InputMaybe<CategoriesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedFoodForms?: InputMaybe<FoodFormsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedIngredients?: InputMaybe<IngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedKitchens?: InputMaybe<KitchensCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedMeals?: InputMaybe<MealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedProperties?: InputMaybe<PropertiesCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientCreateNestedManyWithoutUpdatedByUserInput>;
  updatedRecipes?: InputMaybe<RecipeCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSeasons?: InputMaybe<SeasonsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedSettings?: InputMaybe<SettingsCreateNestedManyWithoutUpdatedByUserInput>;
  updatedToken?: InputMaybe<TokenCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUser?: InputMaybe<UserCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserMeals?: InputMaybe<UserMealCreateNestedManyWithoutUpdatedByUserInput>;
  updatedUserRoles?: InputMaybe<UserRoleCreateNestedManyWithoutUpdatedByUserInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupCreateNestedManyWithoutUpdatedByUserInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutUserInput>;
  username: Scalars['String']['input'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMeal = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  meal: Meal;
  mealBoardPlan: MealBoardPlan;
  mealBoardPlanId: Scalars['Int']['output'];
  mealId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
  user: User;
  userId: Scalars['Int']['output'];
  weeklyMealGroup: WeeklyMealGroup;
  weeklyMealGroupId: Scalars['Int']['output'];
};

export type UserMealAvgAggregate = {
  createdBy?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  mealBoardPlanId?: Maybe<Scalars['Float']['output']>;
  mealId?: Maybe<Scalars['Float']['output']>;
  updatedBy?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
  weeklyMealGroupId?: Maybe<Scalars['Float']['output']>;
};

export type UserMealAvgAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
  mealBoardPlanId?: InputMaybe<Scalars['Boolean']['input']>;
  mealId?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
  weeklyMealGroupId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  mealBoardPlanId?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weeklyMealGroupId?: InputMaybe<SortOrder>;
};

export type UserMealCountAggregate = {
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdBy: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  mealBoardPlanId: Scalars['Int']['output'];
  mealId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBy: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  weeklyMealGroupId: Scalars['Int']['output'];
};

export type UserMealCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  mealBoardPlanId?: InputMaybe<Scalars['Boolean']['input']>;
  mealId?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
  weeklyMealGroupId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealCountOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealBoardPlanId?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weeklyMealGroupId?: InputMaybe<SortOrder>;
};

export type UserMealCreateInput = {
  date: Scalars['DateTime']['input'];
  meal: MealCreateNestedOneWithoutUserMealInput;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutUserMealInput;
  user: UserCreateNestedOneWithoutUserMealInput;
  weeklyMealGroup: WeeklyMealGroupCreateNestedOneWithoutUserMealInput;
};

export type UserMealCreateManyCreatedByUserInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
  weeklyMealGroupId: Scalars['Int']['input'];
};

export type UserMealCreateManyCreatedByUserInputEnvelope = {
  data: Array<UserMealCreateManyCreatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealCreateManyInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
  weeklyMealGroupId: Scalars['Int']['input'];
};

export type UserMealCreateManyMealBoardPlanInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  mealId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
  weeklyMealGroupId: Scalars['Int']['input'];
};

export type UserMealCreateManyMealBoardPlanInputEnvelope = {
  data: Array<UserMealCreateManyMealBoardPlanInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealCreateManyMealInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
  weeklyMealGroupId: Scalars['Int']['input'];
};

export type UserMealCreateManyMealInputEnvelope = {
  data: Array<UserMealCreateManyMealInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealCreateManyUpdatedByUserInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
  weeklyMealGroupId: Scalars['Int']['input'];
};

export type UserMealCreateManyUpdatedByUserInputEnvelope = {
  data: Array<UserMealCreateManyUpdatedByUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealCreateManyUserInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  weeklyMealGroupId: Scalars['Int']['input'];
};

export type UserMealCreateManyUserInputEnvelope = {
  data: Array<UserMealCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealCreateManyWeeklyMealGroupInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type UserMealCreateManyWeeklyMealGroupInputEnvelope = {
  data: Array<UserMealCreateManyWeeklyMealGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealCreateNestedManyWithoutCreatedByUserInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserMealCreateManyCreatedByUserInputEnvelope>;
};

export type UserMealCreateNestedManyWithoutMealBoardPlanInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutMealBoardPlanInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutMealBoardPlanInput>>;
  createMany?: InputMaybe<UserMealCreateManyMealBoardPlanInputEnvelope>;
};

export type UserMealCreateNestedManyWithoutMealInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutMealInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutMealInput>>;
  createMany?: InputMaybe<UserMealCreateManyMealInputEnvelope>;
};

export type UserMealCreateNestedManyWithoutUpdatedByUserInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<UserMealCreateManyUpdatedByUserInputEnvelope>;
};

export type UserMealCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserMealCreateManyUserInputEnvelope>;
};

export type UserMealCreateNestedManyWithoutWeeklyMealGroupInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutWeeklyMealGroupInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutWeeklyMealGroupInput>>;
  createMany?: InputMaybe<UserMealCreateManyWeeklyMealGroupInputEnvelope>;
};

export type UserMealCreateOrConnectWithoutCreatedByUserInput = {
  create: UserMealCreateWithoutCreatedByUserInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealCreateOrConnectWithoutMealBoardPlanInput = {
  create: UserMealCreateWithoutMealBoardPlanInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealCreateOrConnectWithoutMealInput = {
  create: UserMealCreateWithoutMealInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealCreateOrConnectWithoutUpdatedByUserInput = {
  create: UserMealCreateWithoutUpdatedByUserInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealCreateOrConnectWithoutUserInput = {
  create: UserMealCreateWithoutUserInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealCreateOrConnectWithoutWeeklyMealGroupInput = {
  create: UserMealCreateWithoutWeeklyMealGroupInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealCreateWithoutCreatedByUserInput = {
  date: Scalars['DateTime']['input'];
  meal: MealCreateNestedOneWithoutUserMealInput;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutUserMealInput;
  user: UserCreateNestedOneWithoutUserMealInput;
  weeklyMealGroup: WeeklyMealGroupCreateNestedOneWithoutUserMealInput;
};

export type UserMealCreateWithoutMealBoardPlanInput = {
  date: Scalars['DateTime']['input'];
  meal: MealCreateNestedOneWithoutUserMealInput;
  user: UserCreateNestedOneWithoutUserMealInput;
  weeklyMealGroup: WeeklyMealGroupCreateNestedOneWithoutUserMealInput;
};

export type UserMealCreateWithoutMealInput = {
  date: Scalars['DateTime']['input'];
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutUserMealInput;
  user: UserCreateNestedOneWithoutUserMealInput;
  weeklyMealGroup: WeeklyMealGroupCreateNestedOneWithoutUserMealInput;
};

export type UserMealCreateWithoutUpdatedByUserInput = {
  date: Scalars['DateTime']['input'];
  meal: MealCreateNestedOneWithoutUserMealInput;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutUserMealInput;
  user: UserCreateNestedOneWithoutUserMealInput;
  weeklyMealGroup: WeeklyMealGroupCreateNestedOneWithoutUserMealInput;
};

export type UserMealCreateWithoutUserInput = {
  date: Scalars['DateTime']['input'];
  meal: MealCreateNestedOneWithoutUserMealInput;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutUserMealInput;
  weeklyMealGroup: WeeklyMealGroupCreateNestedOneWithoutUserMealInput;
};

export type UserMealCreateWithoutWeeklyMealGroupInput = {
  date: Scalars['DateTime']['input'];
  meal: MealCreateNestedOneWithoutUserMealInput;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutUserMealInput;
  user: UserCreateNestedOneWithoutUserMealInput;
};

export type UserMealGroupBy = {
  _avg?: Maybe<UserMealAvgAggregate>;
  _count?: Maybe<UserMealCountAggregate>;
  _max?: Maybe<UserMealMaxAggregate>;
  _min?: Maybe<UserMealMinAggregate>;
  _sum?: Maybe<UserMealSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  mealBoardPlanId: Scalars['Int']['output'];
  mealId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  weeklyMealGroupId: Scalars['Int']['output'];
};

export type UserMealListRelationFilter = {
  every?: InputMaybe<UserMealWhereInput>;
  none?: InputMaybe<UserMealWhereInput>;
  some?: InputMaybe<UserMealWhereInput>;
};

export type UserMealMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mealBoardPlanId?: Maybe<Scalars['Int']['output']>;
  mealId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  weeklyMealGroupId?: Maybe<Scalars['Int']['output']>;
};

export type UserMealMaxAggregateInput = {
  date?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  mealBoardPlanId?: InputMaybe<Scalars['Boolean']['input']>;
  mealId?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
  weeklyMealGroupId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealMaxOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealBoardPlanId?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weeklyMealGroupId?: InputMaybe<SortOrder>;
};

export type UserMealMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mealBoardPlanId?: Maybe<Scalars['Int']['output']>;
  mealId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  weeklyMealGroupId?: Maybe<Scalars['Int']['output']>;
};

export type UserMealMinAggregateInput = {
  date?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  mealBoardPlanId?: InputMaybe<Scalars['Boolean']['input']>;
  mealId?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
  weeklyMealGroupId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealMinOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealBoardPlanId?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weeklyMealGroupId?: InputMaybe<SortOrder>;
};

export type UserMealOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserMealOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserMealAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserMealCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMealMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMealMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserMealSumOrderByAggregateInput>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealBoardPlanId?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weeklyMealGroupId?: InputMaybe<SortOrder>;
};

export type UserMealOrderByWithRelationInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meal?: InputMaybe<MealOrderByWithRelationInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanOrderByWithRelationInput>;
  mealBoardPlanId?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  weeklyMealGroup?: InputMaybe<WeeklyMealGroupOrderByWithRelationInput>;
  weeklyMealGroupId?: InputMaybe<SortOrder>;
};

export enum UserMealScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Date = 'date',
  Id = 'id',
  MealBoardPlanId = 'mealBoardPlanId',
  MealId = 'mealId',
  UpdatedAt = 'updatedAt',
  UpdatedBy = 'updatedBy',
  UserId = 'userId',
  WeeklyMealGroupId = 'weeklyMealGroupId'
}

export type UserMealScalarWhereInput = {
  AND?: InputMaybe<Array<UserMealScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserMealScalarWhereInput>>;
  OR?: InputMaybe<Array<UserMealScalarWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  mealBoardPlanId?: InputMaybe<IntFilter>;
  mealId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
  weeklyMealGroupId?: InputMaybe<IntFilter>;
};

export type UserMealScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserMealScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserMealScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserMealScalarWhereWithAggregatesInput>>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  mealBoardPlanId?: InputMaybe<IntWithAggregatesFilter>;
  mealId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
  weeklyMealGroupId?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserMealSumAggregate = {
  createdBy?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mealBoardPlanId?: Maybe<Scalars['Int']['output']>;
  mealId?: Maybe<Scalars['Int']['output']>;
  updatedBy?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  weeklyMealGroupId?: Maybe<Scalars['Int']['output']>;
};

export type UserMealSumAggregateInput = {
  id?: InputMaybe<Scalars['Boolean']['input']>;
  mealBoardPlanId?: InputMaybe<Scalars['Boolean']['input']>;
  mealId?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
  weeklyMealGroupId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMealSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  mealBoardPlanId?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weeklyMealGroupId?: InputMaybe<SortOrder>;
};

export type UserMealUncheckedCreateInput = {
  date: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
  weeklyMealGroupId: Scalars['Int']['input'];
};

export type UserMealUncheckedCreateNestedManyWithoutWeeklyMealGroupInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutWeeklyMealGroupInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutWeeklyMealGroupInput>>;
  createMany?: InputMaybe<UserMealCreateManyWeeklyMealGroupInputEnvelope>;
};

export type UserMealUncheckedUpdateManyWithoutMealBoardPlanNestedInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutMealBoardPlanInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutMealBoardPlanInput>>;
  createMany?: InputMaybe<UserMealCreateManyMealBoardPlanInputEnvelope>;
  delete?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMealUpdateWithWhereUniqueWithoutMealBoardPlanInput>>;
  updateMany?: InputMaybe<Array<UserMealUpdateManyWithWhereWithoutMealBoardPlanInput>>;
  upsert?: InputMaybe<Array<UserMealUpsertWithWhereUniqueWithoutMealBoardPlanInput>>;
};

export type UserMealUncheckedUpdateManyWithoutWeeklyMealGroupNestedInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutWeeklyMealGroupInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutWeeklyMealGroupInput>>;
  createMany?: InputMaybe<UserMealCreateManyWeeklyMealGroupInputEnvelope>;
  delete?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMealUpdateWithWhereUniqueWithoutWeeklyMealGroupInput>>;
  updateMany?: InputMaybe<Array<UserMealUpdateManyWithWhereWithoutWeeklyMealGroupInput>>;
  upsert?: InputMaybe<Array<UserMealUpsertWithWhereUniqueWithoutWeeklyMealGroupInput>>;
};

export type UserMealUpdateInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutUserMealNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutUserMealNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserMealNestedInput>;
  weeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateOneRequiredWithoutUserMealNestedInput>;
};

export type UserMealUpdateManyMutationInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserMealUpdateManyWithWhereWithoutCreatedByUserInput = {
  data: UserMealUpdateManyMutationInput;
  where: UserMealScalarWhereInput;
};

export type UserMealUpdateManyWithWhereWithoutMealBoardPlanInput = {
  data: UserMealUpdateManyMutationInput;
  where: UserMealScalarWhereInput;
};

export type UserMealUpdateManyWithWhereWithoutMealInput = {
  data: UserMealUpdateManyMutationInput;
  where: UserMealScalarWhereInput;
};

export type UserMealUpdateManyWithWhereWithoutUpdatedByUserInput = {
  data: UserMealUpdateManyMutationInput;
  where: UserMealScalarWhereInput;
};

export type UserMealUpdateManyWithWhereWithoutUserInput = {
  data: UserMealUpdateManyMutationInput;
  where: UserMealScalarWhereInput;
};

export type UserMealUpdateManyWithWhereWithoutWeeklyMealGroupInput = {
  data: UserMealUpdateManyMutationInput;
  where: UserMealScalarWhereInput;
};

export type UserMealUpdateManyWithoutCreatedByUserNestedInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutCreatedByUserInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutCreatedByUserInput>>;
  createMany?: InputMaybe<UserMealCreateManyCreatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMealUpdateWithWhereUniqueWithoutCreatedByUserInput>>;
  updateMany?: InputMaybe<Array<UserMealUpdateManyWithWhereWithoutCreatedByUserInput>>;
  upsert?: InputMaybe<Array<UserMealUpsertWithWhereUniqueWithoutCreatedByUserInput>>;
};

export type UserMealUpdateManyWithoutMealBoardPlanNestedInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutMealBoardPlanInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutMealBoardPlanInput>>;
  createMany?: InputMaybe<UserMealCreateManyMealBoardPlanInputEnvelope>;
  delete?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMealUpdateWithWhereUniqueWithoutMealBoardPlanInput>>;
  updateMany?: InputMaybe<Array<UserMealUpdateManyWithWhereWithoutMealBoardPlanInput>>;
  upsert?: InputMaybe<Array<UserMealUpsertWithWhereUniqueWithoutMealBoardPlanInput>>;
};

export type UserMealUpdateManyWithoutMealNestedInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutMealInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutMealInput>>;
  createMany?: InputMaybe<UserMealCreateManyMealInputEnvelope>;
  delete?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMealUpdateWithWhereUniqueWithoutMealInput>>;
  updateMany?: InputMaybe<Array<UserMealUpdateManyWithWhereWithoutMealInput>>;
  upsert?: InputMaybe<Array<UserMealUpsertWithWhereUniqueWithoutMealInput>>;
};

export type UserMealUpdateManyWithoutUpdatedByUserNestedInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutUpdatedByUserInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutUpdatedByUserInput>>;
  createMany?: InputMaybe<UserMealCreateManyUpdatedByUserInputEnvelope>;
  delete?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMealUpdateWithWhereUniqueWithoutUpdatedByUserInput>>;
  updateMany?: InputMaybe<Array<UserMealUpdateManyWithWhereWithoutUpdatedByUserInput>>;
  upsert?: InputMaybe<Array<UserMealUpsertWithWhereUniqueWithoutUpdatedByUserInput>>;
};

export type UserMealUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserMealCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMealUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserMealUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserMealUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserMealUpdateManyWithoutWeeklyMealGroupNestedInput = {
  connect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMealCreateOrConnectWithoutWeeklyMealGroupInput>>;
  create?: InputMaybe<Array<UserMealCreateWithoutWeeklyMealGroupInput>>;
  createMany?: InputMaybe<UserMealCreateManyWeeklyMealGroupInputEnvelope>;
  delete?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMealScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMealWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMealUpdateWithWhereUniqueWithoutWeeklyMealGroupInput>>;
  updateMany?: InputMaybe<Array<UserMealUpdateManyWithWhereWithoutWeeklyMealGroupInput>>;
  upsert?: InputMaybe<Array<UserMealUpsertWithWhereUniqueWithoutWeeklyMealGroupInput>>;
};

export type UserMealUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: UserMealUpdateWithoutCreatedByUserInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpdateWithWhereUniqueWithoutMealBoardPlanInput = {
  data: UserMealUpdateWithoutMealBoardPlanInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpdateWithWhereUniqueWithoutMealInput = {
  data: UserMealUpdateWithoutMealInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
  data: UserMealUpdateWithoutUpdatedByUserInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpdateWithWhereUniqueWithoutUserInput = {
  data: UserMealUpdateWithoutUserInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpdateWithWhereUniqueWithoutWeeklyMealGroupInput = {
  data: UserMealUpdateWithoutWeeklyMealGroupInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpdateWithoutCreatedByUserInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutUserMealNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutUserMealNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserMealNestedInput>;
  weeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateOneRequiredWithoutUserMealNestedInput>;
};

export type UserMealUpdateWithoutMealBoardPlanInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutUserMealNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserMealNestedInput>;
  weeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateOneRequiredWithoutUserMealNestedInput>;
};

export type UserMealUpdateWithoutMealInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutUserMealNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserMealNestedInput>;
  weeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateOneRequiredWithoutUserMealNestedInput>;
};

export type UserMealUpdateWithoutUpdatedByUserInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutUserMealNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutUserMealNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserMealNestedInput>;
  weeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateOneRequiredWithoutUserMealNestedInput>;
};

export type UserMealUpdateWithoutUserInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutUserMealNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutUserMealNestedInput>;
  weeklyMealGroup?: InputMaybe<WeeklyMealGroupUpdateOneRequiredWithoutUserMealNestedInput>;
};

export type UserMealUpdateWithoutWeeklyMealGroupInput = {
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  meal?: InputMaybe<MealUpdateOneRequiredWithoutUserMealNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutUserMealNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserMealNestedInput>;
};

export type UserMealUpsertWithWhereUniqueWithoutCreatedByUserInput = {
  create: UserMealCreateWithoutCreatedByUserInput;
  update: UserMealUpdateWithoutCreatedByUserInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpsertWithWhereUniqueWithoutMealBoardPlanInput = {
  create: UserMealCreateWithoutMealBoardPlanInput;
  update: UserMealUpdateWithoutMealBoardPlanInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpsertWithWhereUniqueWithoutMealInput = {
  create: UserMealCreateWithoutMealInput;
  update: UserMealUpdateWithoutMealInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
  create: UserMealCreateWithoutUpdatedByUserInput;
  update: UserMealUpdateWithoutUpdatedByUserInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpsertWithWhereUniqueWithoutUserInput = {
  create: UserMealCreateWithoutUserInput;
  update: UserMealUpdateWithoutUserInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUpsertWithWhereUniqueWithoutWeeklyMealGroupInput = {
  create: UserMealCreateWithoutWeeklyMealGroupInput;
  update: UserMealUpdateWithoutWeeklyMealGroupInput;
  where: UserMealWhereUniqueInput;
};

export type UserMealUser_Meal_Date_MealBoardPlanId_UserId_MealId_UniqueCompoundUniqueInput = {
  date: Scalars['DateTime']['input'];
  mealBoardPlanId: Scalars['Int']['input'];
  mealId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type UserMealWhereInput = {
  AND?: InputMaybe<Array<UserMealWhereInput>>;
  NOT?: InputMaybe<Array<UserMealWhereInput>>;
  OR?: InputMaybe<Array<UserMealWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  meal?: InputMaybe<MealRelationFilter>;
  mealBoardPlan?: InputMaybe<MealBoardPlanRelationFilter>;
  mealBoardPlanId?: InputMaybe<IntFilter>;
  mealId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  weeklyMealGroup?: InputMaybe<WeeklyMealGroupRelationFilter>;
  weeklyMealGroupId?: InputMaybe<IntFilter>;
};

export type UserMealWhereUniqueInput = {
  AND?: InputMaybe<Array<UserMealWhereInput>>;
  NOT?: InputMaybe<Array<UserMealWhereInput>>;
  OR?: InputMaybe<Array<UserMealWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  meal?: InputMaybe<MealRelationFilter>;
  mealBoardPlan?: InputMaybe<MealBoardPlanRelationFilter>;
  mealBoardPlanId?: InputMaybe<IntFilter>;
  mealId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  user_meal_date_mealBoardPlanId_userId_mealId_unique?: InputMaybe<UserMealUser_Meal_Date_MealBoardPlanId_UserId_MealId_UniqueCompoundUniqueInput>;
  weeklyMealGroup?: InputMaybe<WeeklyMealGroupRelationFilter>;
  weeklyMealGroupId?: InputMaybe<IntFilter>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAdditives?: InputMaybe<AdditivesOrderByRelationAggregateInput>;
  createdAllergens?: InputMaybe<AllergensOrderByRelationAggregateInput>;
  createdCategories?: InputMaybe<CategoriesOrderByRelationAggregateInput>;
  createdFoodForms?: InputMaybe<FoodFormsOrderByRelationAggregateInput>;
  createdIngredients?: InputMaybe<IngredientOrderByRelationAggregateInput>;
  createdKitchens?: InputMaybe<KitchensOrderByRelationAggregateInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanOrderByRelationAggregateInput>;
  createdMealRecipes?: InputMaybe<MealRecipeOrderByRelationAggregateInput>;
  createdMeals?: InputMaybe<MealOrderByRelationAggregateInput>;
  createdProperties?: InputMaybe<PropertiesOrderByRelationAggregateInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientOrderByRelationAggregateInput>;
  createdRecipes?: InputMaybe<RecipeOrderByRelationAggregateInput>;
  createdSeasons?: InputMaybe<SeasonsOrderByRelationAggregateInput>;
  createdSettings?: InputMaybe<SettingsOrderByRelationAggregateInput>;
  createdToken?: InputMaybe<TokenOrderByRelationAggregateInput>;
  createdUser?: InputMaybe<UserOrderByRelationAggregateInput>;
  createdUserMeals?: InputMaybe<UserMealOrderByRelationAggregateInput>;
  createdUserRoles?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  lastOnline?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAdditives?: InputMaybe<AdditivesOrderByRelationAggregateInput>;
  updatedAllergens?: InputMaybe<AllergensOrderByRelationAggregateInput>;
  updatedCategories?: InputMaybe<CategoriesOrderByRelationAggregateInput>;
  updatedFoodForms?: InputMaybe<FoodFormsOrderByRelationAggregateInput>;
  updatedIngredients?: InputMaybe<IngredientOrderByRelationAggregateInput>;
  updatedKitchens?: InputMaybe<KitchensOrderByRelationAggregateInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanOrderByRelationAggregateInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeOrderByRelationAggregateInput>;
  updatedMeals?: InputMaybe<MealOrderByRelationAggregateInput>;
  updatedProperties?: InputMaybe<PropertiesOrderByRelationAggregateInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientOrderByRelationAggregateInput>;
  updatedRecipes?: InputMaybe<RecipeOrderByRelationAggregateInput>;
  updatedSeasons?: InputMaybe<SeasonsOrderByRelationAggregateInput>;
  updatedSettings?: InputMaybe<SettingsOrderByRelationAggregateInput>;
  updatedToken?: InputMaybe<TokenOrderByRelationAggregateInput>;
  updatedUser?: InputMaybe<UserOrderByRelationAggregateInput>;
  updatedUserMeals?: InputMaybe<UserMealOrderByRelationAggregateInput>;
  updatedUserRoles?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupOrderByRelationAggregateInput>;
  userMeal?: InputMaybe<UserMealOrderByRelationAggregateInput>;
  userRole?: InputMaybe<UserRoleOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserRole = {
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  id: Scalars['Int']['output'];
  name: UserRoleName;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy: Scalars['Int']['output'];
  updatedByUser: User;
  user: User;
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
  name: UserRoleName;
  user: UserCreateNestedOneWithoutUserRoleInput;
};

export type UserRoleCreateWithoutUpdatedByUserInput = {
  name: UserRoleName;
  user: UserCreateNestedOneWithoutUserRoleInput;
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
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserRoleNestedInput>;
};

export type UserRoleUpdateWithoutUpdatedByUserInput = {
  name?: InputMaybe<EnumUserRoleNameFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserRoleNestedInput>;
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
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserRoleWhereUniqueInput = {
  AND?: InputMaybe<Array<UserRoleWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleWhereInput>>;
  OR?: InputMaybe<Array<UserRoleWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<EnumUserRoleNameFilter>;
  user?: InputMaybe<UserRelationFilter>;
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
  createdAdditives?: InputMaybe<AdditivesUpdateManyWithoutCreatedByUserNestedInput>;
  createdAllergens?: InputMaybe<AllergensUpdateManyWithoutCreatedByUserNestedInput>;
  createdCategories?: InputMaybe<CategoriesUpdateManyWithoutCreatedByUserNestedInput>;
  createdFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutCreatedByUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdKitchens?: InputMaybe<KitchensUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdProperties?: InputMaybe<PropertiesUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipes?: InputMaybe<RecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdSeasons?: InputMaybe<SeasonsUpdateManyWithoutCreatedByUserNestedInput>;
  createdSettings?: InputMaybe<SettingsUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserMeals?: InputMaybe<UserMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAdditives?: InputMaybe<AdditivesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedAllergens?: InputMaybe<AllergensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedCategories?: InputMaybe<CategoriesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedKitchens?: InputMaybe<KitchensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedProperties?: InputMaybe<PropertiesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipes?: InputMaybe<RecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSeasons?: InputMaybe<SeasonsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSettings?: InputMaybe<SettingsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserMeals?: InputMaybe<UserMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutUserNestedInput>;
  userRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
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

export type UserUpdateOneRequiredWithoutUserMealNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserMealInput>;
  create?: InputMaybe<UserCreateWithoutUserMealInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserMealInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserMealInput>;
};

export type UserUpdateOneRequiredWithoutUserRoleNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserRoleInput>;
  create?: InputMaybe<UserCreateWithoutUserRoleInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserRoleInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserRoleInput>;
};

export type UserUpdateToOneWithWhereWithoutUserMealInput = {
  data: UserUpdateWithoutUserMealInput;
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
  createdAdditives?: InputMaybe<AdditivesUpdateManyWithoutCreatedByUserNestedInput>;
  createdAllergens?: InputMaybe<AllergensUpdateManyWithoutCreatedByUserNestedInput>;
  createdCategories?: InputMaybe<CategoriesUpdateManyWithoutCreatedByUserNestedInput>;
  createdFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutCreatedByUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdKitchens?: InputMaybe<KitchensUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdProperties?: InputMaybe<PropertiesUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipes?: InputMaybe<RecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdSeasons?: InputMaybe<SeasonsUpdateManyWithoutCreatedByUserNestedInput>;
  createdSettings?: InputMaybe<SettingsUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserMeals?: InputMaybe<UserMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAdditives?: InputMaybe<AdditivesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedAllergens?: InputMaybe<AllergensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedCategories?: InputMaybe<CategoriesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedKitchens?: InputMaybe<KitchensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedProperties?: InputMaybe<PropertiesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipes?: InputMaybe<RecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSeasons?: InputMaybe<SeasonsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSettings?: InputMaybe<SettingsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserMeals?: InputMaybe<UserMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutUserNestedInput>;
  userRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUpdatedByUserInput = {
  createdAdditives?: InputMaybe<AdditivesUpdateManyWithoutCreatedByUserNestedInput>;
  createdAllergens?: InputMaybe<AllergensUpdateManyWithoutCreatedByUserNestedInput>;
  createdCategories?: InputMaybe<CategoriesUpdateManyWithoutCreatedByUserNestedInput>;
  createdFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutCreatedByUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdKitchens?: InputMaybe<KitchensUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdProperties?: InputMaybe<PropertiesUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipes?: InputMaybe<RecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdSeasons?: InputMaybe<SeasonsUpdateManyWithoutCreatedByUserNestedInput>;
  createdSettings?: InputMaybe<SettingsUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserMeals?: InputMaybe<UserMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAdditives?: InputMaybe<AdditivesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedAllergens?: InputMaybe<AllergensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedCategories?: InputMaybe<CategoriesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedKitchens?: InputMaybe<KitchensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedProperties?: InputMaybe<PropertiesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipes?: InputMaybe<RecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSeasons?: InputMaybe<SeasonsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSettings?: InputMaybe<SettingsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserMeals?: InputMaybe<UserMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutUserNestedInput>;
  userRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserMealInput = {
  createdAdditives?: InputMaybe<AdditivesUpdateManyWithoutCreatedByUserNestedInput>;
  createdAllergens?: InputMaybe<AllergensUpdateManyWithoutCreatedByUserNestedInput>;
  createdCategories?: InputMaybe<CategoriesUpdateManyWithoutCreatedByUserNestedInput>;
  createdFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutCreatedByUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdKitchens?: InputMaybe<KitchensUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdProperties?: InputMaybe<PropertiesUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipes?: InputMaybe<RecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdSeasons?: InputMaybe<SeasonsUpdateManyWithoutCreatedByUserNestedInput>;
  createdSettings?: InputMaybe<SettingsUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserMeals?: InputMaybe<UserMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAdditives?: InputMaybe<AdditivesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedAllergens?: InputMaybe<AllergensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedCategories?: InputMaybe<CategoriesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedKitchens?: InputMaybe<KitchensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedProperties?: InputMaybe<PropertiesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipes?: InputMaybe<RecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSeasons?: InputMaybe<SeasonsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSettings?: InputMaybe<SettingsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserMeals?: InputMaybe<UserMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  userRole?: InputMaybe<UserRoleUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserRoleInput = {
  createdAdditives?: InputMaybe<AdditivesUpdateManyWithoutCreatedByUserNestedInput>;
  createdAllergens?: InputMaybe<AllergensUpdateManyWithoutCreatedByUserNestedInput>;
  createdCategories?: InputMaybe<CategoriesUpdateManyWithoutCreatedByUserNestedInput>;
  createdFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutCreatedByUserNestedInput>;
  createdIngredients?: InputMaybe<IngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdKitchens?: InputMaybe<KitchensUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutCreatedByUserNestedInput>;
  createdMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdMeals?: InputMaybe<MealUpdateManyWithoutCreatedByUserNestedInput>;
  createdProperties?: InputMaybe<PropertiesUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutCreatedByUserNestedInput>;
  createdRecipes?: InputMaybe<RecipeUpdateManyWithoutCreatedByUserNestedInput>;
  createdSeasons?: InputMaybe<SeasonsUpdateManyWithoutCreatedByUserNestedInput>;
  createdSettings?: InputMaybe<SettingsUpdateManyWithoutCreatedByUserNestedInput>;
  createdToken?: InputMaybe<TokenUpdateManyWithoutCreatedByUserNestedInput>;
  createdUser?: InputMaybe<UserUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserMeals?: InputMaybe<UserMealUpdateManyWithoutCreatedByUserNestedInput>;
  createdUserRoles?: InputMaybe<UserRoleUpdateManyWithoutCreatedByUserNestedInput>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutCreatedByUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastOnline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAdditives?: InputMaybe<AdditivesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedAllergens?: InputMaybe<AllergensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedCategories?: InputMaybe<CategoriesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedFoodForms?: InputMaybe<FoodFormsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedIngredients?: InputMaybe<IngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedKitchens?: InputMaybe<KitchensUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMealRecipes?: InputMaybe<MealRecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedMeals?: InputMaybe<MealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedProperties?: InputMaybe<PropertiesUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedRecipes?: InputMaybe<RecipeUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSeasons?: InputMaybe<SeasonsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedSettings?: InputMaybe<SettingsUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedToken?: InputMaybe<TokenUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUser?: InputMaybe<UserUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserMeals?: InputMaybe<UserMealUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedUserRoles?: InputMaybe<UserRoleUpdateManyWithoutUpdatedByUserNestedInput>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupUpdateManyWithoutUpdatedByUserNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutUserNestedInput>;
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

export type UserUpsertWithoutUserMealInput = {
  create: UserCreateWithoutUserMealInput;
  update: UserUpdateWithoutUserMealInput;
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
  createdAdditives?: InputMaybe<AdditivesListRelationFilter>;
  createdAllergens?: InputMaybe<AllergensListRelationFilter>;
  createdCategories?: InputMaybe<CategoriesListRelationFilter>;
  createdFoodForms?: InputMaybe<FoodFormsListRelationFilter>;
  createdIngredients?: InputMaybe<IngredientListRelationFilter>;
  createdKitchens?: InputMaybe<KitchensListRelationFilter>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanListRelationFilter>;
  createdMealRecipes?: InputMaybe<MealRecipeListRelationFilter>;
  createdMeals?: InputMaybe<MealListRelationFilter>;
  createdProperties?: InputMaybe<PropertiesListRelationFilter>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientListRelationFilter>;
  createdRecipes?: InputMaybe<RecipeListRelationFilter>;
  createdSeasons?: InputMaybe<SeasonsListRelationFilter>;
  createdSettings?: InputMaybe<SettingsListRelationFilter>;
  createdToken?: InputMaybe<TokenListRelationFilter>;
  createdUser?: InputMaybe<UserListRelationFilter>;
  createdUserMeals?: InputMaybe<UserMealListRelationFilter>;
  createdUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastOnline?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedAdditives?: InputMaybe<AdditivesListRelationFilter>;
  updatedAllergens?: InputMaybe<AllergensListRelationFilter>;
  updatedCategories?: InputMaybe<CategoriesListRelationFilter>;
  updatedFoodForms?: InputMaybe<FoodFormsListRelationFilter>;
  updatedIngredients?: InputMaybe<IngredientListRelationFilter>;
  updatedKitchens?: InputMaybe<KitchensListRelationFilter>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanListRelationFilter>;
  updatedMealRecipes?: InputMaybe<MealRecipeListRelationFilter>;
  updatedMeals?: InputMaybe<MealListRelationFilter>;
  updatedProperties?: InputMaybe<PropertiesListRelationFilter>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientListRelationFilter>;
  updatedRecipes?: InputMaybe<RecipeListRelationFilter>;
  updatedSeasons?: InputMaybe<SeasonsListRelationFilter>;
  updatedSettings?: InputMaybe<SettingsListRelationFilter>;
  updatedToken?: InputMaybe<TokenListRelationFilter>;
  updatedUser?: InputMaybe<UserListRelationFilter>;
  updatedUserMeals?: InputMaybe<UserMealListRelationFilter>;
  updatedUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  userMeal?: InputMaybe<UserMealListRelationFilter>;
  userRole?: InputMaybe<UserRoleListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAdditives?: InputMaybe<AdditivesListRelationFilter>;
  createdAllergens?: InputMaybe<AllergensListRelationFilter>;
  createdCategories?: InputMaybe<CategoriesListRelationFilter>;
  createdFoodForms?: InputMaybe<FoodFormsListRelationFilter>;
  createdIngredients?: InputMaybe<IngredientListRelationFilter>;
  createdKitchens?: InputMaybe<KitchensListRelationFilter>;
  createdMealBoardPlans?: InputMaybe<MealBoardPlanListRelationFilter>;
  createdMealRecipes?: InputMaybe<MealRecipeListRelationFilter>;
  createdMeals?: InputMaybe<MealListRelationFilter>;
  createdProperties?: InputMaybe<PropertiesListRelationFilter>;
  createdRecipeIngredients?: InputMaybe<RecipeIngredientListRelationFilter>;
  createdRecipes?: InputMaybe<RecipeListRelationFilter>;
  createdSeasons?: InputMaybe<SeasonsListRelationFilter>;
  createdSettings?: InputMaybe<SettingsListRelationFilter>;
  createdToken?: InputMaybe<TokenListRelationFilter>;
  createdUser?: InputMaybe<UserListRelationFilter>;
  createdUserMeals?: InputMaybe<UserMealListRelationFilter>;
  createdUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  createdWeeklyMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  lastOnline?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedAdditives?: InputMaybe<AdditivesListRelationFilter>;
  updatedAllergens?: InputMaybe<AllergensListRelationFilter>;
  updatedCategories?: InputMaybe<CategoriesListRelationFilter>;
  updatedFoodForms?: InputMaybe<FoodFormsListRelationFilter>;
  updatedIngredients?: InputMaybe<IngredientListRelationFilter>;
  updatedKitchens?: InputMaybe<KitchensListRelationFilter>;
  updatedMealBoardPlans?: InputMaybe<MealBoardPlanListRelationFilter>;
  updatedMealRecipes?: InputMaybe<MealRecipeListRelationFilter>;
  updatedMeals?: InputMaybe<MealListRelationFilter>;
  updatedProperties?: InputMaybe<PropertiesListRelationFilter>;
  updatedRecipeIngredients?: InputMaybe<RecipeIngredientListRelationFilter>;
  updatedRecipes?: InputMaybe<RecipeListRelationFilter>;
  updatedSeasons?: InputMaybe<SeasonsListRelationFilter>;
  updatedSettings?: InputMaybe<SettingsListRelationFilter>;
  updatedToken?: InputMaybe<TokenListRelationFilter>;
  updatedUser?: InputMaybe<UserListRelationFilter>;
  updatedUserMeals?: InputMaybe<UserMealListRelationFilter>;
  updatedUserRoles?: InputMaybe<UserRoleListRelationFilter>;
  updatedWeeklyMealGroups?: InputMaybe<WeeklyMealGroupListRelationFilter>;
  userMeal?: InputMaybe<UserMealListRelationFilter>;
  userRole?: InputMaybe<UserRoleListRelationFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type WeeklyMealGroup = {
  _count: WeeklyMealGroupCount;
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['Int']['output'];
  createdByUser: User;
  description?: Maybe<Scalars['String']['output']>;
  fridayMeal?: Maybe<Meal>;
  fridayMealId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  mealBoardPlan: MealBoardPlan;
  mealBoardPlanId: Scalars['Int']['output'];
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
  userMeal?: Maybe<Array<UserMeal>>;
  wednesdayMeal?: Maybe<Meal>;
  wednesdayMealId?: Maybe<Scalars['Int']['output']>;
  weekOfYear: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type WeeklyMealGroupCount = {
  userMeal: Scalars['Int']['output'];
};

export type WeeklyMealGroupCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateManyCreatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
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
  mealBoardPlanId: Scalars['Int']['input'];
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
  mealBoardPlanId: Scalars['Int']['input'];
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

export type WeeklyMealGroupCreateManyMealBoardPlanInput = {
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

export type WeeklyMealGroupCreateManyMealBoardPlanInputEnvelope = {
  data: Array<WeeklyMealGroupCreateManyMealBoardPlanInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WeeklyMealGroupCreateManyMondayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
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
  mealBoardPlanId: Scalars['Int']['input'];
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
  mealBoardPlanId: Scalars['Int']['input'];
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
  mealBoardPlanId: Scalars['Int']['input'];
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
  mealBoardPlanId: Scalars['Int']['input'];
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
  mealBoardPlanId: Scalars['Int']['input'];
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
  mealBoardPlanId: Scalars['Int']['input'];
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

export type WeeklyMealGroupCreateNestedManyWithoutMealBoardPlanInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutMealBoardPlanInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutMealBoardPlanInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyMealBoardPlanInputEnvelope>;
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

export type WeeklyMealGroupCreateNestedOneWithoutUserMealInput = {
  connect?: InputMaybe<WeeklyMealGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WeeklyMealGroupCreateOrConnectWithoutUserMealInput>;
  create?: InputMaybe<WeeklyMealGroupCreateWithoutUserMealInput>;
};

export type WeeklyMealGroupCreateOrConnectWithoutCreatedByUserInput = {
  create: WeeklyMealGroupCreateWithoutCreatedByUserInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutFridayMealInput = {
  create: WeeklyMealGroupCreateWithoutFridayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupCreateOrConnectWithoutMealBoardPlanInput = {
  create: WeeklyMealGroupCreateWithoutMealBoardPlanInput;
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

export type WeeklyMealGroupCreateOrConnectWithoutUserMealInput = {
  create: WeeklyMealGroupCreateWithoutUserMealInput;
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
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutFridayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutMealBoardPlanInput = {
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
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutMondayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutSaturdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutSundayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutThursdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutTuesdayMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutUpdatedByUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMeal?: InputMaybe<MealCreateNestedOneWithoutWednesdayMealGroupsInput>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupCreateWithoutUserMealInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMeal?: InputMaybe<MealCreateNestedOneWithoutFridayMealGroupsInput>;
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
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
  mealBoardPlan: MealBoardPlanCreateNestedOneWithoutWeeklyMealGroupInput;
  mondayMeal?: InputMaybe<MealCreateNestedOneWithoutMondayMealGroupsInput>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMeal?: InputMaybe<MealCreateNestedOneWithoutSaturdayMealGroupsInput>;
  sundayMeal?: InputMaybe<MealCreateNestedOneWithoutSundayMealGroupsInput>;
  thursdayMeal?: InputMaybe<MealCreateNestedOneWithoutThursdayMealGroupsInput>;
  tuesdayMeal?: InputMaybe<MealCreateNestedOneWithoutTuesdayMealGroupsInput>;
  userMeal?: InputMaybe<UserMealCreateNestedManyWithoutWeeklyMealGroupInput>;
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
  mealBoardPlan?: InputMaybe<MealBoardPlanOrderByWithRelationInput>;
  mealBoardPlanId?: InputMaybe<SortOrder>;
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
  userMeal?: InputMaybe<UserMealOrderByRelationAggregateInput>;
  wednesdayMeal?: InputMaybe<MealOrderByWithRelationInput>;
  wednesdayMealId?: InputMaybe<SortOrderInput>;
  weekOfYear?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type WeeklyMealGroupRelationFilter = {
  is?: InputMaybe<WeeklyMealGroupWhereInput>;
  isNot?: InputMaybe<WeeklyMealGroupWhereInput>;
};

export enum WeeklyMealGroupScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Description = 'description',
  FridayMealId = 'fridayMealId',
  Id = 'id',
  MealBoardPlanId = 'mealBoardPlanId',
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
  mealBoardPlanId?: InputMaybe<IntFilter>;
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

export type WeeklyMealGroupUncheckedCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fridayMealId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mealBoardPlanId: Scalars['Int']['input'];
  mondayMealId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  orderIndex: Scalars['Int']['input'];
  saturdayMealId?: InputMaybe<Scalars['Int']['input']>;
  sundayMealId?: InputMaybe<Scalars['Int']['input']>;
  thursdayMealId?: InputMaybe<Scalars['Int']['input']>;
  tuesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  userMeal?: InputMaybe<UserMealUncheckedCreateNestedManyWithoutWeeklyMealGroupInput>;
  wednesdayMealId?: InputMaybe<Scalars['Int']['input']>;
  weekOfYear: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type WeeklyMealGroupUncheckedUpdateInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  mealBoardPlanId?: InputMaybe<IntFieldUpdateOperationsInput>;
  mondayMealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sundayMealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  thursdayMealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  tuesdayMealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  userMeal?: InputMaybe<UserMealUncheckedUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUncheckedUpdateManyWithoutMealBoardPlanNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutMealBoardPlanInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutMealBoardPlanInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyMealBoardPlanInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutMealBoardPlanInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutMealBoardPlanInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutMealBoardPlanInput>>;
};

export type WeeklyMealGroupUpdateInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
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

export type WeeklyMealGroupUpdateManyWithWhereWithoutMealBoardPlanInput = {
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

export type WeeklyMealGroupUpdateManyWithoutMealBoardPlanNestedInput = {
  connect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WeeklyMealGroupCreateOrConnectWithoutMealBoardPlanInput>>;
  create?: InputMaybe<Array<WeeklyMealGroupCreateWithoutMealBoardPlanInput>>;
  createMany?: InputMaybe<WeeklyMealGroupCreateManyMealBoardPlanInputEnvelope>;
  delete?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WeeklyMealGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<WeeklyMealGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<WeeklyMealGroupUpdateWithWhereUniqueWithoutMealBoardPlanInput>>;
  updateMany?: InputMaybe<Array<WeeklyMealGroupUpdateManyWithWhereWithoutMealBoardPlanInput>>;
  upsert?: InputMaybe<Array<WeeklyMealGroupUpsertWithWhereUniqueWithoutMealBoardPlanInput>>;
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

export type WeeklyMealGroupUpdateOneRequiredWithoutUserMealNestedInput = {
  connect?: InputMaybe<WeeklyMealGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WeeklyMealGroupCreateOrConnectWithoutUserMealInput>;
  create?: InputMaybe<WeeklyMealGroupCreateWithoutUserMealInput>;
  update?: InputMaybe<WeeklyMealGroupUpdateToOneWithWhereWithoutUserMealInput>;
  upsert?: InputMaybe<WeeklyMealGroupUpsertWithoutUserMealInput>;
};

export type WeeklyMealGroupUpdateToOneWithWhereWithoutUserMealInput = {
  data: WeeklyMealGroupUpdateWithoutUserMealInput;
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutCreatedByUserInput = {
  data: WeeklyMealGroupUpdateWithoutCreatedByUserInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutFridayMealInput = {
  data: WeeklyMealGroupUpdateWithoutFridayMealInput;
  where: WeeklyMealGroupWhereUniqueInput;
};

export type WeeklyMealGroupUpdateWithWhereUniqueWithoutMealBoardPlanInput = {
  data: WeeklyMealGroupUpdateWithoutMealBoardPlanInput;
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
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutFridayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutMealBoardPlanInput = {
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
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutMondayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutSaturdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutSundayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutThursdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutTuesdayMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutUpdatedByUserInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
  wednesdayMeal?: InputMaybe<MealUpdateOneWithoutWednesdayMealGroupsNestedInput>;
  weekOfYear?: InputMaybe<IntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type WeeklyMealGroupUpdateWithoutUserMealInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fridayMeal?: InputMaybe<MealUpdateOneWithoutFridayMealGroupsNestedInput>;
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
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
  mealBoardPlan?: InputMaybe<MealBoardPlanUpdateOneRequiredWithoutWeeklyMealGroupNestedInput>;
  mondayMeal?: InputMaybe<MealUpdateOneWithoutMondayMealGroupsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderIndex?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturdayMeal?: InputMaybe<MealUpdateOneWithoutSaturdayMealGroupsNestedInput>;
  sundayMeal?: InputMaybe<MealUpdateOneWithoutSundayMealGroupsNestedInput>;
  thursdayMeal?: InputMaybe<MealUpdateOneWithoutThursdayMealGroupsNestedInput>;
  tuesdayMeal?: InputMaybe<MealUpdateOneWithoutTuesdayMealGroupsNestedInput>;
  userMeal?: InputMaybe<UserMealUpdateManyWithoutWeeklyMealGroupNestedInput>;
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

export type WeeklyMealGroupUpsertWithWhereUniqueWithoutMealBoardPlanInput = {
  create: WeeklyMealGroupCreateWithoutMealBoardPlanInput;
  update: WeeklyMealGroupUpdateWithoutMealBoardPlanInput;
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

export type WeeklyMealGroupUpsertWithoutUserMealInput = {
  create: WeeklyMealGroupCreateWithoutUserMealInput;
  update: WeeklyMealGroupUpdateWithoutUserMealInput;
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
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
  mealBoardPlan?: InputMaybe<MealBoardPlanRelationFilter>;
  mealBoardPlanId?: InputMaybe<IntFilter>;
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
  userMeal?: InputMaybe<UserMealListRelationFilter>;
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
  mealBoardPlan?: InputMaybe<MealBoardPlanRelationFilter>;
  mealBoardPlanId?: InputMaybe<IntFilter>;
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
  userMeal?: InputMaybe<UserMealListRelationFilter>;
  wednesdayMeal?: InputMaybe<MealNullableRelationFilter>;
  wednesdayMealId?: InputMaybe<IntNullableFilter>;
  weekOfYear?: InputMaybe<IntFilter>;
  year?: InputMaybe<IntFilter>;
};

export type WeeklyMealGroupFragmentFragment = { id: number, name: string, color?: string | null, description?: string | null, year: number, weekOfYear: number, orderIndex: number, mondayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, tuesdayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, wednesdayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, thursdayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, fridayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, saturdayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null, sundayMeal?: { id: number, name: string, description?: string | null, image?: string | null } | null } & { ' $fragmentName'?: 'WeeklyMealGroupFragmentFragment' };

export type RegisterUserMutationVariables = Exact<{
  data: RegisterUserInput;
}>;


export type RegisterUserMutation = { registerUser?: { id: number, username: string, email: string, lastOnline: any, status: boolean, createdAt: any, updatedAt: any, userRole?: Array<{ id: number, name: UserRoleName }> | null } | null };

export type LoginUserMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginUserMutation = { loginUser?: { id: number, username: string, email: string, lastOnline: any, status: boolean, createdAt: any, updatedAt: any, userRole?: Array<{ id: number, name: UserRoleName }> | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout?: boolean | null };

export type SwitchWeeklyMealGroupAdminMutationVariables = Exact<{
  data: SwitchWeeklyMealGroupInput;
}>;


export type SwitchWeeklyMealGroupAdminMutation = { switchWeeklyMealGroupAdmin: boolean };

export type CreateWeeklyMealGroupAdminMutationVariables = Exact<{
  data: WeeklyMealGroupUncheckedCreateInput;
}>;


export type CreateWeeklyMealGroupAdminMutation = { createWeeklyMealGroupAdmin?: { ' $fragmentRefs'?: { 'WeeklyMealGroupFragmentFragment': WeeklyMealGroupFragmentFragment } } | null };

export type DeleteWeeklyMealGroupAdminMutationVariables = Exact<{
  where: WeeklyMealGroupWhereUniqueInput;
}>;


export type DeleteWeeklyMealGroupAdminMutation = { deleteWeeklyMealGroupAdmin?: { ' $fragmentRefs'?: { 'WeeklyMealGroupFragmentFragment': WeeklyMealGroupFragmentFragment } } | null };

export type UpdateWeeklyMealGroupAdminMutationVariables = Exact<{
  data: WeeklyMealGroupUncheckedUpdateInput;
  where: WeeklyMealGroupWhereUniqueInput;
}>;


export type UpdateWeeklyMealGroupAdminMutation = { updateWeeklyMealGroupAdmin?: { ' $fragmentRefs'?: { 'WeeklyMealGroupFragmentFragment': WeeklyMealGroupFragmentFragment } } | null };

export type UploadMealImageAdminMutationVariables = Exact<{
  mealId: Scalars['Float']['input'];
  file: Scalars['Upload']['input'];
}>;


export type UploadMealImageAdminMutation = { uploadMealImageAdmin?: boolean | null };

export type CreateUserMealUserMutationVariables = Exact<{
  data: UserMealUncheckedCreateInput;
}>;


export type CreateUserMealUserMutation = { createUserMealUser?: { id: number, date: any, mealId: number, mealBoardPlanId: number, weeklyMealGroupId: number, meal: { id: number, name: string } } | null };

export type DeleteUserMealUserMutationVariables = Exact<{
  where: UserMealWhereUniqueInput;
}>;


export type DeleteUserMealUserMutation = { deleteUserMealUser?: { id: number, date: any, mealId: number, mealBoardPlanId: number, weeklyMealGroupId: number, meal: { id: number, name: string } } | null };

export type UpdateSettingsAdminMutationVariables = Exact<{
  data: SettingsUpdateInput;
  where: SettingsWhereUniqueInput;
}>;


export type UpdateSettingsAdminMutation = { updateSettingsAdmin?: { id: number, maxEditOrderDays: number, createdAt: any, updatedAt: any, createdByUser: { username: string }, updatedByUser: { username: string } } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { id: number, username: string, email: string, lastOnline: any, status: boolean, createdAt: any, updatedAt: any, userRole?: Array<{ id: number, name: UserRoleName }> | null } | null };

export type GetAllMealBoardPlansUserQueryVariables = Exact<{
  where?: InputMaybe<MealBoardPlanWhereInput>;
  orderBy?: InputMaybe<Array<MealBoardPlanOrderByWithRelationInput> | MealBoardPlanOrderByWithRelationInput>;
  cursor?: InputMaybe<MealBoardPlanWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<MealBoardPlanScalarFieldEnum> | MealBoardPlanScalarFieldEnum>;
}>;


export type GetAllMealBoardPlansUserQuery = { getAllMealBoardPlansUser?: Array<{ id: number, name: string, color?: string | null }> | null };

export type GetAllWeeklyMealGroupsUserQueryVariables = Exact<{
  where?: InputMaybe<WeeklyMealGroupWhereInput>;
  orderBy?: InputMaybe<Array<WeeklyMealGroupOrderByWithRelationInput> | WeeklyMealGroupOrderByWithRelationInput>;
  cursor?: InputMaybe<WeeklyMealGroupWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<WeeklyMealGroupScalarFieldEnum> | WeeklyMealGroupScalarFieldEnum>;
}>;


export type GetAllWeeklyMealGroupsUserQuery = { getAllWeeklyMealGroupsUser?: Array<{ ' $fragmentRefs'?: { 'WeeklyMealGroupFragmentFragment': WeeklyMealGroupFragmentFragment } }> | null };

export type GetAllMealsUserQueryVariables = Exact<{
  where?: InputMaybe<MealWhereInput>;
  orderBy?: InputMaybe<Array<MealOrderByWithRelationInput> | MealOrderByWithRelationInput>;
  cursor?: InputMaybe<MealWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<MealScalarFieldEnum> | MealScalarFieldEnum>;
}>;


export type GetAllMealsUserQuery = { getAllMealsUser?: Array<{ id: number, name: string }> | null };

export type GetAllUserMealsAdminQueryVariables = Exact<{
  where?: InputMaybe<UserMealWhereInput>;
  orderBy?: InputMaybe<Array<UserMealOrderByWithRelationInput> | UserMealOrderByWithRelationInput>;
  cursor?: InputMaybe<UserMealWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<UserMealScalarFieldEnum> | UserMealScalarFieldEnum>;
}>;


export type GetAllUserMealsAdminQuery = { getAllUserMealsAdmin?: Array<{ id: number, mealId: number, mealBoardPlanId: number, date: any, userId: number, weeklyMealGroupId: number }> | null };

export type GetMealAdminQueryVariables = Exact<{
  where?: InputMaybe<MealWhereInput>;
  orderBy?: InputMaybe<Array<MealOrderByWithRelationInput> | MealOrderByWithRelationInput>;
  cursor?: InputMaybe<MealWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<MealScalarFieldEnum> | MealScalarFieldEnum>;
}>;


export type GetMealAdminQuery = { getMealAdmin?: { id: number, name: string, description?: string | null, image?: string | null, createdAt: any, updatedAt: any, allergens?: Array<{ id: number, name: string }> | null, additives?: Array<{ id: number, name: string }> | null, properties?: Array<{ id: number, name: string }> | null, categories?: Array<{ id: number, name: string }> | null, seasons?: Array<{ id: number, name: string }> | null, foodForms?: Array<{ id: number, name: string }> | null, mealRecipe?: Array<{ id: number, recipe: { id: number, name: string, allergens?: Array<{ id: number, name: string }> | null, additives?: Array<{ id: number, name: string }> | null, properties?: Array<{ id: number, name: string }> | null, categories?: Array<{ id: number, name: string }> | null, seasons?: Array<{ id: number, name: string }> | null, foodForms?: Array<{ id: number, name: string }> | null, kitchens?: Array<{ id: number, name: string }> | null, recipeIngredient?: Array<{ id: number, amount: any, unit: Unit, ingredient: { id: number, name: string, blsIdentifier: string, energyKcal: any, energyKj: any, breadUnits: any, carbohydrates: any, sugars: any, salt: any, fats: any, unsaturatedFats: any, saturatedFats: any, protein: any, allergens?: Array<{ id: number, name: string }> | null, additives?: Array<{ id: number, name: string }> | null, properties?: Array<{ id: number, name: string }> | null, categories?: Array<{ id: number, name: string }> | null, seasons?: Array<{ id: number, name: string }> | null, foodForms?: Array<{ id: number, name: string }> | null, kitchens?: Array<{ id: number, name: string }> | null } }> | null } }> | null } | null };

export type GetAllUserMealsUserQueryVariables = Exact<{
  where?: InputMaybe<UserMealWhereInput>;
  orderBy?: InputMaybe<Array<UserMealOrderByWithRelationInput> | UserMealOrderByWithRelationInput>;
  cursor?: InputMaybe<UserMealWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<UserMealScalarFieldEnum> | UserMealScalarFieldEnum>;
}>;


export type GetAllUserMealsUserQuery = { getAllUserMealsUser?: Array<{ id: number, date: any, mealId: number, mealBoardPlanId: number, weeklyMealGroupId: number, meal: { id: number, name: string } }> | null };

export type GetUserMealsGroupedAdminQueryVariables = Exact<{
  where?: InputMaybe<UserMealWhereInput>;
  orderBy?: InputMaybe<Array<UserMealOrderByWithAggregationInput> | UserMealOrderByWithAggregationInput>;
  having?: InputMaybe<UserMealScalarWhereWithAggregatesInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  count?: InputMaybe<UserMealCountAggregateInput>;
  avg?: InputMaybe<UserMealAvgAggregateInput>;
  sum?: InputMaybe<UserMealSumAggregateInput>;
  min?: InputMaybe<UserMealMinAggregateInput>;
  max?: InputMaybe<UserMealMaxAggregateInput>;
  by: Array<UserMealScalarFieldEnum> | UserMealScalarFieldEnum;
}>;


export type GetUserMealsGroupedAdminQuery = { getUserMealsGroupedAdmin?: Array<{ mealId: number, date: any, _count?: { mealId: number } | null }> | null };

export type GetSettingsAdminQueryVariables = Exact<{
  where?: InputMaybe<SettingsWhereInput>;
  orderBy?: InputMaybe<Array<SettingsOrderByWithRelationInput> | SettingsOrderByWithRelationInput>;
  cursor?: InputMaybe<SettingsWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<SettingsScalarFieldEnum> | SettingsScalarFieldEnum>;
}>;


export type GetSettingsAdminQuery = { getSettingsAdmin?: { id: number, maxEditOrderDays: number, createdAt: any, updatedAt: any, createdByUser: { username: string }, updatedByUser: { username: string } } | null };

export type GetSettingsUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingsUserQuery = { getSettingsUser?: { maxEditOrderDays: number } | null };

export const WeeklyMealGroupFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeeklyMealGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<WeeklyMealGroupFragmentFragment, unknown>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const SwitchWeeklyMealGroupAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SwitchWeeklyMealGroupAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SwitchWeeklyMealGroupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"switchWeeklyMealGroupAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<SwitchWeeklyMealGroupAdminMutation, SwitchWeeklyMealGroupAdminMutationVariables>;
export const CreateWeeklyMealGroupAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWeeklyMealGroupAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupUncheckedCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWeeklyMealGroupAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WeeklyMealGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeeklyMealGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<CreateWeeklyMealGroupAdminMutation, CreateWeeklyMealGroupAdminMutationVariables>;
export const DeleteWeeklyMealGroupAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteWeeklyMealGroupAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteWeeklyMealGroupAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WeeklyMealGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeeklyMealGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<DeleteWeeklyMealGroupAdminMutation, DeleteWeeklyMealGroupAdminMutationVariables>;
export const UpdateWeeklyMealGroupAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWeeklyMealGroupAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupUncheckedUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateWeeklyMealGroupAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WeeklyMealGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeeklyMealGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<UpdateWeeklyMealGroupAdminMutation, UpdateWeeklyMealGroupAdminMutationVariables>;
export const UploadMealImageAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadMealImageAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mealId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadMealImageAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"mealId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mealId"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<UploadMealImageAdminMutation, UploadMealImageAdminMutationVariables>;
export const CreateUserMealUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserMealUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealUncheckedCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserMealUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"mealId"}},{"kind":"Field","name":{"kind":"Name","value":"mealBoardPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"weeklyMealGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"meal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMealUserMutation, CreateUserMealUserMutationVariables>;
export const DeleteUserMealUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserMealUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUserMealUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"mealId"}},{"kind":"Field","name":{"kind":"Name","value":"mealBoardPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"weeklyMealGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"meal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteUserMealUserMutation, DeleteUserMealUserMutationVariables>;
export const UpdateSettingsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSettingsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingsUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingsWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSettingsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"maxEditOrderDays"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedByUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSettingsAdminMutation, UpdateSettingsAdminMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastOnline"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAllMealBoardPlansUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMealBoardPlansUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MealBoardPlanWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MealBoardPlanOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MealBoardPlanWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MealBoardPlanScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllMealBoardPlansUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<GetAllMealBoardPlansUserQuery, GetAllMealBoardPlansUserQueryVariables>;
export const GetAllWeeklyMealGroupsUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllWeeklyMealGroupsUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroupScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllWeeklyMealGroupsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WeeklyMealGroupFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WeeklyMealGroupFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WeeklyMealGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"weekOfYear"}},{"kind":"Field","name":{"kind":"Name","value":"orderIndex"}},{"kind":"Field","name":{"kind":"Name","value":"mondayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tuesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wednesdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thursdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fridayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"saturdayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sundayMeal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetAllWeeklyMealGroupsUserQuery, GetAllWeeklyMealGroupsUserQueryVariables>;
export const GetAllMealsUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMealsUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MealWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MealOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MealWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MealScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllMealsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllMealsUserQuery, GetAllMealsUserQueryVariables>;
export const GetAllUserMealsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUserMealsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUserMealsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mealId"}},{"kind":"Field","name":{"kind":"Name","value":"mealBoardPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"weeklyMealGroupId"}}]}}]}}]} as unknown as DocumentNode<GetAllUserMealsAdminQuery, GetAllUserMealsAdminQueryVariables>;
export const GetMealAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMealAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MealWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MealOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MealWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MealScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMealAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"allergens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seasons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"foodForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mealRecipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"allergens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seasons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"foodForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kitchens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipeIngredient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"ingredient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blsIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"energyKcal"}},{"kind":"Field","name":{"kind":"Name","value":"energyKj"}},{"kind":"Field","name":{"kind":"Name","value":"breadUnits"}},{"kind":"Field","name":{"kind":"Name","value":"carbohydrates"}},{"kind":"Field","name":{"kind":"Name","value":"sugars"}},{"kind":"Field","name":{"kind":"Name","value":"salt"}},{"kind":"Field","name":{"kind":"Name","value":"fats"}},{"kind":"Field","name":{"kind":"Name","value":"unsaturatedFats"}},{"kind":"Field","name":{"kind":"Name","value":"saturatedFats"}},{"kind":"Field","name":{"kind":"Name","value":"protein"}},{"kind":"Field","name":{"kind":"Name","value":"allergens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seasons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"foodForms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kitchens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMealAdminQuery, GetMealAdminQueryVariables>;
export const GetAllUserMealsUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUserMealsUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUserMealsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"mealId"}},{"kind":"Field","name":{"kind":"Name","value":"mealBoardPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"weeklyMealGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"meal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllUserMealsUserQuery, GetAllUserMealsUserQueryVariables>;
export const GetUserMealsGroupedAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserMealsGroupedAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealOrderByWithAggregationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"having"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealScalarWhereWithAggregatesInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealCountAggregateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avg"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealAvgAggregateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealSumAggregateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"min"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealMinAggregateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"max"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealMaxAggregateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"by"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMealScalarFieldEnum"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserMealsGroupedAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"having"},"value":{"kind":"Variable","name":{"kind":"Name","value":"having"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"_count"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}},{"kind":"Argument","name":{"kind":"Name","value":"_avg"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avg"}}},{"kind":"Argument","name":{"kind":"Name","value":"_sum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sum"}}},{"kind":"Argument","name":{"kind":"Name","value":"_min"},"value":{"kind":"Variable","name":{"kind":"Name","value":"min"}}},{"kind":"Argument","name":{"kind":"Name","value":"_max"},"value":{"kind":"Variable","name":{"kind":"Name","value":"max"}}},{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"by"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mealId"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mealId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<GetUserMealsGroupedAdminQuery, GetUserMealsGroupedAdminQueryVariables>;
export const GetSettingsAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSettingsAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingsWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingsOrderByWithRelationInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingsWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingsScalarFieldEnum"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSettingsAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"distinct"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"maxEditOrderDays"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdByUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedByUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetSettingsAdminQuery, GetSettingsAdminQueryVariables>;
export const GetSettingsUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSettingsUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSettingsUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxEditOrderDays"}}]}}]}}]} as unknown as DocumentNode<GetSettingsUserQuery, GetSettingsUserQueryVariables>;