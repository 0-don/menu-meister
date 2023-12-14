import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const LOCALES = ["en", "de"] as const;
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: LOCALES });
