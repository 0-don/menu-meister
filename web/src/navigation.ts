import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "./middleware";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: LOCALES });
