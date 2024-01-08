import { DragEndEvent, DragOverEvent, UniqueIdentifier } from "@dnd-kit/core";
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
  [key: string]: ItemType[];
};

export type GroupedScheduleIds = {
  [key: string]: string[];
};

export type ItemType = {
  id: UniqueIdentifier;
  parent?: UniqueIdentifier;
  container?: boolean;
};

export type DataType = {
  items: ItemType[];
};

export type GroupItem = { groupId: string; items: string[] };

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

export const PLACEHOLDER_KEY = "!";

const TableStore = proxy({
  activeId: undefined as UniqueIdentifier | undefined,
  initialSchedules: INITIAL_DATAS,
  schedules: {} as GroupedSchedules,
  schedulesIds: {} as GroupedScheduleIds,
  getItem: (uniqueId: UniqueIdentifier): Meal | Group | null | undefined => {
    if (!uniqueId) return null;
    const { id, date, mealId, groupIndex } = TableStore.parseId(uniqueId);

    const daySchedule = TableStore.initialSchedules.find(
      ({ servingDate }) => !dayjs(servingDate).diff(date, "day"),
    );
    if (!daySchedule) return null;

    const schedule = daySchedule.schedules.find(
      ({ id: scheduleId }) => id === scheduleId,
    );
    if (!schedule) return null;

    return (
      schedule.meal ??
      (schedule.group?.id === mealId
        ? schedule.group
        : schedule.group?.meals[parseInt(groupIndex)])
    );
  },
  parseId: (uniqueId?: UniqueIdentifier) => {
    const [id, date, mealId, groupIndex] =
      uniqueId?.toString().split("#") ?? [];
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
    TableStore.initialSchedules.forEach(({ schedules, servingDate }) => {
      const formattedDate = dayjs(servingDate).format("YYYY-MM-DD");
      if (!newGroupedSchedulesIds.hasOwnProperty(formattedDate)) return;

      schedules.forEach((schedule) => {
        if (schedule.group) {
          const groupObject = {
            id: `${schedule.id}#${formattedDate}#${schedule.group.id}`,
            container: true,
          };
          const groupItems = schedule.group.meals.map((meal, index) => ({
            id: `${schedule.id}#${formattedDate}#${meal.id}#${index}`,
            parent: groupObject.id,
          }));

          newGroupedSchedules[formattedDate].push(groupObject, ...groupItems);
          newGroupedSchedulesIds[formattedDate].push(groupObject.id);
        } else if (schedule.meal) {
          const meal = {
            id: `${schedule.id}#${formattedDate}#${schedule.meal.id}`,
          };
          newGroupedSchedulesIds[formattedDate].push(meal.id);
          newGroupedSchedules[formattedDate].push(meal);
        }
      });
    });

    TableStore.schedulesIds = newGroupedSchedulesIds;
    TableStore.schedules = newGroupedSchedules;
  },

  // ###########################################################

  findItem: (id?: UniqueIdentifier) => {
    if (!id) return;
    const { date } = TableStore.parseId(id!);
    return TableStore.schedules[date].find((item) => item.id === id);
  },
  getItems: (parent?: UniqueIdentifier) => {
    if (!parent) return;
    const { date } = TableStore.parseId(parent!);
    return TableStore.schedules[date].filter((item) => item.parent === parent);
  },
  isContainer: (id?: UniqueIdentifier) => !!TableStore.findItem(id)?.container,
  getItemIds: (parent?: UniqueIdentifier) =>
    TableStore.getItems(parent)?.map((item) => item.id),
  findParent: (id?: UniqueIdentifier) => TableStore.findItem(id)?.parent,

  // ###########################################################

  handleFooterAreaDrag(activeItem: ItemType, overIdStr: string) {
    const containerId = overIdStr.split(PLACEHOLDER_KEY).at(0);
    if (!containerId) return;
    const { date: overDate } = TableStore.parseId(containerId);
    const { date: activeDate } = TableStore.parseId(activeItem.id);

    TableStore.schedules[activeDate] = TableStore.schedules[activeDate].filter(
      (item) => item.id !== activeItem.id,
    );
    const overIndex = TableStore.schedulesIds[overDate].findIndex(
      (id) => id === containerId,
    );
    TableStore.schedules[overDate].splice(overIndex + 1, 0, {
      ...activeItem,
      container: undefined,
      parent: undefined,
    });
  },

  onDragOver: ({ active, over }: DragOverEvent) => {
    const overParent = TableStore.findParent(over?.id);
    const overIsContainer = TableStore.isContainer(over?.id);

    const activeItem = TableStore.findItem(active.id);
    const overItem = TableStore.findItem(over?.id);

    if (!activeItem) return;

    if (activeItem?.container && overItem?.container) {
      return;
    }

    // Check if dragging over a footer area of a container
    if (
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(active.id)
    ) {
      return TableStore.handleFooterAreaDrag(activeItem, over?.id as string);
    }

    const { date: overDate } = TableStore.parseId(overItem?.id);
    const { date: activeDate } = TableStore.parseId(activeItem.id);

    TableStore.schedules[activeDate] = TableStore.schedules[activeDate].filter(
      (item) => item.id !== activeItem.id,
    );

    const overIndex = TableStore.schedules[activeDate].findIndex(
      (item) => item.id === over?.id,
    );

    let newIndex = overIndex;
    const isBelowLastItem =
      over &&
      overIndex === TableStore.schedules[activeDate].length - 1 &&
      active.rect.current.initial!.top > over.rect.top + over.rect.height;

    const modifier = isBelowLastItem ? 1 : 0;
    newIndex =
      overIndex >= 0
        ? overIndex + modifier
        : TableStore.schedules[activeDate].length + 1;
    let nextParent = overIsContainer ? over?.id : overParent;

    TableStore.schedules[overDate].splice(overIndex + 1, 0, {
      ...activeItem,
      parent: nextParent,
      container: undefined,
    });
  },
  onDragEnd: ({ active, over }: DragEndEvent) => {
    const activeItem = TableStore.findItem(active.id);
    if (!activeItem) {
      TableStore.activeId = undefined;
      return;
    }

    if (
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(active.id)
    ) {
      TableStore.handleFooterAreaDrag(activeItem, over?.id as string);
      TableStore.activeId = undefined;
      return;
    }

    // Remove the active item from its original position
    const { date: activeDate } = TableStore.parseId(activeItem.id);
    TableStore.schedules[activeDate] = TableStore.schedules[activeDate].filter(
      (item) => item.id !== activeItem.id,
    );

    // Insert the active item at the new position
    if (over) {
      const { date: overDate } = TableStore.parseId(over.id);
      const overIndex = TableStore.schedules[overDate].findIndex(
        (item) => item.id === over.id,
      );

      let newIndex =
        overIndex >= 0 ? overIndex : TableStore.schedules[overDate].length;
      TableStore.schedules[overDate].splice(newIndex, 0, activeItem);
    }

    TableStore.activeId = undefined;
  },
});

export default TableStore;
