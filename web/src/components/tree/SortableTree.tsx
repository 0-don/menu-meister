"use client";
import DashboardStore from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { ReactNode, forwardRef, useCallback, useEffect } from "react";
import { useSnapshot } from "valtio";

export function SortableTree() {
  const dashboardStore = useSnapshot(DashboardStore);
  const { schedules, schedulesIds, regroupSchedules } = useSnapshot(TableStore);

  useEffect(regroupSchedules, [dashboardStore.daysThatWeek]);

  return (
    <>
      <DndContext
        onDragStart={({ active }) => (TableStore.activeId = active.id)}
        onDragCancel={() => (TableStore.activeId = undefined)}
        onDragOver={useCallback(TableStore.onDragOver, [])}
        onDragEnd={TableStore.onDragEnd}
      >
        <div>
          {Object.keys(schedules).map((group) => (
            <SortableContext items={schedulesIds[group]} key={group}>
              {schedules[group].map((item) =>
                item.container ? (
                  <SortableContainer
                    key={item.id}
                    id={item.id}
                    index={schedules[group].findIndex((i) => i.id === item.id)}
                  />
                ) : (
                  <SortableItem key={item.id} id={item.id}>
                    <Item id={item.id} />
                  </SortableItem>
                ),
              )}
            </SortableContext>
          ))}

          <DragOverlay>
            {!TableStore.activeId ? null : TableStore.isContainer(
                TableStore.activeId,
              ) ? (
              <Container id={TableStore.activeId}>
                {TableStore.getItems(TableStore.activeId)?.map((item) => (
                  <Item key={item.id} id={item.id} />
                ))}
              </Container>
            ) : (
              <Item id={TableStore.activeId} />
            )}
          </DragOverlay>
        </div>
      </DndContext>
    </>
  );
}

const Container = forwardRef(
  (
    props: { children: ReactNode; id: UniqueIdentifier },
    ref: React.LegacyRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={`w-96 flex-1 rounded border border-gray-400 bg-gray-300 p-6`}
      >
        <p className="text-black">{props.id}</p>
        {props.children}
      </div>
    );
  },
);

Container.displayName = "Container";

function SortableContainer({
  id,
  index,
}: {
  id: UniqueIdentifier;
  index: number;
}) {
  const { setNodeRef } = useDroppable({ id });
  const { setNodeRef: ref } = useDroppable({
    id: `${id}-${index}`,
  });

  return (
    <div>
      <SortableItem id={id}>
        <Container id={id} ref={setNodeRef}>
          <SortableContext
            items={(TableStore.getItems(id) || []).map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {TableStore.getItems(id)?.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                <Item id={item.id} />
              </SortableItem>
            ))}
          </SortableContext>
        </Container>
      </SortableItem>
      <div className="h-3 w-96" ref={ref} />
    </div>
  );
}

function Item({ id }: { id: UniqueIdentifier }) {
  return (
    <div className="flex h-12 w-64 items-center justify-center rounded-lg border-2 border-gray-400 bg-white !text-black">
      {id}
    </div>
  );
}

function SortableItem(props: { children: ReactNode; id: UniqueIdentifier }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className="relative flex-1"
      {...attributes}
      {...listeners}
    >
      {props.children}
    </div>
  );
}
