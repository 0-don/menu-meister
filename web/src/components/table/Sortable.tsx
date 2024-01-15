import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  closestCenter,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { Transform } from "@dnd-kit/utilities";
import { CSS } from "@dnd-kit/utilities";
import React, { forwardRef, memo, useState } from "react";

export function Sortable() {
  const [items, setItems] = useState<UniqueIdentifier[]>([1, 2, 3, 4]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const getIndex = (id: UniqueIdentifier) => items.indexOf(id);
  const activeIndex = activeId ? getIndex(activeId) : -1;

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={({ active }) => setActiveId(active.id)}
      onDragEnd={({ over }) => {
        setActiveId(null);
        if (over) {
          const overIndex = getIndex(over.id);
          if (activeIndex !== overIndex)
            setItems((items) => arrayMove(items, activeIndex, overIndex));
        }
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <Draggable id={1}>1</Draggable>
      <hr />
      <br />
      <br />
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((value) => (
          <SortableItem key={value} id={value} />
        ))}
      </SortableContext>

      <DragOverlay>{activeId ? <Item value={activeId} /> : null}</DragOverlay>
    </DndContext>
  );
}

export function SortableItem({ id }: { id: UniqueIdentifier }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  return (
    <Item
      ref={setNodeRef}
      value={id}
      transform={transform}
      transition={transition}
      listeners={listeners}
      {...attributes}
    />
  );
}

export interface ItemProps {
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  transition?: string;
  value: React.ReactNode;
}

export const Item = memo(
  forwardRef<HTMLLIElement, ItemProps>(
    ({ listeners, transition, transform, value, ...props }, ref) => {
      return (
        <li
          className="flex list-none items-center bg-gray-500 p-5"
          style={
            {
              transform: transform
                ? CSS.Transform.toString(transform)
                : transform,
              transition,
            } as React.CSSProperties
          }
          {...listeners}
          {...props}
          ref={ref}
        >
          <div className="mr-5">{value}</div>
          <div className="flex space-x-2">
            <Droppable id={`${"monday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"tuesday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"wednesday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"thursday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"friday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"saturday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"sunday"}#${value}`}>drop</Droppable>
          </div>
        </li>
      );
    },
  ),
);

export function Draggable(props: {
  children: React.ReactNode;
  id: UniqueIdentifier;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

export function Droppable(props: {
  children: React.ReactNode;
  id: UniqueIdentifier;
}) {
  const { isOver, setNodeRef } = useDroppable({ id: props.id });

  return (
    <div
      className="bg-red-500 p-5"
      ref={setNodeRef}
      style={{
        color: isOver ? "green" : undefined,
      }}
    >
      {props.children}
    </div>
  );
}
