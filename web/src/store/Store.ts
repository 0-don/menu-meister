"use client";
import { UniqueIdentifier } from "@dnd-kit/core";
import { proxy } from "valtio";

interface ItemGroups {
  [key: string]: UniqueIdentifier[];
}

export const INITIAL_DATA: ItemGroups = {
  group1: ["1", "2", "3"],
  group2: ["4", "5", "6"],
  group3: ["7", "8", "9"],
};

const Store = proxy({
  schedules: INITIAL_DATA,
  moveBetweenContainers: (
    items: ItemGroups,
    activeContainer: string,
    activeIndex: number,
    overContainer: string,
    overIndex: number,
    item: UniqueIdentifier,
  ) => ({
    ...items,
    [activeContainer]: [
      ...items[activeContainer].slice(0, activeIndex),
      ...items[activeContainer].slice(activeIndex + 1),
    ],
    [overContainer]: [
      ...items[overContainer].slice(0, overIndex),
      item,
      ...items[overContainer].slice(overIndex),
    ],
  }),
});

export default Store;
