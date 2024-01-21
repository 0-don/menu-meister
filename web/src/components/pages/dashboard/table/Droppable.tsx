import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import TableStore from "@/store/TableStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useSnapshot } from "valtio";
import { MyAutocomplete } from "../../../elements/MyAutocomplete";
import { TableMealItem } from "./TableMealItem";

interface DroppableProps {
  day: WeekDay;
  group: UniqueIdentifier;
}

export const Droppable: React.FC<DroppableProps> = ({ day, group }) => {
  const t = useTranslations<"Dashboard">();
  const { updateWeeklyMealGroup } = useWeeklyMealGroupHook();
  const [value, setValue] = useState<UniqueIdentifier>("");
  const { data, getGroupMeal, mealsSorted, refetchWeeklyMealGroups } =
    useSnapshot(TableStore);
  const id = `${group}#${day}`;
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: { day, group },
  });

  const meal = getGroupMeal(group, day);

  return (
    <div ref={setNodeRef}>
      {meal ? (
        <TableMealItem day={day} group={group} meal={meal} isOver={isOver} />
      ) : (
        <div
          className="flex h-full flex-col justify-start space-y-2 rounded-lg bg-default-100 p-2"
          style={{ opacity: isOver ? 0.5 : 1 }}
        >
          <MyAutocomplete
            id={id}
            size="sm"
            label={t("SELECT_MEAL")}
            isClearable={false}
            items={mealsSorted}
            value={value}
            onSelectionChange={async (key) => {
              try {
                await updateWeeklyMealGroup({
                  where: { id: Number(group) },
                  data: { [`${day}MealId`]: { set: Number(key) } },
                });
                refetchWeeklyMealGroups();
                setValue("");
              } catch (error) {
                catchErrorAlerts(error, t);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};
