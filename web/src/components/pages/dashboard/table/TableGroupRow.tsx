import { useMeHook } from "@/components/hooks/useMeHook";
import { useUserMealHook } from "@/components/hooks/useUserMealHook";
import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { DashboardStore } from "@/store/DashboardStore";
import { TableStore } from "@/store/TableStore";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { useSnapshot } from "valtio";
import { Droppable } from "./Droppable";
import { TableGroup } from "./TableGroup";

interface TableGroupRowProps {
  id: UniqueIdentifier;
}

export const TableGroupRow: React.FC<TableGroupRowProps> = ({ id }) => {
  const { isHighRank, isOrderMenu } = useMeHook();
  const { userMealsAdmin } = useUserMealHook();
  const { isPast } = useWeeklyMealGroupHook();
  const tableStore = useSnapshot(TableStore);
  const { daysThatWeek, activeMealBoardPlan } = useSnapshot(DashboardStore);
  const group = tableStore.getGroup(id)!;
  const seletecMealsAdmin = userMealsAdmin?.filter(
    (m) =>
      m.weeklyMealGroupId === group.id &&
      m.mealBoardPlanId === activeMealBoardPlan?.id,
  );
  const disabled =
    !isHighRank ||
    isOrderMenu ||
    !!seletecMealsAdmin.length ||
    isPast(daysThatWeek.at(-1));

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
    isDragging,
  } = useSortable({
    id,
    disabled: disabled,
  });

  if (!group) return null;

  return (
    <section
      className={`${isDragging ? "relative z-[9999]" : ""} grid grid-cols-8 gap-2 rounded-lg bg-default-300/10 p-2 focus:outline-none`}
      style={{
        transform: CSS.Translate.toString(transform),
        transition,
      }}
      {...attributes}
      role="row"
      ref={setNodeRef}
    >
      <TableGroup
        id={id}
        listeners={listeners}
        activatorRef={setActivatorNodeRef}
      />
      <Droppable day="monday" groupId={group.id} date={daysThatWeek.at(0)} />
      <Droppable day="tuesday" groupId={group.id} date={daysThatWeek.at(1)} />
      <Droppable day="wednesday" groupId={group.id} date={daysThatWeek.at(2)} />
      <Droppable day="thursday" groupId={group.id} date={daysThatWeek.at(3)} />
      <Droppable day="friday" groupId={group.id} date={daysThatWeek.at(4)} />
      <Droppable day="saturday" groupId={group.id} date={daysThatWeek.at(5)} />
      <Droppable day="sunday" groupId={group.id} date={daysThatWeek.at(6)} />
    </section>
  );
};
