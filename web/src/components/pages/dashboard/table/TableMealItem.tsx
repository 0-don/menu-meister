import { Meal } from "@/gql/graphql";
import TableStore from "@/store/TableStore";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Link } from "@nextui-org/link";
import mealPlaceholder from "@public/images/meal-placeholder.png";
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
  const tableStore = useSnapshot(TableStore);
  const id = `${group}#${day}#${meal.id}`;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
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
        className={`${isActive ? "relative z-50" : ""} flex h-full flex-col justify-between rounded-lg bg-default-100 p-2`}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <Link href="/" color="foreground" size="sm">
          {meal.name}
        </Link>

        <Image
          alt="Meal"
          className="h-24 w-full rounded-xl object-cover"
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
