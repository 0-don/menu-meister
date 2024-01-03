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

export interface FlatScheduleItem extends Schedule {
  flatId: UniqueIdentifier;
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
}

export interface GroupedFlatScheduleItem {
  [key: string]: FlatScheduleItem[];
}

const TreeStore = proxy({
  schedules: INITIAL_DATA as DaySchedule[],
  flatSchedules: {} as GroupedFlatScheduleItem,

  getAllFlatten: (activeId?: UniqueIdentifier) => {
    const schedules = TreeStore.flatten(TreeStore.schedules).all;
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

    const schedule = TreeStore.schedules.find((s) => s.servingDate === date);
    const scheduleItem = schedule?.schedules?.find((item) => item.id == id);

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
  flatten: (
    days: DaySchedule[],
  ): { grouped: GroupedFlatScheduleItem; all: FlatScheduleItem[] } => {
    let groupedByDay: GroupedFlatScheduleItem = {};
    let allItems: FlatScheduleItem[] = [];

    days.forEach((day) => {
      day.schedules.forEach((schedule, index) => {
        if (schedule.group) {
          // Handling a group of meals
          const groupFlatId = `${schedule.id}#${day.servingDate}#${schedule.group.id}`;
          const groupItem: FlatScheduleItem = {
            ...schedule,
            flatId: groupFlatId,
            parentId: null,
            depth: 0,
            index,
          };

          if (!groupedByDay[day.servingDate]) {
            groupedByDay[day.servingDate] = [];
          }
          groupedByDay[day.servingDate].push(groupItem);
          allItems.push(groupItem);

          // Processing each meal in the group
          schedule.group.meals.forEach((meal, mealIndex) => {
            const mealFlatScheduleItem: FlatScheduleItem = {
              id: meal.id,
              meal,
              flatId: `${schedule.id}#${day.servingDate}#${meal.id}`,
              parentId: groupFlatId,
              depth: 1,
              index: mealIndex,
            };
            groupedByDay[day.servingDate].push(mealFlatScheduleItem);
            allItems.push(mealFlatScheduleItem);
          });
        } else if (schedule.meal) {
          // Handling a single meal
          const singleMealFlatId = `${schedule.id}#${day.servingDate}`;
          const singleMealItem: FlatScheduleItem = {
            ...schedule,
            flatId: singleMealFlatId,
            parentId: null,
            depth: 0,
            index,
          };

          if (!groupedByDay[day.servingDate]) {
            groupedByDay[day.servingDate] = [];
          }
          groupedByDay[day.servingDate].push(singleMealItem);
          allItems.push(singleMealItem);
        }
      });
    });

    return { grouped: groupedByDay, all: allItems };
  },
});

export default TreeStore;
