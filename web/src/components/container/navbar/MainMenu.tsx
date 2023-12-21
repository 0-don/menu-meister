"use client";
import { ELink } from "@/components/elements/eLink";
import { useMeHook } from "@/components/hooks/useMeHook";
import { UserRoleName } from "@/gql/graphql";
import { usePathname } from "@/navigation";
import { MenuType } from "@/types";
import {
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

interface MainMenuProps {
  LINKS: MenuType[];
  pathname: string;
}

export const MainMenu: React.FC<MainMenuProps> = ({ LINKS, pathname }) => {
  const t = useTranslations<"Navbar">();
  const { me } = useMeHook();
  const roles = me?.UserRole?.map((role) => role.name) || [];
  const p = usePathname();
  const [path, setPath] = useState<string>(pathname || p);
  const [links, setLinks] = useState<MenuType[]>(LINKS);

  useEffect(() => void setPath(pathname || p), [pathname, p]);
  useEffect(
    () =>
      void setLinks(
        [
          { link: "/", name: t("HOME") },
          {
            link: "/about",
            name: t("ABOUT"),
            display:
              roles.includes(UserRoleName.Admin) ||
              roles.includes(UserRoleName.Mod),
          },
        ].filter((link) => !link.display),
      ),
    [me],
  );

  return (
    <>
      <NavbarContent className="hidden gap-4 sm:flex">
        {links.map(({ link, name }) => (
          <NavbarItem key={link} isActive={path === link}>
            <ELink href={link} size="lg">
              {name}
            </ELink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {links.map(({ link, name }) => (
          <NavbarMenuItem key={link} isActive={path === link}>
            <ELink href={link} size="lg">
              {name}
            </ELink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </>
  );
};
