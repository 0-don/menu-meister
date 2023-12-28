import { authorQuoteMap } from "@/data";
import { GetAllMealSchedulesAdminQuery } from "@/gql/graphql";
import {
  Quote,
  QuoteMap,
  ReorderQuoteMapArgs,
  ReorderQuoteMapResult,
} from "@/utils/types";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";
import { FunctionComponent, useState } from "react";

function reorder<TItem>(
  list: TItem[],
  startIndex: number,
  endIndex: number,
): TItem[] {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

const reorderQuoteMap = ({
  quoteMap,
  source,
  destination,
}: ReorderQuoteMapArgs): ReorderQuoteMapResult => {
  const current: Quote[] = [...quoteMap[source.droppableId]];
  const next: Quote[] = [...quoteMap[destination.droppableId]];
  const target: Quote = current[source.index];

  if (source.droppableId === destination.droppableId) {
    const reordered: Quote[] = reorder(
      current,
      source.index,
      destination.index,
    );
    const result: QuoteMap = {
      ...quoteMap,
      [source.droppableId]: reordered,
    };
    return {
      quoteMap: result,
    };
  }

  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);

  const result: QuoteMap = {
    ...quoteMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };

  return {
    quoteMap: result,
  };
};

interface BoardProps {
  items: GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"];
}

export const Board: FunctionComponent<BoardProps> = ({ items }) => {
  const [columns, setColumns] = useState<QuoteMap>(authorQuoteMap);
  const [ordered, setOrdered] = useState<string[]>(Object.keys(authorQuoteMap));

  const onDragEnd = ({ source, destination, type }: DropResult) => {
    if (!destination) return;

    if (type === "COLUMN") {
      setOrdered(reorder(ordered, source.index, destination.index));
    } else {
      const data = reorderQuoteMap({
        quoteMap: columns,
        source,
        destination,
      });
      setColumns(data.quoteMap);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((key, index) => (
              <Draggable draggableId={key} index={index} key={key}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    <div
                      {...provided.dragHandleProps}
                      className={`dark:text-black ${
                        snapshot.isDragging ? "bg-green-600" : "bg-gray-600"
                      } transition duration-200 ease-in-out hover:bg-green-400`}
                    >
                      {key}
                    </div>
                    <Droppable droppableId={key}>
                      {(dropProvided, dropSnapshot) => (
                        <div
                          ref={dropProvided.innerRef}
                          {...dropProvided.droppableProps}
                          className={`flex w-64 select-none flex-col border-2 p-2 transition-all duration-200 ease-in-out ${
                            dropSnapshot.isDraggingOver ? "bg-blue-200" : ""
                          }`}
                        >
                          <div className="min-h-[250px] pb-2">
                            {columns[key].map((quote, quoteIndex) => (
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
                                  >
                                    {quote.content}
                                    {quote.id}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {dropProvided.placeholder}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
