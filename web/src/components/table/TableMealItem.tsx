import { Meal } from "@/gql/graphql";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

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
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${group}#${day}#${meal.id}`,
    data: { day, group, meal },
  });

  return (
    <>
      <div
        style={{
          transform: CSS.Translate.toString(transform),
          opacity: isOver ? 0.5 : 1,
        }}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <Image
          alt="Card background"
          className="rounded-xl object-cover"
          src={`data:image/jpeg;base64,${meal.image}`}
          width={270}
          height={270}
        />
      </div>
    </>
  );
};
