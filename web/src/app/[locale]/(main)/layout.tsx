import NextIntlProvider from "@/components/NextIntlProvider";
import { ME } from "@/documents/query/auth";
import {
  GET_ALL_MEALS_USER,
  GET_ALL_MEAL_BOARD_PLANS_USER,
} from "@/documents/query/dashboard";
import { GET_SETTINGS_USER } from "@/documents/query/settings";
import { MeQuery } from "@/gql/graphql";
import { redirect } from "@/navigation";
import { getKey } from "@/utils/helpers/clientUtils";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";
import { HydrationBoundary } from "@tanstack/react-query";

interface HomeLayoutProps {
  children: React.ReactNode;
  mealModal: React.ReactNode;
}

export default async function HomeLayout({
  children,
  mealModal,
}: HomeLayoutProps) {
  const { state, queryClient } = await prefetchQuery([
    { document: ME },
    { document: GET_ALL_MEAL_BOARD_PLANS_USER },
    { document: GET_ALL_MEALS_USER },
    { document: GET_SETTINGS_USER },
  ]);
  const data = queryClient.getQueryData<MeQuery>(getKey(ME));

  if (!data?.me) redirect("/login");

  return (
    <NextIntlProvider tree={["Dashboard"]}>
      <HydrationBoundary state={state}>
        <div className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center px-6">
          {children}
          {mealModal}
        </div>
      </HydrationBoundary>
    </NextIntlProvider>
  );
}
