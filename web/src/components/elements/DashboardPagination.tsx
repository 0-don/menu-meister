import DashboardStore from "@/store/DashboardStore";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import { useSnapshot } from "valtio";

export const DashboardPagination: React.FC = () => {
  const dateRef = useRef<HTMLInputElement>(null);
  const t = useTranslations<"Dashboard">();
  const { calendar, weeksThatYear, daysThatWeek } = useSnapshot(DashboardStore);
  console.log(
    JSON.parse(JSON.stringify(DashboardStore.daysThatWeek)),
    dayjs(daysThatWeek.at(0)).toISOString(),
    dayjs(daysThatWeek.at(0)).format("DD.MM.YYYY"),
  );
  return (
    <>
      <div className="relative mb-2 mt-5 flex hover:!text-gray-300">
        <label
          htmlFor="datePicker"
          className="flex cursor-pointer gap-1"
          onClick={() => dateRef.current?.showPicker()}
        >
          {t?.rich("FROM_TO", {
            week: calendar.week,
            from: dayjs(daysThatWeek.at(0))?.format("DD.MM.YYYY"),
            to: dayjs(daysThatWeek.at(-1))?.format("DD.MM.YYYY"),
            weektag: (chunks) => <p className="font-bold">{chunks}</p>,
            fromtag: (chunks) => <p className="font-bold">{chunks}</p>,
            totag: (chunks) => <p className="font-bold">{chunks}</p>,
          })}
        </label>
        <input
          ref={dateRef}
          value={dayjs(daysThatWeek.at(0))?.format("YYYY-MM-DD")}
          onChange={(e) => DashboardStore.setCalendar(e.target.value)}
          id="datePicker"
          type="date"
          className="invisible absolute h-6 w-0"
        />
      </div>
      <div className="flex items-center">
        <Button
          isIconOnly
          radius="none"
          size="sm"
          onPress={DashboardStore.decrementWeek}
        >
          <FaChevronLeft />
        </Button>
        <Pagination
          radius="none"
          size="sm"
          isCompact
          total={weeksThatYear}
          page={calendar.week}
          onChange={(page) => (DashboardStore.calendar.week = page)}
        />
        <Button
          isIconOnly
          radius="none"
          size="sm"
          onPress={DashboardStore.incrementWeek}
        >
          <FaChevronLeft className="rotate-180" />
        </Button>
      </div>
    </>
  );
};
