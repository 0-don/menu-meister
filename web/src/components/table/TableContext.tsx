import TableStore from "@/store/TableStore";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";
import { TableGroupRow } from "./TableGroupRow";

export function TableContext() {
  const t = useTranslations<"Dashboard">();
  const tableStore = useSnapshot(TableStore);

  return (
    <main className="relative z-0 mt-5 flex w-full flex-col justify-between gap-4 rounded-large bg-content1 p-4 shadow-small">
      <div className="grid grid-cols-8 gap-2 rounded-lg bg-default-100 p-2 text-tiny font-semibold text-foreground-500">
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
        onDragStart={({ active }) => (TableStore.active = active)}
        onDragEnd={({ active, over }) => {
          console.log(active, over);
          TableStore.active = undefined;
          // if (over) {
          //   const overIndex = getIndex(over.id);
          //   if (activeIndex !== overIndex)
          //     setItems((items) => arrayMove(items, activeIndex, overIndex));
          // }
        }}
        onDragCancel={() => (TableStore.active = undefined)}
      >
        <SortableContext
          items={tableStore.dataSorted.map((i) => i.id)}
          // strategy={verticalListSortingStrategy}
        >
          {tableStore.dataSorted.map((value) => (
            <TableGroupRow key={value.id} id={value.id} />
          ))}
        </SortableContext>
      </DndContext>
    </main>
  );
}
