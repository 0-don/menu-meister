import {
  GroupedSchedules,
  INITIAL_DATAS,
  ItemType,
  Meal,
} from "@/utils/constants";
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
  items: [] as ItemType[],
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
      schedules.forEach((schedule) =>
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
  getGroupItems: (group: string, parent?: UniqueIdentifier) =>
    group
      ? TableStore.schedules[group].filter((item) =>
          parent ? item.parent === parent : !item.parent,
        )
      : [],
  getItems: (id?: UniqueIdentifier) =>
    id
      ? Object.entries(TableStore.schedules).flatMap(([group, items]) =>
          items.filter((i) => i.id === id || i.parent === id),
        )
      : [],

  isContainer: (group: string, id?: UniqueIdentifier) =>
    !!TableStore.findItem(group, id)?.container,
  getItemIds: (group: string, parent?: UniqueIdentifier) =>
    TableStore.getGroupItems(group, parent)?.map((item) => item.id),
  findParent: (group: string, id?: UniqueIdentifier) =>
    TableStore.findItem(group, id)?.parent,
  getGroup: (id?: UniqueIdentifier) =>
    Object.entries(TableStore.schedules).find(([group, items]) =>
      items.some((item) => item.id === id),
    )?.[0],
  getGroupEvent: (event: Active | Over | null | undefined): string =>
    event?.data.current?.sortable?.containerId || event?.data.current?.group,
  dragEvenData: ({ active, over }: { active: Active; over: Over | null }) => {
    const overGroup =
      TableStore.getGroup(over?.id) || TableStore.getGroupEvent(over);
    const activeGroup = TableStore.getGroup(active.id);
    const activeItems = TableStore.getItems(active.id);
    TableStore.items = activeItems;
    const activeItem = activeItems.at(0);
    const overItem = TableStore.getItems(over?.id).at(0);
    const isOverContainer = TableStore.isContainer(overGroup, over?.id);
    const overParent = TableStore.findParent(overGroup, over?.id);
    const isActiveContainer = activeGroup
      ? TableStore.isContainer(activeGroup, active.id)
      : false;
    const activeParent = activeGroup
      ? TableStore.findParent(activeGroup, active.id)
      : undefined;
    const key = overGroup ?? activeGroup;
    const activeIndex = activeGroup
      ? TableStore.schedules[activeGroup].findIndex(
          (item) => item.id === active.id,
        )
      : -1;
    const overIndex = overGroup
      ? TableStore.schedules[overGroup].findIndex(
          (item) => item.id === over?.id,
        )
      : -1;

    return {
      overGroup,
      activeGroup,
      activeItem,
      overItem,
      key,
      activeIndex,
      overIndex,
      activeItems,
      isOverContainer,
      overParent,
      isActiveContainer,
      activeParent,
    };
  },
  // ###########################################################

  handleFooterAreaDrag: (active: Active, over: Over | null) => {
    const overGroup = TableStore.getGroupEvent(over);
    if (!overGroup) return;

    const activeIndex = TableStore.schedules[overGroup].findIndex(
      (item) => item.id === active.id,
    );
    if (activeIndex > -1)
      TableStore.schedules[overGroup].splice(activeIndex, 1);

    const containerId = over?.id.toString().split(PLACEHOLDER_KEY)[0];
    const containerIndex = TableStore.schedules[overGroup].findIndex(
      (item) => item.id === containerId,
    );
    if (containerIndex > -1)
      TableStore.schedules[overGroup].splice(containerIndex + 1, 0, {
        id: active.id,
      });
  },

  handleWeekChange(active: Active, over: Over | null) {
    if (over?.id === "back") DashboardStore.decrementWeek();
    if (over?.id === "next") DashboardStore.incrementWeek();
  },

  onDragOver: ({ active, over }: DragOverEvent) => {
    if (over?.id === "back" || over?.id === "next") {
      return TableStore.handleWeekChange(active, over);
    }
    const data = TableStore.dragEvenData({ active, over });
    console.log("drag", active, over, data.activeGroup, data.overGroup);

    // // diffrent week check
    // if (active && data.overGroup && !data.activeGroup) {
    //   console.log("if move from outside", TableStore.items);
    //   return (TableStore.schedules[data.overGroup] = [{ id: active.id }]);
    // }

    if (
      data.activeGroup &&
      data.overGroup &&
      data.activeGroup !== data.overGroup
    ) {
      console.log("if move between containers");
      return TableStore.moveBetweenContainers(
        data.activeGroup,
        data.overGroup,
        data.overIndex,
        data.isActiveContainer
          ? TableStore.items
          : TableStore.items.map((item) => ({ ...item, parent: undefined })),
      );
    }

    if (
      data.activeGroup &&
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(data.activeGroup, active.id)
    ) {
      return TableStore.handleFooterAreaDrag(active, over);
    }

    if (active.id === over?.id) return;
    if (
      data.isActiveContainer &&
      (TableStore.isContainer(data.overGroup, data.overParent) ||
        data.isOverContainer)
    )
      return;

    const containerId = data.isOverContainer ? over?.id : data.overParent;
    if (data.activeGroup && data.overGroup && data.overParent !== active.id) {
      TableStore.schedules[data.activeGroup][data.activeIndex].parent =
        containerId;
      TableStore.schedules[data.overGroup] = arrayMove(
        TableStore.schedules[data.overGroup],
        data.activeIndex,
        containerId
          ? data.overIndex
          : TableStore.schedules[data.overGroup].length,
      );
    }
  },
  onDragEnd: ({ active, over }: DragEndEvent) => {
    TableStore.items = [];
    // console.log(active, over);
    if (over?.id === "back" || over?.id === "next") {
      return TableStore.handleWeekChange(active, over);
    }

    const data = TableStore.dragEvenData({ active, over });

    // drag to the top outside of container
    if (
      !over &&
      data.activeGroup &&
      !data.isActiveContainer &&
      data.activeItem
    ) {
      TableStore.schedules[data.activeGroup] = TableStore.schedules[
        data.activeGroup
      ].filter((item) => item.id !== active.id);
      data.activeItem.parent = undefined;
      TableStore.schedules[data.activeGroup].unshift(data.activeItem);
      return (TableStore.active = undefined);
    }

    if (!over) return (TableStore.active = undefined);

    if (active.id === over?.id) return (TableStore.active = undefined);

    if (
      data.activeGroup &&
      data.overGroup &&
      data.activeGroup === data.overGroup
    ) {
      TableStore.schedules[data.activeGroup] = arrayMove(
        TableStore.schedules[data.activeGroup],
        data.activeIndex,
        data.overIndex,
      );
    } else if (data.activeGroup && data.overGroup) {
      TableStore.moveBetweenContainers(
        data.activeGroup,
        data.overGroup,
        data.overIndex,
        data.activeItems,
      );
    }

    TableStore.active = undefined;
  },
  moveBetweenContainers: (
    activeContainer: string,
    overContainer: string,
    overIndex: number,
    items: ItemType[],
  ) => {
    console.log("move between containers");
    const itemIds = new Set(items.map((item) => item.id));

    // Remove the block of items from the active container
    const newActiveContainerItems = TableStore.schedules[
      activeContainer
    ].filter((item) => !itemIds.has(item.id));

    // Prepare the new over container items and adjust overIndex if needed
    let newOverContainerItems = [...TableStore.schedules[overContainer]];
    if (overIndex < 0 || overIndex > newOverContainerItems.length) {
      overIndex = newOverContainerItems.length;
    }

    // Insert the block of items into the over container at the correct position
    newOverContainerItems.splice(
      overIndex,
      0,
      ...items.filter(
        (item) =>
          !newOverContainerItems.some(
            (existingItem) => existingItem.id === item.id,
          ),
      ),
    );

    // Update the schedules state
    TableStore.schedules = {
      ...TableStore.schedules,
      [activeContainer]: newActiveContainerItems,
      [overContainer]: newOverContainerItems,
    };
  },
});

export default TableStore;
