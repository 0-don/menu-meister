import { DragEndEvent, DragOverEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { proxy } from "valtio";

export type DataType = {
  [key: string]: UniqueIdentifier[];
};

const SortingStore = proxy({
  activeId: undefined as UniqueIdentifier | undefined,
  itemGroups: {
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
    group3: ["7", "8", "9"],
  } as DataType,

  handleDragOver: ({ active, over }: DragOverEvent) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current?.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || over.id;

    if (activeContainer !== overContainer) {
      const activeIndex = active.data.current?.sortable.index;
      const overIndex =
        over.id in SortingStore.itemGroups
          ? SortingStore.itemGroups[overContainer].length + 1
          : over.data.current?.sortable.index;

      SortingStore.itemGroups = SortingStore.moveBetweenContainers(
        SortingStore.itemGroups,
        activeContainer,
        activeIndex,
        overContainer,
        overIndex,
        active.id,
      );
    }
  },

  handleDragEnd: ({ active, over }: DragEndEvent) => {
    if (!over) {
      SortingStore.activeId = undefined;
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current?.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current?.sortable.index;
      const overIndex =
        over.id in SortingStore.itemGroups
          ? SortingStore.itemGroups[overContainer].length + 1
          : over.data.current?.sortable.index;

      let newItems;
      if (activeContainer === overContainer) {
        newItems = {
          ...SortingStore.itemGroups,
          [overContainer]: arrayMove(
            SortingStore.itemGroups[overContainer],
            activeIndex,
            overIndex,
          ),
        };
      } else {
        newItems = SortingStore.moveBetweenContainers(
          SortingStore.itemGroups,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id,
        );
      }

      SortingStore.itemGroups = newItems;
    }

    SortingStore.activeId = undefined;
  },

  moveBetweenContainers: (
    items: DataType,
    activeContainer: string,
    activeIndex: number,
    overContainer: string,
    overIndex: number,
    item: UniqueIdentifier,
  ) => {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item),
    };
  },
});

const removeAtIndex = (array: UniqueIdentifier[], index: number) => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];

const insertAtIndex = (
  array: UniqueIdentifier[],
  index: number,
  item: UniqueIdentifier,
) => [...array.slice(0, index), item, ...array.slice(index)];

export default SortingStore;
