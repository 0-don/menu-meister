import TableStore from "@/store/TableStore";
import { DndContext, UniqueIdentifier, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { useSnapshot } from "valtio";
import { TableGroupRow } from "./TableGroupRow";

export function TableContext() {
  const tableStore = useSnapshot(TableStore);

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  return (
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
  );
}
