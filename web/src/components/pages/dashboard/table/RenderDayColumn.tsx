import { DashboardStore } from "@/store/DashboardStore";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import React from "react";

interface RenderDayColumnProps {
  dayKey: string;
  index: number;
}

export const RenderDayColumn: React.FC<RenderDayColumnProps> = (props) => {
  const t = useTranslations<"Dashboard">();
  const dayName = t(props.dayKey as keyof Messages["Dashboard"]);
  const date = dayjs(DashboardStore.daysThatWeek.at(props.index)).format(
    "DD.MM",
  );

  const dateToday = dayName.substring(0, 2);

  return (
    <div key={props.dayKey} title={dayName}>
      {`${dateToday.at(0)?.toUpperCase()}${dateToday.at(1)}. ${date}`}
    </div>
  );
};
