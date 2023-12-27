import { grid } from "@/utils/constants";
import { Quote } from "@/utils/types";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import React from "react";

interface QuoteListProps {
  listId?: string;
  quotes: Quote[];
}

export const QuoteList: React.FC<QuoteListProps> = ({
  listId = "LIST",
  quotes,
}) => {
  return (
    <Droppable droppableId={listId}>
      {(dropProvided, dropSnapshot) => (
        <div
          className={`flex w-64 select-none flex-col border-2 p-2 transition-all duration-200 ease-in-out ${
            dropSnapshot.isDraggingOver ? "bg-blue-200" : ""
          }`}
          {...dropProvided.droppableProps}
        >
          <div ref={dropProvided.innerRef} className={`min-h-[250px] pb-2`}>
            {quotes.map((quote, index) => (
              <Draggable key={quote.id} draggableId={quote.id} index={index}>
                {(dragProvided) => (
                  <div
                    ref={dragProvided.innerRef}
                    {...dragProvided.draggableProps}
                    {...dragProvided.dragHandleProps}
                    className="user-select-none focus:box-shadow-none box-border flex border-2 border-transparent focus:outline-none"
                  >
                    <div className="flex flex-grow basis-full flex-col">
                      <div className="before:content-[open-quote] after:content-[close-quote]">
                        {quote.content}
                      </div>
                      <div className="mt-[${grid}px] flex items-center">
                        <small
                          className={`text-[${
                            quote.author.colors.hard
                          }] m-0 flex-grow-0 bg-[${
                            quote.author.colors.soft
                          }] font-normal p-[${grid / 2}px]`}
                        >
                          {quote.author.name}
                        </small>
                        <small className="m-0 flex-shrink flex-grow overflow-ellipsis text-right font-normal">
                          id:{quote.id}
                        </small>
                      </div>
                    </div>
                  </div>
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
