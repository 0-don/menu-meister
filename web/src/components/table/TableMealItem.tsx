import { Meal } from "@/gql/graphql";
import TableStore from "@/store/TableStore";
import { WeekDay } from "@/utils/types";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
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
  const { attributes, listeners, setNodeRef, transform, } = useDraggable({
    id: `${group}#${day}#${meal.id}`,
    data: { day, group, meal },
  });

  return (
    <>
      <div
        style={{
          transform: CSS.Translate.toString(transform),
          opacity: tableStore.active?.id !== id && isOver ? 0.5 : 1,
        }}
        className="z-50 relative"
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <p>{meal.name}</p>
        <Image
          alt="Meal"
          className="rounded-xl object-cover"
          src={`data:image/jpeg;base64,${meal.image}`}
          width={270}
          height={270}
        />
      </div>
    </>
  );
};
