"use client";
import DashboardStore from "@/store/DashboardStore";
import TableStore, { PLACEHOLDER_KEY } from "@/store/TableStore";
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
import React, { ReactNode, forwardRef, useEffect } from "react";
import { useSnapshot } from "valtio";

export function SortableTree() {
  const dashboardStore = useSnapshot(DashboardStore);
  const { schedules, regroupSchedules } = useSnapshot(TableStore);

  useEffect(regroupSchedules, [dashboardStore.daysThatWeek]);

  return (
    <>
      <DndContext
        onDragStart={({ active }) => (TableStore.active = active)}
        onDragCancel={() => (TableStore.active = undefined)}
        onDragOver={TableStore.onDragOver}
        onDragEnd={TableStore.onDragEnd}
      >
        <div className="flex w-full justify-between">
          {Object.keys(schedules).map((group) => (
            <div
              key={group}
              className="min-h-96 flex-col items-start justify-start"
            >
              <p>{group}</p>
              <SortableContext
                items={schedules[group].map(({ id }) => id)}
                id={group}
                // strategy={verticalListSortingStrategy}
              >
                <ul>
                  {!schedules[group].length && (
                    <PlaceholderDroppable className="min-h-96" id={group}>
                      test
                    </PlaceholderDroppable>
                  )}
                  {TableStore.getItems(group)?.map((item) => (
                    <div key={item.id}>
                      {item.container ? (
                        <SortableContainer id={item.id} group={group} />
                      ) : (
                        <SortableItem id={item.id} group={group}>
                          <Item id={item.id} />
                        </SortableItem>
                      )}
                    </div>
                  ))}
                </ul>
              </SortableContext>
            </div>
          ))}
        </div>
        <Overlay />
      </DndContext>
    </>
  );
}

function Overlay() {
  const { active: act } = useSnapshot(TableStore, { sync: true });
  const { schedules } = useSnapshot(TableStore);
  const items = Object.entries(schedules).flatMap(([group, items]) => {
    return items.filter((i) => i.id === act?.id || i.parent === act?.id);
  });
  console.log(items);
  // console.log(JSON.parse(JSON.stringify(schedules)));
  // console.log(JSON.parse(JSON.stringify(act || "")), activeGroup);
  // console.log(act?.id, JSON.parse(JSON.stringify(activeItems)));

  const activeId = act?.id;
  const container = items.find((i) => i.container);
  const containerItems = items.filter((i) => !i.container);
  return (
    <DragOverlay adjustScale={false}>
      {!activeId ? null : container ? (
        <Container id={container.id}>
          {containerItems.map((item) => (
            <Item key={item.id} id={item.id} />
          ))}
        </Container>
      ) : (
        <Item id={activeId} drag />
      )}
    </DragOverlay>
  );
}

function PlaceholderDroppable(props: {
  id: UniqueIdentifier;
  children: ReactNode;
  className?: string;
}) {
  const { setNodeRef } = useDroppable({
    id: props.id,
    data: { group: props.id },
  });

  return (
    <div className={props.className} ref={setNodeRef}>
      {props.children}
    </div>
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
        className={`flex-1 rounded border border-gray-400 bg-gray-300 p-1`}
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
  group,
}: {
  id: UniqueIdentifier;
  group: string;
}) {
  const { setNodeRef } = useDroppable({ id, data: { group } });
  const placheolderId = `${id}${PLACEHOLDER_KEY}${group}`;
  const { setNodeRef: ref } = useSortable({
    id: placheolderId,
    data: { group },
  });

  return (
    <div>
      <SortableItem id={id} group={group}>
        <Container id={id} ref={setNodeRef}>
          <SortableContext
            items={(TableStore.getItems(group, id) || []).map(({ id }) => id)}
            id={group}
            strategy={verticalListSortingStrategy}
          >
            {TableStore.getItems(group, id)?.map((item) => (
              <SortableItem key={item.id} id={item.id} group={group}>
                <Item id={item.id} />
              </SortableItem>
            ))}
          </SortableContext>
        </Container>
      </SortableItem>
      <div className="h-3 w-full" ref={ref} />
    </div>
  );
}

function Item({ id }: { id: UniqueIdentifier; drag?: boolean }) {
  return (
    <div
      className={`flex h-12 items-center justify-center rounded-lg border-2 border-gray-400 bg-white !text-black`}
    >
      {id}
    </div>
  );
}

function SortableItem(props: {
  children: ReactNode;
  id: UniqueIdentifier;
  group: string;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props.id,
    data: { group: props.group },
  });
  return (
    <li
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
      }}
      {...attributes}
      {...listeners}
    >
      {props.children}
    </li>
  );
}
