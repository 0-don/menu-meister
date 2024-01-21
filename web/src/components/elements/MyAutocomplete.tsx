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
  onSelectionChange?: (value: UniqueIdentifier) => void;
  onInputChange?: (value: string) => void;
  items: { id: UniqueIdentifier | number; name: string }[];
}

export const MyAutocomplete: React.FC<MyAutocompleteProps> = (props) => {
  return (
    <Autocomplete
      label={props.label}
      className={props.className}
      labelPlacement={props.labelPlacement}
      name={props.label}
      size={props.size}
      defaultItems={props.items}
      isClearable={props.isClearable}
      selectedKey={`${props.value}`}
      onSelectionChange={props.onSelectionChange} // key
      onInputChange={props.onInputChange} // value
      id={props.id}
      aria-labelledby={props.id}
    >
      {(item) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
    </Autocomplete>
  );
};
