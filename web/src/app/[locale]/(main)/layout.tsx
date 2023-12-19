import { ME } from "@/documents/query/auth";
import { MeQuery, UserRoleName } from "@/gql/graphql";
import { localePath } from "@/utils/constants";
import { getKey } from "@/utils/helpers/clientHelpers";
import { prefetchQuery } from "@/utils/helpers/serverHelpers";
import {
  getMessageFallbackTranslation,
  onErrorTranslation,
} from "@/utils/helpers/translationHelper";
import { HydrationBoundary } from "@tanstack/react-query";
import { NextIntlClientProvider } from "next-intl";

interface HomeLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
  home: React.ReactNode;
  dashboard: React.ReactNode;
  user: React.ReactNode;
}

export default async function HomeLayout({
  children,
  params,
  home,
  dashboard,
  user,
}: HomeLayoutProps) {
  const { queryClient, state } = await prefetchQuery([{ document: ME }]);

  const data = queryClient.getQueryData<MeQuery>(getKey(ME));

  let layout = home;
  let messages: Messages["User" | "Dashboard" | "Home"] = (
    await localePath(params.locale)
  ).Home;
  const isHighRank = data?.me?.UserRole?.some(
    ({ name }) => name === UserRoleName.Admin || name === UserRoleName.Mod,
  );

  console.log(data)

  if (data?.me) {
    layout = user;
    messages = (await localePath(params.locale)).User;
  }
  if (isHighRank) {
    layout = dashboard;
    messages = (await localePath(params.locale)).Dashboard;
  }

  return (
    <>
      <NextIntlClientProvider
        locale={params.locale}
        messages={messages}
        onError={onErrorTranslation}
        getMessageFallback={getMessageFallbackTranslation}
      >
        <HydrationBoundary state={state}>{layout}</HydrationBoundary>
      </NextIntlClientProvider>
    </>
  );
}
