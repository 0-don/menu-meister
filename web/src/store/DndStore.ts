"use client";

import { UniqueIdentifier } from "@dnd-kit/core";
import { proxy } from "valtio";

export type Schedule = NonNullable<
  GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"]
>[0];
export type ScheduleItem = NonNullable<Schedule["scheduledMeals"]>[0];

export type GetAllMealSchedulesAdminQuery = {
  getAllMealSchedulesAdmin?: Array<{
    id: string;
    servingDate: any;
    createdAt: any;
    updatedAt: any;
    scheduledMeals?: Array<{
      id: string;
      mealGroupId?: number | null;
      mealId?: number | null;
      createdAt: any;
      updatedAt: any;
      meal?: {
        id: string;
        name: string;
        description?: string | null;
        image?: string | null;
      } | null;
      mealGroup?: {
        id: string;
        name: string;
        description?: string | null;
        meals?: Array<{
          id: string;
          name: string;
          description?: string | null;
          image?: string | null;
        }> | null;
      } | null;
    }> | null;
  }> | null;
};

export interface FlatScheduleItem extends ScheduleItem {
  flatId: UniqueIdentifier;
  parentId: UniqueIdentifier | null;
  depth: number;
  date: string;
  index: number;
}

const DndStore = proxy({
  schedules: [] as Schedule[],
  flatSchedules: [] as FlatScheduleItem[],
  groupedFlatSchedules: {} as { [key: string]: FlatScheduleItem[] },
  getAllFlatten: (activeId?: UniqueIdentifier) => {
    const schedules = DndStore.schedules
      .map((schedule) => DndStore.flatten(schedule))
      .flat();
    const excludeParentIds = new Set<string>(
      activeId ? [activeId.toString()] : [],
    );
    const res = schedules.filter(
      ({ parentId }) => !parentId || !excludeParentIds.has(parentId.toString()),
    );

    DndStore.groupedFlatSchedules = res.reduce(
      (acc, item) => {
        const { date } = DndStore.parseFlatId(item.flatId);
        const group = acc[date] || [];
        group.push(item);
        acc[date] = group;
        return acc;
      },
      {} as { [key: string]: FlatScheduleItem[] },
    );

    return res;
  },
  parseFlatId: (flatId: UniqueIdentifier) => {
    const [id, date, mealId, groupIndex] = flatId.toString().split("#");
    return { id, date, mealId, groupIndex };
  },
  getScheduleItem: (flatId: UniqueIdentifier) => {
    const { id, date, mealId, groupIndex } = DndStore.parseFlatId(flatId);
    const schedule = DndStore.schedules.find((s) => s.servingDate === date);
    const scheduleItem = schedule?.scheduledMeals?.find(
      (item) => item.id == id,
    );

    if (!scheduleItem) return { group: null, meal: null };

    let meal = null;
    let group = null;

    if (scheduleItem.mealGroup) {
      group = scheduleItem.mealGroup;
      meal = group.meals?.find((m) => m.id == mealId);
      if (meal) group = null;
    } else if (scheduleItem.meal) {
      meal = scheduleItem.meal;
    }

    return { group, meal };
  },
  buildTree: (flatItems: FlatScheduleItem[]): Schedule[] => {
    // Creating a map to hold the items by their parent ID

    // const itemMap = new Map<UniqueIdentifier, FlatScheduleItem[]>();

    // // Filling the map with items, grouped by their parent ID
    // flatItems.forEach((item) => {
    //   const key = item.parentId || "root";
    //   const items = itemMap.get(key) || [];
    //   items.push(item);
    //   itemMap.set(key, items);
    // });

    // // Function to recursively build the tree structure
    // const buildHierarchy = (
    //   parentId: UniqueIdentifier | null,
    // ): ScheduleItem[] => {
    //   return itemMap.get(parentId || "root") || [];
    // };

    // // Starting the tree building process with root items (depth === 0)
    // const schedules: Schedule[] = flatItems
    //   .filter((item) => item.depth === 0)
    //   .map((rootItem) => {
    //     const scheduledMeals = buildHierarchy(rootItem.flatId);
    //     return {
    //       ...rootItem,
    //       servingDate: rootItem.date, // Add the servingDate property
    //       scheduledMeals: scheduledMeals.length > 0 ? scheduledMeals : null,
    //     };
    //   });

    return [];
  },
  flatten: (
    schedule: Schedule,
    parentId: UniqueIdentifier | null = null,
  ): FlatScheduleItem[] => {
    const result = (schedule.scheduledMeals || []).flatMap(
      (item, groupIndex) => {
        const { meal, mealGroup, id } = item;

        if (mealGroup) {
          const groupFlatId = `${id}#${schedule.servingDate}`;
          const children =
            mealGroup.meals?.map((meal, mealIndex) => ({
              ...item,
              flatId: `${id}#${schedule.servingDate}#${meal.id}#${mealIndex}`,
              parentId: groupFlatId,
              date: schedule.servingDate,
              index: mealIndex,
              depth: 1,
            })) || [];

          return [
            {
              ...item,
              flatId: groupFlatId,
              date: schedule.servingDate,
              parentId,
              index: groupIndex,
              depth: 0,
            },
            ...children,
          ];
        }

        return {
          ...item,
          index: groupIndex,
          date: schedule.servingDate,
          flatId: `${id}#${schedule.servingDate}#${meal?.id}`,
          parentId,
          depth: 0,
        };
      },
    );

    return result;
  },
});

export default DndStore;
