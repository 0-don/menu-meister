import { Link } from "@/navigation";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Main");
  return (
    <main className="flex h-[90vh] items-center justify-center space-x-5">
      <div className="space-y-2">
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold leading-relaxed text-transparent dark:from-primary dark:to-primary">
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
            <Button size="lg" color="secondary">
              {t("REGISTER_BUTTON")}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
