import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import SortableContainer, { Container } from "./Container";
import SortableItem, { Item } from "./SortableItem";

const wrapperStyle = {
  background: "#e9e9e9",
  padding: "50px 10px",
  borderRadius: 8,
  margin: 50,
};

export default function SortableTree() {
  const [data, setData] = useState({
    items: [
      { id: 5, parent: 3 },
      { id: 6, parent: 3 },
      { id: 1 },
      { id: 2, parent: 4 },
      { id: 3, container: true, parent: 7 },
      { id: 7, container: true, row: true },
      { id: 4, container: true, parent: 7 },
      { id: 8, parent: 10 },
      { id: 9, parent: 10 },
      { id: 10, container: true },
    ],
  });
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>();
  return (
    <DndContext
      onDragStart={(event) => setActiveId(event.active.id)}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        id="root"
        items={getItemIds()}
        strategy={verticalListSortingStrategy}
      >
        <div style={wrapperStyle}>
          {getItems().map((item: any) => {
            if (item.container) {
              return (
                <SortableContainer
                  key={item.id}
                  id={item.id}
                  getItems={getItems}
                  row={item.row}
                />
              );
            }

            return (
              <SortableItem key={item.id} id={item.id}>
                <Item id={item.id} />
              </SortableItem>
            );
          })}
        </div>
      </SortableContext>
      <DragOverlay>{getDragOverlay()}</DragOverlay>
    </DndContext>
  );

  function isContainer(id: UniqueIdentifier | undefined) {
    const item = data.items.find((item) => item.id === id);
    return !item ? false : item.container;
  }

  function isRow(id: UniqueIdentifier | undefined) {
    const item = data.items.find((item) => item.id === id);
    return !item ? false : item.row;
  }

  function getItems(parent?: any) {
    return data.items.filter((item) => {
      if (!parent) return !item.parent;
      return item.parent === parent;
    });
  }

  function getItemIds(parent?: any) {
    return getItems(parent).map((item: any) => item.id);
  }

  function findParent(id: UniqueIdentifier | undefined) {
    const item = data.items.find((item) => item.id === id);
    return !item ? false : item.parent;
  }

  function getDragOverlay() {
    if (!activeId) {
      return null;
    }

    if (isContainer(activeId)) {
      const item = data.items.find((i) => i.id === activeId);

      return (
        <Container row={item?.row}>
          {getItems(activeId).map((item: any) => (
            <Item key={item.id} id={item.id} />
          ))}
        </Container>
      );
    }

    return <Item id={activeId} />;
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    const { id } = active;
    let overId: any;
    if (over) {
      overId = over.id;
    }

    const overParent = findParent(overId);
    const overIsContainer = isContainer(overId);
    const activeIsContainer = isContainer(activeId);
    if (overIsContainer) {
      const overIsRow = isRow(overId);
      const activeIsRow = isRow(activeId);
      // only columns to be added to rows
      if (overIsRow) {
        if (activeIsRow) {
          return;
        }

        if (!activeIsContainer) {
          return;
        }
      } else if (activeIsContainer) {
        return;
      }
    }

    setData((prev) => {
      const activeIndex = data.items.findIndex((item: any) => item.id === id);
      const overIndex = data.items.findIndex((item: any) => item.id === overId);

      let newIndex = overIndex;
      const isBelowLastItem =
        over &&
        overIndex === prev.items.length - 1 &&
        active.rect.current.translated!.top > over.rect.top + over.rect.height;

      const modifier = isBelowLastItem ? 1 : 0;

      newIndex = overIndex >= 0 ? overIndex + modifier : prev.items.length + 1;

      let nextParent;
      if (overId) {
        nextParent = overIsContainer ? overId : overParent;
      }

      (prev.items[activeIndex] as any).parent = nextParent;
      const nextItems = arrayMove(prev.items, activeIndex, newIndex);

      return {
        items: nextItems,
      };
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const { id } = active;
    let overId: any;
    if (over) {
      overId = over.id;
    }

    const activeIndex = data.items.findIndex((item: any) => item.id === id);
    const overIndex = data.items.findIndex((item: any) => item.id === overId);

    let newIndex = overIndex >= 0 ? overIndex : 0;

    if (activeIndex !== overIndex) {
      setData((prev) => ({
        items: arrayMove(prev.items, activeIndex, newIndex),
      }));
    }

    setActiveId(undefined);
  }
}
