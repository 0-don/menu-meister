import type { UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import type { FlattenedItem, TreeItem, TreeItems } from "./types";

export function getProjection(
  items: FlattenedItem[],
  activeId: UniqueIdentifier,
  overId: UniqueIdentifier,
  dragOffset: number,
  indentationWidth: number,
) {
  const overItemIndex = items.findIndex(({ id }) => id === overId);
  const activeItemIndex = items.findIndex(({ id }) => id === activeId);
  const activeItem = items[activeItemIndex];
  const newItems = arrayMove(items, activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1];
  const nextItem = newItems[overItemIndex + 1];
  const dragDepth = Math.round(dragOffset / indentationWidth);
  let projectedDepth = activeItem.depth + dragDepth;

  // Enforce level one depth limitation
  projectedDepth = Math.min(projectedDepth, 1);

  const maxDepth = Math.min(previousItem ? previousItem.depth + 1 : 0, 1);
  const minDepth = Math.min(nextItem ? nextItem.depth : 0, 1);
  let depth = Math.min(Math.max(projectedDepth, minDepth), maxDepth);

  let parentId = null;
  if (depth !== 0 && previousItem) {
    parentId =
      depth <= previousItem.depth ? previousItem.parentId : previousItem.id;
  }

  return {
    depth,
    maxDepth,
    minDepth,
    parentId,
  };
}

export function flatten(
  items: TreeItems,
  parentId: UniqueIdentifier | null = null,
  depth = 0,
): FlattenedItem[] {
  return items.reduce<FlattenedItem[]>((acc, item, index) => {
    return [
      ...acc,
      { ...item, parentId, depth, index },
      ...flatten(item.children, item.id, depth + 1),
    ];
  }, []);
}

export function buildTree(flattenedItems: FlattenedItem[]): TreeItems {
  const root: TreeItem = { id: "root", children: [] };
  const nodes: Record<string, TreeItem> = { [root.id]: root };
  const items = flattenedItems.map((item) => ({ ...item, children: [] }));

  for (const item of items) {
    const { id, children } = item;
    const parentId = item.parentId ?? root.id;
    const parent = nodes[parentId] ?? items.find(({ id }) => id === parentId);

    nodes[id] = { id, children };
    parent.children.push(item);
  }

  return root.children;
}

export function removeChildrenOf(
  items: FlattenedItem[],
  ids: UniqueIdentifier[],
) {
  const excludeParentIds = [...ids];

  return items.filter((item) => {
    if (item.parentId && excludeParentIds.includes(item.parentId)) {
      if (item.children.length) {
        excludeParentIds.push(item.id);
      }
      return false;
    }

    return true;
  });
}
