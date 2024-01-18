import DashboardStore from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import { WEEK_DAYS } from "@/utils/constants";
import { DndContext } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";
import { TableGroupRow } from "./TableGroupRow";

export function TableContext() {
  const t = useTranslations<"Dashboard">();
  const dashboardStore = useSnapshot(DashboardStore);
  const tableStore = useSnapshot(TableStore);

  const renderDayColumn = (dayKey: string, index: number) => {
    const dayName = t(dayKey as keyof Messages["Dashboard"]);
    const date = dayjs(dashboardStore.daysThatWeek.at(index)).format("DD.MM");

    return (
      <div key={dayKey} title={dayName}>
        {`${dayName.substring(0, 2)}. ${date}`}
      </div>
    );
  };

  return (
    <main className="relative z-0 mt-5 flex w-full flex-col justify-between gap-4 rounded-large bg-content1 p-4 shadow-small">
      <div className="grid grid-cols-8 gap-2 rounded-lg bg-default-100 p-2 text-tiny font-semibold text-foreground-500">
        <div />
        {WEEK_DAYS.map((day, index) =>
          renderDayColumn(day.toUpperCase(), index),
        )}
      </div>

      <DndContext
        onDragStart={({ active }) => (TableStore.active = active)}
        onDragEnd={({ active, over }) => {
          TableStore.active = undefined;
        }}
        onDragCancel={() => (TableStore.active = undefined)}
        modifiers={[restrictToWindowEdges]}
      >
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={tableStore.dataSorted.map((i) => i.id)}
        >
          {tableStore.dataSorted.map((value) => (
            <TableGroupRow key={value.id} id={value.id} />
          ))}
        </SortableContext>
      </DndContext>
    </main>
  );
}
