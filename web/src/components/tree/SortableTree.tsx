import DndStore, { FlatScheduleItem } from "@/store/DndStore";
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  closestCenter,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import { useSnapshot } from "valtio";

export interface TreeItem {
  id: UniqueIdentifier;
  children: TreeItem[];
  collapsed?: boolean;
}

function getProjection(
  items: FlatScheduleItem[],
  dragOffset: number,
  activeId?: UniqueIdentifier,
  overId?: UniqueIdentifier,
) {
  if (!activeId || !overId) return null;
  const overItemIndex = items.findIndex(({ flatId }) => flatId === overId);
  const activeItemIndex = items.findIndex(({ flatId }) => flatId === activeId);
  const activeItem = items[activeItemIndex];
  const newItems = arrayMove(items, activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1];
  const nextItem = newItems[overItemIndex + 1];
  const dragDepth = Math.round(dragOffset / 50);
  let projectedDepth = activeItem.depth + dragDepth;
  const { id } = DndStore.parseFlatId(activeId);

  const hasChildren = activeItem?.mealGroup && activeItem.mealGroup.id == id

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
const SortableTreeItem: React.FC<{
  id: UniqueIdentifier;
  depth: number;
  indentationWidth: number;
}> = (props) => {
  const { listeners, setDraggableNodeRef, setDroppableNodeRef, transform } =
    useSortable({ id: props.id });

  const item = DndStore.getScheduleItem(props.id);

  return (
    <li
      ref={setDroppableNodeRef}
      className="list-none"
      style={{ paddingLeft: `${props.indentationWidth * props.depth}px` }}
    >
      <div
        ref={setDraggableNodeRef}
        className="text-xs"
        style={{ transform: CSS.Translate.toString(transform) }}
        {...listeners}
      >
        {item.group ? item.group.name : item.meal?.name}
      </div>
    </li>
  );
};

export const SortableTree: React.FC = ({}) => {
  const dndStore = useSnapshot(DndStore);
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>(
    undefined,
  );
  const [overId, setOverId] = useState<UniqueIdentifier | undefined>(undefined);
  const [offsetLeft, setOffsetLeft] = useState(0);

  useMemo(() => {
    DndStore.flatSchedules = DndStore.getAllFlatten(activeId);
  }, [activeId, dndStore.schedules]);

  const projected = getProjection(
    dndStore.flatSchedules,
    offsetLeft,
    activeId,
    overId,
  );
  const sortedIds = dndStore.flatSchedules.map(({ flatId }) => flatId);
  const activeItem = dndStore.flatSchedules.find(
    ({ flatId }) => flatId === activeId,
  );

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
        const clonedItems: FlatScheduleItem[] = JSON.parse(
          JSON.stringify(DndStore.getAllFlatten()),
        );
        const overIndex = clonedItems.findIndex(
          ({ flatId }) => flatId === over.id,
        );
        const activeIndex = clonedItems.findIndex(
          ({ flatId }) => flatId === active.id,
        );
        clonedItems[activeIndex] = {
          ...clonedItems[activeIndex],
          ...projected,
        };
        const sortedItems = arrayMove(clonedItems, activeIndex, overIndex)
          .map((item) =>
            clonedItems.find(({ flatId }) => flatId === item.flatId),
          )
          .filter(Boolean) as FlatScheduleItem[];

        // DndStore.schedules = DndStore.buildTree(sortedItems);
      }}
    >
      <div className="flex gap-64">
        {dndStore.schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="border-2 p-2"
            style={{
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            <SortableContext items={sortedIds}>
              {dndStore.flatSchedules
                .filter((s) => schedule.servingDate === s.date)
                .map((s) => (
                  <SortableTreeItem
                    key={s.flatId}
                    id={s.flatId}
                    depth={
                      s.flatId === activeId && projected
                        ? projected.depth
                        : s.depth
                    }
                    indentationWidth={25}
                  />
                ))}

              <DragOverlay>
                {activeId && activeItem && (
                  <SortableTreeItem
                    id={activeId}
                    depth={activeItem?.depth}
                    indentationWidth={25}
                  />
                )}
              </DragOverlay>
            </SortableContext>
          </div>
        ))}
      </div>
    </DndContext>
  );
};
