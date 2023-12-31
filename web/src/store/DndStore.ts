"use client";

import { GetAllMealSchedulesAdminQuery } from "@/gql/graphql";
import { UniqueIdentifier } from "@dnd-kit/core";
import { proxy } from "valtio";

export type Schedule = NonNullable<
  GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"]
>[0];
export type ScheduleItem = NonNullable<Schedule["scheduledMeals"]>[0];

export type GetAllMealSchedulesAdminQuer = {
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
  getScheduleItem: (flatId: UniqueIdentifier) => {
    const item = DndStore.flatSchedules.find((item) => item.flatId === flatId);
    const [type, id, date] = item?.flatId?.toString().split("-") || [];
    const schedule = DndStore.schedules
      .find((schedule) => schedule.servingDate === date)
      ?.scheduledMeals?.map((item) => item?.mealGroup?.meals || [item.meal])
      .flat();
    if (Array.isArray(schedule)) {
      return schedule.find((item) => item?.id === id);
    } else {
      return schedule;
    }
  },
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
    const result = (schedule.scheduledMeals || []).flatMap(
      (item, groupIndex) => {
        const { meal, mealGroup } = item;

        if (mealGroup) {
          const groupFlatId = `mealGroup-${mealGroup.id}-${schedule.servingDate}-${groupIndex}`;
          const children =
            mealGroup.meals?.map((meal, mealIndex) => ({
              ...item,
              flatId: `meal-${meal.id}-${schedule.servingDate}-${groupIndex}-${mealIndex}`,
              parentId: groupFlatId,
              date: schedule.servingDate,
              index: mealIndex,
              depth: depth + 1,
            })) || [];

          return [
            {
              ...item,
              flatId: groupFlatId,
              date: schedule.servingDate,
              parentId,
              index: groupIndex,
              depth,
            },
            ...children,
          ];
        }

        return {
          ...item,
          index: groupIndex,
          date: schedule.servingDate,
          flatId: `meal-${meal?.id}-${schedule.servingDate}-${groupIndex}`,
          parentId,
          depth,
        };
      },
    );

    return result;
  },
});

export default DndStore;
