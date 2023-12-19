"use client";
import { usePathname } from "@/navigation";
import { LinkProps, Link as NextLink } from "@nextui-org/link";
import React from "react";

type ELinkProps = {
  href: string;
  children?: React.ReactNode;
} & LinkProps;

export const ELink: React.FC<ELinkProps> = ({ href, children, ...rest }) => {
  const currentPath = usePathname();
  const isActive = href === currentPath;

  return (
    <NextLink
      className={isActive ? "font-bold" : ""}
      href={href}
      color={isActive ? "primary" : "foreground"}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
