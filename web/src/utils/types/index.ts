import { type WEEKLY_MEAL_GROUP_FRAGMENT } from "@/documents/fragments/dashboard";
import { FragmentOf } from "gql.tada";
import { WEEK_DAYS } from "../constants";

export type WeekDay = (typeof WEEK_DAYS)[number];

export type Meal = NonNullable<
  FragmentOf<typeof WEEKLY_MEAL_GROUP_FRAGMENT>["mondayMeal"]
>;

export type DayMeals =
  | "mondayMeal"
  | "tuesdayMeal"
  | "wednesdayMeal"
  | "thursdayMeal"
  | "fridayMeal"
  | "saturdayMeal"
  | "sundayMeal";

export type Size = "sm" | "md" | "lg" | undefined;

export type MenuType = {
  link: string;
  name: string;
  display?: boolean;
};

export type OverlayPlacement =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";

export type Backdrop = "transparent" | "opaque" | "blur";
