import { ELink } from "@/components/elements/eLink";
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
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        base: "drop-shadow-2xl",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand as="li" className="max-w-fit space-x-1">
        <Link
          color="foreground"
          className="flex items-center text-2xl font-bold"
          href="/"
        >
          <GiHotMeal className="text-4xl text-primary" />
          <span>{process.env.NEXT_PUBLIC_BRAND_NAME}</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex">
        {LINKS.map(({ link, name }) => (
          <NavbarItem key={link} isActive>
            <ELink href={link} size="lg">
              {name}
            </ELink>
          </NavbarItem>
        ))}
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
        {LINKS.map(({ link, name }) => (
          <NavbarMenuItem key={link} isActive>
            <ELink href={link} size="lg">
              {name}
            </ELink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
