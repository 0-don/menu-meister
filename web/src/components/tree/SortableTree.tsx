import { initialItems } from "@/utils/constants";
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";

export interface TreeItem {
  id: UniqueIdentifier;
  children: TreeItem[];
  collapsed?: boolean;
}

export interface FlattenedItem extends TreeItem {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

export interface SortableTreeItemProps {
  id: UniqueIdentifier;
  depth: number;
  indentationWidth: number;
}

export function getProjection(
  items: FlattenedItem[],
  dragOffset: number,
  activeId?: UniqueIdentifier,
  overId?: UniqueIdentifier,
) {
  if (!activeId || !overId) return null;

  const activeItem = items.find((item) => item.id === activeId);
  const maxDepth = activeItem && activeItem.children.length > 0 ? 0 : 1;
  const depth = Math.min(dragOffset > 0 ? 1 : 0, maxDepth);

  let parentId = null;
  if (depth === 1) {
    const overItemIndex = items.findIndex(({ id }) => id === overId);
    const previousItem = items[overItemIndex - 1];
    parentId = previousItem ? previousItem.id : null;
  }

  return { depth, parentId };
}

export const flatten = (
  items: TreeItem[],
  parentId: UniqueIdentifier | null = null,
  depth = 0,
): FlattenedItem[] =>
  items.reduce<FlattenedItem[]>(
    (acc, item, index) => [
      ...acc,
      { ...item, parentId, depth, index },
      ...flatten(item.children, item.id, depth + 1),
    ],
    [],
  );

export const buildTree = (flattItems: FlattenedItem[]): TreeItem[] =>
  flattItems
    .filter((item) => item.depth === 0)
    .map((rootItem) => ({
      ...rootItem,
      children: flattItems.filter((child) => child.parentId === rootItem.id),
    }));

export function removeChildrenOf(
  items: FlattenedItem[],
  ids: UniqueIdentifier[],
) {
  const excludeParentIds = [...ids];

  return items.filter((item) => {
    if (item.parentId && excludeParentIds.includes(item.parentId)) {
      if (item.children.length) {
        excludeParentIds.push(item.id);
      }
      return false;
    }

    return true;
  });
}

export const SortableTreeItem: React.FC<SortableTreeItemProps> = (props) => {
  const { listeners, setDraggableNodeRef, setDroppableNodeRef, transform } =
    useSortable({ id: props.id });

  return (
    <li
      ref={setDroppableNodeRef}
      style={{
        listStyleType: "none",
        paddingInlineStart: `${props.indentationWidth * props.depth}px`,
      }}
    >
      <div
        ref={setDraggableNodeRef}
        style={{
          transform: CSS.Translate.toString(transform),
        }}
        {...listeners}
      >
        {props.id}
      </div>
    </li>
  );
};

export function SortableTree() {
  const [items, setItems] = useState(initialItems);
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>(
    undefined,
  );
  const [overId, setOverId] = useState<UniqueIdentifier | undefined>(undefined);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const flattenedItems = useMemo(() => flatten(items), [items]);

  const projected = getProjection(flattenedItems, offsetLeft, activeId, overId);
  const sortedIds = flattenedItems.map(({ id }) => id);
  const activeItem = flattenedItems.find(({ id }) => id === activeId);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={({ active }) => {
        setActiveId(active.id);
        setOverId(active.id);
      }}
      onDragMove={({ delta }) => setOffsetLeft(delta.x)}
      onDragOver={({ over }) => setOverId(over?.id)}
      onDragEnd={({ over, active }) => {
        setActiveId(undefined);

        if (projected && over) {
          const { depth, parentId } = projected;
          const clonedItems: FlattenedItem[] = structuredClone(flatten(items));
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
            depth={id === activeId && projected ? projected.depth : depth}
            indentationWidth={50}
          />
        ))}

        <DragOverlay>
          {activeId && activeItem && (
            <SortableTreeItem
              id={activeId}
              depth={activeItem.depth}
              indentationWidth={50}
            />
          )}
        </DragOverlay>
      </SortableContext>
    </DndContext>
  );
}
