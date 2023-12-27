import {
  Quote,
  QuoteMap,
  ReorderQuoteMapArgs,
  ReorderQuoteMapResult,
} from "@/utils/types";

export function reorder<TItem>(
  list: TItem[],
  startIndex: number,
  endIndex: number,
): TItem[] {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const reorderQuoteMap = ({
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
