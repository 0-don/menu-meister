import TableStore from "@/store/TableStore";
import { DndContext, UniqueIdentifier, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useSnapshot } from "valtio";
import { TableGroupRow } from "./TableGroupRow";

export function TableContext() {
  const t = useTranslations<"Dashboard">();
  const tableStore = useSnapshot(TableStore);

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  return (
    <main className="relative z-0 flex w-full flex-col justify-between gap-4 overflow-auto rounded-large bg-content1 p-4 shadow-small mt-5">
      <div className="grid grid-cols-8 gap-2 rounded-lg bg-default-100 p-2 text-foreground-500 text-tiny font-semibold">
        <div></div>
        <div>{t("MONDAY")}</div>
        <div>{t("TUESDAY")}</div>
        <div>{t("WEDNESDAY")}</div>
        <div>{t("THURSDAY")}</div>
        <div>{t("FRIDAY")}</div>
        <div>{t("SATURDAY")}</div>
        <div>{t("SUNDAY")}</div>
      </div>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={({ active }) => setActiveId(active.id)}
        onDragEnd={({ active, over }) => {
          console.log(active, over);
          setActiveId(null);
          // if (over) {
          //   const overIndex = getIndex(over.id);
          //   if (activeIndex !== overIndex)
          //     setItems((items) => arrayMove(items, activeIndex, overIndex));
          // }
        }}
        onDragCancel={() => setActiveId(null)}
      >
        <SortableContext
          items={tableStore.dataSorted.map((i) => i.id)}
          strategy={verticalListSortingStrategy}
        >
          {tableStore.dataSorted.map((value) => (
            <TableGroupRow key={value.id} id={value.id} />
          ))}
        </SortableContext>
      </DndContext>
    </main>
  );
}
