"use client";
import { ELink } from "@/components/elements/eLink";
import { useMeHook } from "@/components/hooks/useMeHook";
import { usePathname } from "@/navigation";
import { MenuType } from "@/types";
import { getMenu } from "@/utils/helpers/clientUtils";
import {
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

interface MainMenuProps {
  pathname: string;
}

export const MainMenu: React.FC<MainMenuProps> = ({ pathname }) => {
  const t = useTranslations<"Navbar">();
  const { me } = useMeHook();
  const roles = me?.UserRole?.map((role) => role.name) || [];
  const p = usePathname();
  const [path, setPath] = useState<string>(pathname || p);
  const [links, setLinks] = useState<MenuType[]>(getMenu(roles));

  useEffect(() => void setPath(pathname || p), [pathname, p]);
  useEffect(() => void setLinks(getMenu(roles)), [me]);

  return (
    <>
      <NavbarContent className="hidden gap-4 sm:flex">
        {links.map(({ link, name }) => (
          <NavbarItem key={link} isActive={path === link}>
            <ELink href={link} size="lg">
              {t(name as keyof Messages["Navbar"])}
            </ELink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {links.map(({ link, name }) => (
          <NavbarMenuItem key={link} isActive={path === link}>
            <ELink href={link} size="lg">
              {t(name as keyof Messages["Navbar"])}
            </ELink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </>
  );
};
