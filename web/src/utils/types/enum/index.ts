import { graphql } from "gql.tada";

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
type LastOf<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => infer R
    ? R
    : never;

type Push<T extends any[], V> = [...T, V];
type TuplifyUnion<
  T,
  L = LastOf<T>,
  N = [T] extends [never] ? true : false,
> = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;

function createEnum<T extends string>(keys: TuplifyUnion<T>): { [K in T]: K } {
  return keys.reduce(
    (acc, key) => {
      (acc as any)[key] = key;
      return acc;
    },
    {} as { [K in T]: K },
  );
}

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
