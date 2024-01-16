import TableStore from "@/store/TableStore";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import React from "react";
import { useSnapshot } from "valtio";


interface MyAutocompleteProps {}

export const MyAutocomplete: React.FC<MyAutocompleteProps> = ({}) => {
  const tableStore = useSnapshot(TableStore);

  return (
    <Autocomplete label="Select a meal" className="max-w-xs" size="sm" >
      {tableStore.mealsSorted.map((meal) => (
        <AutocompleteItem key={meal.id} value={meal.id}>
          {meal.name}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};
