import { ME } from "@/documents/query/auth";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";
import { HydrationBoundary } from "@tanstack/react-query";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default async function AboutLayout({ children }: AboutLayoutProps) {
  const { state } = await prefetchQuery([{ document: ME }]);

  return (
    <HydrationBoundary state={state}>
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col items-center px-6">
        {children}
      </div>
    </HydrationBoundary>
  );
}
