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

  const group = tableStore.getGroupById(id);

  return (
    <>
      <section
        className="grid grid-cols-8 gap-2 bg-gray-100 p-2"
        style={{
          transform: CSS.Transform.toString(transform),
          transition,
        }}
        {...attributes}
        ref={setNodeRef}
      >
        <div
          className="mr-5 bg-yellow-400 p-5"
          {...listeners}
          ref={setActivatorNodeRef}
        >
          {group?.name}
        </div>

        <Droppable id={`${"monday"}#${"value"}`}>drop</Droppable>
        <Droppable id={`${"tuesday"}#${"value"}`}>drop</Droppable>
        <Droppable id={`${"wednesday"}#${"value"}`}>drop</Droppable>
        <Droppable id={`${"thursday"}#${"value"}`}>drop</Droppable>
        <Droppable id={`${"friday"}#${"value"}`}>drop</Droppable>
        <Droppable id={`${"saturday"}#${"value"}`}>drop</Droppable>
        <Droppable id={`${"sunday"}#${"value"}`}>drop</Droppable>
      </section>
    </>
  );
};
