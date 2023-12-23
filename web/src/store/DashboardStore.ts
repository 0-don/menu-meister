"use client";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { proxy } from "valtio";
import { subscribeKey } from "valtio/utils";

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);

dayjs.Ls["en"].weekStart = 1;

const DashboardStore = proxy({
  calendarWeek: 0,
  weekDayDates: [] as dayjs.Dayjs[],
});

// Callback function to update weekDayDates when calendarWeek changes
subscribeKey(DashboardStore, "calendarWeek", (weekNumber) => {
  console.log("weekNumber", weekNumber);
  // Find the start of the week (Monday) based on the new week number
  const startOfWeek = dayjs().week(weekNumber).startOf("week");

  // Generate the dates for the entire week
  DashboardStore.weekDayDates = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day"),
  );
});

DashboardStore.calendarWeek = dayjs().week();

export default DashboardStore;
