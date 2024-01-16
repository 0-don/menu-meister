import TableStore from "@/store/TableStore";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { Card, CardBody } from "@nextui-org/card";
import { useSnapshot } from "valtio";
import { Draggable } from "./Draggable";

interface DroppableProps {
  day: WeekDay;
  group: UniqueIdentifier;
}

export const Droppable: React.FC<DroppableProps> = ({ day, group }) => {
  const tableStore = useSnapshot(TableStore);
  const { isOver, setNodeRef } = useDroppable({
    id: `${group}#${day}`,
    data: { day, group },
  });

  const meal = tableStore.getGroupMeal(group, day);

  console.log(meal);

  return (
    <div
      ref={setNodeRef}
      style={{
        color: isOver ? "green" : undefined,
      }}
    >
      <Card>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
      <Draggable id={`#meal`}>meal</Draggable>
      {/* {id} */}
    </div>
  );
};
