/* eslint-disable react/display-name */
import {
  DndContext,
  DragOverlay,
  UniqueIdentifier,
  closestCenter,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

function SortableItem({ id }: { id: UniqueIdentifier }) {
  const { setNodeRef, listeners, isDragging, transform } = useSortable({ id });

  const wrapperStyles = {
    transform: `translate3d(${transform ? `${transform.x}px` : "0"}, ${
      transform ? `${transform.y}px` : "0"
    }, 0) scaleX(${transform?.scaleX ?? 1}) scaleY(${transform?.scaleY ?? 1})`,
  };

  return (
    <li
      className={`box-border flex ${isDragging ? "z-50" : "z-auto"}`}
      style={wrapperStyles}
      ref={setNodeRef}
      {...listeners}
    >
      <div
        className={`bg-opacity relative flex flex-grow items-center rounded-lg bg-gray-500 p-4 text-black outline-none  ${
          isDragging ? "opacity-50" : "opacity-100"
        }`}
      >
        {id}
      </div>
    </li>
  );
}

type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;

export function MultipleContainers({ renderItem }: { renderItem?: any }) {
  const [items, setItems] = useState<Items>(() => ({
    A: ["A1", "A2", "A3"],
    B: ["B1", "B2", "B3"],
    C: ["C1", "C2", "C3"],
    D: ["D1", "D2", "D3"],
  }));

  const [containers, setContainers] = useState(
    Object.keys(items) as UniqueIdentifier[],
  );
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={({ active }) => setActiveId(active.id)}
      onDragOver={({ active, over }) => {
        const overId = over?.id;

        if (overId == null || active.id in items) {
          return;
        }

        const overContainer = findContainer(overId);
        const activeContainer = findContainer(active.id);

        if (!overContainer || !activeContainer) {
          return;
        }

        if (activeContainer !== overContainer) {
          setItems((items) => {
            const activeItems = items[activeContainer];
            const overItems = items[overContainer];
            const overIndex = overItems.indexOf(overId);
            const activeIndex = activeItems.indexOf(active.id);

            let newIndex: number;

            if (overId in items) {
              newIndex = overItems.length + 1;
            } else {
              const isBelowOverItem =
                over &&
                active.rect.current.translated &&
                active.rect.current.translated.top >
                  over.rect.top + over.rect.height;

              const modifier = isBelowOverItem ? 1 : 0;

              newIndex =
                overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
            }

            return {
              ...items,
              [activeContainer]: items[activeContainer].filter(
                (item) => item !== active.id,
              ),
              [overContainer]: [
                ...items[overContainer].slice(0, newIndex),
                items[activeContainer][activeIndex],
                ...items[overContainer].slice(
                  newIndex,
                  items[overContainer].length,
                ),
              ],
            };
          });
        }
      }}
      onDragEnd={({ active, over }) => {
        // if (active.id in items && over?.id) {
        //   setContainers((containers) => {
        //     const activeIndex = containers.indexOf(active.id);
        //     const overIndex = containers.indexOf(over.id);
        //     return arrayMove(containers, activeIndex, overIndex);
        //   });
        // }
        // const activeContainer = findContainer(active.id);
        // if (!activeContainer) {
        //   setActiveId(null);
        //   return;
        // }
        // const overId = over?.id;
        // if (overId == null) {
        //   setActiveId(null);
        //   return;
        // }
        // const overContainer = findContainer(overId);
        // if (overContainer) {
        //   const activeIndex = items[activeContainer].indexOf(active.id);
        //   const overIndex = items[overContainer].indexOf(overId);
        //   if (activeIndex !== overIndex) {
        //     setItems((items) => ({
        //       ...items,
        //       [overContainer]: arrayMove(
        //         items[overContainer],
        //         activeIndex,
        //         overIndex,
        //       ),
        //     }));
        //   }
        // }
        // setActiveId(null);
      }}
    >
      <div
        style={{
          display: "inline-grid",
          boxSizing: "border-box",
          padding: 20,
          gridAutoFlow: "column",
        }}
      >
        {containers.map((containerId) => (
          <div
            key={containerId}
            className={`max-content duration-350 m-2.5 box-border flex min-h-[200px] min-w-[350px] appearance-none flex-col overflow-hidden rounded-md border border-[rgba(0,0,0,0.05)] bg-black text-base outline-none transition-colors`}
          >
            <SortableContext
              items={items[containerId]}
              strategy={verticalListSortingStrategy}
            >
              {items[containerId].map((value) => (
                <SortableItem key={value} id={value} />
              ))}
            </SortableContext>
          </div>
        ))}
      </div>

      <DragOverlay
        dropAnimation={{
          sideEffects: defaultDropAnimationSideEffects({
            styles: { active: { opacity: "0.5" } },
          }),
        }}
      >
        {activeId && <SortableItem id={activeId} key={activeId} />}
      </DragOverlay>
    </DndContext>
  );
}
