import {
  GroupedSchedules,
  INITIAL_DATAS,
  ItemType,
  Meal,
} from "@/utils/constants";
import { DragEndEvent, DragOverEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import dayjs from "dayjs";
import { Group } from "next/dist/shared/lib/router/utils/route-regex";
import { proxy } from "valtio";
import DashboardStore from "./DashboardStore";

export const PLACEHOLDER_KEY = "!";

const TableStore = proxy({
  activeId: undefined as UniqueIdentifier | undefined,
  initialSchedules: INITIAL_DATAS,
  schedules: {} as GroupedSchedules,
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
    const newGroupedSchedules: GroupedSchedules = {};

    DashboardStore.daysThatWeek.forEach((day) => {
      const formattedDay = dayjs(day).format("YYYY-MM-DD");
      newGroupedSchedules["2024-01-08"] = [];
    });

    // Loop through each initial schedule and organize them
    TableStore.initialSchedules.forEach(({ schedules, servingDate }) => {
      const formattedDate = dayjs(servingDate).format("YYYY-MM-DD");
      if (!newGroupedSchedules.hasOwnProperty(formattedDate)) return;

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
        } else if (schedule.meal) {
          newGroupedSchedules[formattedDate].push({
            id: `${schedule.id}#${formattedDate}#${schedule.meal.id}`,
          });
        }
      });
    });

    TableStore.schedules = newGroupedSchedules;
  },

  // ###########################################################

  findItem: (id?: UniqueIdentifier) => {
    if (!id) return;
    const { date } = TableStore.parseId(id!);
    return TableStore.schedules[date].find((item) => item.id === id);
  },
  getItems: ({ key, parent }: { key?: string; parent?: UniqueIdentifier }) => {
    if (!parent && !key) return;

    if (parent) {
      const { date } = TableStore.parseId(parent!);
      return TableStore.schedules[date].filter(
        (item) => item.parent === parent,
      );
    } else {
      return TableStore.schedules[key!].filter((item) => !item.parent);
    }
  },
  isContainer: (id?: UniqueIdentifier) => !!TableStore.findItem(id)?.container,
  getItemIds: (parent?: UniqueIdentifier) =>
    TableStore.getItems({ parent })?.map((item) => item.id),
  findParent: (id?: UniqueIdentifier) => TableStore.findItem(id)?.parent,

  // ###########################################################

  handleFooterAreaDrag(activeItem: ItemType, overIdStr: UniqueIdentifier) {
    const containerId = overIdStr.toString().split(PLACEHOLDER_KEY).at(0);
    if (!containerId) return;
    const { date: overDate } = TableStore.parseId(containerId);
    const updatedItems = TableStore.schedules[overDate].filter(
      (item) => item.id !== activeItem.id,
    );
    const containerIndex = updatedItems.findIndex(
      (item) => item.id === containerId,
    );

    updatedItems.splice(containerIndex + 1, 0, {
      ...activeItem,
      container: undefined,
      parent: undefined,
    });

    TableStore.schedules[overDate] = updatedItems;
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

    if (
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(active.id)
    ) {
      return TableStore.handleFooterAreaDrag(activeItem, over?.id);
    }

    const { date: overDate } = TableStore.parseId(overItem?.id);
    const { date: activeDate } = TableStore.parseId(activeItem.id);

    if (!activeDate) return;

    const key = overDate ?? activeDate;

    const activeIndex = TableStore.schedules[key].findIndex(
      (item) => item.id === active.id,
    );
    const overIndex = TableStore.schedules[key].findIndex(
      (item) => item.id === over?.id,
    );

    let newIndex = overIndex;
    const isBelowLastItem =
      over &&
      overIndex === TableStore.schedules[key].length - 1 &&
      active.rect.current.initial!.top > over.rect.top + over.rect.height;

    const modifier = isBelowLastItem ? 1 : 0;
    newIndex =
      overIndex >= 0
        ? overIndex + modifier
        : TableStore.schedules[key].length + 1;
    let nextParent = overIsContainer ? over?.id : overParent;

    TableStore.schedules[key][activeIndex].parent = nextParent as number;

    TableStore.schedules[key] = arrayMove(
      TableStore.schedules[key],
      activeIndex,
      newIndex,
    );
  },
  onDragEnd: ({ active, over }: DragEndEvent) => {
    const { date: activeDate } = TableStore.parseId(active.id);

    const activeIndex = TableStore.schedules[activeDate].findIndex(
      (item) => item.id === active.id,
    );
    const overIndex = over
      ? TableStore.schedules[activeDate].findIndex(
          (item) => item.id === over.id,
        )
      : 0;
    const activeItem = TableStore.findItem(active.id);

    if (!activeItem) return (TableStore.activeId = undefined);

    if (
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(active.id)
    ) {
      TableStore.handleFooterAreaDrag(activeItem, over?.id as string);
      return (TableStore.activeId = undefined);
    }

    if (activeIndex !== overIndex) {
      TableStore.schedules[activeDate] = arrayMove(
        TableStore.schedules[activeDate],
        activeIndex,
        overIndex >= 0 ? overIndex : TableStore.schedules[activeDate].length,
      );
    }

    TableStore.activeId = undefined;
  },
});

export default TableStore;
