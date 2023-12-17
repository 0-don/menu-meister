interface AuthLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="">{children}</div>;
}
