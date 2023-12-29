import { GetAllMealSchedulesAdminQuery } from "@/gql/graphql";
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

interface BoardProps {
  items: GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"];
}

export const Board: FunctionComponent<BoardProps> = ({ items }) => {
  const [mealSchedule, setMealSchedule] = useState(items);

  useEffect(() => void setMealSchedule(items), [items]);

  const onDragEnd = ({ source, destination, type }: DropResult) => {
    if (!destination) return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex">
        {mealSchedule?.map((daySchedule) => (
          <Droppable
            key={daySchedule.id}
            droppableId={`day-${daySchedule.id}`}
            type="DAY_SCHEDULE"
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="m-2 border-2 p-2"
              >
                <h3>{daySchedule.servingDate}</h3>
                {daySchedule.scheduledMeals?.map((scheduledMeal, index) => {
                  if (scheduledMeal.mealGroup) {
                    // Draggable for Meal Groups
                    return (
                      <Draggable
                        key={`group-${scheduledMeal.mealGroup.id}-${daySchedule.servingDate}`}
                        draggableId={`group-${scheduledMeal.mealGroup.id}-${daySchedule.servingDate}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="my-2 border-4 p-2"
                          >
                            <p>Group: {scheduledMeal.mealGroup?.id}</p>
                            <Droppable
                              droppableId={`group-${scheduledMeal.mealGroup?.id}-${daySchedule.servingDate}`}
                              type="MEAL"
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                  className="p-1"
                                >
                                  {scheduledMeal.mealGroup?.meals?.map(
                                    (meal, mealIndex) => (
                                      <Draggable
                                        key={`meal-${meal.id}-${daySchedule.servingDate}`}
                                        draggableId={`meal-${meal.id}-${daySchedule.servingDate}`}
                                        index={mealIndex}
                                      >
                                        {(provided) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                          >
                                            <p>{meal.name}</p>
                                          </div>
                                        )}
                                      </Draggable>
                                    ),
                                  )}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </div>
                        )}
                      </Draggable>
                    );
                  } else {
                    // Draggable for Individual Meals not in a Group
                    return (
                      <Draggable
                        key={`meal-${scheduledMeal.id}-${daySchedule.servingDate}`}
                        draggableId={`meal-${scheduledMeal.id}-${daySchedule.servingDate}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-1"
                          >
                            <p>{scheduledMeal.meal?.name}</p>
                          </div>
                        )}
                      </Draggable>
                    );
                  }
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};
