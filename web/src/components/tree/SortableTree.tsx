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

  const activeItem = items.find(({ flatId }) => flatId === activeId);
  const overItemIndex = items.findIndex(({ flatId }) => flatId === overId);
  const depth = activeItem?.mealGroup ? 0 : dragOffset > 0 ? 1 : 0;
  const parentId =
    depth === 1
      ? items
          .slice(0, overItemIndex)
          .reverse()
          .find((item) => item.depth === 0)?.flatId || 0
      : 0;

  return { depth, parentId };
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
      <div className="flex gap-20">
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
