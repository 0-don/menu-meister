import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  closestCenter,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";

export interface TreeItem {
  id: UniqueIdentifier;
  children: TreeItem[];
  collapsed?: boolean;
}

type Schedule = NonNullable<
  GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"]
>[0];
type ScheduleItem = NonNullable<Schedule["scheduledMeals"]>[0];

interface FlattenedItem extends TreeItem {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

interface FlattenedItemV2 extends ScheduleItem {
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

export type GetAllMealSchedulesAdminQuery = {
  getAllMealSchedulesAdmin?: Array<{
    id: string;
    servingDate: any;
    createdAt: any;
    updatedAt: any;
    scheduledMeals?: Array<{
      id: string;
      mealGroupId?: number | null;
      mealId?: number | null;
      createdAt: any;
      updatedAt: any;
      meal?: {
        id: string;
        name: string;
        description?: string | null;
        image?: string | null;
      } | null;
      mealGroup?: {
        id: string;
        name: string;
        description?: string | null;
        meals?: Array<{
          id: string;
          name: string;
          description?: string | null;
          image?: string | null;
        }> | null;
      } | null;
    }> | null;
  }> | null;
};

export const SortableTree: React.FC<{
  items: GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"];
}> = ({ items }) => {
  const [schedules, setSchedules] = useState(items);
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>(
    undefined,
  );
  const [overId, setOverId] = useState<UniqueIdentifier | undefined>(undefined);
  const [offsetLeft, setOffsetLeft] = useState(0);

  const flattenedItems: FlattenedItemV2[] = useMemo(() => {
    // const flattenedTree: FlattenedItem[] = flatten(schedules);
    const excludeParentIds = new Set<string>(
      activeId ? [activeId.toString()] : [],
    );
    // return flattenedTree.filter(
    //   ({ parentId }) => !parentId || !excludeParentIds.has(parentId.toString()),
    // );
    return [];
  }, [activeId, schedules]);

  const projected = getProjection([], offsetLeft, activeId, overId);
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

        const clonedItems: FlattenedItem[] = structuredClone(flatten([]));
        const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
        const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);

        clonedItems[activeIndex] = {
          ...clonedItems[activeIndex],
          ...projected,
        };

        const sortedItems = arrayMove(clonedItems, activeIndex, overIndex)
          .map((item) => clonedItems.find(({ id }) => id === item.id))
          .filter(Boolean) as FlattenedItem[];

        // setSchedules(buildTree(sortedItems));
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <SortableContext items={sortedIds}>
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
