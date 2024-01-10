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
  const { schedules, active: act, regroupSchedules } = useSnapshot(TableStore);

  useEffect(regroupSchedules, [dashboardStore.daysThatWeek]);

  const activeGroup = TableStore.getGroup(act);
  const activeId = act?.id;

  console.log(JSON.parse(JSON.stringify(schedules)));

  return (
    <>
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
              className="min-h-96 flex-col items-start justify-start"
            >
              <p>{group}</p>
              <SortableContext
                items={schedules[group].map(({ id }) => id)}
                id={group}
              >
                <>
                  {!schedules[group].length && (
                    <Droppable className="min-h-96" id={group}>
                      test
                    </Droppable>
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
                </>
              </SortableContext>
            </div>
          ))}
        </div>
        <DragOverlay>
          {!activeId ? null : TableStore.isContainer(activeGroup, activeId) ? (
            <Container id={activeId}>
              {TableStore.getItems(activeGroup, activeId)?.map((item) => (
                <Item key={item.id} id={item.id} />
              ))}
            </Container>
          ) : (
            <Item id={activeId} />
          )}
        </DragOverlay>
      </DndContext>
    </>
  );
}
function Droppable(props: {
  id: UniqueIdentifier;
  children: ReactNode;
  className?: string;
}) {
  const { setNodeRef } = useDroppable({
    id: props.id,
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
  const { setNodeRef } = useDroppable({
    id,
    data: { group },
  });
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

function Item({ id }: { id: UniqueIdentifier }) {
  return (
    <div className="flex h-12 items-center justify-center rounded-lg border-2 border-gray-400 bg-white !text-black">
      {id}
    </div>
  );
}

function SortableItem(props: {
  children: ReactNode;
  id: UniqueIdentifier;
  group: string;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props.id,
      data: { group: props.group },
    });
  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      {...attributes}
      {...listeners}
    >
      {props.children}
    </div>
  );
}
