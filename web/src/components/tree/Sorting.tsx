import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useSnapshot } from "valtio";
import SortingStore from "./SortingStore";

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
