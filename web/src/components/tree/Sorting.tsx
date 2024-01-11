import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { proxy, useSnapshot } from "valtio";

export function Sorting() {
  const sortingStore = useSnapshot(SortingStore, { sync: true });
  return (
    <DndContext
      onDragStart={({ active }) => (SortingStore.activeId = active.id)}
      onDragCancel={() => (SortingStore.activeId = undefined)}
      onDragOver={SortingStore.handleDragOver}
      onDragEnd={SortingStore.handleDragEnd}
    >
      <div className="my-5 flex space-x-5">
        {Object.keys(sortingStore.itemGroups).map((group) => (
          <Droppable
            id={group}
            items={sortingStore.itemGroups[group]}
            key={group}
          />
        ))}
      </div>
      <DragOverlay>
        {SortingStore.activeId ? <Item id={SortingStore.activeId} /> : null}
      </DragOverlay>
    </DndContext>
  );
}

const Droppable = ({
  id,
  items,
}: {
  id: UniqueIdentifier;
  items: UniqueIdentifier[];
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id.toString()} items={items}>
      <ul ref={setNodeRef}>
        {items.map((item: any) => (
          <SortableItem key={item} id={item} />
        ))}
      </ul>
    </SortableContext>
  );
};

const Item = ({ id }: { id: UniqueIdentifier }) => {
  return <div>Item {id}</div>;
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

  return (
    <li
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
      }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Item id={id} />
    </li>
  );
};

type DataType = {
  [key: string]: UniqueIdentifier[];
};

const SortingStore = proxy({
  activeId: undefined as UniqueIdentifier | undefined,
  itemGroups: {
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
    group3: ["7", "8", "9"],
  } as DataType,

  handleDragOver: ({ active, over }: DragOverEvent) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current?.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || over.id;

    if (activeContainer !== overContainer) {
      const activeIndex = active.data.current?.sortable.index;
      const overIndex =
        over.id in SortingStore.itemGroups
          ? SortingStore.itemGroups[overContainer].length + 1
          : over.data.current?.sortable.index;

      SortingStore.itemGroups = SortingStore.moveBetweenContainers(
        activeContainer,
        activeIndex,
        overContainer,
        overIndex,
        active.id,
      );
    }
  },

  handleDragEnd: ({ active, over }: DragEndEvent) => {
    if (!over) {
      SortingStore.activeId = undefined;
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current?.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current?.sortable.index;
      const overIndex =
        over.id in SortingStore.itemGroups
          ? SortingStore.itemGroups[overContainer].length + 1
          : over.data.current?.sortable.index;

      if (activeContainer === overContainer) {
        SortingStore.itemGroups = {
          ...SortingStore.itemGroups,
          [overContainer]: arrayMove(
            SortingStore.itemGroups[overContainer],
            activeIndex,
            overIndex,
          ),
        };
      } else {
        SortingStore.itemGroups = SortingStore.moveBetweenContainers(
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id,
        );
      }
    }

    SortingStore.activeId = undefined;
  },

  moveBetweenContainers: (
    activeContainer: string,
    activeIndex: number,
    overContainer: string,
    overIndex: number,
    item: UniqueIdentifier,
  ) => {
    return {
      ...SortingStore.itemGroups,
      [activeContainer]: [
        ...SortingStore.itemGroups[activeContainer].slice(0, activeIndex),
        ...SortingStore.itemGroups[activeContainer].slice(activeIndex + 1),
      ],
      [overContainer]: [
        ...SortingStore.itemGroups[overContainer].slice(0, overIndex),
        item,
        ...SortingStore.itemGroups[overContainer].slice(overIndex),
      ],
    };
  },
});
