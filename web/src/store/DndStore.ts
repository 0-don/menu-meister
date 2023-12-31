"use client";

import { GetAllMealSchedulesAdminQuery } from "@/gql/graphql";
import { UniqueIdentifier } from "@dnd-kit/core";
import { proxy } from "valtio";

export type Schedule = NonNullable<
  GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"]
>[0];
export type ScheduleItem = NonNullable<Schedule["scheduledMeals"]>[0];

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
  getAllFlatten: (activeId?: UniqueIdentifier) => {
    const res = DndStore.schedules
      .map((schedule) => DndStore.flatten(schedule))
      .flat();
    const excludeParentIds = new Set<string>(
      activeId ? [activeId.toString()] : [],
    );
    return res.filter(
      ({ parentId }) => !parentId || !excludeParentIds.has(parentId.toString()),
    );
  },
  getScheduleItem: (flatId: UniqueIdentifier) =>
    DndStore.flatSchedules.find((item) => item.flatId === flatId),
  buildTree: (flattItems: FlatScheduleItem[]): Schedule[] => {
    flattItems
      .filter((item) => item.depth === 0)
      .map((rootItem) => ({
        ...rootItem,
        children: flattItems.filter((child) => child.parentId === rootItem.id),
      }));

    return [];
  },
  flatten: (
    schedule: Schedule,
    parentId: UniqueIdentifier | null = null,
    depth = 0,
  ): FlatScheduleItem[] => {
    const result = (schedule.scheduledMeals || [])
      ?.map((item, index) => {
        const { meal, mealGroup } = item;
        if (mealGroup) {
          parentId = `mealGroup-${mealGroup.id}-${mealGroup?.name}-${schedule.servingDate}`;
          const children = mealGroup.meals?.map((meal, index) => ({
            ...item,
            flatId: `meal-${mealGroup.id}-${meal.name}-${schedule.servingDate}`,
            parentId,
            date: schedule.servingDate,
            index,
            depth: 1,
          }));
          return [
            {
              ...item,
              flatId: parentId,
              date: schedule.servingDate,
              parentId: null,
              index,
              depth,
            },
            ...children!,
          ];
        }

        return [
          {
            ...item,
            index,
            date: schedule.servingDate,
            flatId: `meal-${meal?.id}-${meal?.name}-${schedule.servingDate}`,
            parentId,
            depth,
          },
        ];
      })
      .flat();

    return result;
  },
});

export default DndStore;
