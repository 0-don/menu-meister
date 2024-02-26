import { graphql } from "gql.tada";

type UnionToIntersection<U> = (
  U extends never ? never : (arg: U) => never
) extends (arg: infer I) => void
  ? I
  : never;
type UnionToTuple<T, A extends any[] = []> =
  UnionToIntersection<T extends never ? never : (t: T) => T> extends (
    _: never,
  ) => infer W
    ? UnionToTuple<Exclude<T, W>, [...A, W]>
    : A;

function createEnum<T extends string>(keys: UnionToTuple<T>): { [K in T]: K } {
  const tupleArray = keys as unknown as T[];

  return tupleArray.reduce(
    (acc, key) => {
      acc[key] = key;
      return acc;
    },
    {} as { [K in T]: K },
  );
}

export const TimeOfDay = createEnum<
  ReturnType<typeof graphql.scalar<"TimeOfDay">>
>(["Night", "Evening", "Afternoon", "Noon", "Forenoon", "Morning", "Any"]);

export const UserRoleName = createEnum<
  ReturnType<typeof graphql.scalar<"UserRoleName">>
>(["Guest", "Mod", "Admin", "User"]);

export const MealLocation = createEnum<
  ReturnType<typeof graphql.scalar<"MealLocation">>
>([
  "OnTheGo",
  "HealingGarden",
  "FamilyDining",
  "Poolside",
  "NutritionCenter",
  "QuietRoom",
  "GroupActivityRoom",
  "RehabilitationGym",
  "VisitorCafe",
  "StaffCafeteria",
  "SpecialDietary",
  "TherapyGarden",
  "OutdoorPatio",
  "CommunalDining",
  "InRoom",
]);

export const MealType = createEnum<
  ReturnType<typeof graphql.scalar<"SortOrder">>
>(["desc", "asc"]);
