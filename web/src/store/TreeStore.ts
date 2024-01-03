"use client";

import { UniqueIdentifier } from "@dnd-kit/core";
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

export const INITIAL_DATA: DaySchedule[] = [
  {
    id: "day1",
    servingDate: "MONDAY",
    schedules: [
      {
        id: "schedule1",
        meal: {
          id: "meal1",
          name: "pizza",
        },
      },
      {
        id: "schedule2",
        meal: {
          id: "meal2",
          name: "bread",
        },
      },
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
];
export interface FlatScheduleItem extends Schedule {
  flatId: UniqueIdentifier;
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

const TreeStore = proxy({
  schedules: INITIAL_DATA as DaySchedule[],
  flatSchedules: [] as FlatScheduleItem[],

  getAllFlatten: (activeId?: UniqueIdentifier) => {
    const schedules = TreeStore.schedules
      .map((schedule) => TreeStore.flatten(schedule))
      .flat();
    const excludeParentIds = new Set<string>(
      activeId ? [activeId.toString()] : [],
    );
    const res = schedules.filter(
      ({ parentId }) => !parentId || !excludeParentIds.has(parentId.toString()),
    );

    return res;
  },
  parseFlatId: (flatId: UniqueIdentifier) => {
    const [id, date, mealId, groupIndex] = flatId.toString().split("#");
    return { id, date, mealId, groupIndex };
  },
  getScheduleItem: (flatId: UniqueIdentifier) => {
    const { id, date, mealId, groupIndex } = TreeStore.parseFlatId(flatId);

    console.log(id, date, mealId, groupIndex);
    const schedule = TreeStore.schedules.find((s) => s.servingDate === date);
    const scheduleItem = schedule?.schedules?.find((item) => item.id == id);

    console.log(schedule, scheduleItem);

    if (!scheduleItem) return { group: null, meal: null };

    let meal = null;
    let group = null;

    if (scheduleItem.group) {
      group = scheduleItem.group;
      meal = group.meals?.find((m) => m.id == mealId);
      if (meal) group = null;
    } else if (scheduleItem.meal) {
      meal = scheduleItem.meal;
    }

    return { group, meal };
  },
  buildTree: (flatItems: FlatScheduleItem[]): Schedule[] => {
    return [];
  },

  getProjection(
    items: FlatScheduleItem[],
    dragOffset: number,
    activeId?: UniqueIdentifier,
    overId?: UniqueIdentifier,
  ) {
    if (!activeId || !overId) return null;

    const activeItem = items.find(({ flatId }) => flatId === activeId);
    const overItemIndex = items.findIndex(({ flatId }) => flatId === overId);
    const depth = activeItem?.group ? 0 : dragOffset > 0 ? 1 : 0;
    const parentId =
      depth === 1
        ? items
            .slice(0, overItemIndex)
            .reverse()
            .find((item) => item.depth === 0)?.flatId || 0
        : 0;

    return { depth, parentId };
  },
  flatten: (day: DaySchedule): FlatScheduleItem[] => {
    return day.schedules.flatMap((item, groupIndex) => {
      const { meal, group, id } = item;

      if (group) {
        const groupFlatId = `${id}#${day.servingDate}#${group.id}`;
        const children =
          group.meals?.map((meal, mealIndex) => ({
            ...item,
            flatId: `${id}#${day.servingDate}#${meal.id}#${mealIndex}`,
            parentId: groupFlatId,
            index: mealIndex,
            depth: 1,
          })) || [];

        return [
          {
            ...item,
            flatId: groupFlatId,
            parentId: item.id,
            index: groupIndex,
            depth: 0,
          },
          ...children,
        ];
      }

      return {
        ...item,
        index: groupIndex,
        flatId: `${id}#${day.servingDate}#${meal?.id}`,
        parentId: item.id,
        depth: 0,
      };
    });
  },
});

export default TreeStore;
