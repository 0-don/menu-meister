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
}

interface FlattenedItem extends TreeItem {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

interface SortableTreeItemProps {
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
  const overItemIndex = items.findIndex(({ id }) => id === overId);
  const activeItemIndex = items.findIndex(({ id }) => id === activeId);
  const activeItem = items[activeItemIndex];
  const newItems = arrayMove(items, activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1];
  const nextItem = newItems[overItemIndex + 1];
  const dragDepth = Math.round(dragOffset / 50);
  let projectedDepth = activeItem.depth + dragDepth;

  const hasChildren = activeItem.children.length > 0;

  if (hasChildren) {
    projectedDepth = Math.min(projectedDepth, 0);
  } else {
    projectedDepth = Math.min(projectedDepth, 1);
  }

  const maxDepth = Math.min(
    previousItem ? previousItem.depth + 1 : 0,
    hasChildren ? 0 : 1,
  );
  const minDepth = Math.min(nextItem ? nextItem.depth : 0, hasChildren ? 0 : 1);
  let depth = Math.min(Math.max(projectedDepth, minDepth), maxDepth);

  let parentId = null;
  if (depth !== 0 && previousItem) {
    parentId =
      depth <= previousItem.depth ? previousItem.parentId : previousItem.id;
  }

  return {
    depth,
    maxDepth,
    minDepth,
    parentId,
  };
}

const flatten = (
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

const buildTree = (flattItems: FlattenedItem[]): TreeItem[] =>
  flattItems
    .filter((item) => item.depth === 0)
    .map((rootItem) => ({
      ...rootItem,
      children: flattItems.filter((child) => child.parentId === rootItem.id),
    }));

const SortableTreeItem: React.FC<SortableTreeItemProps> = (props) => {
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
        if (!projected || !over) return;

        const activeIndex = flattenedItems.findIndex(
          ({ id }) => id === active.id,
        );
        const updatedItems = structuredClone(flattenedItems);
        updatedItems[activeIndex] = {
          ...updatedItems[activeIndex],
          ...projected,
        };

        const overIndex = updatedItems.findIndex(({ id }) => id === over.id);
        const newOrder = arrayMove(updatedItems, activeIndex, overIndex);
        setItems(buildTree(newOrder));
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
