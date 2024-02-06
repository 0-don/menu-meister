import NextIntlProvider from "@/components/NextIntlProvider";
import { MEAL_TRANSLATIONS } from "@/utils/mealProperties";

interface MealLayoutProps {
  children: React.ReactNode;
}

export default function MealLayout({ children }: MealLayoutProps) {
  return (
    <NextIntlProvider tree={MEAL_TRANSLATIONS}>{children}</NextIntlProvider>
  );
}
