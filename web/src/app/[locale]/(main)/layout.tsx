import { localePath } from "@/utils/constants";
import {
  getMessageFallbackTranslation,
  onErrorTranslation,
} from "@/utils/helpers/translationHelper";
import { NextIntlClientProvider } from "next-intl";

interface HomeLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
  // home: React.ReactNode;
  // dashboard: React.ReactNode;
  // order: React.ReactNode;
}

export default async function HomeLayout({
  children,
  params,
  // home,
  // dashboard,
  // order,
}: HomeLayoutProps) {
  return (
    <>
      {/* <NextIntlClientProvider
        locale={params.locale}
        messages={(await localePath(params.locale)).Home}
        onError={onErrorTranslation}
        getMessageFallback={getMessageFallbackTranslation}
      >
        {home}
      </NextIntlClientProvider> */}
      <NextIntlClientProvider
        locale={params.locale}
        messages={(await localePath(params.locale)).Home}
        onError={onErrorTranslation}
        getMessageFallback={getMessageFallbackTranslation}
      >
        {children}
      </NextIntlClientProvider>
    </>
  );
}
