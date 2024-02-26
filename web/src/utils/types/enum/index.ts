import { graphql } from "gql.tada";

function createEnum<T extends string>(keys: T[]): { [K in T]: K } {
  return keys.reduce(
    (acc, key) => {
      acc[key] = key;
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
>(["Admin", "Mod", "User", "Guest"]);

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
