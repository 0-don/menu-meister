"use client";

import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { proxy } from "valtio";
import { watch } from "valtio/utils";

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
dayjs.Ls["en"].weekStart = 1;

const DashboardStore = proxy({
  calendar: {
    year: dayjs().year(),
    week: dayjs().week(),
  },
  weeksThatYear: 0,
  daysThatWeek: [] as string[],
});

watch((get) => {
  const { year, week } = get(DashboardStore.calendar);
  const startOfWeek = dayjs().week(week).startOf("week");
  DashboardStore.daysThatWeek = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day").toISOString(),
  );
  DashboardStore.weeksThatYear = dayjs().year(year).isoWeeksInYear();
});

export default DashboardStore;
