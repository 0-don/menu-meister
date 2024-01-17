import TableStore from "@/store/TableStore";
import { debounce } from "@/utils/constants";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useCallback, useState } from "react";
import { useSnapshot } from "valtio";
import { Droppable } from "./Droppable";

interface TableGroupRowProps {
  id: UniqueIdentifier;
}

export const TableGroupRow: React.FC<TableGroupRowProps> = ({ id }) => {
  const tableStore = useSnapshot(TableStore);
  const group = tableStore.getGroup(id)!;
  const [color, setColor] = useState<string>(group?.color ?? "");
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
    isDragging,
  } = useSortable({ id });

  const debouncedSetColor = useCallback(
    debounce((newColor: string) => setColor(newColor), 0),
    [],
  );

  return (
    <section
      className={`${isDragging ? "relative z-50" : ""} grid grid-cols-8 gap-2 p-2 focus:outline-none`}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        borderLeft: `5px solid ${color}`,
      }}
      {...attributes}
      ref={setNodeRef}
    >
      <div
        className="mr-5 p-5"
        style={{ color }}
        {...listeners}
        ref={setActivatorNodeRef}
      >
        <input
          type="color"
          value={color}
          onChange={(e) => debouncedSetColor(e.target.value)}
        />
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
