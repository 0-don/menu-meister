import { LanguageSwitch } from "@/components/utils/LanguageSwitch";
import { ThemeSwitch } from "@/components/utils/ThemeSwitch";
import { ME } from "@/documents/query/auth";
import { LOCALES } from "@/middleware";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import logo_mini from "@public/images/logo_mini.svg";
import { HydrationBoundary } from "@tanstack/react-query";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";
import { MainMenu } from "./MainMenu";
import { Profile } from "./Profile";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = async ({}) => {
  const { state } = await prefetchQuery([{ document: ME }]);
  const locale = cookies().get("NEXT_LOCALE")?.value || LOCALES[0];

  const Items = (
    <>
      <LanguageSwitch locale={locale as "de" | "en"} />
      <ThemeSwitch />
      <Profile />
    </>
  );

  return (
    <HydrationBoundary state={state}>
      <NextUINavbar
        maxWidth="full"
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
        <NavbarBrand as="li" className="max-w-fit">
          <Link
            color="foreground"
            className="flex items-center space-x-0.5 text-2xl font-bold"
            href="/"
          >
            <Image src={logo_mini} alt="logo" />
            <span className="hidden sm:block">
              {process.env.NEXT_PUBLIC_BRAND_NAME}
            </span>
          </Link>
        </NavbarBrand>

        <MainMenu />

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
      </NextUINavbar>
    </HydrationBoundary>
  );
};
