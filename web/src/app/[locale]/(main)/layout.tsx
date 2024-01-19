import NextIntlProvider from "@/components/NextIntlProvider";
import { ME } from "@/documents/query/auth";
import { MeQuery, UserRoleName } from "@/gql/graphql";
import { getKey } from "@/utils/helpers/clientUtils";
import { prefetchQuery } from "@/utils/helpers/serverComponentsUtil";
import { HydrationBoundary } from "@tanstack/react-query";

interface HomeLayoutProps {
  children: React.ReactNode;
  home: React.ReactNode;
  dashboard: React.ReactNode;
  user: React.ReactNode;
  mealModal: React.ReactNode;
}

export default async function HomeLayout({
  children,
  home,
  dashboard,
  user,
  mealModal,
}: HomeLayoutProps) {
  const { queryClient, state } = await prefetchQuery([{ document: ME }]);
  const data = queryClient.getQueryData<MeQuery>(getKey(ME));

  let layout = home;
  let tree: keyof Messages = "Home";
  const isHighRank = data?.me?.UserRole?.some(
    ({ name }) => name === UserRoleName.Admin || name === UserRoleName.Mod,
  );

  if (data?.me) {
    layout = user;
    tree = "User";
  }
  if (isHighRank) {
    layout = dashboard;
    tree = "Dashboard";
  }

  return (
    <NextIntlProvider tree={tree}>
      <HydrationBoundary state={state}>
        <div className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center px-6">
          {layout}
          {mealModal}
        </div>
      </HydrationBoundary>
    </NextIntlProvider>
  );
}
