"use client";
import { usePathname, useRouter } from "@/navigation";
import { Button } from "@nextui-org/button";
import { SwitchProps } from "@nextui-org/switch";
import deFlag from "@public/images/flags/de.svg";
import enFlag from "@public/images/flags/en.svg";
import Image from "next/image";
import React from "react";

interface LanguageSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
  locale?: "de" | "en";
}

const flagImages = {
  en: enFlag,
  de: deFlag,
};

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentFlag = flagImages[locale || "en"];
  return (
    <Button
      variant="flat"
      className="p-2"
      isIconOnly
      onClick={() =>
        router.replace(pathname, { locale: locale === "en" ? "de" : "en" })
      }
    >
      <Image src={currentFlag} alt={`${locale} flag`} width={30} height={30} />
    </Button>
  );
};
