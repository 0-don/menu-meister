import TreeStore, {
  DaySchedule,
  FlatScheduleItem,
  INITIAL_DATA,
} from "@/store/TreeStore";
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  closestCenter,
} from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

const SortableTreeItem: React.FC<{
  id: UniqueIdentifier;
  depth: number;
  indentationWidth: number;
  item: FlatScheduleItem;
}> = (props) => {
  const treeStore = useSnapshot(TreeStore);
  const { listeners, setDraggableNodeRef, setDroppableNodeRef, transform } =
    useSortable({ id: props.id });

  const item = treeStore.getScheduleItem(props.id);

  console.log(item);

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
        {props.item.group
          ? `${props.item.group.name}#${props.item.group.id}`
          : `${props.item.meal?.name}#${props.item.meal?.id}`}
      </div>
    </li>
  );
};

export const SortableTree: React.FC = ({}) => {
  const treeStore = useSnapshot(TreeStore);
  const [items, setItems] = useState<DaySchedule[]>(INITIAL_DATA);

  useEffect(() => {
    TreeStore.flatSchedules = treeStore.schedules.flatMap(TreeStore.flatten);
  }, []);

  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>(
    undefined,
  );
  const [overId, setOverId] = useState<UniqueIdentifier | undefined>(undefined);
  const [offsetLeft, setOffsetLeft] = useState(0);

  const projected = TreeStore.getProjection(
    treeStore.flatSchedules,
    offsetLeft,
    activeId,
    overId,
  );
  const activeItem = treeStore.flatSchedules.find(
    ({ flatId }) => flatId === activeId,
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={({ active }) => {
        setActiveId(active.id);
        setOverId(active.id);
      }}
      onDragMove={({ delta, active }) => {
        setOffsetLeft(delta.x);
      }}
      onDragOver={({ over, active }) => {
        setOverId(over?.id);
      }}
      onDragEnd={({ over, active }) => {
        setActiveId(undefined);
      }}
    >
      <div className="flex gap-64">
        {items.map((schedule) => {
          const flatSchedules = TreeStore.flatten(schedule);
          const ids = flatSchedules.map(({ flatId }) => flatId);
          return (
            <div
              key={schedule.id}
              className="border-2 p-2"
              style={{
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <div>{schedule.servingDate}</div>
              <SortableContext items={ids} id={schedule.servingDate}>
                {flatSchedules.map((s) => (
                  <SortableTreeItem
                    key={s.flatId}
                    id={s.flatId}
                    item={s}
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
                      item={activeItem}
                      depth={activeItem?.depth}
                      indentationWidth={25}
                    />
                  )}
                </DragOverlay>
              </SortableContext>
            </div>
          );
        })}
      </div>
    </DndContext>
  );
};
