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
});

export default Store;
