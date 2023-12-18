import { Link } from "@/navigation";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Main");
  return (
    <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
      <div className="space-y-2">
        <h1 className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-5xl font-bold leading-relaxed text-transparent dark:from-secondary dark:to-primary">
          {process.env.NEXT_PUBLIC_BRAND_NAME}
        </h1>

        <p className="text-lg">{t("DESCRIPTION")}</p>
        <div className="space-x-5">
          <Link href="/login">
            <Button size="lg" color="primary">
              {t("LOGIN_BUTTON")}
            </Button>
          </Link>
          <Link href="/register">
            <Button size="lg" color="default">
              {t("REGISTER_BUTTON")}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
