"use client";

import DashboardStore from "@/store/DashboardStore";
import Store, {
  Group,
  GroupItem,
  GroupedSchedulesItem,
  Meal,
} from "@/store/Store";
import { debounce } from "@/utils/constants";
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCallback, useEffect } from "react";
import { useSnapshot } from "valtio";

export const Backup3 = () => {
  const dashboardStore = useSnapshot(DashboardStore);
  const { schedules, schedulesIds, regroupSchedules } = useSnapshot(Store);

  useEffect(regroupSchedules, [dashboardStore.daysThatWeek]);

  return (
    <DndContext
      onDragStart={({ active }) => (Store.activeId = active.id)}
      onDragCancel={() => (Store.activeId = undefined)}
      onDragOver={useCallback(debounce(Store.onDragOver, 0), [])}
      onDragEnd={Store.onDragEnd}
    >
      <div className="flex space-x-5">
        {Object.keys(schedules).map((group) => (
          <Droppable
            id={group}
            ids={schedulesIds[group]}
            items={schedules[group]}
            activeId={Store.activeId}
            key={group}
          />
        ))}
      </div>
      <DragOverlay>
        {Store.activeId && <Item id={Store.activeId} />}
      </DragOverlay>
    </DndContext>
  );
};

const Droppable = ({
  id,
  items,
  ids,
}: {
  id: string;
  ids: UniqueIdentifier[];
  items: GroupedSchedulesItem[];
  activeId?: UniqueIdentifier;
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={ids} strategy={rectSortingStrategy}>
      <ul
        className="droppable min-w-[110px] list-none rounded-md border border-black p-[20px_10px]"
        ref={setNodeRef}
      >
        {items.map((item, i) => {
          if (typeof item === "string")
            return <SortableItem key={item} id={item} />;
          if (typeof item === "object")
            return <SortableGroup key={item.groupId} group={item} />;
          return <></>;
        })}
      </ul>
    </SortableContext>
  );
};

const SortableGroup = ({ group }: { group: GroupItem }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: group.groupId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="text-green-500"
    >
      <p>{group.groupId}</p>
      <div className="ml-5">
        {group.items.map((item) => (
          <SortableItem key={item} id={item} />
        ))}
      </div>
    </li>
  );
};

const SortableItem = ({ id }: { id: UniqueIdentifier }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const item = Store.getItem(id);

  return (
    <li style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <Item id={id} item={item} />
    </li>
  );
};

const Item = ({
  id,
  dragOverlay,
  item,
}: {
  id: UniqueIdentifier;
  dragOverlay?: boolean;
  item?: Meal | Group | null;
}) => {
  if (!id) return null;
  item = item ?? Store.getItem(id);
  const { groupIndex } = Store.parseId(id);
  return (
    <div
      className={`${
        dragOverlay ? "cursor-grabbing" : "cursor-grab"
      }  mb-[5px] box-border flex h-[30px] w-[110px] select-none items-center rounded-md border border-gray-300 pl-[5px]`}
    >
      {item?.name}
    </div>
  );
};
