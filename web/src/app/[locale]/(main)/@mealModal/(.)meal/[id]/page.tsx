import { MealDetails } from "@/components/pages/meal/MealDetails";
import { Modal } from "@nextui-org/react";

interface MealDetailsModalPageProps {
  params: { id: number };
}

export default function MealDetailsModalPage({
  params,
}: MealDetailsModalPageProps) {
  return (
    <Modal>
      <MealDetails id={params.id} />
    </Modal>
  );
}
