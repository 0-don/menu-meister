"use client";
import { usePathname } from "@/navigation";
import { LinkProps, Link as NextLink } from "@nextui-org/link";
import React from "react";

type MyLinkProps = {
  href: string;
  children?: React.ReactNode;
} & LinkProps;

export const MyLink: React.FC<MyLinkProps> = ({
  href,
  children,
  className,
  ...rest
}) => {
  const currentPath = usePathname();
  const isActive = href === currentPath;

  return (
    <NextLink
      className={`${isActive ? "font-bold" : ""} ${className || ""}`}
      href={href}
      color={isActive ? "primary" : "foreground"}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
