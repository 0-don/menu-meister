import { reorder, reorderQuoteMap } from "@/utils/helpers/clientUtils";
import { QuoteMap } from "@/utils/types";
import type { DropResult, DroppableProvided } from "@hello-pangea/dnd";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { FunctionComponent, useState } from "react";
import { Column } from "./Column";

interface BoardProps {
  initial: QuoteMap;
}

export const Board: FunctionComponent<BoardProps> = ({ initial }) => {
  const [columns, setColumns] = useState<QuoteMap>(initial);
  const [ordered, setOrdered] = useState<string[]>(Object.keys(initial));

  const onDragEnd = ({ source, destination, type }: DropResult): void => {
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
