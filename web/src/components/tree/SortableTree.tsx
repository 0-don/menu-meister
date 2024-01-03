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

interface ItemGroups {
  [key: string]: UniqueIdentifier[];
}

export const SortableTree = () => {
  const [itemGroups, setItemGroups] = useState<ItemGroups>({
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
    group3: ["7", "8", "9"],
  });
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>(
    undefined,
  );

  const moveBetweenContainers = (
    items: ItemGroups,
    activeContainer: string,
    activeIndex: number,
    overContainer: string,
    overIndex: number,
    item: UniqueIdentifier,
  ) => ({
    ...items,
    [activeContainer]: [
      ...items[activeContainer].slice(0, activeIndex),
      ...items[activeContainer].slice(activeIndex + 1),
    ],
    [overContainer]: [
      ...items[overContainer].slice(0, overIndex),
      item,
      ...items[overContainer].slice(overIndex),
    ],
  });

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
          setItemGroups((itemGroups) => {
            const activeIndex = active.data.current?.sortable.index;
            const overIndex =
              over.id in itemGroups
                ? (itemGroups as any)[overContainer].length + 1
                : over.data.current?.sortable.index;

            return moveBetweenContainers(
              itemGroups,
              activeContainer,
              activeIndex,
              overContainer,
              overIndex,
              active.id,
            );
          });
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
            over.id in itemGroups
              ? (itemGroups as any)[overContainer].length + 1
              : over.data.current?.sortable.index;

          setItemGroups((itemGroups) => {
            let newItems;
            if (activeContainer === overContainer) {
              newItems = {
                ...itemGroups,
                [overContainer]: arrayMove(
                  (itemGroups as any)[overContainer],
                  activeIndex,
                  overIndex,
                ),
              };
            } else {
              newItems = moveBetweenContainers(
                itemGroups,
                activeContainer,
                activeIndex,
                overContainer,
                overIndex,
                active.id,
              );
            }

            return newItems;
          });
        }

        setActiveId(undefined);
      }}
    >
      <div className="flex space-x-5">
        {Object.keys(itemGroups).map((group) => (
          <Droppable
            id={group}
            items={(itemGroups as any)[group]}
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

interface DroppableProps {
  id: string;
  items: UniqueIdentifier[];
  activeId?: UniqueIdentifier;
}

const Droppable = ({ id, items }: DroppableProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <ul
        className="droppable min-w-[110px] list-none rounded-md border border-black p-[20px_10px]"
        ref={setNodeRef}
      >
        {items.map((item: any) => (
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
    <li style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <div
        style={{ cursor: "grabbing" }}
        className="item mb-[5px] box-border flex h-[30px] w-[110px] select-none items-center rounded-md border border-gray-300 pl-[5px]"
      >
        Item {id}
      </div>
    </li>
  );
};
