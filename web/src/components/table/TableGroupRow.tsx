import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { TableMealItem } from "./TableMealItem";

interface TableGroupRowProps {
  id: UniqueIdentifier;
}

export const TableGroupRow: React.FC<TableGroupRowProps> = ({ id }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id });

  return (
    <TableMealItem
      ref={setNodeRef}
      activatorRef={setActivatorNodeRef}
      value={id}
      transform={transform}
      transition={transition}
      listeners={listeners}
      {...attributes}
    />
  );
};
