import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { CSS } from "@dnd-kit/utilities";

const removeAtIndex = (array: any[], index: number) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

const insertAtIndex = (array: any[], index: number, item: any) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

export const SortableTree = () => {
  const [itemGroups, setItemGroups] = useState({
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
    group3: ["7", "8", "9"],
  });
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>(
    undefined,
  );

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const moveBetweenContainers = (
    items: any,
    activeContainer: any,
    activeIndex: number,
    overContainer: any,
    overIndex: number,
    item: any,
  ) => {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item),
    };
  };

  return (
    <DndContext
      sensors={sensors}
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
      <div className="container">
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
        {activeId ? <Item id={activeId} dragOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
};
const Droppable = ({ id, items }: any) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <ul className="droppable" ref={setNodeRef}>
        {items.map((item: any) => (
          <SortableItem key={item} id={item} />
        ))}
      </ul>
    </SortableContext>
  );
};

const SortableItem = ({ id }: any) => {
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
      <Item id={id} />
    </li>
  );
};
const Item = ({ id, dragOverlay }: any) => {
  const style = {
    cursor: dragOverlay ? "grabbing" : "grab",
  };

  return (
    <div style={style} className="item">
      Item {id}
    </div>
  );
};
