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
    <html lang={params.locale} suppressHydrationWarning className="h-full">
      <head>
        <title>{process.env.NEXT_PUBLIC_BRAND_NAME}</title>
      </head>
      <body className="h-full">
        <span
          id="animation"
          className={`absolute left-1/2 top-0 h-[1000px] w-96 -translate-x-1/2 -translate-y-[500px] rounded-full opacity-[0.15] blur-[75px] filter dark:opacity-[0.2] 
            md:w-2/5 lg:w-2/5 xl:w-3/5 2xl:w-3/5`}
        />

        <NextIntlClientProvider
          locale={params.locale}
          messages={(await localePath(params.locale)).Auth}
          onError={onErrorTranslation}
          getMessageFallback={getMessageFallbackTranslation}
        >
          <Alerts />
        </NextIntlClientProvider>
        <Providers>
          <Navbar locale={params.locale} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
