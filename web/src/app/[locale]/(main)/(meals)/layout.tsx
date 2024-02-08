import NextIntlProvider from "@/components/NextIntlProvider";
import {
  GET_ALL_MEAL_BOARD_PLANS_USER,
  GET_ALL_MEALS_USER,
} from "@/documents/query/dashboard";
import { GET_SETTINGS_USER } from "@/documents/query/settings";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";
import { HydrationBoundary } from "@tanstack/react-query";

interface MealsLayoutProps {
  children: React.ReactNode;
  mealModal: React.ReactNode;
}

export default async function MealsLayout({
  children,
  mealModal,
}: MealsLayoutProps) {
  const { state } = await prefetchQuery([
    { document: GET_ALL_MEAL_BOARD_PLANS_USER },
    { document: GET_ALL_MEALS_USER },
    { document: GET_SETTINGS_USER },
  ]);
  return (
    <NextIntlProvider tree={["Meals", "Enums"]}>
      <HydrationBoundary state={state}>
        {children}
        {mealModal}
      </HydrationBoundary>
    </NextIntlProvider>
  );
}
