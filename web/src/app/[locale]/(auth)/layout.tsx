interface AuthLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex h-[90vh]">
      <div className="m-auto p-5">
        <section className="bg-container max-w-[500px] rounded p-5 shadow-xl md:p-10">
          {children}
        </section>
      </div>
    </main>
  );
}
