"use client";
import { Button } from "@nextui-org/button";
import { useIsSSR } from "@react-aria/ssr";
import { IoIosMoon } from "@react-icons/all-files/io/IoIosMoon";
import { RiSunFill } from "@react-icons/all-files/ri/RiSunFill";
import { useTheme } from "next-themes";
import { FC } from "react";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const handleChange = () =>
    !isSSR && setTheme(theme === "light" ? "dark" : "light");

  const isSelected = theme === "light" || isSSR;

  return (
    <Button
      variant="flat"
      className={`p-2 ${className}`}
      isIconOnly
      onClick={handleChange}
    >
      {isSelected ? <RiSunFill /> : <IoIosMoon />}
    </Button>
  );
};
