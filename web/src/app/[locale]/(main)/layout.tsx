import { ME } from "@/documents/query/auth";
import { MeQuery } from "@/gql/graphql";
import { redirect } from "@/navigation";
import { getKey } from "@/utils/helpers/clientUtils";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";
import { HydrationBoundary } from "@tanstack/react-query";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const { state, queryClient } = await prefetchQuery([{ document: ME }]);
  const data = queryClient.getQueryData<MeQuery>(getKey(ME));

  if (!data?.me) redirect("/login");

  return (
    <HydrationBoundary state={state}>
      <div className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center px-6">
        {children}
      </div>
      
    </HydrationBoundary>
  );
}
