"use client";
import { Link, usePathname } from "@/navigation";
import React, { ComponentProps } from "react";

type MyLinkProps = {
  href: string;
  children?: React.ReactNode;
} & ComponentProps<typeof Link>;

export const MyLink: React.FC<MyLinkProps> = ({
  href,
  children,
  className,
  ...rest
}) => {
  const currentPath = usePathname();
  const isActive = href === currentPath;

  return (
    <Link
      className={`${isActive ? "font-bold" : ""} ${className || ""}`}
      href={href}
      color={isActive ? "primary" : "foreground"}
      {...rest}
    >
      {children}
    </Link>
  );
};
