import { Quote } from "@/utils/types";
import type {
  DraggableProvided,
  DraggableStateSnapshot,
} from "@hello-pangea/dnd";
import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import { QuoteList } from "./QuoteList";

interface Props {
  title: string;
  quotes: Quote[];
  index: number;
  isScrollable?: boolean;
  isCombineEnabled?: boolean;
  useClone?: boolean;
}

const Column: React.FC<Props> = ({
  title,
  quotes,
  index,
  isScrollable = false,
  isCombineEnabled = false,
  useClone = false,
}) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="m-2 flex flex-col"
        >
          <div
            {...provided.dragHandleProps}
            className={`flex items-center justify-center rounded-t-lg ${
              snapshot.isDragging ? "bg-green-200" : "bg-gray-300"
            } transition duration-200 ease-in-out hover:bg-green-200`}
            aria-label={`${title} quote list`}
          >
            {title}
          </div>
          <QuoteList
            listId={title}
            listType="QUOTE"
            style={{
              backgroundColor: snapshot.isDragging ? "bg-green-200" : undefined,
            }}
            quotes={quotes}
            internalScroll={isScrollable}
            isCombineEnabled={isCombineEnabled}
            useClone={useClone}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Column;
