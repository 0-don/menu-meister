"use client";
/* eslint-disable react/display-name */
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { CSSProperties, useState } from "react";

const wrapperStyle = {
  background: "#e9e9e9",
  padding: "50px 10px",
  borderRadius: 8,
  margin: 50,
};

export type ItemType = {
  id: number;
  parent?: number;
  container?: boolean;
  row?: boolean;
};

export type DataType = {
  items: ItemType[];
};

export function SortableTree() {
  const [data, setData] = useState<DataType>({
    items: [
      { id: 5, container: true },
      { id: 3, parent: 5 },
      { id: 4, parent: 5 },
      { id: 1, parent: 6 },
      { id: 10, parent: 6 },
      { id: 2, parent: 6 },
      { id: 6, container: true },
      { id: 8, parent: 7 },
      { id: 9, parent: 7 },
      { id: 7, container: true },
      { id: 11 },
      { id: 12 },
    ],
  });
  const [activeId, setActiveId] = useState<UniqueIdentifier | undefined>();

  function addItem(container?: boolean, row?: boolean) {
    return () => {
      setData((prev) => ({
        items: [
          ...prev.items,
          {
            id: prev.items.length + 1,
            container,
            row,
          },
        ],
      }));
    };
  }

  return (
    <>
      <button onClick={addItem()}>Add Item</button>
      <button onClick={addItem(true)}>Add Column</button>
      <button onClick={addItem(true, true)}>Add Row</button>
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
    </>
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
const containerStyle = {
  background: "#dadada",
  padding: "50px 10px 25px",
  flex: 1,
  borderRadius: 8,
  border: "1px solid #ababab",
  display: "flex",
  alignSelf: "stretch",
  minHeight: 50,
};

export const Container = React.forwardRef((props: any, ref: any) => {
  const { children, row, style = {} } = props;

  return (
    <div
      ref={ref}
      style={{
        ...containerStyle,
        ...style,
        flexDirection: row ? "row" : "column",
      }}
    >
      {children}
    </div>
  );
});

export function SortableContainer(props: any) {
  const { getItems, id, row, style = { margin: "50px 25px" } } = props;

  const items = getItems(id);
  const itemIds = items.map((item: any) => item.id);

  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableItem id={id} handlePosition="top">
      <Container
        ref={setNodeRef}
        row={row}
        style={{ ...style, backgroundColor: row ? "#cdcdcd" : "transparent" }}
      >
        <SortableContext
          items={itemIds}
          strategy={
            row ? horizontalListSortingStrategy : verticalListSortingStrategy
          }
        >
          {items.map((item: any) => {
            let child = <Item id={item.id} />;

            if (item.container) {
              return (
                <SortableContainer
                  key={item.id}
                  id={item.id}
                  getItems={getItems}
                  row={item.row}
                  handlePosition="top"
                />
              );
            }

            return (
              <SortableItem key={item.id} id={item.id}>
                {child}
              </SortableItem>
            );
          })}
        </SortableContext>
      </Container>
    </SortableItem>
  );
}

export function Item(props: any) {
  const { id } = props;

  const style = {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #9a9a9a",
    margin: "10px",
    background: "white",
    borderRadius: 8,
  };

  return (
    <div style={style} className="!text-black">
      {id}
    </div>
  );
}

export function SortableItem(props: any) {
  const { children, handlePosition = "right", id } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    flex: 1,
    position: "relative",
  };

  let handleStyle = {
    position: "absolute",
    fontSize: 36,
    color: "black",
    cursor: "grab",
  };

  const rightHandleStyle = {
    right: 25,
    top: 0,
    bottom: 0,
    transform: "rotate(90deg)",
  };

  const topHandleStyle = {
    right: 40,
    top: 0,
  };

  if (handlePosition === "right") {
    handleStyle = {
      ...handleStyle,
      ...rightHandleStyle,
    };
  } else if (handlePosition === "top") {
    handleStyle = {
      ...handleStyle,
      ...topHandleStyle,
    };
  }

  return (
    <div
      ref={setNodeRef}
      style={style as CSSProperties}
      {...attributes}
      {...listeners}
    >
      {children}
      {/* <div  style={handleStyle}>
        ...
      </div> */}
    </div>
  );
}
