import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TreeItem, TreeItemProps } from "./TreeItem";

interface Props extends TreeItemProps {
  id: UniqueIdentifier;
}

export function SortableTreeItem({ id, depth, ...props }: Props) {
  const {
    attributes,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    // @ts-ignore
    transition,
  } = useSortable({ id });

  return (
    <TreeItem
      ref={setDraggableNodeRef}
      wrapperRef={setDroppableNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      depth={depth}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      {...props}
    />
  );
}
