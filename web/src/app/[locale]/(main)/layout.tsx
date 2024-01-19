import { ME } from "@/documents/query/auth";
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
  const { state } = await prefetchQuery([{ document: ME }]);

  return (
    <HydrationBoundary state={state}>
      <div className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center px-6">
        {children}
        {mealModal}
      </div>
    </HydrationBoundary>
  );
}
