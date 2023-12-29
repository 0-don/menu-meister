import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";
import React from "react";

export interface Props {
  dragging?: boolean;
  listeners?: DraggableSyntheticListeners;
  transition?: string | null;
  transform?: Transform | null;
  value: React.ReactNode;
}

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
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
