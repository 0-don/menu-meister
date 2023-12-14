import QueryProvider from "@/components/QueryProvider";
import { Alerts } from "@/components/utils/Alerts";
import { localePath } from "@/utils/constants";
import {
  getMessageFallbackTranslation,
  onErrorTranslation,
} from "@/utils/helpers/translationHelper";
import { NextIntlClientProvider } from "next-intl";
import { Chakra_Petch } from "next/font/google";
import { ReactElement } from "react";

type LocaleLayoutProps = {
  children: ReactElement;
  params: { locale: string };
};

export const font = Chakra_Petch({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  return (
    <html lang={params.locale}>
      <head>
        <title>Meal Manager</title>
      </head>
      <body style={font.style}>
        <NextIntlClientProvider
          locale={params.locale}
          messages={(await localePath(params.locale)).Auth}
          onError={onErrorTranslation}
          getMessageFallback={getMessageFallbackTranslation}
        >
          <Alerts />
        </NextIntlClientProvider>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
