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

interface FlattenedItem extends TreeItem {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

function getProjection(
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

const SortableTreeItem: React.FC<{
  id: UniqueIdentifier;
  depth: number;
  indentationWidth: number;
}> = (props) => {
  const { listeners, setDraggableNodeRef, setDroppableNodeRef, transform } =
    useSortable({ id: props.id });

  return (
    <li
      ref={setDroppableNodeRef}
      className="list-none"
      style={{ paddingLeft: `${props.indentationWidth * props.depth}px` }}
    >
      <div
        ref={setDraggableNodeRef}
        style={{ transform: CSS.Translate.toString(transform) }}
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
  const flattenedItems = useMemo(() => {
    const flattenedTree = flatten(items);

    const isItemRemoved = ({ id, children, ...item }: FlattenedItem) => {
      if (id === activeId || (item.collapsed && children.length > 0))
        return true;
      if (item.parentId && excludeParentIds.has(item.parentId)) {
        if (children.length > 0) excludeParentIds.add(id);
        return true;
      }
      return false;
    };

    const excludeParentIds = new Set(activeId ? [activeId] : []);
    return flattenedTree.filter((item) => !isItemRemoved(item));
  }, [activeId, items]);

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
