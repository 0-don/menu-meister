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
    week: dayjs().isoWeek(),
  },
  weeksThatYear: 0,
  daysThatWeek: [] as string[],
  setCalendar(date: string) {
    DashboardStore.calendar.year = dayjs(date).year();
    DashboardStore.calendar.week = dayjs(date).isoWeek();
  },
  decrementWeek() {
    if (DashboardStore.calendar.week > 1) {
      DashboardStore.calendar.week -= 1;
    } else {
      // Move to the last week of the previous year
      const previousYear = DashboardStore.calendar.year - 1;
      DashboardStore.calendar.year = previousYear;
      DashboardStore.calendar.week = dayjs()
        .year(previousYear)
        .isoWeeksInYear();
    }
  },
  incrementWeek() {
    if (DashboardStore.calendar.week < DashboardStore.weeksThatYear) {
      DashboardStore.calendar.week += 1;
    } else {
      // Move to the first week of the next year
      const nextYear = DashboardStore.calendar.year + 1;
      DashboardStore.calendar.year = nextYear;
      DashboardStore.calendar.week = 1;
    }
  },
});

watch((get) => {
  const { year, week } = get(DashboardStore.calendar);
  const startOfWeek = dayjs().year(year).isoWeek(week).startOf("week");

  DashboardStore.daysThatWeek = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day").format("YYYY-MM-DD"),
  );
  DashboardStore.weeksThatYear = dayjs().year(year).isoWeeksInYear();
});

export default DashboardStore;
