import { GroupedSchedules, INITIAL_DATAS, Meal } from "@/utils/constants";
import {
  Active,
  DragEndEvent,
  DragOverEvent,
  Over,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import dayjs from "dayjs";
import { Group } from "next/dist/shared/lib/router/utils/route-regex";
import { proxy } from "valtio";
import DashboardStore from "./DashboardStore";

export const PLACEHOLDER_KEY = "!";

const TableStore = proxy({
  active: undefined as Active | undefined,
  initialSchedules: INITIAL_DATAS,
  schedules: {} as GroupedSchedules,
  getItem: (
    group: string,
    uniqueId: UniqueIdentifier,
  ): Meal | Group | null | undefined => {
    if (!uniqueId) return null;
    const { id, mealId, groupIndex } = TableStore.parseId(uniqueId);

    const daySchedule = TableStore.initialSchedules.find(
      ({ servingDate }) => !dayjs(servingDate).diff(group, "day"),
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
    const [id, mealId, groupIndex] = uniqueId?.toString().split("#") ?? [];
    return { id, mealId, groupIndex };
  },
  regroupSchedules: () => {
    const newGroupedSchedules: GroupedSchedules = {};

    DashboardStore.daysThatWeek.forEach(
      (day) => (newGroupedSchedules[dayjs(day).format("YYYY-MM-DD")] = []),
    );

    // Loop through each initial schedule and organize them
    TableStore.initialSchedules.forEach(({ schedules, servingDate }) => {
      const formattedDate = dayjs(servingDate).format("YYYY-MM-DD");
      if (!newGroupedSchedules[formattedDate]) return;

      schedules.forEach((schedule) =>
        newGroupedSchedules[formattedDate].push(
          ...(schedule.group
            ? [
                { id: `${schedule.id}#${schedule.group.id}`, container: true },
                ...schedule.group.meals.map((meal, index) => ({
                  id: `${schedule.id}#${meal.id}#${index}`,
                  parent: `${schedule.id}#${schedule.group?.id}`,
                })),
              ]
            : [{ id: `${schedule.id}#${schedule.meal?.id}` }]),
        ),
      );
    });

    TableStore.schedules = newGroupedSchedules;
  },

  // ###########################################################

  findItem: (group: string, id?: UniqueIdentifier) =>
    group
      ? TableStore.schedules[group].find((item) => item.id === id)
      : undefined,
  getItems: (group: string, parent?: UniqueIdentifier) =>
    group
      ? TableStore.schedules[group].filter((item) =>
          parent ? item.parent === parent : !item.parent,
        )
      : undefined,
  isContainer: (group: string, id?: UniqueIdentifier) =>
    !!TableStore.findItem(group, id)?.container,
  getItemIds: (group: string, parent?: UniqueIdentifier) =>
    TableStore.getItems(group, parent)?.map((item) => item.id),
  findParent: (group: string, id?: UniqueIdentifier) =>
    TableStore.findItem(group, id)?.parent,

  getGroup: (item: Active | Over | null): string =>
    item?.data.current?.sortable?.containerId,

  // ###########################################################

  handleFooterAreaDrag(active: Active, over: Over | null) {
    const containerId = over?.id.toString().split(PLACEHOLDER_KEY).at(0);
    if (!containerId) return;
    const overGroup = TableStore.getGroup(over);
    const updatedItems = TableStore.schedules[overGroup].filter(
      (item) => item.id !== active.id,
    );
    const containerIndex = updatedItems.findIndex(
      (item) => item.id === containerId,
    );

    updatedItems.splice(containerIndex + 1, 0, {
      id: active.id,
      container: undefined,
      parent: undefined,
    });

    TableStore.schedules[overGroup] = updatedItems;
  },

  onDragOver: ({ active, over }: DragOverEvent) => {
    const overGroup = TableStore.getGroup(over);
    const activeGroup = TableStore.getGroup(active);

    const activeItem = TableStore.findItem(activeGroup, active.id);
    const overItem = TableStore.findItem(overGroup, over?.id);

    if (!activeItem) return;

    if (activeItem?.container && overItem?.container) {
      return;
    }

    if (
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(activeGroup, active.id)
    ) {
      return TableStore.handleFooterAreaDrag(active, over);
    }

    if (!activeGroup) return;

    if (overGroup && activeGroup && overGroup !== activeGroup) {
      const overIndex = TableStore.schedules[overGroup].findIndex(
        (item) => item.id === over?.id,
      );

      TableStore.schedules[overGroup].splice(overIndex, 0, {
        ...activeItem,
        container: undefined,
        parent: undefined,
      });

      return;
    }

    const key = overGroup ?? activeGroup;

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
    const overParent = TableStore.findParent(overGroup, over?.id);
    const overIsContainer = TableStore.isContainer(overGroup, over?.id);

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
    const activeGroup = TableStore.getGroup(active);
    const overGroup = TableStore.getGroup(over);
    const key = overGroup ?? activeGroup;

    const activeItem = TableStore.findItem(activeGroup, active.id);

    if (!activeItem) return (TableStore.active = undefined);

    if (
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(activeGroup, active.id)
    ) {
      TableStore.handleFooterAreaDrag(active, over);
      return (TableStore.active = undefined);
    }

    if (overGroup && activeGroup && overGroup !== activeGroup) {
      const overIndex = TableStore.schedules[overGroup].findIndex(
        (item) => item.id === over?.id,
      );

      let activeIndex = TableStore.schedules[overGroup].findIndex(
        (item) => item.id === active.id,
      );

      if (activeIndex) return (TableStore.active = undefined);

      TableStore.schedules[overGroup].splice(overIndex, 0, {
        ...activeItem,
        container: undefined,
        parent: undefined,
      });

      activeIndex = TableStore.schedules[activeGroup].findIndex(
        (item) => item.id === active.id,
      );
      TableStore.schedules[activeGroup].splice(activeIndex, 1);
      return (TableStore.active = undefined);
    }

    const activeIndex = TableStore.schedules[key].findIndex(
      (item) => item.id === active.id,
    );
    const overIndex = over
      ? TableStore.schedules[key].findIndex((item) => item.id === over.id)
      : 0;
    if (activeIndex !== overIndex) {
      TableStore.schedules[key] = arrayMove(
        TableStore.schedules[key],
        activeIndex,
        overIndex >= 0 ? overIndex : TableStore.schedules[key].length,
      );
    }

    TableStore.active = undefined;
  },
});

export default TableStore;
