import { MyConfirmModal } from "@/components/elements/MyConfirmModal";
import { useMeHook } from "@/components/hooks/useMeHook";
import { useUserMealHook } from "@/components/hooks/useUserMealHook";
import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { Meal } from "@/gql/graphql";
import { DashboardStore } from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import { catchErrorAlerts, classNames } from "@/utils/helpers/clientUtils";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Link } from "@nextui-org/link";
import { Button, useDisclosure } from "@nextui-org/react";
import mealPlaceholder from "@public/images/meal-placeholder.png";
import { FaEraser } from "@react-icons/all-files/fa/FaEraser";
import { IoFastFoodSharp } from "@react-icons/all-files/io5/IoFastFoodSharp";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSnapshot } from "valtio";

interface TableMealItemProps {
  meal: Meal;
  day: WeekDay;
  group: UniqueIdentifier;
  isOver?: boolean;
  date?: string;
}

export const TableMealItem: React.FC<TableMealItemProps> = (props) => {
  const t = useTranslations<"Dashboard">();
  const {
    userMealsUser,
    userMealsAdmin,
    createUserMeal,
    deleteUserMeal,
    refetchUserMealsUser,
  } = useUserMealHook();
  const dashboardStore = useSnapshot(DashboardStore);
  const { isHighRank, isOrderMenu, me } = useMeHook();
  const groupItem = TableStore.getGroup(props.group);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { updateWeeklyMealGroup, isPast } = useWeeklyMealGroupHook();
  const tableStore = useSnapshot(TableStore);
  const id = `${props.group}#${props.day}#${props.meal.id}`;

  const isSelectedMealUser = userMealsUser?.find(
    (m) =>
      m.mealId === props.meal.id &&
      dayjs(m.date).format("DD/MM/YYYY") ===
        dayjs(props.date).format("DD/MM/YYYY") &&
      m.mealBoardPlanId === dashboardStore.activeMealBoardPlan?.id,
  );

  const selectedMealAdmins =
    userMealsAdmin?.filter(
      (m) =>
        m.mealId === props.meal.id &&
        dayjs(m.date).format("DD/MM/YYYY") ===
          dayjs(props.date).format("DD/MM/YYYY") &&
        m.mealBoardPlanId === dashboardStore.activeMealBoardPlan?.id,
    ) || [];

  const disabled =
    !isHighRank ||
    isOrderMenu ||
    !!selectedMealAdmins.length ||
    isPast(props.date);

  const enabled =
    isHighRank &&
    !isOrderMenu &&
    !selectedMealAdmins.length &&
    !isPast(props.date);

  const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } =
    useDraggable({
      id,
      data: {
        day: props.day,
        group: props.group,
        meal: props.meal,
        date: props.date,
      },
      disabled,
    });

  const isActive = tableStore.active?.id === id;

  return (
    <>
      <div
        style={{
          transform: CSS.Translate.toString(transform),
          opacity: !isActive && props.isOver ? 0.5 : 1,
        }}
        className={classNames(
          isActive && "relative z-50",
          (!isHighRank || isOrderMenu) &&
            "cursor-pointer border border-transparent hover:border-primary",
          isOrderMenu &&
            isSelectedMealUser &&
            "border !border-primary hover:!border-danger",
          "group flex h-full flex-col justify-between rounded-lg bg-default-100 p-2",
        )}
        ref={setNodeRef}
        onClick={async () => {
          if (!isHighRank || isOrderMenu) {
            if (!isSelectedMealUser) {
              try {
                await createUserMeal({
                  data: {
                    mealBoardPlanId: Number(
                      dashboardStore.activeMealBoardPlan?.id,
                    ),
                    weeklyMealGroupId: Number(props.group),
                    userId: Number(me?.id),
                    mealId: props.meal.id,
                    date: dayjs(props.date).add(1, "day").toISOString(),
                  },
                });
                refetchUserMealsUser();
              } catch (error) {
                catchErrorAlerts(error, t);
              }
            } else {
              try {
                await deleteUserMeal({
                  where: { id: Number(isSelectedMealUser.id) },
                });
                refetchUserMealsUser();
              } catch (error) {
                catchErrorAlerts(error, t);
              }
            }
          }
        }}
        {...attributes}
        role="item"
      >
        <div className="flex items-center justify-between">
          <Link
            href={!isHighRank || isOrderMenu ? "#" : `/meal/${props.meal.id}`}
            color="foreground"
            size="sm"
          >
            {props.meal.name}
          </Link>
          {enabled && (
            <MyConfirmModal
              title={t("WARNING")}
              isOpen={isOpen}
              onOpen={onOpen}
              onOpenChange={onOpenChange}
              Footer={
                <Button
                  color="danger"
                  onClick={() => {
                    try {
                      updateWeeklyMealGroup({
                        where: { id: Number(props.group) },
                        data: {
                          [`${props.day}MealId`]: { set: null },
                        },
                      });

                      TableStore.data = TableStore.data.map((g) =>
                        g.id === Number(props.group)
                          ? { ...g, [`${props.day}Meal`]: null }
                          : g,
                      );

                      onOpenChange();
                    } catch (error) {
                      catchErrorAlerts(error, t);
                    }
                  }}
                >
                  {t("YES")}
                </Button>
              }
              Trigger={
                <FaEraser
                  onClick={onOpen}
                  title={t("DELETE_MEAL")}
                  className="invisible cursor-pointer hover:text-red-500 group-hover:visible"
                />
              }
            >
              <p>
                {t?.rich("ARE_YOU_SURE_DELETE_MEAL", {
                  mealName: props.meal.name,
                  groupName: groupItem?.name,
                  meal: (chunks) => <span className="font-bold">{chunks}</span>,
                  group: (chunks) => (
                    <span
                      className="font-bold"
                      style={{ color: groupItem?.color || undefined }}
                    >
                      {chunks}
                    </span>
                  ),
                })}
              </p>
            </MyConfirmModal>
          )}
        </div>

        <div className="relative">
          <Image
            alt={t("MEAL")}
            className={`h-24 w-full rounded-xl object-cover ${enabled ? "cursor-grab" : ""}`}
            ref={setActivatorNodeRef}
            {...listeners}
            src={
              props.meal.image
                ? `data:image/jpeg;base64,${props.meal.image}`
                : mealPlaceholder
            }
            width={200}
            height={200}
          />
          {selectedMealAdmins?.length && isOrderMenu ? (
            <div
              className="absolute right-1 top-1 flex items-center rounded-lg bg-default-100 p-1"
              title={t("ORDERS")}
            >
              <span className="text-sm font-bold text-primary-500">
                {selectedMealAdmins.length}
              </span>
              <IoFastFoodSharp className="text-primary-500" />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
