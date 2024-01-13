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
    const activeItem = activeItems.at(0);
    const overItem = TableStore.getItems(over?.id).at(0);
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
    };
  },
  // ###########################################################

  handleFooterAreaDrag: (active: Active, over: Over | null) => {
    const containerId = over?.id.toString().split(PLACEHOLDER_KEY).at(0);
    if (!containerId) return;
    const overGroup = TableStore.getGroupEvent(over);
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
    const data = TableStore.dragEvenData({ active, over });
    console.log(active, over);
    if (
      data.activeGroup &&
      data.overGroup &&
      data.activeGroup !== data.overGroup
    ) {
      // if (!over?.id) return;
      return TableStore.moveBetweenContainers(
        data.activeGroup,
        data.overGroup,
        data.overIndex,
        data.activeItems,
      );
    }

    if (
      data.activeGroup &&
      over?.id.toString().includes(PLACEHOLDER_KEY) &&
      !TableStore.isContainer(data.activeGroup, active.id)
    ) {
      return TableStore.handleFooterAreaDrag(active, over);
    }

    // if (!data.activeGroup) return;

    // let newIndex;
    // if (data.overIndex >= 0) {
    //   const isLastIndex =
    //     over &&
    //     data.overIndex ===
    //       TableStore.schedules[data.overGroup || data.key].length - 1;
    //   if (isLastIndex) {
    //     newIndex = data.overIndex + 1;
    //   } else {
    //     newIndex = data.overIndex;
    //   }
    // } else {
    //   newIndex = TableStore.schedules[data.overGroup || data.key].length;
    // }

    // // // Finding the next parent for the dragged item
    // let nextParent;
    // if (TableStore.isContainer(data.overGroup, over?.id)) {
    //   nextParent = over?.id;
    // } else {
    //   nextParent = TableStore.findParent(data.overGroup, over?.id);
    // }

    // // // Updating the parent of the active item and moving it in the array
    // if (!TableStore.schedules[data.key][data.activeIndex]) return;
    // TableStore.schedules[data.key][data.activeIndex].parent = nextParent;
    // TableStore.schedules[data.key] = arrayMove(
    //   TableStore.schedules[data.key],
    //   data.activeIndex,
    //   newIndex
    // );
  },
  onDragEnd: ({ active, over, delta }: DragEndEvent) => {
    let data = TableStore.dragEvenData({ active, over });
    if (!over) return (TableStore.active = undefined);
    if (active.id !== over.id) {
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

      return (TableStore.active = undefined);
    }
    // if (!data.activeItem) return (TableStore.active = undefined);

    // if (
    //   over?.id.toString().includes(PLACEHOLDER_KEY) &&
    //   !TableStore.isContainer(TableStore.getGroup(active), active.id)
    // ) {
    //   TableStore.handleFooterAreaDrag(active, over);
    //   return (TableStore.active = undefined);
    // }

    // data.overIndex =
    //   data.overIndex < 0
    //     ? delta.y > 0
    //       ? TableStore.schedules[data.key].length
    //       : 0
    //     : data.overIndex;

    // if (data.activeIndex !== data.overIndex) {
    //   TableStore.schedules[data.key] = arrayMove(
    //     TableStore.schedules[data.key],
    //     data.activeIndex,
    //     data.overIndex,
    //   );
    // }

    TableStore.active = undefined;
  },
  moveBetweenContainers: (
    activeContainer: string,
    overContainer: string,
    overIndex: number,
    items: ItemType[],
  ) => {
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
