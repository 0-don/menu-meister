import { ME } from "@/documents/query/auth";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";
import { HydrationBoundary } from "@tanstack/react-query";

interface HomeLayoutProps {
  children: React.ReactNode;
  home: React.ReactNode;
  dashboard: React.ReactNode;
  user: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const { queryClient, state } = await prefetchQuery([{ document: ME }]);

  return (
    <HydrationBoundary state={state}>
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col items-center px-6">
        {children}
      </div>
    </HydrationBoundary>
  );
}
