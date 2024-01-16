import { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";
import { CSS } from "@dnd-kit/utilities";
import { forwardRef, memo } from "react";
import { Droppable } from "./Droppable";

interface TableMealItemProps {
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  transition?: string;
  value: React.ReactNode;
  activatorRef?: (element: HTMLElement | null) => void;
}

export const TableMealItem = memo(
  forwardRef<HTMLLIElement, TableMealItemProps>(
    ({ listeners, transition, transform, value, ...props }, ref) => {
      return (
        <li
          className="flex list-none items-center bg-gray-500 p-5"
          style={
            {
              transform: transform
                ? CSS.Transform.toString(transform)
                : transform,
              transition,
            } as React.CSSProperties
          }
          {...props}
          ref={ref}
        >
          <div
            className="mr-5 bg-yellow-400 p-5"
            {...listeners}
            ref={props.activatorRef ? props.activatorRef : undefined}
          >
            {value}
          </div>
          <div className="flex space-x-2">
            <Droppable id={`${"monday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"tuesday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"wednesday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"thursday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"friday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"saturday"}#${value}`}>drop</Droppable>
            <Droppable id={`${"sunday"}#${value}`}>drop</Droppable>
          </div>
        </li>
      );
    },
  ),
);
