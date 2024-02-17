import { MyAutocomplete } from "@/components/elements/MyAutocomplete";
import { useMeHook } from "@/components/hooks/useMeHook";
import { useMealHook } from "@/components/hooks/useMealHook";
import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { TableStore } from "@/store/TableStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";
import { TableMealItem } from "./TableMealItem";

interface DroppableItemProps {
  day: WeekDay;
  groupId: UniqueIdentifier;
  date?: string;
}

export const DroppableItem: React.FC<DroppableItemProps> = ({
  day,
  groupId,
  date,
}) => {
  const t = useTranslations<"Meals">();
  const { updateWeeklyMealGroup, isPast } = useWeeklyMealGroupHook();

  const { isHighRank, isOrderMenu } = useMeHook();
  const { meals } = useMealHook();
  const { data, getGroupMeal, refetchWeeklyMealGroups } =
    useSnapshot(TableStore);
  const id = `${groupId}#${day}`;
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: { day, group: groupId, date },
  });

  const meal = getGroupMeal(groupId, day);

  return (
    <div ref={setNodeRef}>
      {meal ? (
        <TableMealItem
          day={day}
          group={groupId}
          meal={meal}
          isOver={isOver}
          date={date}
        />
      ) : (
        <div
          className="flex h-full flex-col justify-start space-y-2 rounded-lg bg-default-100 p-2"
          style={{ opacity: isOver ? 0.5 : 1 }}
        >
          {isHighRank && !isOrderMenu && !isPast(date) && (
            <MyAutocomplete
              size="sm"
              label={t("SELECT_MEAL")}
              items={meals || []}
              isClearable={false}
              onSelectionChange={async (key) => {
                try {
                  await updateWeeklyMealGroup({
                    where: { id: Number(groupId) },
                    data: { [`${day}MealId`]: { set: Number(key) } },
                  });
                  refetchWeeklyMealGroups();
                } catch (error) {
                  catchErrorAlerts(error, t);
                }
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
