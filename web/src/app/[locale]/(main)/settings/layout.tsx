import NextIntlProvider from "@/components/NextIntlProvider";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default async function SettingsLayout({
  children,
}: SettingsLayoutProps) {
  return <NextIntlProvider tree={["Settings"]}>{children}</NextIntlProvider>;
}
