import TableStore from "@/store/TableStore";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { useSnapshot } from "valtio";
import { Droppable } from "./Droppable";
import { TableGroup } from "./TableGroup";

interface TableGroupRowProps {
  id: UniqueIdentifier;
}

export const TableGroupRow: React.FC<TableGroupRowProps> = ({ id }) => {
  const tableStore = useSnapshot(TableStore);
  const group = tableStore.getGroup(id)!;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
    isDragging,
  } = useSortable({ id });
  
  if (!group) return null;

  return (
    <section
      className={`${isDragging ? "relative z-[9999]" : ""} grid grid-cols-8 gap-2 rounded-lg bg-default-300/10 p-2 focus:outline-none`}
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...attributes}
      role="row"
      ref={setNodeRef}
    >
      <TableGroup
        id={id}
        listeners={listeners}
        activatorRef={setActivatorNodeRef}
      />
      <Droppable day="monday" group={group.id} />
      <Droppable day="tuesday" group={group.id} />
      <Droppable day="wednesday" group={group.id} />
      <Droppable day="thursday" group={group.id} />
      <Droppable day="friday" group={group.id} />
      <Droppable day="saturday" group={group.id} />
      <Droppable day="sunday" group={group.id} />
    </section>
  );
};
