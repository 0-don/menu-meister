import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { Draggable } from "./Draggable";

interface DroppableProps {
  children: React.ReactNode;
  id: UniqueIdentifier;
}

export const Droppable: React.FC<DroppableProps> = ({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      className="bg-red-500 p-5"
      ref={setNodeRef}
      style={{
        color: isOver ? "green" : undefined,
      }}
    >
      <Draggable id={`${id}#meal`}>meal</Draggable>
      {id}
      {children}
    </div>
  );
};
