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
import React, { ReactNode, forwardRef, useCallback, useState } from "react";

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
  const findParent = (id?: UniqueIdentifier) => findItem(id)?.parent;

  return (
    <>
      <button onClick={addItem()}>Add Item</button>
      <button onClick={addItem(true)}>Add Column</button>
      <DndContext
        onDragStart={(event) => setActiveId(event.active.id)}
        onDragOver={useCallback(handleDragOver, [data.items])}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={getItemIds()}>
          {getItems().map((item) =>
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

        <DragOverlay>
          {!activeId ? null : isContainer(activeId) ? (
            <Container id={activeId}>
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
    const overParent = findParent(over?.id);
    const overIsContainer = isContainer(over?.id);

    const activeItem = findItem(active.id);
    const overItem = findItem(over?.id);

    if (activeItem?.container && overItem?.container) {
      return;
    }

    setData((prev) => {
      const activeIndex = data.items.findIndex((item) => item.id === active.id);
      const overIndex = data.items.findIndex((item) => item.id === over?.id);

      let newIndex = overIndex;
      const isBelowLastItem =
        over &&
        overIndex === prev.items.length - 1 &&
        active.rect.current.initial!.top > over.rect.top + over.rect.height;

      const modifier = isBelowLastItem ? 1 : 0;
      newIndex = overIndex >= 0 ? overIndex + modifier : prev.items.length + 1;
      let nextParent = overIsContainer ? over?.id : overParent;
      
      prev.items[activeIndex].parent = nextParent as number;

      return { items: arrayMove(prev.items, activeIndex, newIndex) };
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
  (
    props: { children: ReactNode; id: UniqueIdentifier },
    ref: React.LegacyRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={`w-96 flex-1 rounded border border-gray-400 bg-gray-300 p-6 `}
      >
        <p className="text-black">{props.id}</p>
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
      <Container id={id} ref={setNodeRef}>
        <SortableContext
          items={getItems(id).map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {getItems(id).map((item) => (
            <SortableItem key={item.id} id={item.id}>
              <Item id={item.id} />
            </SortableItem>
          ))}
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
      className="relative my-5 flex-1"
      {...attributes}
      {...listeners}
    >
      {props.children}
    </div>
  );
}
