import { MealDetails } from "@/components/pages/meal/MealDetails";

interface MealDetailsPageProps {
  params: { id: number };
}

export default function MealDetailsPage({ params }: MealDetailsPageProps) {
  return <MealDetails id={params.id} />;
}
