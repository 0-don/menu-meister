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
    const [id, date, mealId, groupIndex] = flatId.toString().split("#");
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
