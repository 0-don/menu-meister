"use client";
/* eslint-disable react/display-name */
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

const wrapperStyle = {
  background: "#e9e9e9",
  padding: "50px 10px",
  borderRadius: 8,
  margin: 50,
};

export type ItemType = {
  id: number;
  parent?: number;
  container?: boolean;
  row?: boolean;
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

  function addItem(container?: boolean, row?: boolean) {
    return () => {
      setData((prev) => ({
        items: [
          ...prev.items,
          {
            id: prev.items.length + 1,
            container,
            row,
          },
        ],
      }));
    };
  }

  const findItem = (id?: UniqueIdentifier) =>
    data.items.find((item) => item.id === id);
  const isContainer = (id?: UniqueIdentifier) => !!findItem(id)?.container;
  const isRow = (id?: UniqueIdentifier) => !!findItem(id)?.row;
  const getItems = (parent?: UniqueIdentifier) =>
    data.items.filter((item) => item.parent === parent);
  const getItemIds = (parent?: UniqueIdentifier) =>
    getItems(parent).map((item) => item.id);
  const findParent = (id?: UniqueIdentifier) => findItem(id)?.parent;
  return (
    <>
      <button onClick={addItem()}>Add Item</button>
      <button onClick={addItem(true)}>Add Column</button>
      <button onClick={addItem(true, true)}>Add Row</button>
      <DndContext
        onDragStart={(event) => setActiveId(event.active.id)}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          id="root"
          items={getItemIds()}
          strategy={verticalListSortingStrategy}
        >
          <div style={wrapperStyle}>
            {getItems().map((item: any) => {
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
          </div>
        </SortableContext>
        <DragOverlay>{getDragOverlay()}</DragOverlay>
      </DndContext>
    </>
  );

  function getDragOverlay() {
    if (!activeId) {
      return null;
    }

    if (isContainer(activeId)) {
      const item = data.items.find((i) => i.id === activeId);

      return (
        <Container row={item?.row}>
          {getItems(activeId).map((item: any) => (
            <Item key={item.id} id={item.id} />
          ))}
        </Container>
      );
    }

    return <Item id={activeId} />;
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const { id } = active;
    let overId: any;
    if (over) {
      overId = over.id;
    }

    const overParent = findParent(overId);
    const overIsContainer = isContainer(overId);
    const activeIsContainer = isContainer(activeId);
    if (overIsContainer) {
      const overIsRow = isRow(overId);
      const activeIsRow = isRow(activeId);
      // only columns to be added to rows
      if (overIsRow) {
        if (activeIsRow) {
          return;
        }

        if (!activeIsContainer) {
          return;
        }
      } else if (activeIsContainer) {
        return;
      }
    }

    setData((prev) => {
      const activeIndex = data.items.findIndex((item: any) => item.id === id);
      const overIndex = data.items.findIndex((item: any) => item.id === overId);

      let newIndex = overIndex;
      const isBelowLastItem =
        over &&
        overIndex === prev.items.length - 1 &&
        active.rect.current.translated!.top > over.rect.top + over.rect.height;

      const modifier = isBelowLastItem ? 1 : 0;

      newIndex = overIndex >= 0 ? overIndex + modifier : prev.items.length + 1;

      let nextParent;
      if (overId) {
        nextParent = overIsContainer ? overId : overParent;
      }

      (prev.items[activeIndex] as any).parent = nextParent;
      const nextItems = arrayMove(prev.items, activeIndex, newIndex);

      return {
        items: nextItems,
      };
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const { id } = active;
    let overId: any;
    if (over) {
      overId = over.id;
    }

    const activeIndex = data.items.findIndex((item: any) => item.id === id);
    const overIndex = data.items.findIndex((item: any) => item.id === overId);

    let newIndex = overIndex >= 0 ? overIndex : 0;

    if (activeIndex !== overIndex) {
      setData((prev) => ({
        items: arrayMove(prev.items, activeIndex, newIndex),
      }));
    }

    setActiveId(undefined);
  }
}

const Container = forwardRef(
  (
    props: { row?: boolean; children: ReactNode; className?: string },
    ref: React.LegacyRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={`w-96 flex-1 rounded border border-gray-400 bg-gray-300 p-6 ${
          props.row ? "flex-row" : "flex-col"
        } ${props.className}`}
      >
        {props.children}
      </div>
    );
  },
);

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
