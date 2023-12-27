import { Author, Quote, QuoteMap } from "./utils/types";

export const authors: Author[] = [
  {
    id: "1",
    name: "Jake",
    url: "http://adventuretime.wikia.com/wiki/Jake",
  },
  {
    id: "2",
    name: "BMO",
    url: "http://adventuretime.wikia.com/wiki/BMO",
  },
  {
    id: "3",
    name: "Finn",
    url: "http://adventuretime.wikia.com/wiki/Finn",
  },
  {
    id: "4",
    name: "Princess bubblegum",
    url: "http://adventuretime.wikia.com/wiki/Princess_Bubblegum",
  },
];

export const quotes: Quote[] = [
  {
    id: "1",
    content: "Sometimes life is scary and dark",
    author: authors.at(0),
  },
  {
    id: "2",
    content:
      "Sucking at something is the first step towards being sorta good at something.",
    author: authors.at(0),
  },
  {
    id: "3",
    content: "You got to focus on what's real, man",
    author: authors.at(1),
  },
  {
    id: "4",
    content: "Is that where creativity comes from? From sad biz?",
    author: authors.at(1),
  },
  {
    id: "5",
    content: "Homies help homies. Always",
    author: authors.at(2),
  },
  {
    id: "6",
    content: "Responsibility demands sacrifice",
    author: authors.at(2),
  },
  {
    id: "7",
    content: "That's it! The answer was so simple, I was too smart to see it!",
    author: authors.at(2),
  },
  {
    id: "8",
    content:
      "People make mistakes. It's all a part of growing up and you never really stop growing",
    author: authors.at(3),
  },
  {
    id: "9",
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
    author: authors.at(3),
  },
  {
    id: "10",
    content: "I should not have drunk that much tea!",
    author: authors.at(3),
  },
  {
    id: "11",
    content: "Please! I need the real you!",
    author: authors.at(3),
  },
  {
    id: "12",
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    author: authors.at(4),
  },
];

const getByAuthor = (author: Author, items: Quote[]): Quote[] =>
  items.filter((quote: Quote) => quote.author === author);

export const authorQuoteMap: QuoteMap = authors.reduce(
  (previous: QuoteMap, author: Author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes),
  }),
  {},
);
