import TableStore from "@/store/TableStore";
import { debounce } from "@/utils/constants";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useCallback, useState } from "react";
import { useSnapshot } from "valtio";
import { useWeeklyMealGroupHook } from "../hooks/useWeeklyMealGroupHook";
import { Droppable } from "./Droppable";

interface TableGroupRowProps {
  id: UniqueIdentifier;
}

export const TableGroupRow: React.FC<TableGroupRowProps> = ({ id }) => {
  const { updateWeeklyMealGroup } = useWeeklyMealGroupHook();
  const tableStore = useSnapshot(TableStore);
  const group = tableStore.getGroup(id)!;
  const [color, setColor] = useState<string>(group?.color ?? "");
  const [groupName, setGroupName] = useState<string>(group?.name ?? "");
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
      className={`${isDragging ? "relative z-50" : ""} grid grid-cols-8 gap-2 bg-default-50/50 p-2 focus:outline-none`}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      {...attributes}
      role="row"
      ref={setNodeRef}
    >
      <div className="flex space-x-2">
        <label
          htmlFor="color"
          className="h-full w-1.5 cursor-pointer rounded-lg"
          style={{ backgroundColor: color }}
        >
          <input
            type="color"
            id="color"
            className="h-0 w-0 opacity-0"
            value={color}
            onChange={(e) => debouncedSetColor(e.target.value)}
            onBlur={() =>
              updateWeeklyMealGroup({
                where: { id: group.id },
                data: { color: { set: color } },
              })
            }
          />
        </label>

        <div className="flex flex-col">
          <input
            className="m-0 w-full bg-transparent p-1 font-semibold focus:outline-none hover:border-default-100 border border-transparent rounded-lg"
            type="text"
            style={{ color }}
            value={groupName}
            onChange={(e) => {
              setGroupName(e.target.value);
              updateWeeklyMealGroup({
                where: { id: group.id },
                data: { name: { set: e.target.value } },
              });
            }}
          />
          <div
            className="h-full cursor-grab"
            {...listeners}
            ref={setActivatorNodeRef}
          />
        </div>
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
