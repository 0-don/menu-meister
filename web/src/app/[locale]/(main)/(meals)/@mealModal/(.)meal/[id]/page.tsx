import { MyModal } from "@/components/elements/MyModal";
import { MealDetails } from "@/components/pages/meal/MealDetails";

interface MealDetailsModalPageProps {
  params: { id: number };
}

export default function MealDetailsModalPage({
  params,
}: MealDetailsModalPageProps) {
  return (
    <MyModal>
      <MealDetails id={params.id} />
    </MyModal>
  );
}
