import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { SortableTreeItem } from "./SortableTreeItem";
import type { FlattenedItem, TreeItems } from "./types";
import {
  buildTree,
  flattenTree,
  getProjection,
  removeChildrenOf,
} from "./utilities";

const initialItems: TreeItems = [
  {
    id: "Home",
    children: [],
  },
  {
    id: "Collections",
    children: [
      { id: "Spring", children: [] },
      { id: "Summer", children: [] },
      { id: "Fall", children: [] },
      { id: "Winter", children: [] },
    ],
  },
  {
    id: "About Us",
    children: [],
  },
  {
    id: "My Account",
    children: [
      { id: "Addresses", children: [] },
      { id: "Order History", children: [] },
    ],
  },
];

export function SortableTree() {
  const [items, setItems] = useState(() => initialItems);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overId, setOverId] = useState<UniqueIdentifier | null>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const flattenedItems = useMemo(() => {
    const flattenedTree: FlattenedItem[] = flattenTree(items);
    const collapsedItems = flattenedTree.reduce<string[]>(
      (acc, { children, collapsed, id }) =>
        collapsed && children.length ? [...acc, id.toString()] : acc,
      [],
    );

    return removeChildrenOf(
      flattenedTree,
      activeId ? [activeId.toString(), ...collapsedItems] : collapsedItems,
    );
  }, [activeId, items]);
  const projected =
    activeId && overId
      ? getProjection(flattenedItems, activeId, overId, offsetLeft, 50)
      : null;

  const sortedIds = useMemo(
    () => flattenedItems.map(({ id }) => id),
    [flattenedItems],
  );
  const activeItem = activeId
    ? flattenedItems.find(({ id }) => id === activeId)
    : null;

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={({ active }) => {
        setActiveId(active.id);
        setOverId(active.id);
      }}
      onDragMove={({ delta }) => setOffsetLeft(delta.x)}
      onDragOver={({ over }) => setOverId(over?.id ?? null)}
      onDragEnd={({ over, active }) => {
        setActiveId(null);

        if (projected && over) {
          const { depth, parentId } = projected;
          const clonedItems: FlattenedItem[] = JSON.parse(
            JSON.stringify(flattenTree(items)),
          );
          const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
          const activeIndex = clonedItems.findIndex(
            ({ id }) => id === active.id,
          );
          const activeTreeItem = clonedItems[activeIndex];
          clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

          // Extract IDs for arrayMove
          const clonedItemIds = clonedItems.map((item) => item.id);
          const sortedItemIds = arrayMove(
            clonedItemIds,
            activeIndex,
            overIndex,
          );

          // Map back to FlattenedItems
          const sortedItems = sortedItemIds
            .map((id) => clonedItems.find((item) => item.id === id))
            .filter((item) => item) as FlattenedItem[];

          const newItems = buildTree(sortedItems);
          setItems(newItems);
        }
      }}
    >
      <SortableContext items={sortedIds} strategy={verticalListSortingStrategy}>
        {flattenedItems.map(({ id, depth }) => (
          <SortableTreeItem
            key={id}
            id={id}
            value={String(id)}
            depth={id === activeId && projected ? projected.depth : depth}
            indentationWidth={50}
          />
        ))}
        {createPortal(
          <DragOverlay>
            {activeId && activeItem ? (
              <SortableTreeItem
                id={activeId}
                depth={activeItem.depth}
                value={activeId.toString()}
                indentationWidth={50}
              />
            ) : null}
          </DragOverlay>,
          document.body,
        )}
      </SortableContext>
    </DndContext>
  );
}
