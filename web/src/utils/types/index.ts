import { WEEK_DAYS } from "../constants";

export type WeekDay = (typeof WEEK_DAYS)[number];

export type Size = "sm" | "md" | "lg" | undefined;

export type MenuType = {
  link: string;
  name: string;
  display?: boolean;
};
