import { Size } from "@/utils/types";
import { UniqueIdentifier } from "@dnd-kit/core";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import React from "react";

interface MyAutocompleteProps {
  label?: string;
  size?: Size;
  className?: string;
  isClearable?: boolean;
  value: UniqueIdentifier;
  onChange: (value: UniqueIdentifier) => void;
  items: { id: UniqueIdentifier; name: string }[];
}

export const MyAutocomplete: React.FC<MyAutocompleteProps> = (props) => {
  return (
    <Autocomplete
      label={props.label}
      className={props.className}
      size={props.size}
      isClearable={props.isClearable}
      selectedKey={props.value}
      onSelectionChange={props.onChange}
    >
      {props.items.map((item) => (
        <AutocompleteItem key={item.id} value={item.id}>
          {item.name}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};
