"use client";
import logo_dark from "@public/images/logo_dark.svg";
import logo_white from "@public/images/logo_white.svg";
import { useIsSSR } from "@react-aria/ssr";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

interface LogoSwitchProps {}

export const LogoSwitch: React.FC<LogoSwitchProps> = ({}) => {
  const { theme } = useTheme();
  const isSSR = useIsSSR();
  const isSelected = theme === "dark" || isSSR;

  return (
    <>
      {isSelected ? (
        <Image src={logo_dark} height={150} width={150} alt="logo" />
      ) : (
        <Image src={logo_white} height={150} width={150} alt="logo" />
      )}
    </>
  );
};
