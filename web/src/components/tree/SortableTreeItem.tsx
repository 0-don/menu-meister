/* eslint-disable react/display-name */
import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { HTMLAttributes, forwardRef } from "react";

export interface TreeItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, "id"> {
  depth: number;
  handleProps?: any;
  indentationWidth: number;
  value: string;
  wrapperRef?(node: HTMLLIElement): void;
}

export const TreeItem = forwardRef<HTMLDivElement, TreeItemProps>(
  ({ depth, handleProps, indentationWidth, style, value, wrapperRef }, ref) => {
    return (
      <li
        ref={wrapperRef}
        style={{
          listStyleType: "none",
          paddingInlineStart: `${indentationWidth * depth}px`,
          ...style,
        }}
      >
        <div ref={ref} {...handleProps}>
          {value}
        </div>
      </li>
    );
  },
);

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
