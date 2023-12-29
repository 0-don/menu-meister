import {
  GetAllMealSchedulesAdminQuery,
  Meal,
  MealSchedule,
  ScheduleMeal,
} from "@/gql/graphql";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";
import { FunctionComponent, useEffect, useState } from "react";

interface BoardProps {
  items: GetAllMealSchedulesAdminQuery["getAllMealSchedulesAdmin"];
}

export const Board: FunctionComponent<BoardProps> = ({ items }) => {
  const [mealSchedule, setMealSchedule] = useState(items);

  useEffect(() => void setMealSchedule(items), [items]);

  const onDragEnd = ({ source, destination, type }: DropResult) => {
    if (!destination) return;

    console.log(source, destination, type);
  };

  const renderMealGroup = (
    scheduledMeal: ScheduleMeal,
    daySchedule: MealSchedule,
    index: number,
  ) => (
    <Draggable
      key={`group-${scheduledMeal.mealGroup?.id}-${daySchedule.servingDate}`}
      draggableId={`group-${scheduledMeal.mealGroup?.id}-${daySchedule.servingDate}`}
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
          {renderDroppableMeals(scheduledMeal, daySchedule)}
          {(provided as any).placeholder}
        </div>
      )}
    </Draggable>
  );

  const renderIndividualMeal = (
    scheduledMeal: ScheduleMeal,
    daySchedule: MealSchedule,
    index: number,
  ) => (
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

  const renderDroppableMeals = (
    scheduledMeal: ScheduleMeal,
    daySchedule: MealSchedule,
  ) => (
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
          {scheduledMeal.mealGroup?.meals?.map((meal, mealIndex) =>
            renderDraggableMeal(meal, daySchedule, mealIndex),
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  const renderDraggableMeal = (
    meal: Meal,
    daySchedule: MealSchedule,
    mealIndex: number,
  ) => (
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
  );

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
                {daySchedule.scheduledMeals?.map((scheduledMeal, index) =>
                  scheduledMeal.mealGroup
                    ? renderMealGroup(
                        scheduledMeal as ScheduleMeal,
                        daySchedule as MealSchedule,
                        index,
                      )
                    : renderIndividualMeal(
                        scheduledMeal as ScheduleMeal,
                        daySchedule as MealSchedule,
                        index,
                      ),
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};
