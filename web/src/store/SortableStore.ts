import { ItemType } from "@/utils/constants";
import { DragEndEvent, DragOverEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { proxy } from "valtio";

type DataType = {
  items: ItemType[];
};

const SortableStore = proxy({
  activeId: undefined as UniqueIdentifier | undefined,
  data: {
    items: [{ id: 1, container: true }, { id: 2 }],
  } as DataType,
  addItem: (container?: boolean) => () =>
    (SortableStore.data = {
      items: [
        ...SortableStore.data.items,
        { id: SortableStore.data.items.length + 1, container },
      ],
    }),
  findItem: (id?: UniqueIdentifier) =>
    SortableStore.data.items.find((item) => item.id === id),
  isContainer: (id?: UniqueIdentifier) =>
    !!SortableStore.findItem(id)?.container,
  getItems: (parent?: UniqueIdentifier) =>
    SortableStore.data.items.filter((item) => item.parent === parent),
  getItemIds: (parent?: UniqueIdentifier) =>
    SortableStore.getItems(parent).map((item) => item.id),
  findParent: (id?: UniqueIdentifier) => SortableStore.findItem(id)?.parent,

  handleDragOver({ active, over }: DragOverEvent) {
    const overParent = SortableStore.findParent(over?.id);
    const overIsContainer = SortableStore.isContainer(over?.id);

    const activeItem = SortableStore.findItem(active.id);
    const overItem = SortableStore.findItem(over?.id);

    if (!activeItem) return;

    if (activeItem?.container && overItem?.container) {
      return;
    }

    // Check if dragging over a footer area of a container
    if (
      over?.id.toString().includes("-") &&
      !SortableStore.isContainer(active.id)
    ) {
      return SortableStore.handleFooterAreaDrag(activeItem, over?.id as string);
    }

    const activeIndex = SortableStore.data.items.findIndex(
      (item) => item.id === active.id,
    );
    const overIndex = SortableStore.data.items.findIndex(
      (item) => item.id === over?.id,
    );

    let newIndex = overIndex;
    const isBelowLastItem =
      over &&
      overIndex === SortableStore.data.items.length - 1 &&
      active.rect.current.initial!.top > over.rect.top + over.rect.height;

    const modifier = isBelowLastItem ? 1 : 0;
    newIndex =
      overIndex >= 0
        ? overIndex + modifier
        : SortableStore.data.items.length + 1;
    let nextParent = overIsContainer ? over?.id : overParent;

    SortableStore.data.items[activeIndex].parent = nextParent as number;

    SortableStore.data.items = arrayMove(
      SortableStore.data.items,
      activeIndex,
      newIndex,
    );
  },

  handleFooterAreaDrag(activeItem: ItemType, overIdStr: string) {
    const containerId = parseInt(overIdStr.split("-")[0], 10);
    const updatedItems = SortableStore.data.items.filter(
      (item) => item.id !== activeItem.id,
    );
    const containerIndex = updatedItems.findIndex(
      (item) => item.id === containerId,
    );

    // Insert the active item after the container
    updatedItems.splice(containerIndex + 1, 0, {
      ...activeItem,
      container: undefined,
      parent: undefined,
    });

    SortableStore.data.items = updatedItems;
  },
  handleDragEnd({ active, over }: DragEndEvent) {
    const activeIndex = SortableStore.data.items.findIndex(
      (item) => item.id === active.id,
    );
    const overIndex = over
      ? SortableStore.data.items.findIndex((item) => item.id === over.id)
      : 0;
    const activeItem = SortableStore.findItem(active.id);

    if (!activeItem) return (SortableStore.activeId = undefined);

    if (
      over?.id.toString().includes("-") &&
      !SortableStore.isContainer(active.id)
    ) {
      SortableStore.handleFooterAreaDrag(activeItem, over?.id as string);
      return (SortableStore.activeId = undefined);
    }

    if (activeIndex !== overIndex) {
      SortableStore.data.items = arrayMove(
        SortableStore.data.items,
        activeIndex,
        overIndex >= 0 ? overIndex : SortableStore.data.items.length,
      );
    }

    SortableStore.activeId = undefined;
  },
});

export default SortableStore;
