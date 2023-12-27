import { QuoteMap } from "@/utils/types";
import type { DropResult, DroppableProvided } from "@hello-pangea/dnd";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { FunctionComponent, useState } from "react";
import Column from "./Column";
import reorder, { reorderQuoteMap } from "./reorder";

interface BoardProps {
  initial: QuoteMap;
}

export const Board: FunctionComponent<BoardProps> = ({ initial }) => {
  const [columns, setColumns] = useState<QuoteMap>(initial);
  const [ordered, setOrdered] = useState<string[]>(Object.keys(initial));

  const handleColumnReorder = (
    sourceIndex: number,
    destinationIndex: number,
  ) => {
    setOrdered(reorder(ordered, sourceIndex, destinationIndex));
  };

  const handleItemReorder = (source: any, destination: any) => {
    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    });
    setColumns(data.quoteMap);
  };

  const onDragEnd = (result: DropResult): void => {
    const { source, destination, combine, type } = result;

    if (!destination) return;

    if (combine) {
      // Handle combine logic here
      return;
    }

    if (type === "COLUMN") {
      handleColumnReorder(source.index, destination.index);
    } else {
      handleItemReorder(source, destination);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {(provided: DroppableProvided) => (
          <div
            ref={provided.innerRef}
            className="flex"
            {...provided.droppableProps}
          >
            {ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                title={key}
                quotes={columns[key]}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
