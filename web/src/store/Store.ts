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
  moveBetweenContainers: (
    items: ItemGroups,
    activeContainer: string,
    activeIndex: number,
    overContainer: string,
    overIndex: number,
    item: UniqueIdentifier,
  ) => ({
    ...items,
    [activeContainer]: [
      ...items[activeContainer].slice(0, activeIndex),
      ...items[activeContainer].slice(activeIndex + 1),
    ],
    [overContainer]: [
      ...items[overContainer].slice(0, overIndex),
      item,
      ...items[overContainer].slice(overIndex),
    ],
  }),
  onDragOver: ({ active, over }: DragOverEvent) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current?.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || over.id;

    if (activeContainer !== overContainer) {
      const activeIndex = active.data.current?.sortable.index;
      const overIndex =
        over.id in Store.schedules
          ? Store.schedules[overContainer].length + 1
          : over.data.current?.sortable.index;
      Store.schedules = Store.moveBetweenContainers(
        Store.schedules,
        activeContainer,
        activeIndex,
        overContainer,
        overIndex,
        active.id,
      );
    }
  },
  onDragEnd: ({ active, over }: DragEndEvent) => {
    if (!over) {
      Store.activeId = undefined;
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current?.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current?.sortable.index;
      const overIndex =
        over.id in Store.schedules
          ? Store.schedules[overContainer].length + 1
          : over.data.current?.sortable.index;

      let newItems;
      if (activeContainer === overContainer) {
        newItems = {
          ...Store.schedules,
          [overContainer]: arrayMove(
            Store.schedules[overContainer],
            activeIndex,
            overIndex,
          ),
        };
      } else {
        newItems = Store.moveBetweenContainers(
          Store.schedules,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id,
        );
      }
      Store.schedules = newItems;
    }

    Store.activeId = undefined;
  },
});

export default Store;
