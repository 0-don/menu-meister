"use client";

import DashboardStore from "@/store/DashboardStore";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";
import { Link } from "@nextui-org/react";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { IoCalendarSharp } from "@react-icons/all-files/io5/IoCalendarSharp";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import { useSnapshot } from "valtio";

export const DashboardPagination: React.FC = () => {
  const dateRef = useRef<HTMLInputElement>(null);
  const t = useTranslations<"Dashboard">();
  const { calendar, weeksThatYear, daysThatWeek } = useSnapshot(DashboardStore);

  return (
    <>
      <Link href="#" color="foreground" className="relative mb-2 mt-5 flex ">
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
            totag: (chunks) => (
              <p className="inline-flex items-center font-bold">
                {chunks} <IoCalendarSharp className="ml-1" />
              </p>
            ),
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
      </Link>
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
