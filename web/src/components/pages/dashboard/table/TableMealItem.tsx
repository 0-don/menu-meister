import { MyConfirmModal } from "@/components/elements/MyConfirmModal";
import { useMeHook } from "@/components/hooks/useMeHook";
import { useSettingsHook } from "@/components/hooks/useSettinsHook";
import { useUserMealHook } from "@/components/hooks/useUserMealHook";
import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { Meal } from "@/gql/graphql";
import { DashboardStore } from "@/store/DashboardStore";
import { GeneralStore } from "@/store/GeneralStore";
import { TableStore } from "@/store/TableStore";
import { catchErrorAlerts, classNames } from "@/utils/helpers/clientUtils";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
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
  const t = useTranslations<"Meals">();
  const {
    userMealsUser,
    userMealsAdmin,
    createUserMeal,
    deleteUserMeal,
    refetchUserMealsUser,
  } = useUserMealHook();
  const { settings } = useSettingsHook();
  const dashboardStore = useSnapshot(DashboardStore);
  const { isHighRank, isOrderMenu, me } = useMeHook();
  const groupItem = TableStore.getGroup(props.group);
  const { updateWeeklyMealGroup, isPast } = useWeeklyMealGroupHook();
  const tableStore = useSnapshot(TableStore);
  const id = `${props.group}#${props.day}#${props.meal.id}`;

  const isSelectedMealUser = userMealsUser?.find(
    (m) =>
      m.mealId === props.meal.id &&
      dayjs(m.date).date() === dayjs(props.date).date() &&
      m.mealBoardPlanId === dashboardStore.activeMealBoardPlan?.id,
  );

  const selectedMealAdmins = (userMealsAdmin || []).filter(
    (m) => m.mealId === props.meal.id,
  );

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
            !isPast(props.date) &&
            "cursor-pointer border-3 border-transparent hover:border-primary",
          isOrderMenu &&
            isSelectedMealUser &&
            "border-3 !border-success-500 hover:!border-danger",
          "group flex h-full flex-col justify-between rounded-lg bg-default-100 p-2",
        )}
        ref={setNodeRef}
        onClick={async () => {
          if (
            (!isHighRank || isOrderMenu) &&
            !isPast(props.date) &&
            !dayjs(props.date).isBefore(
              dayjs().add(settings?.maxEditOrderDays || 0, "day"),
              "day",
            )
          ) {
            if (!isSelectedMealUser) {
              try {
                await createUserMeal({
                  data: {
                    mealBoardPlanId: Number(
                      dashboardStore.activeMealBoardPlan?.id,
                    ),
                    weeklyMealGroupId: Number(props.group),
                    timeOfDay: groupItem?.timeOfDay,
                    userId: Number(me?.id),
                    mealId: props.meal.id,
                    date: dayjs(props.date).add(1, "day").toISOString(),
                  },
                });
                refetchUserMealsUser();
                GeneralStore.addAlert({
                  msg: t("SUCCESS_ADD_MEAL", { meal: props.meal.name }),
                  type: "success",
                });
              } catch (error) {
                catchErrorAlerts(error, t);
              }
            } else {
              try {
                await deleteUserMeal({
                  where: { id: Number(isSelectedMealUser.id) },
                });
                refetchUserMealsUser();
                GeneralStore.addAlert({
                  msg: t("REMOVED_MEAL", { meal: props.meal.name }),
                  type: "warning",
                });
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
          <Link href={`/meal/${props.meal.id}`} color="foreground" size="sm">
            {props.meal.name}
          </Link>
          {enabled && (
            <MyConfirmModal
              title={t("WARNING")}
              Footer={({ onOpen }) => (
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

                      onOpen();
                    } catch (error) {
                      catchErrorAlerts(error, t);
                    }
                  }}
                >
                  {t("YES")}
                </Button>
              )}
              Trigger={({ onOpen }) => (
                <FaEraser
                  onClick={onOpen}
                  title={t("DELETE_MEAL")}
                  className="invisible w-11 cursor-pointer text-lg hover:text-red-500 group-hover:visible"
                />
              )}
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
            className={classNames(
              `h-24 w-full rounded-xl object-cover 3xl:h-48`,
              enabled && tableStore.active?.id !== id && "cursor-grab",
              enabled && tableStore.active?.id === id && "cursor-grabbing",
            )}
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
          {selectedMealAdmins?.length && !isOrderMenu ? (
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
