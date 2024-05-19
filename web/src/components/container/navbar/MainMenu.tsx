"use client";

import { MyLink } from "@/components/elements/MyLink";
import { useMeHook } from "@/components/hooks/useMeHook";
import { usePathname } from "@/navigation";
import { getMenu } from "@/utils/helpers/clientUtils";
import {
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { useTranslations } from "next-intl";
import React from "react";

interface MainMenuProps {}

export const MainMenu: React.FC<MainMenuProps> = ({}) => {
  const t = useTranslations<"Navbar">();
  const { me } = useMeHook();
  const roles = me?.userRole?.map((role) => role.name) || [];
  const path = usePathname();

  return (
    <>
      <NavbarContent className="hidden gap-4 sm:flex">
        {getMenu(roles).map(({ link, name }) => (
          <NavbarItem
            key={link}
            isActive={path === link}
            className="after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:content-['']"
          >
            <MyLink href={link} size="lg" className="!font-normal">
              {t(name as keyof Messages["Navbar"])}
            </MyLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {getMenu(roles).map(({ link, name }) => (
          <NavbarMenuItem key={link} isActive={path === link}>
            <MyLink href={link} size="lg" className="!font-bold">
              {t(name as keyof Messages["Navbar"])}
            </MyLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </>
  );
};
