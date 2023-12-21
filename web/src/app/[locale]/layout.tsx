import NextIntlProvider from "@/components/NextIntlProvider";
import Providers from "@/components/Providers";
import { Navbar } from "@/components/container/navbar/Navbar";
import { Alerts } from "@/components/utils/Alerts";
import { ReactElement } from "react";

type LocaleLayoutProps = {
  children: ReactElement;
  params: { locale: string };
};

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return (
    <html lang={params.locale} suppressHydrationWarning className="h-full">
      <head>
        <title>{process.env.NEXT_PUBLIC_BRAND_NAME}</title>
      </head>
      <body className="h-full">
        <span
          id="animation"
          className={`absolute left-1/2 top-0 h-[1000px] w-96 -translate-x-1/2 -translate-y-[500px] rounded-full opacity-[0.15] blur-[75px] filter md:w-2/5 
            lg:w-2/5 xl:w-3/5 2xl:w-3/5 dark:opacity-[0.2]`}
        />

        <NextIntlProvider tree="Alerts">
          <Alerts />
        </NextIntlProvider>

        <Providers>
          <NextIntlProvider tree="Navbar">
            <Navbar locale={params.locale} />
          </NextIntlProvider>
          {children}
        </Providers>
      </body>
    </html>
  );
}
