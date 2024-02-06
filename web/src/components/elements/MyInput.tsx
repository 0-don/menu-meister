import { Input as InputNext } from "@nextui-org/input";
import { InputProps } from "@nextui-org/react";
import { IconType } from "@react-icons/all-files";
import React, { HTMLInputTypeAttribute } from "react";

type MyInputProps = InputProps & {
  label?: string;
  placeholder?: string;
  value?: string;
  Icon?: IconType;
  type?: HTMLInputTypeAttribute;
  isClearable?: boolean;
  required?: boolean;
  endContent?: React.ReactNode;
};

export const MyInput: React.FC<MyInputProps> = (props) => {
  const uppercaseLabel =
    props.label && props.label.charAt(0).toUpperCase() + props.label.slice(1);

  return (
    <InputNext
      {...props}
      label={uppercaseLabel}
      isClearable={props.isClearable}
      value={props.value}
      fullWidth
      onChange={(e) => props.onChange && props.onChange(e)}
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
      type={props.type}
      placeholder={props.placeholder}
      startContent={
        props.Icon && (
          <props.Icon className="pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
        )
      }
      required={props.required}
      endContent={props.endContent}
    />
  );
};
