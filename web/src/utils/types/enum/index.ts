import { graphql } from "gql.tada";

type UnionToIntersection<U> = (
  U extends never ? never : (arg: U) => never
) extends (arg: infer I) => void
  ? I
  : never;

type UnionToTuple<T> =
  UnionToIntersection<T extends never ? never : (t: T) => T> extends (
    _: never,
  ) => infer W
    ? [...UnionToTuple<Exclude<T, W>>, W]
    : [];

const createEnum = <T extends string>(keys: UnionToTuple<T>): { [K in T]: K } =>
  (keys as T[]).reduce(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as { [K in T]: K },
  );

export const TimeOfDay = createEnum<
  ReturnType<typeof graphql.scalar<"TimeOfDay">>
>(["Any", "Morning", "Forenoon", "Noon", "Afternoon", "Evening", "Night"]);

export const UserRoleName = createEnum<
  ReturnType<typeof graphql.scalar<"UserRoleName">>
>(["User", "Admin", "Mod", "Guest"]);

export const MealLocation = createEnum<
  ReturnType<typeof graphql.scalar<"MealLocation">>
>([
  "InRoom",
  "CommunalDining",
  "OutdoorPatio",
  "TherapyGarden",
  "SpecialDietary",
  "StaffCafeteria",
  "VisitorCafe",
  "RehabilitationGym",
  "GroupActivityRoom",
  "QuietRoom",
  "NutritionCenter",
  "Poolside",
  "FamilyDining",
  "HealingGarden",
  "OnTheGo",
]);

export const MealType = createEnum<
  ReturnType<typeof graphql.scalar<"SortOrder">>
>(["asc", "desc"]);
