import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import React from "react";

interface DraggableProps {
  children: React.ReactNode;
  id: UniqueIdentifier;
}

export const Draggable: React.FC<DraggableProps> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      className="text-xl "
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
};
