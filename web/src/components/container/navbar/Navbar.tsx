import { LanguageSwitch } from "@/components/utils/LanguageSwitch";
import { ThemeSwitch } from "@/components/utils/ThemeSwitch";
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
import { GiHotMeal } from "@react-icons/all-files/gi/GiHotMeal";
import React from "react";
import { Profile } from "./Profile";

interface NavbarProps {
  locale?: string;
}

const LINKS = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
];

export const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const Items = (
    <>
      <LanguageSwitch locale={locale} />
      <ThemeSwitch />
      <Profile />
    </>
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" isBordered>
      <NavbarContent
        className="basis-1/5 sm:basis-full"
        justify="start"
        content="center"
      >
        <NavbarBrand as="li" className="max-w-fit space-x-1">
          <Link color="warning" className="text-xl font-bold" href="/">
            <GiHotMeal className="text-2xl text-warning-500" />
            <span>Meal Manager</span>
          </Link>
        </NavbarBrand>

        <ul className="ml-2 hidden justify-start gap-4 sm:flex">
          {LINKS.map(({ link, name }) => (
            <NavbarItem key={link}>
              <Link color="foreground" href={link} size="lg">
                {name}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        {Items}
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        {Items}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {LINKS.map(({ link, name }) => (
            <NavbarMenuItem key={link}>
              <Link color={"foreground"} href={link} size="lg">
                {name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
