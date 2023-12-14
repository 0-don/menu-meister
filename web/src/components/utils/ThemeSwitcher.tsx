"use client";

import { Switch } from "@nextui-org/react";
import { IoIosMoon } from "@react-icons/all-files/io/IoIosMoon";
import { RiSunFill } from "@react-icons/all-files/ri/RiSunFill";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => void setMounted(true), []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <RiSunFill className={className} />
        ) : (
          <IoIosMoon className={className} />
        )
      }
    >
      {theme}
    </Switch>
  );
}
