import Providers from "@/components/Providers";
import { Navbar } from "@/components/container/navbar/Navbar";
import { Alerts } from "@/components/utils/Alerts";
import { localePath } from "@/utils/constants";
import {
  getMessageFallbackTranslation,
  onErrorTranslation,
} from "@/utils/helpers/translationHelper";
import { NextIntlClientProvider } from "next-intl";
import { ReactElement } from "react";

type LocaleLayoutProps = {
  children: ReactElement;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        <title>Meal Manager</title>
      </head>
      <body>
        <NextIntlClientProvider
          locale={params.locale}
          messages={(await localePath(params.locale)).Auth}
          onError={onErrorTranslation}
          getMessageFallback={getMessageFallbackTranslation}
        >
          <Alerts />
        </NextIntlClientProvider>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
