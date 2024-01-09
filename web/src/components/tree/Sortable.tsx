"use client";
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { ReactNode, forwardRef, useCallback } from "react";
import { useSnapshot } from "valtio";
import SortableStore from "./SortableStore";

export type ItemType = {
  id: number;
  parent?: number;
  container?: boolean;
};

export type DataType = {
  items: ItemType[];
};

export function Sortable() {
  const sortableStore = useSnapshot(SortableStore);

  return (
    <>
      <button onClick={SortableStore.addItem()}>Add Item</button>
      <button onClick={SortableStore.addItem(true)}>Add Column</button>
      <DndContext
        onDragStart={({ active }) => (SortableStore.activeId = active.id)}
        onDragCancel={() => (SortableStore.activeId = undefined)}
        onDragOver={useCallback(SortableStore.handleDragOver, [
          sortableStore.data.items,
        ])}
        onDragEnd={SortableStore.handleDragEnd}
      >
        <div>
          <SortableContext items={SortableStore.getItemIds()}>
            {sortableStore.getItems().map((item) =>
              item.container ? (
                <SortableContainer
                  key={item.id}
                  id={item.id}
                  index={sortableStore.data.items.findIndex(
                    (i) => i.id === item.id,
                  )}
                />
              ) : (
                <SortableItem key={item.id} id={item.id}>
                  <Item id={item.id} />
                </SortableItem>
              ),
            )}
          </SortableContext>

          <DragOverlay>
            {!SortableStore.activeId ? null : SortableStore.isContainer(
                SortableStore.activeId,
              ) ? (
              <Container id={SortableStore.activeId}>
                {SortableStore.getItems(SortableStore.activeId).map((item) => (
                  <Item key={item.id} id={item.id} />
                ))}
              </Container>
            ) : (
              <Item id={SortableStore.activeId} />
            )}
          </DragOverlay>
        </div>
      </DndContext>
    </>
  );
}

const Container = forwardRef(
  (
    props: { children: ReactNode; id: UniqueIdentifier },
    ref: React.LegacyRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={`w-96 flex-1 rounded border border-gray-400 bg-gray-300 p-6`}
      >
        <p className="text-black">{props.id}</p>
        {props.children}
      </div>
    );
  },
);

Container.displayName = "Container";

function SortableContainer({
  id,
  index,
}: {
  id: UniqueIdentifier;
  index: number;
}) {
  const { setNodeRef } = useDroppable({ id });
  const { setNodeRef: ref } = useDroppable({
    id: `${id}-${index}`,
  });

  return (
    <div>
      <SortableItem id={id}>
        <Container id={id} ref={setNodeRef}>
          <SortableContext
            items={SortableStore.getItems(id).map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {SortableStore.getItems(id).map((item) => (
              <SortableItem key={item.id} id={item.id}>
                <Item id={item.id} />
              </SortableItem>
            ))}
          </SortableContext>
        </Container>
      </SortableItem>
      <div className="h-3 w-96" ref={ref} />
    </div>
  );
}

function Item({ id }: { id: UniqueIdentifier }) {
  return (
    <div className="flex h-12 w-64 items-center justify-center rounded-lg border-2 border-gray-400 bg-white !text-black">
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
