import { Quote } from "@/utils/types";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { CSSProperties } from "react";
import QuoteItem from "./QuoteItem";

interface QuoteListProps {
  listId?: string;
  listType?: string;
  quotes: Quote[];
  title?: string;
  internalScroll?: boolean;
  scrollContainerStyle?: CSSProperties;
  isDropDisabled?: boolean;
  isCombineEnabled?: boolean;
  style?: CSSProperties;
  ignoreContainerClipping?: boolean;
  useClone?: boolean;
}

export const QuoteList: React.FC<QuoteListProps> = ({
  ignoreContainerClipping,
  internalScroll,
  scrollContainerStyle,
  isDropDisabled,
  isCombineEnabled,
  listId = "LIST",
  listType,
  style,
  quotes,
  title,
  useClone,
}) => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}
      renderClone={
        useClone
          ? (provided, snapshot, descriptor) => (
              <QuoteItem
                quote={quotes[descriptor.source.index]}
                provided={provided}
                isDragging={snapshot.isDragging}
                isClone
              />
            )
          : undefined
      }
    >
      {(dropProvided, dropSnapshot) => (
        <div
          style={style}
          className={`flex flex-col ${
            isDropDisabled ? "opacity-50" : ""
          } w-64 select-none border-2 p-2 transition-all duration-200 ease-in-out ${
            dropSnapshot.isDraggingOver ? "bg-blue-200" : ""
          }`}
          {...dropProvided.droppableProps}
        >
          {title && <div>{title}</div>}
          <div
            ref={dropProvided.innerRef}
            style={internalScroll ? scrollContainerStyle : undefined}
            className={`min-h-[250px] pb-2 ${
              internalScroll
                ? "max-h-[250px] overflow-y-auto overflow-x-hidden"
                : ""
            }`}
          >
            {quotes.map((quote, index) => (
              <Draggable key={quote.id} draggableId={quote.id} index={index}>
                {(dragProvided, dragSnapshot) => (
                  <QuoteItem
                    key={quote.id}
                    quote={quote}
                    isDragging={dragSnapshot.isDragging}
                    isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
                    provided={dragProvided}
                  />
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
