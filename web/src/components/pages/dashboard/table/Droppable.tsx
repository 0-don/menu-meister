import TableStore from "@/store/TableStore";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import { useSnapshot } from "valtio";
import { MyAutocomplete } from "../../../elements/MyAutocomplete";
import { TableMealItem } from "./TableMealItem";

interface DroppableProps {
  day: WeekDay;
  group: UniqueIdentifier;
}

export const Droppable: React.FC<DroppableProps> = ({ day, group }) => {
  const [value, setValue] = useState<UniqueIdentifier>("");
  const tableStore = useSnapshot(TableStore);
  const { setNodeRef, isOver } = useDroppable({
    id: `${group}#${day}`,
    data: { day, group },
  });

  const meal = tableStore.getGroupMeal(group, day);

  return (
    <div ref={setNodeRef}>
      {meal ? (
        <TableMealItem day={day} group={group} meal={meal} isOver={isOver} />
      ) : (
        <div
          className="flex h-full flex-col justify-start space-y-2 rounded-lg bg-default-100 p-2"
          style={{ opacity: isOver ? 0.5 : 1}}
        >
          <MyAutocomplete
            size="sm"
            label="Gericht auswählen"
            isClearable={false}
            items={tableStore.mealsSorted}
            value={value}
            onChange={setValue}
          />
        </div>
      )}
    </div>
  );
};