"use client";

import Store from "@/store/Store";
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
  const store = useSnapshot(Store);

  return (
    <DndContext
      onDragStart={({ active }) => (Store.activeId = active.id)}
      onDragCancel={() => (Store.activeId = undefined)}
      onDragOver={useCallback(Store.onDragOver, [])}
      onDragEnd={Store.onDragEnd}
    >
      <div className="flex space-x-5">
        {Object.keys(store.schedules).map((group) => (
          <Droppable
            id={group}
            items={store.schedules[group]}
            activeId={store.activeId}
            key={group}
          />
        ))}
      </div>
      <DragOverlay>
        {store.activeId && (
          <div className="mb-[5px] box-border flex h-[30px] w-[110px] cursor-grabbing select-none items-center rounded-md border border-gray-300 pl-[5px]">
            Item {store.activeId}
          </div>
        )}
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
    <li
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="item mb-[5px] box-border flex h-[30px] w-[110px] cursor-grab select-none items-center rounded-md border border-gray-300 pl-[5px]"
    >
      Item {id}
    </li>
  );
};
