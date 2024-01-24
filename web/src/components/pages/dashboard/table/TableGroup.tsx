import { MyConfirmModal } from "@/components/elements/MyConfirmModal";
import { useMeHook } from "@/components/hooks/useMeHook";
import { useUserMealHook } from "@/components/hooks/useUserMealHook";
import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { DashboardStore } from "@/store/DashboardStore";
import TableStore from "@/store/TableStore";
import { debounce } from "@/utils/constants";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { UniqueIdentifier } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { Button, useDisclosure } from "@nextui-org/react";
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useTranslations } from "next-intl";
import React, { useCallback, useState } from "react";
import { useSnapshot } from "valtio";

interface TableGroupProps {
  id: UniqueIdentifier;
  listeners?: SyntheticListenerMap;
  activatorRef: (element: HTMLElement | null) => void;
}

export const TableGroup: React.FC<TableGroupProps> = ({
  id,
  listeners,
  activatorRef,
}) => {
  const t = useTranslations<"Dashboard">();
  const { isHighRank, isOrderMenu } = useMeHook();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { userMealsAdmin } = useUserMealHook();
  const { updateWeeklyMealGroup, deleteWeeklyMealgRoup, isPast } =
    useWeeklyMealGroupHook();
  const dashboardStore = useSnapshot(DashboardStore);
  const tableStore = useSnapshot(TableStore);
  const debouncedSetColor = useCallback(
    debounce((newColor: string) => {
      setColor(newColor);
      updateWeeklyMealGroup({
        where: { id: Number(id) },
        data: { color: { set: newColor } },
      });
    }, 100),
    [],
  );
  const group = tableStore.getGroup(id);
  const [color, setColor] = useState<string>(group?.color ?? "");
  const [groupName, setGroupName] = useState<string>(group?.name ?? "");

  if (!group) return null;

  const seletecMealsAdmin = userMealsAdmin?.filter(
    (m) =>
      m.weeklyMealGroupId === group.id &&
      m.mealBoardPlanId === dashboardStore.activeMealBoardPlan?.id,
  );

  const disabled =
    !isHighRank ||
    isOrderMenu ||
    !!seletecMealsAdmin.length ||
    isPast(dashboardStore.daysThatWeek.at(-1));

  const enabled =
    isHighRank &&
    !isOrderMenu &&
    !seletecMealsAdmin.length &&
    !isPast(dashboardStore.daysThatWeek.at(-1));

  return (
    <>
      <div className="flex space-x-2">
        <label
          id={`${group.id}-color`}
          className={`h-full w-1.5 rounded-lg ${enabled ? "cursor-pointer " : ""}`}
          style={{ backgroundColor: color }}
        >
          <input
            type="color"
            id={`${group.id}-color`}
            name={`${group.id}-color`}
            disabled={disabled}
            className="h-0 w-0 opacity-0"
            value={color}
            onChange={(e) => enabled && debouncedSetColor(e.target.value)}
          />
        </label>

        <div className="flex flex-col">
          <input
            className="m-0 w-full rounded-lg border border-transparent bg-transparent p-1 font-semibold hover:border-default-100 focus:outline-none"
            type="text"
            name="groupName"
            style={{ color }}
            disabled={disabled}
            value={groupName}
            onChange={(e) => {
              if (enabled) return;
              setGroupName(e.target.value);
              updateWeeklyMealGroup({
                where: { id: group.id },
                data: { name: { set: e.target.value } },
              });
            }}
          />
          <div className="flex h-full w-full items-end justify-end">
            <div
              className={`h-full w-full ${enabled ? "cursor-grab" : ""}`}
              {...listeners}
              ref={activatorRef}
            />
            {enabled && (
              <MyConfirmModal
                title={t("WARNING")}
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                Footer={
                  <div className="flex items-center justify-between">
                    <Button
                      color="danger"
                      onClick={async () => {
                        try {
                          await deleteWeeklyMealgRoup({
                            where: { id: group.id },
                          });
                          TableStore.data = TableStore.data.filter(
                            (g) => g.id !== group.id,
                          );
                          onOpen();
                        } catch (error) {
                          catchErrorAlerts(error, t);
                        }
                      }}
                    >
                      {t("YES")}
                    </Button>
                  </div>
                }
                Trigger={
                  <FaRegTrashAlt
                    onClick={() => onOpen()}
                    className="m-2 cursor-pointer hover:text-red-600"
                  />
                }
              >
                {t("ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_GROUP")}
              </MyConfirmModal>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
