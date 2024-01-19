import { MyModal } from "@/components/elements/MyModal";
import { useWeeklyMealGroupHook } from "@/components/hooks/useWeeklyMealGroupHook";
import { Meal } from "@/gql/graphql";
import TableStore from "@/store/TableStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Link } from "@nextui-org/link";
import { Button, useDisclosure } from "@nextui-org/react";
import mealPlaceholder from "@public/images/meal-placeholder.png";
import { FaEraser } from "@react-icons/all-files/fa/FaEraser";
import Image from "next/image";
import { useSnapshot } from "valtio";

interface TableMealItemProps {
  meal: Meal;
  day: WeekDay;
  group: UniqueIdentifier;
  isOver?: boolean;
}

export const TableMealItem: React.FC<TableMealItemProps> = ({
  meal,
  day,
  group,
  isOver,
}) => {
  const groupItem = TableStore.getGroup(group);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { updateWeeklyMealGroup } = useWeeklyMealGroupHook();
  const tableStore = useSnapshot(TableStore);
  const id = `${group}#${day}#${meal.id}`;
  const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } =
    useDraggable({
      id: `${group}#${day}#${meal.id}`,
      data: { day, group, meal },
    });

  const isActive = tableStore.active?.id === id;

  return (
    <>
      <div
        style={{
          transform: CSS.Translate.toString(transform),
          opacity: !isActive && isOver ? 0.5 : 1,
        }}
        className={`${isActive ? "relative z-50" : ""} group flex h-full flex-col justify-between rounded-lg bg-default-100 p-2`}
        ref={setNodeRef}
        {...attributes}
        role="item"
      >
        <div className="flex items-center justify-between">
          <Link href="#" color="foreground" size="sm">
            {meal.name}
          </Link>
          <MyModal
            title="Warning"
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
            Footer={
              <Button
                color="danger"
                onClick={async () => {
                  try {
                    await updateWeeklyMealGroup({
                      where: { id: Number(group) },
                      data: {
                        [`${day}MealId`]: { set: null },
                      },
                    });
                    TableStore.data = tableStore.data.map((group) =>
                      group.id === Number(group)
                        ? { ...group, [`${day}Meal`]: null }
                        : group,
                    );
                    onOpenChange();
                  } catch (error) {
                    catchErrorAlerts(error);
                  }
                }}
              >
                Yes
              </Button>
            }
            Trigger={
              <FaEraser
                onClick={onOpen}
                title="Delete Meal"
                className="invisible cursor-pointer hover:text-red-500 group-hover:visible"
              />
            }
          >
            <p>
              Are you sure you want to delete the meal{" "}
              <span className="font-bold">{meal.name}</span> in Group{" "}
              <span
                className="font-bold"
                style={{ color: groupItem?.color || undefined }}
              >
                {groupItem?.name}
              </span>
              ?
            </p>
          </MyModal>
        </div>

        <Image
          alt="Meal"
          className="h-24 w-full cursor-grab rounded-xl object-cover"
          ref={setActivatorNodeRef}
          {...listeners}
          src={
            meal.image
              ? `data:image/jpeg;base64,${meal.image}`
              : mealPlaceholder
          }
          width={200}
          height={200}
        />
        <p className="text-center text-xs">
          {meal.imageName?.match(/\d+/)?.[0]}
        </p>
      </div>
    </>
  );
};
