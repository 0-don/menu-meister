import TableStore from "@/store/TableStore";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { useSnapshot } from "valtio";
import { MyAutocomplete } from "../elements/MyAutocomplete";
import { TableMealItem } from "./TableMealItem";

interface DroppableProps {
  day: WeekDay;
  group: UniqueIdentifier;
}

export const Droppable: React.FC<DroppableProps> = ({ day, group }) => {
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
        <div className="flex h-full items-center justify-center">
          <MyAutocomplete />
          <p>OR</p>
          <p>Drop here</p>
        </div>
      )}
    </div>
  );
};
