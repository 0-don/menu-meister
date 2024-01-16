import TableStore from "@/store/TableStore";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { useSnapshot } from "valtio";
import { Droppable } from "./Droppable";

interface TableGroupRowProps {
  id: UniqueIdentifier;
}

export const TableGroupRow: React.FC<TableGroupRowProps> = ({ id }) => {
  const tableStore = useSnapshot(TableStore);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id });

  const group = tableStore.getGroup(id);

  if (!group) return null;

  return (
    <section
      className="grid grid-cols-8 gap-2 p-2"
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        borderLeft: `5px solid ${group.color}`,
      }}
      {...attributes}
      ref={setNodeRef}
    >
      <div className="mr-5 p-5" {...listeners} ref={setActivatorNodeRef}>
        {group.name}
      </div>
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
