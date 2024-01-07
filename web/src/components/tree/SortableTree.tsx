"use client";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { ReactNode, forwardRef, useState } from "react";

export type ItemType = {
  id: number;
  parent?: number;
  container?: boolean;
};

export type DataType = {
  items: ItemType[];
};

export function SortableTree() {
  const [data, setData] = useState<DataType>({
    items: [
      { id: 5, container: true },
      { id: 3, parent: 5 },
      { id: 4, parent: 5 },
      { id: 1, parent: 6 },
      { id: 10, parent: 6 },
      { id: 2, parent: 6 },
      { id: 6, container: true },
      { id: 8, parent: 7 },
      { id: 9, parent: 7 },
      { id: 7, container: true },
      { id: 11 },
      { id: 12 },
    ],
  });
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>();

  const addItem = (container?: boolean) => () =>
    setData((prev) => ({
      items: [...prev.items, { id: prev.items.length + 1, container }],
    }));

  const findItem = (id?: UniqueIdentifier) =>
    data.items.find((item) => item.id === id);
  const isContainer = (id?: UniqueIdentifier) => !!findItem(id)?.container;
  const getItems = (parent?: UniqueIdentifier) =>
    data.items.filter((item) => item.parent === parent);
  const getItemIds = (parent?: UniqueIdentifier) =>
    getItems(parent).map((item) => item.id);

  return (
    <>
      <button onClick={addItem()}>Add Item</button>
      <button onClick={addItem(true)}>Add Column</button>
      <DndContext
        onDragStart={(event) => setActiveId(event.active.id)}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={getItemIds()}
          strategy={verticalListSortingStrategy}
        >
          {getItems().map((item) => {
            if (item.container) {
              return (
                <SortableContainer
                  key={item.id}
                  id={item.id}
                  getItems={getItems}
                />
              );
            }

            return (
              <SortableItem key={item.id} id={item.id}>
                <Item id={item.id} />
              </SortableItem>
            );
          })}
        </SortableContext>

        <DragOverlay>
          {!activeId ? null : isContainer(activeId) ? (
            <Container>
              {getItems(activeId).map((item) => (
                <Item key={item.id} id={item.id} />
              ))}
            </Container>
          ) : (
            <Item id={activeId} />
          )}
        </DragOverlay>
      </DndContext>
    </>
  );

  function handleDragOver({ active, over }: DragOverEvent) {
    const overId = over?.id;
    const activeItem = findItem(active.id);
    const overItem = findItem(overId);

    if (activeItem?.container && overItem?.container) {
      return;
    }

    setData((prev) => {
      const activeIndex = prev.items.findIndex((item) => item.id === active.id);
      const overIndex = over
        ? prev.items.findIndex((item) => item.id === overId)
        : prev.items.length;
      const newIndex =
        over &&
        overIndex === prev.items.length - 1 &&
        active.rect.current.translated!.top > over.rect.top + over.rect.height
          ? overIndex + 1
          : overIndex;
      const nextParent = overItem?.container ? overId : overItem?.parent;

      const nextItems = [...prev.items];
      nextItems[activeIndex] = {
        ...nextItems[activeIndex],
        parent: nextParent as number,
      };
      return { items: arrayMove(nextItems, activeIndex, newIndex) };
    });
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    const activeIndex = data.items.findIndex((item) => item.id === active.id);
    const overIndex = over
      ? data.items.findIndex((item) => item.id === over.id)
      : 0;

    if (activeIndex !== overIndex) {
      setData((prev) => ({
        items: arrayMove(
          prev.items,
          activeIndex,
          overIndex >= 0 ? overIndex : prev.items.length,
        ),
      }));
    }
    setActiveId(undefined);
  }
}

const Container = forwardRef(
  (props: { children: ReactNode }, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className={`w-96 flex-1 rounded border border-gray-400 bg-gray-300 p-6 `}
      >
        {props.children}
      </div>
    );
  },
);

Container.displayName = "Container";

function SortableContainer({
  getItems,
  id,
}: {
  getItems: (id: UniqueIdentifier) => ItemType[];
  id: UniqueIdentifier;
}) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableItem id={id}>
      <Container ref={setNodeRef}>
        <SortableContext
          items={getItems(id).map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {getItems(id).map((item) =>
            item.container ? (
              <SortableContainer
                key={item.id}
                id={item.id}
                getItems={getItems}
              />
            ) : (
              <SortableItem key={item.id} id={item.id}>
                <Item id={item.id} />
              </SortableItem>
            ),
          )}
        </SortableContext>
      </Container>
    </SortableItem>
  );
}

function Item({ id }: { id: UniqueIdentifier }) {
  return (
    <div className="my-2 flex h-12 w-64 items-center justify-center rounded-lg border-2 border-gray-400 bg-white !text-black">
      {id}
    </div>
  );
}

function SortableItem(props: { children: ReactNode; id: UniqueIdentifier }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className="relative flex-1"
      {...attributes}
      {...listeners}
    >
      {props.children}
    </div>
  );
}
