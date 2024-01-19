import NextIntlProvider from "@/components/NextIntlProvider";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <NextIntlProvider tree={"Home"}>
      <div className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center px-6">
        {children}
      </div>
    </NextIntlProvider>
  );
}
