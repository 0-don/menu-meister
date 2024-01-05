"use client";
import { DragEndEvent, DragOverEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { proxy } from "valtio";

export interface DaySchedule {
  id: UniqueIdentifier;
  servingDate: string;
  schedules: Schedule[];
}

export interface Schedule {
  id: UniqueIdentifier;
  meal?: Meal;
  group?: {
    id: UniqueIdentifier;
    name: string;
    meals: Meal[];
  };
}

export interface Meal {
  id: UniqueIdentifier;
  name: string;
}

export const INITIAL_DATAS: DaySchedule[] = [
  {
    id: "day1",
    servingDate: "MONDAY",
    schedules: [
      { id: "schedule1", meal: { id: "meal1", name: "pizza" } },
      { id: "schedule2", meal: { id: "meal2", name: "bread" } },
      {
        id: "schedule3",
        group: {
          id: "group1",
          name: "breakfast",
          meals: [
            { id: "meal3", name: "tea" },
            { id: "meal4", name: "sandwich" },
          ],
        },
      },
    ],
  },
  {
    id: "day2",
    servingDate: "TUESDAY",
    schedules: [
      { id: "schedule4", meal: { id: "meal5", name: "pasta" } },
      { id: "schedule5", meal: { id: "meal6", name: "salad" } },
      {
        id: "schedule6",
        group: {
          id: "group2",
          name: "lunch",
          meals: [
            { id: "meal7", name: "soup" },
            { id: "meal8", name: "burger" },
          ],
        },
      },
    ],
  },
];

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
