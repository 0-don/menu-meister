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

export type GroupedSchedules = {
  [key: string]: GroupedSchedulesItem[];
};

export type GroupedScheduleIds = {
  [key: string]: string[];
};

export type GroupedSchedulesItem =
  | string
  | { groupId: string; items: string[] };

export type GroupItem = { groupId: string; items: string[] };

export const INITIAL_DATAS: DaySchedule[] = [
  {
    id: "day1",
    servingDate: "2024-01-08",
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
    servingDate: "2024-01-10",
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

const Store = proxy({
  activeId: undefined as UniqueIdentifier | undefined,
  initialSchedules: INITIAL_DATAS,
  schedules: {} as GroupedSchedules,
  schedulesIds: {} as GroupedScheduleIds,
  getItem: (uniqueId: UniqueIdentifier): Meal | Group | null => {
    if (!uniqueId) return null;
    const { id, date, mealId, groupIndex } = Store.parseId(uniqueId);

    const daySchedule = Store.initialSchedules.find(
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
    const newGroupedSchedulesIds: GroupedScheduleIds = {};
    const newGroupedSchedules: GroupedSchedules = {};

    DashboardStore.daysThatWeek.forEach((day) => {
      const formattedDay = dayjs(day).format("YYYY-MM-DD");
      newGroupedSchedulesIds[formattedDay] = [];
      newGroupedSchedules[formattedDay] = [];
    });

    // Loop through each initial schedule and organize them
    Store.initialSchedules.forEach(({ schedules, servingDate }) => {
      const formattedDate = dayjs(servingDate).format("YYYY-MM-DD");
      if (!newGroupedSchedulesIds.hasOwnProperty(formattedDate)) return;

      schedules.forEach((schedule) => {
        if (schedule.group) {
          const groupItems = schedule.group.meals.map(
            (meal, index) =>
              `${schedule.id}#${formattedDate}#${meal.id}#${index}`,
          );
          const groupObject = {
            groupId: `${schedule.id}#${formattedDate}#${schedule.group.id}`,
            items: groupItems,
          };
          newGroupedSchedules[formattedDate].push(groupObject);
          newGroupedSchedulesIds[formattedDate].push(groupObject.groupId);
        } else if (schedule.meal) {
          const scheduleId = `${schedule.id}#${formattedDate}#${schedule.meal.id}`;
          newGroupedSchedulesIds[formattedDate].push(scheduleId);
          newGroupedSchedules[formattedDate].push(scheduleId);
        }
      });
    });

    Store.schedulesIds = newGroupedSchedulesIds;
    Store.schedules = newGroupedSchedules;
  },
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
