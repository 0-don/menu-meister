import { authorQuoteMap } from "@/data";
import { GetAllMealSchedulesAdminQuery, Meal } from "@/gql/graphql";
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
import { FunctionComponent, useEffect, useState } from "react";

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
  const [mealSchedule, setMealSchedule] = useState(items);
  const [columns, setColumns] = useState<QuoteMap>(authorQuoteMap);
  const [ordered, setOrdered] = useState<string[]>(Object.keys(authorQuoteMap));

  useEffect(() => {
    setMealSchedule(items);
  }, [items]);

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

  const renderMeals = (meals: Meal[], droppableId: string) => (
    <Droppable droppableId={droppableId} type="MEAL" key={droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="m-2 border p-2"
        >
          {meals.map((meal, index) => (
            <Draggable key={meal.id} draggableId={meal.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="m-1 border p-1"
                >
                  {meal.name}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  console.log(mealSchedule);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex">
        {mealSchedule?.map((daySchedule) => (
          <div key={daySchedule.id} className="m-2 border-2 p-2">
            <h3>{daySchedule.servingDate}</h3>
            {daySchedule.scheduledMeals?.map((scheduledMeal) =>
              scheduledMeal.mealGroup
                ? renderMeals(
                    scheduledMeal.mealGroup.meals as Meal[],
                    `group-${scheduledMeal.mealGroup.id}`,
                  )
                : renderMeals(
                    [scheduledMeal.meal as Meal],
                    `meal-${scheduledMeal.id}`,
                  ),
            )}
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};
