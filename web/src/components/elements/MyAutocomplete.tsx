import { UniqueIdentifier } from "@dnd-kit/core";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { AutocompleteProps } from "@nextui-org/react";
import React from "react";

type MyAutocompleteProps = Omit<AutocompleteProps, "children"> & {
  label?: string;
  items: { id: UniqueIdentifier | number; name: string }[];
};

export const MyAutocomplete: React.FC<MyAutocompleteProps> = ({
  items,
  ...props
}) => {
  return (
    <Autocomplete
      {...props}
      name={props.label}
      defaultItems={items}
      onKeyDown={(e: any) => e.continuePropagation()}
      // selectedKey={`${props.value}`}
      aria-labelledby={props.label}
      onSelectionChange={props.onSelectionChange} // key
      onInputChange={props.onInputChange} // value
      aria-label={props.label}
    >
      {(item) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
    </Autocomplete>
  );
};
