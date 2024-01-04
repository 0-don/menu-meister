"use client";
import { DragEndEvent, DragOverEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { proxy } from "valtio";

interface ItemGroups {
  [key: string]: UniqueIdentifier[];
}

export const INITIAL_DATA: ItemGroups = {
  group1: ["1", "2", "3"],
  group2: ["4", "5", "6"],
  group3: ["7", "8", "9"],
};

const Store = proxy({
  activeId: undefined as UniqueIdentifier | undefined,
  schedules: INITIAL_DATA,
  moveItem: (
    sourceId: string,
    sourceIndex: number,
    destinationId: string,
    destinationIndex: number,
  ) => {
    if (sourceId === destinationId) {
      Store.schedules[sourceId] = arrayMove(
        Store.schedules[sourceId],
        sourceIndex,
        destinationIndex,
      );
    } else {
      const item = Store.schedules[sourceId][sourceIndex];
      Store.schedules[sourceId].splice(sourceIndex, 1);
      Store.schedules[destinationId].splice(destinationIndex, 0, item);
    }
  },

  onDragOver: ({ active, over }: DragOverEvent) => {
    console.log(over?.id);
    const overId = over?.id;
    if (!overId) return;

    const activeContainer = active.data.current?.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || overId;
    const activeIndex = active.data.current?.sortable.index;
    const overIndex =
      over.data.current?.sortable.index ??
      Store.schedules[overContainer].length;

    if (activeContainer !== overContainer || activeIndex !== overIndex) {
      Store.moveItem(activeContainer, activeIndex, overContainer, overIndex);
    }
  },

  onDragEnd: ({ active, over }: DragEndEvent) => {
    const overId = over?.id;
    if (!overId) return;

    const activeContainer = active.data.current?.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || overId;
    const activeIndex = active.data.current?.sortable.index;
    const overIndex =
      over.data.current?.sortable.index ??
      Store.schedules[overContainer].length;

    Store.moveItem(activeContainer, activeIndex, overContainer, overIndex);
  },
});

export default Store;
