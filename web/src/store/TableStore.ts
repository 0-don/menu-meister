"use client";

import { GetAllWeeklyMealGroupsAdminQuery } from "@/gql/graphql";
import { proxy } from "valtio";

const TableStore = proxy({
  data: undefined as GetAllWeeklyMealGroupsAdminQuery["getAllWeeklyMealGroupsAdmin"],
  get dataSorted() {
    return (TableStore.data || []).sort((a, b) => a.orderIndex - b.orderIndex);
  },
});

export default TableStore;
