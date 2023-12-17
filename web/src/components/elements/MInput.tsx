import { Input as InputNext } from "@nextui-org/input";
import { IconType } from "@react-icons/all-files";
import React from "react";

interface MInputProps {
  value?: string;
  onChange: (value: string) => void;
  Icon: IconType;
}

export const MInput: React.FC<MInputProps> = ({ Icon, value, onChange }) => {
  return (
    <InputNext
      label="Search"
      isClearable
      radius="lg"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      placeholder="Type to search..."
      startContent={
        <Icon className="pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
      }
    />
  );
};
