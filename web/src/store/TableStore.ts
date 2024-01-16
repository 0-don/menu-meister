"use client";

import { GetAllWeeklyMealGroupsAdminQuery } from "@/gql/graphql";
import { UniqueIdentifier } from "@dnd-kit/core";
import { proxy } from "valtio";

const TableStore = proxy({
  data: undefined as GetAllWeeklyMealGroupsAdminQuery["getAllWeeklyMealGroupsAdmin"],
  get dataSorted() {
    return (TableStore.data || []).sort((a, b) => a.orderIndex - b.orderIndex);
  },
  getGroupById: (id: UniqueIdentifier) =>
    TableStore.data?.find((group) => group.id === id),
});

export default TableStore;
