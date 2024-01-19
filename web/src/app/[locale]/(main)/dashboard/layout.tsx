import NextIntlProvider from "@/components/NextIntlProvider";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <NextIntlProvider tree={"Dashboard"}>{children}</NextIntlProvider>;
}
