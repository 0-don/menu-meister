import { LanguageSwitch } from "@/components/utils/LanguageSwitch";
import { ThemeSwitch } from "@/components/utils/ThemeSwitch";
import { Link as NextLink } from "@/navigation";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import React from "react";
import { Profile } from "./Profile";

interface NavbarProps {
  locale?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p className="font-bold text-inherit"> Meal Manager</p>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4 lg:flex">
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:font-medium data-[active=true]:text-primary",
              )}
              color="foreground"
              href={"/"}
            >
              Home
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:font-medium data-[active=true]:text-primary",
              )}
              color="foreground"
              href={"/about"}
            >
              About
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <LanguageSwitch locale={locale} />
          <ThemeSwitch />
          <Profile />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <LanguageSwitch locale={locale} />
        <ThemeSwitch />
        <Profile />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem key={`/`}>
            <Link color={"foreground"} href="#" size="lg">
              Home
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
