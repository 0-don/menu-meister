"use client";
import DashboardStore from "@/store/DashboardStore";
import TableStore, { PLACEHOLDER_KEY } from "@/store/TableStore";
import { debounce } from "@/utils/constants";
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
  const { schedules, regroupSchedules } = useSnapshot(TableStore, {
    sync: true,
  });

  useEffect(regroupSchedules, [dashboardStore.daysThatWeek]);
  return (
    <DndContext
      onDragStart={({ active }) => (TableStore.active = active)}
      onDragCancel={() => (TableStore.active = undefined)}
      onDragOver={useCallback(debounce(TableStore.onDragOver, 0), [])}
      onDragEnd={TableStore.onDragEnd}
    >
      <div className="flex w-full justify-between">
        {Object.keys(schedules).map((group) => (
          <div
            key={group}
            className="min-h-96 w-full flex-col items-start justify-start"
          >
            <p>{group}</p>
            <SortableContext
              items={schedules[group].map(({ id }) => id)}
              id={group}
              strategy={verticalListSortingStrategy}
            >
              <ul>
                {!schedules[group].length && (
                  <PlaceholderDroppable className="min-h-96" id={group} />
                )}
                {TableStore.getGroupItems(group)?.map((item) => (
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
  );
}

function Overlay() {
  const { active } = useSnapshot(TableStore, { sync: true });
  const items = TableStore.getItems(active?.id);
  const container = items.find((i) => i.container);
  const containerItems = items.filter((i) => !i.container);

  return (
    <DragOverlay>
      {!active?.id || !items.length ? null : container ? (
        <Container id={container.id}>
          {containerItems.map((item) => (
            <Item key={item.id} id={item.id} />
          ))}
        </Container>
      ) : (
        <Item id={active.id} drag />
      )}
    </DragOverlay>
  );
}

function PlaceholderDroppable(props: {
  id: UniqueIdentifier;

  className?: string;
}) {
  const { setNodeRef } = useDroppable({
    id: props.id,
    data: { group: props.id },
  });

  return <div className={props.className} ref={setNodeRef}></div>;
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
  const { setNodeRef } = useDroppable({ id, data: { group, container: true } });
  const placheolderId = `${id}${PLACEHOLDER_KEY}${group}`;
  const { setNodeRef: ref } = useSortable({
    id: placheolderId,
    data: { group },
  });

  return (
    <div>
      <SortableItem id={id} group={group} container>
        <Container id={id} ref={setNodeRef}>
          <SortableContext
            items={(TableStore.getGroupItems(group, id) || []).map(
              ({ id }) => id,
            )}
            id={group}
            strategy={verticalListSortingStrategy}
          >
            {TableStore.getGroupItems(group, id)?.map((item) => (
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
  container?: boolean;
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
    data: { group: props.group, container: props.container },
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
