import TreeStore, { DaySchedule, FlatScheduleItem } from "@/store/TreeStore";
import { DndContext, UniqueIdentifier, closestCenter } from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

const SortableTreeItem: React.FC<{
  id: UniqueIdentifier;
  depth: number;
  item: FlatScheduleItem;
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

export const ASortableTree: React.FC = ({}) => {
  const treeStore = useSnapshot(TreeStore);

  useEffect(() => {
    TreeStore.flatSchedules = TreeStore.flatten(TreeStore.schedules).grouped;
  }, []);

  // const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>(
  //   undefined,
  // );
  // const [overId, setOverId] = useState<UniqueIdentifier | undefined>(undefined);
  // const [offsetLeft, setOffsetLeft] = useState(0);

  // const projected = TreeStore.getProjection(
  //   treeStore.flatSchedules,
  //   offsetLeft,
  //   activeId,
  //   overId,
  // );
  // const activeItem = TreeStore.flatten(TreeStore.schedules).all.find(
  //   ({ flatId }) => flatId === activeId,
  // );

  // console.log(JSON.parse(JSON.stringify(TreeStore.schedules)));

  // console.log(JSON.parse(JSON.stringify(treeStore.flatSchedules)));
  return (
    <DndContext
      collisionDetection={closestCenter}
      // onDragStart={({ active }) => {
      //   setActiveId(active.id);
      // }}
      // onDragCancel={() => setActiveId(undefined)}
      onDragMove={({ delta, active }) => {
        // setOffsetLeft(delta.x);
      }}
      onDragOver={({ over, active }) => {
        const overId = over?.id;

        if (!overId) {
          return;
        }

        const activeContainer =
          active.data.current?.sortable?.containerId ||
          TreeStore.parseFlatId(active.id)?.date;
        const overContainer =
          over.data.current?.sortable?.containerId ||
          TreeStore.parseFlatId(overId)?.date;

        if (activeContainer !== overContainer) {
          const activeDayIndex = TreeStore.schedules.findIndex(
            (s) => s.servingDate === activeContainer,
          );
          const overDayIndex = TreeStore.schedules.findIndex(
            (s) => s.servingDate === overContainer,
          );

          if (activeDayIndex === -1 || overDayIndex === -1) {
            return;
          }

          // Make a deep copy of schedules
          const updatedSchedules: DaySchedule[] = JSON.parse(
            JSON.stringify(treeStore.schedules),
          );

          // Extract the active schedule item
          const activeScheduleIndex = updatedSchedules[
            activeDayIndex
          ].schedules.findIndex((s) => s.id === active.id);
          const [activeScheduleItem] = updatedSchedules[
            activeDayIndex
          ].schedules.splice(activeScheduleIndex, 1);

          // Determine the insert index in the over day's schedules
          const overScheduleId = TreeStore.parseFlatId(overId).id;
          const overItemIndex = updatedSchedules[
            overDayIndex
          ].schedules.findIndex((s) => s.id === overScheduleId);

          // Insert the active item into the over day's schedule
          if (overItemIndex >= 0) {
            updatedSchedules[overDayIndex].schedules.splice(
              overItemIndex,
              0,
              activeScheduleItem,
            );
          } else {
            updatedSchedules[overDayIndex].schedules.push(activeScheduleItem);
          }
          // console.log(updatedSchedules);

          // Update the TreeStore schedules with the modified copy
          TreeStore.schedules = updatedSchedules;
        }
      }}
      onDragEnd={({ over, active }) => {
        // setActiveId(undefined);
      }}
    >
      <div className="flex gap-64">
        {Object.entries(treeStore.flatSchedules).map(([day, schedules]) => {
          const ids = schedules.map(({ flatId }) => flatId);
          return (
            <div
              key={day}
              className="border-2 p-2"
              style={{
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <div>{day}</div>
              <SortableContext items={ids} id={day}>
                {schedules.map((s) => (
                  <SortableTreeItem
                    key={s.flatId}
                    id={s.flatId}
                    depth={s.depth}
                    item={s}
                    indentationWidth={25}
                  />
                ))}
                {/* <DragOverlay>
                  {activeId && activeItem && (
                    <SortableTreeItem
                      id={activeId}
                      depth={activeItem?.depth}
                      indentationWidth={25}
                    />
                  )}
                </DragOverlay> */}
              </SortableContext>
            </div>
          );
        })}
      </div>
    </DndContext>
  );
};
