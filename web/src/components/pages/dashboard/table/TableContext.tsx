"use client";

import { MyAutocomplete } from "@/components/elements/MyAutocomplete";
import { useUserMealHook } from "@/components/hooks/useUserMealHook";
import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { Meal } from "@/gql/graphql";
import { DashboardStore } from "@/store/DashboardStore";
import { TableStore } from "@/store/TableStore";
import { WEEK_DAYS } from "@/utils/constants";
import { DayMeals } from "@/utils/types";
import { DndContext } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { useSnapshot } from "valtio";
import { CopyTableWeek } from "./CopyTableWeek";
import { TableGroupRow } from "./TableGroupRow";

interface RenderDayColumnProps {
  dayKey: string;
  index: number;
}

const RenderDayColumn: React.FC<RenderDayColumnProps> = (props) => {
  const dashboardStore = useSnapshot(DashboardStore);
  const date = dayjs(dashboardStore.daysThatWeek.at(props.index)).format(
    "DD.MM",
  );
  const text = `${props.dayKey.at(0)?.toUpperCase()}${props.dayKey.at(1)}. ${date}`;

  return <div key={props.dayKey}>{text}</div>;
};

export function TableContext() {
  const t = useTranslations<"Meals">();
  const { updateWeeklyMealGroup, switchWeeklyMealGroup, isPast } =
    useWeeklyMealGroupHook();
  const { userMealsAdmin } = useUserMealHook();
  const dashboardStore = useSnapshot(DashboardStore);
  const { dataSorted } = useSnapshot(TableStore);


  return (
    <main className="relative z-0 mt-5 flex w-full flex-col justify-between gap-4 rounded-large bg-content1 p-4 shadow-small">
      <div className="grid grid-cols-8 items-center gap-2 rounded-lg bg-default-100 font-semibold text-foreground-500">
        <div className="flex items-center">
          <MyAutocomplete
            isClearable={false}
            id="mealBoardPlan"
            size="sm"
            label={t("MEAL_BOARD_PLAN")}
            labelPlacement="inside"
            value={dashboardStore.activeMealBoardPlan?.id || 1}
            onSelectionChange={(id) => {
              DashboardStore.activeMealBoardPlan =
                dashboardStore.mealBoardPlans?.find(
                  (plan) => plan.id === Number(id),
                );
            }}
            items={(dashboardStore.mealBoardPlans || [])?.map(
              ({ id, name }) => ({
                id,
                name,
              }),
            )}
          />
          <CopyTableWeek />
        </div>
        {WEEK_DAYS.map((day, index) => {
          const title = t(day.toUpperCase() as keyof Messages["Meals"]);

          return <RenderDayColumn key={title} dayKey={title} index={index} />;
        })}
      </div>

      <DndContext
        onDragStart={({ active }) => (TableStore.active = active)}
        onDragEnd={({ active, over }) => {
          // group sorting
          if (active.data.current?.sortable && over?.data.current?.sortable) {
            const activeIndex = active.data.current?.sortable.index;
            const overIndex = over.data.current?.sortable.index;

            if (activeIndex !== overIndex) {
              TableStore.data = TableStore.data.map((group) => {
                if (group.id === Number(active.id)) {
                  return { ...group, orderIndex: overIndex };
                } else if (group.id === Number(over.id)) {
                  return { ...group, orderIndex: activeIndex };
                } else {
                  return group;
                }
              });
              updateWeeklyMealGroup({
                where: { id: Number(active.id) },
                data: { orderIndex: { set: overIndex } },
              });
              updateWeeklyMealGroup({
                where: { id: Number(over.id) },
                data: { orderIndex: { set: activeIndex } },
              });
            }
          }

          // meal sorting
          if (active.data.current?.meal?.id && over) {
            const activeMeal = active.data.current.meal as Meal;
            const activeDay = active.data.current.day as string;
            const activeGroupId = active.data.current.group as number;
            const overDay = over?.data.current?.day as string;
            const overGroupId = over?.data.current?.group as number;
            const overDate = over?.data.current?.date;

            const overMealsAdmin = userMealsAdmin?.filter(
              (m) =>
                m.weeklyMealGroupId === overGroupId &&
                m.mealBoardPlanId === dashboardStore.activeMealBoardPlan?.id &&
                dayjs(m.date).format("DD/MM/YYYY") ===
                  dayjs(overDate).format("DD/MM/YYYY"),
            );

            // meal sorting changed
            if (
              (activeDay !== overDay || activeGroupId !== overGroupId) &&
              !isPast(overDate) &&
              !overMealsAdmin.length
            ) {
              // check if over has meal already
              const overMeal = (
                TableStore.data.find((group) => group.id === overGroupId) as any
              )[`${overDay}Meal`] as Meal | undefined;

              // Update the local store
              TableStore.data = TableStore.data.map((group) => {
                if (group.id === activeGroupId)
                  group[`${activeDay}Meal` as DayMeals] = overMeal || null;
                if (group.id === overGroupId)
                  group[`${overDay}Meal` as DayMeals] = activeMeal;
                return group;
              });
              //remove activeMeal from activeDay
              switchWeeklyMealGroup({
                data: {
                  activeDay,
                  activeGroupId,
                  activeMealId: activeMeal.id,
                  overMealId: overMeal?.id,
                  overDay,
                  overGroupId,
                },
              });
            }
          }

          TableStore.active = undefined;
        }}
        onDragCancel={() => (TableStore.active = undefined)}
        modifiers={[restrictToWindowEdges]}
      >
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={dataSorted.map((i) => i.id)}
        >
          {dataSorted.map((value) => (
            <TableGroupRow key={value.id} id={value.id} />
          ))}
        </SortableContext>
      </DndContext>
    </main>
  );
}
