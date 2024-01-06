"use client";
import { DragEndEvent, DragOverEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import dayjs from "dayjs";
import { proxy } from "valtio";
import DashboardStore from "./DashboardStore";

export interface DaySchedule {
  id: UniqueIdentifier;
  servingDate: string;
  schedules: Schedule[];
}

export interface Schedule {
  id: UniqueIdentifier;
  meal?: Meal;
  group?: Group;
}

export interface Group {
  id: UniqueIdentifier;
  name: string;
  meals: Meal[];
}

export interface Meal {
  id: UniqueIdentifier;
  name: string;
}

export const INITIAL_DATAS: DaySchedule[] = [
  {
    id: "day1",
    servingDate: "2024-01-01",
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
    servingDate: "2024-01-04",
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

const xxx = proxy({
  activeId: undefined as UniqueIdentifier | undefined,
  initialSchedules: INITIAL_DATAS,
  schedules: {} as {
    [key: string]: (string | { groupId: string; items: string[] })[];
  },
  getItem: (uniqueId: UniqueIdentifier): Meal | Group | null => {
    if (!uniqueId) return null;
    const { id, date, mealId, groupIndex } = xxx.parseId(uniqueId);

    const daySchedule = xxx.initialSchedules.find(
      ({ servingDate }) => !dayjs(servingDate).diff(date, "day"),
    );
    if (!daySchedule) return null;
    const schedule = daySchedule.schedules.find(
      ({ id: scheduleId }) => id === scheduleId,
    );
    if (!schedule) return null;

    if (schedule.meal) return schedule.meal;

    if (schedule.group?.id === mealId) return schedule.group;

    if (schedule.group?.meals[parseInt(groupIndex)]) {
      return schedule.group.meals[parseInt(groupIndex)];
    }
    return null;
  },
  parseId: (uniqueId: UniqueIdentifier) => {
    const [id, date, mealId, groupIndex] = uniqueId.toString().split("#");
    return { id, date, mealId, groupIndex };
  },
  regroupSchedules: () => {
    const newGroupedSchedules: { [key: string]: string[] } = {};

    DashboardStore.daysThatWeek.forEach(
      (day) => (newGroupedSchedules[dayjs(day).format("YYYY-MM-DD")] = []),
    );

    xxx.initialSchedules.forEach(({ schedules, servingDate }) => {
      const key = dayjs(servingDate).format("YYYY-MM-DD");
      if (!newGroupedSchedules.hasOwnProperty(key)) return;

      newGroupedSchedules[key] = schedules.flatMap((schedule) => {
        if (schedule.group) {
          const groupIds = schedule.group.meals.map(
            (meal, mealIndex) =>
              `${schedule.id}#${key}#${meal.id}#${mealIndex}`,
          );
          return [`${schedule.id}#${key}#${schedule.group.id}`, ...groupIds];
        }
        return `${schedule.id}#${key}#${schedule.meal?.id}`;
      });
    });

    xxx.schedules = newGroupedSchedules;
  },
  moveItem: (
    sourceId: string,
    sourceIndex: number,
    destinationId: string,
    destinationIndex: number,
  ) => {
    if (sourceId === destinationId) {
      xxx.schedules[sourceId] = arrayMove(
        xxx.schedules[sourceId],
        sourceIndex,
        destinationIndex,
      );
    } else {
      const item = xxx.schedules[sourceId][sourceIndex];
      xxx.schedules[sourceId].splice(sourceIndex, 1);
      xxx.schedules[destinationId].splice(destinationIndex, 0, item);
    }
  },

  onDragOver: ({ active, over }: DragOverEvent) => {
    const overId = over?.id;
    if (!overId) return;

    const activeContainer = active.data.current?.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || overId;
    const activeIndex = active.data.current?.sortable.index;
    const overIndex =
      over.data.current?.sortable.index ??
      xxx.schedules[overContainer].length;

    if (activeContainer !== overContainer || activeIndex !== overIndex) {
      xxx.moveItem(activeContainer, activeIndex, overContainer, overIndex);
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
      xxx.schedules[overContainer].length;

    xxx.moveItem(activeContainer, activeIndex, overContainer, overIndex);
  },
});

export default xxx;
