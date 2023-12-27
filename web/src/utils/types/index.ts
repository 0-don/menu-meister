import type { DraggableLocation, Id } from "@hello-pangea/dnd";

export type MenuType = {
  link: string;
  name: string;
  display?: boolean;
};

export interface ReorderQuoteMapArgs {
  quoteMap: QuoteMap;
  source: DraggableLocation;
  destination: DraggableLocation;
}

export interface ReorderQuoteMapResult {
  quoteMap: QuoteMap;
}

export interface Author {
  id: Id;
  name: string;
  url: string;
}

export interface Quote {
  id: Id;
  content: string;
  author?: Author;
}

export interface QuoteMap {
  [key: string]: Quote[];
}
