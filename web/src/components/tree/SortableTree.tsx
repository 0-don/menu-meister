import Store from "@/store/Store";
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { useSnapshot } from "valtio";

export const SortableTree = () => {
  const store = useSnapshot(Store, { sync: true });
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>(
    undefined,
  );

  return (
    <DndContext
      onDragStart={({ active }) => setActiveId(active?.id)}
      onDragCancel={() => setActiveId(undefined)}
      onDragOver={({ active, over }) => {
        const overId = over?.id;

        if (!overId) {
          return;
        }

        const activeContainer = active.data.current?.sortable.containerId;
        const overContainer =
          over.data.current?.sortable.containerId || over.id;

        if (activeContainer !== overContainer) {
          const activeIndex = active.data.current?.sortable.index;
          const overIndex =
            over.id in store.schedules
              ? store.schedules[overContainer].length + 1
              : over.data.current?.sortable.index;
          Store.schedules = Store.moveBetweenContainers(
            store.schedules,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id,
          );
        }
      }}
      onDragEnd={({ active, over }) => {
        if (!over) {
          setActiveId(undefined);
          return;
        }

        if (active.id !== over.id) {
          const activeContainer = active.data.current?.sortable.containerId;
          const overContainer =
            over.data.current?.sortable.containerId || over.id;
          const activeIndex = active.data.current?.sortable.index;
          const overIndex =
            over.id in store.schedules
              ? store.schedules[overContainer].length + 1
              : over.data.current?.sortable.index;

          let newItems;
          if (activeContainer === overContainer) {
            newItems = {
              ...store.schedules,
              [overContainer]: arrayMove(
                store.schedules[overContainer],
                activeIndex,
                overIndex,
              ),
            };
          } else {
            newItems = Store.moveBetweenContainers(
              store.schedules,
              activeContainer,
              activeIndex,
              overContainer,
              overIndex,
              active.id,
            );
          }
          Store.schedules = newItems;
        }

        setActiveId(undefined);
      }}
    >
      <div className="flex space-x-5">
        {Object.keys(store.schedules).map((group) => (
          <Droppable
            id={group}
            items={store.schedules[group]}
            activeId={activeId}
            key={group}
          />
        ))}
      </div>
      <DragOverlay>
        {activeId && (
          <div
            style={{ cursor: "grabbing" }}
            className="item mb-[5px] box-border flex h-[30px] w-[110px] select-none items-center rounded-md border border-gray-300 pl-[5px]"
          >
            Item {activeId}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
};

const Droppable = ({
  id,
  items,
}: {
  id: string;
  items: UniqueIdentifier[];
  activeId?: UniqueIdentifier;
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <ul
        className="droppable min-w-[110px] list-none rounded-md border border-black p-[20px_10px]"
        ref={setNodeRef}
      >
        {items.map((item) => (
          <SortableItem key={item} id={item} />
        ))}
      </ul>
    </SortableContext>
  );
};

const SortableItem = ({ id }: { id: UniqueIdentifier }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <li
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="item mb-[5px] box-border flex h-[30px] w-[110px] cursor-grab select-none items-center rounded-md border border-gray-300 pl-[5px]"
    >
      Item {id}
    </li>
  );
};
