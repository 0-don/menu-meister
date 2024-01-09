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
    const schedule = daySchedule?.schedules.find(
      ({ id: scheduleId }) => id === scheduleId,
    );
    return schedule?.meal ?? schedule?.group?.id === mealId
      ? schedule.group
      : schedule?.group?.meals[parseInt(groupIndex)];
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

    TableStore.initialSchedules.forEach(({ schedules, servingDate }) => {
      const formattedDate = dayjs(servingDate).format("YYYY-MM-DD");
      schedules.forEach(
        (schedule) =>
          newGroupedSchedules[formattedDate]?.push(
            ...(schedule.group
              ? [
                  {
                    id: `${schedule.id}#${schedule.group.id}`,
                    container: true,
                  },
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
    item?.data.current?.sortable?.containerId ||
    item?.data.current?.group ||
    TableStore.active?.data.current?.sortable?.containerId ||
    TableStore.active?.data.current?.group,
  // ###########################################################

  handleFooterAreaDrag: (active: Active, over: Over | null) => {
    const containerId = over?.id.toString().split(PLACEHOLDER_KEY).at(0);
    if (!containerId) return;
    const overGroup = TableStore.getGroup(over);
    const updatedItems = TableStore.schedules[overGroup].filter(
      (item) => item.id !== active.id,
    );
    const containerIndex = updatedItems.findIndex(
      (item) => item.id === containerId,
    );
    updatedItems.splice(containerIndex + 1, 0, { id: active.id });
    TableStore.schedules[overGroup] = updatedItems;
  },

  onDragOver: ({ active, over }: DragOverEvent) => {
    const [overGroup, activeGroup] = [
      TableStore.getGroup(over),
      TableStore.getGroup(active),
    ];
    const [activeItem, overItem] = [
      TableStore.findItem(activeGroup, active.id),
      TableStore.findItem(overGroup, over?.id),
    ];

    if (!activeItem || (activeItem?.container && overItem?.container)) return;

    if (
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(activeGroup, active.id)
    ) {
      return TableStore.handleFooterAreaDrag(active, over);
    }

    if (!activeGroup) return;
    const key = overGroup ?? activeGroup;
    const [activeIndex, overIndex] = [
      TableStore.schedules[key].findIndex((item) => item.id === active.id),
      TableStore.schedules[key].findIndex((item) => item.id === over?.id),
    ];

    const newIndex =
      overIndex >= 0
        ? overIndex +
          (over && overIndex === TableStore.schedules[key].length - 1 ? 1 : 0)
        : TableStore.schedules[key].length + 1;
    const nextParent = TableStore.isContainer(overGroup, over?.id)
      ? over?.id
      : TableStore.findParent(overGroup, over?.id);

    TableStore.schedules[key][activeIndex].parent = nextParent as number;
    TableStore.schedules[key] = arrayMove(
      TableStore.schedules[key],
      activeIndex,
      newIndex,
    );
  },
  onDragEnd: ({ active, over }: DragEndEvent) => {
    const key = TableStore.getGroup(over) ?? TableStore.getGroup(active);
    const activeItem = TableStore.findItem(
      TableStore.getGroup(active),
      active.id,
    );

    if (!activeItem) return (TableStore.active = undefined);

    if (
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(TableStore.getGroup(active), active.id)
    ) {
      TableStore.handleFooterAreaDrag(active, over);
      return (TableStore.active = undefined);
    }

    const [activeIndex, overIndex] = [
      TableStore.schedules[key].findIndex((item) => item.id === active.id),
      over
        ? TableStore.schedules[key].findIndex((item) => item.id === over.id)
        : 0,
    ];
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
