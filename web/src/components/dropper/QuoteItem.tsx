import { borderRadius, grid } from "@/utils/constants";
import { Quote } from "@/utils/types";

import { DraggableProvided } from "@hello-pangea/dnd";
import React from "react";

interface Props {
  quote: Quote;
  isDragging: boolean;
  provided: DraggableProvided;
  isClone?: boolean;
  isGroupedOver?: boolean;
  index?: number;
}

const imageSize = 40;

function QuoteItem(props: Props) {
  const { quote, isDragging, provided, isClone, index } = props;

  return (
    <a
      href={quote.author.url}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      data-is-dragging={isDragging}
      data-testid={quote.id}
      data-index={index}
      aria-label={`${quote.author.name} quote ${quote.content}`}
      className={`rounded-[${borderRadius}px] box-border border-2 border-transparent p-[${grid}px] min-h-[${imageSize}px] mb-[${grid}px] user-select-none focus:box-shadow-none flex focus:outline-none`}
    >
      {isClone && (
        <div className="bg-[${colors.G100}] bottom-[${grid / 2}px] border-[${colors.G200}] text-10px right-[-${imageSize / 3}px] top-[-${imageSize / 3}px] rotate-40 h-[${imageSize}px] w-[${imageSize}px] absolute box-border flex transform items-center justify-center rounded-full border-2">
          Clone
        </div>
      )}
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
            }] rounded-[${borderRadius}px] font-normal p-[${grid / 2}px]`}
          >
            {quote.author.name}
          </small>
          <small className="m-0 flex-shrink flex-grow overflow-ellipsis text-right font-normal">
            id:{quote.id}
          </small>
        </div>
      </div>
    </a>
  );
}

export default React.memo(QuoteItem);
