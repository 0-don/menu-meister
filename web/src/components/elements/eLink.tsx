"use client";
import { usePathname } from "@/navigation";
import { LinkProps, Link as NextLink } from "@nextui-org/link";
import React, { useEffect, useState } from "react";

type ELinkProps = {
  href: string;
  activeClassName?: string;
  children?: React.ReactNode;
} & LinkProps;

export const ELink: React.FC<ELinkProps> = ({
  href,
  activeClassName,
  children,
  ...rest
}) => {
  const currentPath = usePathname();
  const [computedClassName, setComputedClassName] = useState("");

  useEffect(() => {
    const linkPathname = new URL(href, location.href).pathname;
    const isActive = linkPathname === currentPath;

    const newClassName = isActive ? `${activeClassName || ""}`.trim() : "";
    setComputedClassName(newClassName);
  }, [href, currentPath, activeClassName]);

  return (
    <NextLink href={href} className={computedClassName} {...rest}>
      {children}
    </NextLink>
  );
};
