import TableStore from "@/store/TableStore";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import React from "react";
import { useSnapshot } from "valtio";
interface MyAutocompleteProps {}

export const MyAutocomplete: React.FC<MyAutocompleteProps> = ({}) => {
  const tableStore = useSnapshot(TableStore);

  return (
    <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
      <Autocomplete label="Select a meal" className="max-w-xs">
        {tableStore.mealsSorted.map((meal) => (
          <AutocompleteItem key={meal.id} value={meal.id}>
            {meal.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};
