"use client";

import Store from "@/store/Store";
import { debounce } from "@/utils/constants";
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCallback } from "react";
import { useSnapshot } from "valtio";

export const SortableTree = () => {
  const { schedules } = useSnapshot(Store);

  return (
    <DndContext
      onDragStart={({ active }) => (Store.activeId = active.id)}
      onDragCancel={() => (Store.activeId = undefined)}
      onDragOver={useCallback(debounce(Store.onDragOver, 25), [])}
      onDragEnd={Store.onDragEnd}
    >
      <div className="flex space-x-5">
        {Object.keys(schedules).map((group) => (
          <Droppable
            id={group}
            items={schedules[group]}
            activeId={Store.activeId}
            key={group}
          />
        ))}
      </div>
      <DragOverlay>
        {Store.activeId && <Item id={Store.activeId} />}
      </DragOverlay>
    </DndContext>
  );
};

const Droppable = ({
  id,
  items,
}: {
  id: string;
  items: UniqueIdentifier[];
  activeId?: UniqueIdentifier;
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <ul
        className="droppable min-w-[110px] list-none rounded-md border border-black p-[20px_10px]"
        ref={setNodeRef}
      >
        {items.map((item) => (
          <SortableItem key={item} id={item} />
        ))}
      </ul>
    </SortableContext>
  );
};

const SortableItem = ({ id }: { id: UniqueIdentifier }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <li style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <Item id={id} />
    </li>
  );
};

const Item = ({
  id,
  dragOverlay,
}: {
  id: UniqueIdentifier;
  dragOverlay?: boolean;
}) => {
  return (
    <div
      className={`${
        dragOverlay ? "cursor-grabbing" : "cursor-grab"
      } mb-[5px] box-border flex h-[30px] w-[110px] select-none items-center rounded-md border border-gray-300 pl-[5px]`}
    >
      Item {id}
    </div>
  );
};
