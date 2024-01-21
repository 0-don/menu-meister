import { Size } from "@/utils/types";
import { UniqueIdentifier } from "@dnd-kit/core";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { AutocompleteSlots, SlotsToClasses } from "@nextui-org/react";
import React from "react";

interface MyAutocompleteProps {
  id: string;
  label?: string;
  size?: Size;
  className?: string;
  classNames?: SlotsToClasses<AutocompleteSlots>;
  isClearable?: boolean;
  labelPlacement?: "outside" | "outside-left" | "inside";
  value: UniqueIdentifier;
  onChange: (value: UniqueIdentifier) => void;
  items: { id: UniqueIdentifier | number; name: string }[];
}

export const MyAutocomplete: React.FC<MyAutocompleteProps> = (props) => {
  return (
    <Autocomplete
      label={props.label}
      classNames={{
        base: "!p-0",
        listbox: "!p-0",
        clearButton: "!p-0",
        endContentWrapper: "!p-0",
        listboxWrapper: "!p-0",
        popoverContent: "!p-0",
        selectorButton: "!p-0",
      }}
      value={props.value}
      className={props.className}
      labelPlacement={props.labelPlacement}
      name={props.label}
      size={props.size}
      isClearable={props.isClearable}
      selectedKey={props.value}
      defaultSelectedKey={props.value}
      onSelectionChange={props.onChange}
      id={props.id}
      aria-labelledby={props.id}
    >
      {props.items.map((item) => (
        <AutocompleteItem key={item.id} value={item.id}>
          {item.name}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};
