"use client";

import { usePathname, useRouter } from "@/navigation";
import { Button } from "@nextui-org/button";
import { SwitchProps } from "@nextui-org/switch";
import de from "@public/images/flags/de.svg";
import en from "@public/images/flags/en.svg";
import Image from "next/image";
import React from "react";

interface LanguageSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
  locale?: string;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Button
      variant="flat"
      className="p-2"
      isIconOnly
      onClick={() =>
        router.replace(pathname, { locale: locale === "en" ? "de" : "en" })
      }
    >
      {/* {locale === "en" ? (
        <Image src={en} alt={`${locale}`} />
      ) : (
        <Image src={de} alt={`${locale}`} />
      )} */}
    </Button>
  );
};
