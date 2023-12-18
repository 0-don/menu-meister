"use client";
import { LogoSwitch } from "@/components/pages/home/LogoSwitch";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations<"Main">();
  return (
    <>
      <div className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center pt-12">
        <span
          className="absolute top-[-500px] h-[1000px] w-[1000px] rounded-full opacity-[0.15] blur-[75px] filter dark:opacity-[0.2]"
          style={{
            mixBlendMode: "normal",
            willChange: "filter",
            background:
              "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 1turn)",
          }}
        />
        <LogoSwitch />
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

      {/* 
      <main classNameName="container mx-auto max-w-7xl flex-grow px-6 pt-16">
        <div classNameName="space-y-2">
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
      </main> */}
    </>
  );
}
