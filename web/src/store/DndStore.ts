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
  index: number;
}

const DndStore = proxy({
  schedules: [] as Schedule[],
  flatSchedules: [] as FlatScheduleItem[],
  
  getAllFlatten: () =>
    DndStore.schedules.map((schedule) => DndStore.flatten(schedule)).flat(),
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
            index,
            depth: 1,
          }));
          return [
            {
              ...item,
              flatId: parentId,
              parentId,
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
