import { GetAllMealSchedulesAdminQuery } from "@/gql/graphql";

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
  const overItemIndex = items.findIndex(({ id }) => id === overId);
  const hasChildren = (activeItem?.children || []).length > 0;
  const depth = hasChildren ? 0 : dragOffset > 0 ? 1 : 0;
  const parentId =
    depth === 1
      ? items
          .slice(0, overItemIndex)
          .reverse()
          .find((item) => item.depth === 0)!.id
      : 0;

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

export const BackupTree: React.FC<{
  items?: GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"];
}> = ({ items }) => {
  const [schedules, setSchedules] = useState([]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>(
    undefined,
  );
  const [overId, setOverId] = useState<UniqueIdentifier | undefined>(undefined);
  const [offsetLeft, setOffsetLeft] = useState(0);

  const flattenedItems = useMemo(() => {
    const flattenedTree: FlattenedItem[] = flatten(schedules);
    const excludeParentIds = new Set<string>(
      activeId ? [activeId.toString()] : [],
    );
    return flattenedTree.filter(
      ({ parentId }) => !parentId || !excludeParentIds.has(parentId.toString()),
    );
  }, [activeId, schedules]);

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

        const clonedItems: FlattenedItem[] = structuredClone(
          flatten(schedules),
        );
        const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
        const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);

        clonedItems[activeIndex] = {
          ...clonedItems[activeIndex],
          ...projected,
        };

        const sortedItems = arrayMove(clonedItems, activeIndex, overIndex)
          .map((item) => clonedItems.find(({ id }) => id === item.id))
          .filter(Boolean) as FlattenedItem[];

        setSchedules(buildTree(sortedItems) as any);
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <SortableContext
          items={sortedIds}
          strategy={verticalListSortingStrategy}
        >
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
      </div>
    </DndContext>
  );
};
