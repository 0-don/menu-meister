import { Quote } from "@/utils/types";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import React from "react";

interface Props {
  title: string;
  quotes: Quote[];
  index: number;
}

const Column: React.FC<Props> = ({ title, quotes, index }) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <Droppable droppableId={title}>
          {(dropProvided, dropSnapshot) => (
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
              <div
                className={`flex w-64 select-none flex-col border-2 p-2 transition-all duration-200 ease-in-out ${
                  dropSnapshot.isDraggingOver ? "bg-blue-200" : ""
                }`}
                {...dropProvided.droppableProps}
              >
                <div
                  ref={dropProvided.innerRef}
                  className={`min-h-[250px] pb-2`}
                >
                  {quotes.map((quote, quoteIndex) => (
                    <Draggable
                      key={quote.id}
                      draggableId={quote.id}
                      index={quoteIndex}
                    >
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
                            <div className="mt-[20px] flex items-center">
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
            </div>
          )}
        </Droppable>
      )}
    </Draggable>
  );
};

export default Column;
