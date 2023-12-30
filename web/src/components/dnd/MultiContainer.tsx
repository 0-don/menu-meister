/* eslint-disable react/display-name */
import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import {
  CollisionDetection,
  DndContext,
  DragOverlay,
  MeasuringStrategy,
  UniqueIdentifier,
  closestCenter,
  defaultDropAnimationSideEffects,
  getFirstCollision,
  pointerWithin,
  rectIntersection,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  defaultAnimateLayoutChanges,
  horizontalListSortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { Transform } from "@dnd-kit/utilities";
import { CSS } from "@dnd-kit/utilities";
import React, { forwardRef, memo, useCallback, useRef, useState } from "react";

export interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  handleProps?: React.HTMLAttributes<any>;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, handleProps, style }: ContainerProps, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={`max-content duration-350 m-2.5 box-border flex min-h-[200px] min-w-[350px] appearance-none flex-col overflow-hidden rounded-md border 
        border-[rgba(0,0,0,0.05)] bg-black text-base outline-none transition-colors ${
          handleProps?.className || ""
        }`}
        {...handleProps}
      >
        <div>asdas</div>
        {children}
      </div>
    );
  },
);

export interface ItemProps {
  dragging?: boolean;
  listeners?: DraggableSyntheticListeners;
  transition?: string | null;
  transform?: Transform | null;
  value: React.ReactNode;
}

export const Item = memo(
  forwardRef<HTMLLIElement, ItemProps>(
    ({ dragging, listeners, transition, transform, value }, ref) => {
      const wrapperStyles = {
        transition: [transition].filter(Boolean).join(", "),
        transform: `translate3d(${transform ? `${transform.x}px` : "0"}, ${
          transform ? `${transform.y}px` : "0"
        }, 0) scaleX(${transform?.scaleX ?? 1}) scaleY(${
          transform?.scaleY ?? 1
        })`,
      };

      return (
        <li
          className={`box-border flex ${dragging ? "z-50" : "z-auto"}`}
          style={wrapperStyles}
          {...listeners}
          ref={ref}
        >
          <div
            className={`bg-opacity relative flex flex-grow items-center rounded-lg bg-gray-500 p-4 text-black outline-none  ${
              dragging ? "opacity-50" : "opacity-100"
            }`}
          >
            {value}
          </div>
        </li>
      );
    },
  ),
);

function DroppableContainer({
  children,
  id,
  items,
  ...props
}: ContainerProps & {
  id: UniqueIdentifier;
  items: UniqueIdentifier[];
}) {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useSortable({
      id,
      data: { type: "container", children: items },
      animateLayoutChanges: (args) =>
        defaultAnimateLayoutChanges({ ...args, wasDragging: true }),
    });

  return (
    <Container
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : undefined,
      }}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      {...props}
    >
      {children}
    </Container>
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
  const lastOverId = useRef<UniqueIdentifier | null>(null);
  const recentlyMovedToNewContainer = useRef(false);

  const collisionDetectionStrategy: CollisionDetection = useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in items,
          ),
        });
      }

      const pointerIntersections = pointerWithin(args);
      const intersections =
        pointerIntersections.length > 0
          ? pointerIntersections
          : rectIntersection(args);
      let overId = getFirstCollision(intersections, "id");

      if (overId != null) {
        lastOverId.current = overId;

        return [{ id: overId }];
      }

      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeId, items],
  );

  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  };

  return (
    <DndContext
      collisionDetection={collisionDetectionStrategy}
      measuring={{
        droppable: {
          strategy: MeasuringStrategy.Always,
        },
      }}
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

            recentlyMovedToNewContainer.current = true;

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
        if (active.id in items && over?.id) {
          setContainers((containers) => {
            const activeIndex = containers.indexOf(active.id);
            const overIndex = containers.indexOf(over.id);

            return arrayMove(containers, activeIndex, overIndex);
          });
        }

        const activeContainer = findContainer(active.id);

        if (!activeContainer) {
          setActiveId(null);
          return;
        }

        const overId = over?.id;

        if (overId == null) {
          setActiveId(null);
          return;
        }

        const overContainer = findContainer(overId);

        if (overContainer) {
          const activeIndex = items[activeContainer].indexOf(active.id);
          const overIndex = items[overContainer].indexOf(overId);

          if (activeIndex !== overIndex) {
            setItems((items) => ({
              ...items,
              [overContainer]: arrayMove(
                items[overContainer],
                activeIndex,
                overIndex,
              ),
            }));
          }
        }

        setActiveId(null);
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
        <SortableContext
          items={[...containers, "placeholder"]}
          strategy={horizontalListSortingStrategy}
        >
          {containers.map((containerId) => (
            <DroppableContainer
              key={containerId}
              id={containerId}
              items={items[containerId]}
            >
              <SortableContext
                items={items[containerId]}
                strategy={verticalListSortingStrategy}
              >
                {items[containerId].map((value: any, index: any) => (
                  <SortableItem key={value} id={value} />
                ))}
              </SortableContext>
            </DroppableContainer>
          ))}
        </SortableContext>
      </div>

      <DragOverlay
        dropAnimation={{
          sideEffects: defaultDropAnimationSideEffects({
            styles: { active: { opacity: "0.5" } },
          }),
        }}
      >
        {activeId ? (
          containers.includes(activeId) ? (
            <Container style={{ height: "100%" }}>
              {items[activeId].map((item, index) => (
                <Item key={item} value={item} />
              ))}
            </Container>
          ) : (
            <Item value={activeId} />
          )
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function SortableItem({ id }: { id: UniqueIdentifier }) {
  const { setNodeRef, listeners, isDragging, transform } = useSortable({ id });

  return (
    <Item
      ref={setNodeRef}
      value={id}
      dragging={isDragging}
      transform={transform}
      listeners={listeners}
    />
  );
}
