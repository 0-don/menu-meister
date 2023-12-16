"use client";

import { useSwitch } from "@nextui-org/switch";
import de from "@public/images/flags/de.svg";
import en from "@public/images/flags/en.svg";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import Image from "next/image";
import React from "react";

interface LanguageSwitchProps {}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({}) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch();

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: [
            "h-8 w-8",
            "flex items-center justify-center p-1",
            "rounded-lg bg-default-100 hover:bg-default-200",
          ],
          color: isSelected ? "default" : "default",
        })}
      >
        <div className="p-0.5">
          {isSelected ? (
            <Image src={de} alt="de" />
          ) : (
            <Image src={en} alt="en" />
          )}
        </div>
      </div>
    </Component>
  );
};
