import { localePath } from "@/utils/constants";
import {
  getMessageFallbackTranslation,
  onErrorTranslation,
} from "@/utils/helpers/translationHelper";
import { NextIntlClientProvider, useLocale } from "next-intl";

interface NextIntlProviderProps {
  children: React.ReactNode;
  tree: (keyof Messages)[];
}

export default async function NextIntlProvider({
  children,
  tree,
}: NextIntlProviderProps) {
  const locale = useLocale();
  const messages = await localePath(locale);
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={tree.reduce((acc, t) => ({ ...acc, ...messages[t] }), {})}
      onError={onErrorTranslation}
      getMessageFallback={getMessageFallbackTranslation}
    >
      {children}
    </NextIntlClientProvider>
  );
}
