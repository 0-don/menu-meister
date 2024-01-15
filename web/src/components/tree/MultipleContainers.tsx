import {
  CancelDrop,
  CollisionDetection,
  DndContext,
  DragOverlay,
  DropAnimation,
  KeyboardCoordinateGetter,
  Modifiers,
  UniqueIdentifier,
  closestCenter,
  defaultDropAnimationSideEffects,
  getFirstCollision,
  pointerWithin,
  rectIntersection,
} from "@dnd-kit/core";
import {
  SortableContext,
  SortingStrategy,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useCallback, useRef, useState } from "react";
import { Container, ContainerProps } from "./Container";
import { Item } from "./Item";

function DroppableContainer({
  children,
  columns = 1,
  disabled,
  id,
  items,
  style,
  ...props
}: ContainerProps & {
  disabled?: boolean;
  id: UniqueIdentifier;
  items: UniqueIdentifier[];
  style?: React.CSSProperties;
}) {
  const {
    active,
    attributes,
    isDragging,
    listeners,
    over,
    setNodeRef,
    transition,
    transform,
  } = useSortable({ id });

  return (
    <Container
      ref={disabled ? undefined : setNodeRef}
      style={{
        ...style,
        transition,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : undefined,
      }}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      columns={columns}
      {...props}
    >
      {children}
    </Container>
  );
}

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5",
      },
    },
  }),
};

type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;

interface Props {
  adjustScale?: boolean;
  cancelDrop?: CancelDrop;
  columns?: number;
  containerStyle?: React.CSSProperties;
  coordinateGetter?: KeyboardCoordinateGetter;
  getItemStyles?(args: {
    value: UniqueIdentifier;
    index: number;
    overIndex: number;
    isDragging: boolean;
    containerId: UniqueIdentifier;
    isSorting: boolean;
    isDragOverlay: boolean;
  }): React.CSSProperties;
  wrapperStyle?(args: { index: number }): React.CSSProperties;
  itemCount?: number;
  items?: Items;
  handle?: boolean;
  renderItem?: any;
  strategy?: SortingStrategy;
  modifiers?: Modifiers;
  minimal?: boolean;
  trashable?: boolean;
  scrollable?: boolean;
  vertical?: boolean;
}

export function MultipleContainers({
  cancelDrop,
  columns,
  handle = false,
  containerStyle,

  minimal = false,
  renderItem,
  strategy = verticalListSortingStrategy,
  vertical = false,
  scrollable,
}: Props) {
  const [items, setItems] = useState<Items>({
    A: ["A1", "A2", "A3", "A4", "A5"],
    B: ["B1", "B2", "B3", "B4", "B5"],
    C: ["C1", "C2", "C3", "C4", "C5"],
    D: ["D1", "D2", "D3", "D4", "D5"],
  });

  const [containers, setContainers] = useState(
    Object.keys(items) as UniqueIdentifier[],
  );
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const lastOverId = useRef<UniqueIdentifier | null>(null);
  const recentlyMovedToNewContainer = useRef(false);
  const isSortingContainer = activeId ? containers.includes(activeId) : false;

  /**
   * Custom collision detection strategy optimized for multiple containers
   *
   * - First, find any droppable containers intersecting with the pointer.
   * - If there are none, find intersecting containers with the active draggable.
   * - If there are no intersecting containers, return the last matched intersection
   *
   */
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

      // Start by finding any intersecting droppable
      const pointerIntersections = pointerWithin(args);
      const intersections =
        pointerIntersections.length > 0
          ? // If there are droppables intersecting with the pointer, return those
            pointerIntersections
          : rectIntersection(args);
      let overId = getFirstCollision(intersections, "id");

      if (overId != null) {
        if (overId in items) {
          const containerItems = items[overId];

          // If a container is matched and it contains items (columns 'A', 'B', 'C')
          if (containerItems.length > 0) {
            // Return the closest droppable within that container
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) =>
                  container.id !== overId &&
                  containerItems.includes(container.id),
              ),
            })[0]?.id;
          }
        }

        lastOverId.current = overId;

        return [{ id: overId }];
      }

      // When a draggable item moves to a new container, the layout may shift
      // and the `overId` may become `null`. We manually set the cached `lastOverId`
      // to the id of the draggable item that was moved to the new container, otherwise
      // the previous `overId` will be returned which can cause items to incorrectly shift positions
      if (recentlyMovedToNewContainer.current) {
        lastOverId.current = activeId;
      }

      // If no droppable is matched, return the last match
      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeId, items],
  );

  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) return id;
    return Object.keys(items).find((key) => items[key].includes(id));
  };

  const getIndex = (id: UniqueIdentifier) => {
    const container = findContainer(id);
    if (!container) return -1;
    const index = items[container].indexOf(id);
    return index;
  };

  return (
    <DndContext
      collisionDetection={collisionDetectionStrategy}
      onDragStart={({ active }) => setActiveId(active.id)}
      onDragOver={({ active, over }) => {
        if (over?.id == null || active.id in items) return;

        const overContainer = findContainer(over?.id);
        const activeContainer = findContainer(active.id);

        if (!overContainer || !activeContainer) return;

        if (activeContainer !== overContainer) {
          setItems((items) => {
            const activeItems = items[activeContainer];
            const overItems = items[overContainer];
            const overIndex = overItems.indexOf(over?.id);
            const activeIndex = activeItems.indexOf(active.id);

            let newIndex: number;

            if (over?.id in items) {
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

        if (!activeContainer) return setActiveId(null);
        if (over?.id == null) return setActiveId(null);

        const overContainer = findContainer(over?.id);

        if (overContainer) {
          const activeIndex = items[activeContainer].indexOf(active.id);
          const overIndex = items[overContainer].indexOf(over?.id);

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
      cancelDrop={cancelDrop}
      onDragCancel={() => setActiveId(null)}
    >
      <div
        style={{
          display: "inline-grid",
          boxSizing: "border-box",
          padding: 20,
          gridAutoFlow: vertical ? "row" : "column",
        }}
      >
        <SortableContext
          items={containers}
          strategy={
            vertical
              ? verticalListSortingStrategy
              : horizontalListSortingStrategy
          }
        >
          {containers.map((containerId) => (
            <DroppableContainer
              key={containerId}
              id={containerId}
              label={minimal ? undefined : `Column ${containerId}`}
              columns={columns}
              items={items[containerId]}
              scrollable={scrollable}
              style={containerStyle}
              unstyled={minimal}
            >
              <SortableContext items={items[containerId]} strategy={strategy}>
                {items[containerId].map((value, index) => (
                  <SortableItem
                    disabled={isSortingContainer}
                    key={value}
                    id={value}
                    index={index}
                    handle={handle}
                    containerId={containerId}
                    getIndex={getIndex}
                  />
                ))}
              </SortableContext>
            </DroppableContainer>
          ))}
        </SortableContext>
      </div>

      <DragOverlay>
        {activeId
          ? containers.includes(activeId)
            ? renderContainerDragOverlay(activeId)
            : renderSortableItemDragOverlay(activeId)
          : null}
      </DragOverlay>
    </DndContext>
  );

  function renderSortableItemDragOverlay(id: UniqueIdentifier) {
    return <Item value={id} handle={handle} />;
  }

  function renderContainerDragOverlay(containerId: UniqueIdentifier) {
    return (
      <Container label={`Column ${containerId}`} columns={columns}>
        {items[containerId].map((item) => (
          <Item key={item} value={item} handle={handle} />
        ))}
      </Container>
    );
  }
}

interface SortableItemProps {
  containerId: UniqueIdentifier;
  id: UniqueIdentifier;
  index: number;
  handle: boolean;
  disabled?: boolean;
  getIndex(id: UniqueIdentifier): number;
}

function SortableItem({ disabled, id, index, handle }: SortableItemProps) {
  const {
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    isDragging,
    transform,
    transition,
  } = useSortable({ id });

  return (
    <Item
      ref={disabled ? undefined : setNodeRef}
      value={id}
      dragging={isDragging}
      handle={handle}
      handleProps={{ ref: setActivatorNodeRef }}
      transition={transition}
      transform={transform}
      listeners={listeners}
    />
  );
}
