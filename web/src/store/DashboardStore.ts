"use client";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { proxy, subscribe } from "valtio";

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);

dayjs.Ls["en"].weekStart = 1;

const DashboardStore = proxy({
  calendar: {
    year: 0,
    week: 0,
  },
  weekDayDates: [] as dayjs.Dayjs[],
  weeksThatYear: 1,
});

subscribe(DashboardStore.calendar, () => {
  console.log("calendar changed");
  const { year, week } = DashboardStore.calendar;
  const weekDayDates = Array.from({ length: 7 }, (_, i) =>
    dayjs()
      .year(year)
      .week(week)
      .day(i + 1),
  );
  const weeksThatYear = dayjs().year(year).isoWeeksInYear();
  console.log(weeksThatYear);
  DashboardStore.weekDayDates = weekDayDates;
  DashboardStore.weeksThatYear = weeksThatYear;
});

DashboardStore.calendar = {
  year: dayjs().year(),
  week: dayjs().week(),
};

export default DashboardStore;
