import NextIntlProvider from "@/components/NextIntlProvider";

interface OrdersLayoutProps {
  children: React.ReactNode;
}

export default function OrdersLayout({ children }: OrdersLayoutProps) {
  return <NextIntlProvider tree={["Orders"]}>{children}</NextIntlProvider>;
}
