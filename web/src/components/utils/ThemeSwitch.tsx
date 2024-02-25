"use client";
import { useIsSSR } from "@/utils/helpers/clientUtils";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { FC } from "react";
import { IoIosMoon } from "react-icons/io";
import { RiSunFill } from "react-icons/ri";

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
      {!isSelected ? (
        <RiSunFill className="text-xl" />
      ) : (
        <IoIosMoon className="text-xl" />
      )}
    </Button>
  );
};
