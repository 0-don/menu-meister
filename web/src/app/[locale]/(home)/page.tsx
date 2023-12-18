"use client";
import { LogoSwitch } from "@/components/pages/home/LogoSwitch";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations<"Main">();
  return (
    <>
      <div className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center px-6 pt-12">
        <LogoSwitch />
        <h1 className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-3xl font-bold leading-relaxed text-transparent dark:from-secondary dark:to-primary">
          {process.env.NEXT_PUBLIC_BRAND_NAME}
        </h1>
        <h5 className="max-w-2xl text-center text-3xl font-bold md:text-6xl">
          {t("HEADER")}
        </h5>
        <p className="my-10 max-w-2xl text-center text-lg text-gray-700 dark:text-gray-300">
          {t("SUBHEADER", { brand: process.env.NEXT_PUBLIC_BRAND_NAME })}
        </p>

        <div className="mt-5 flex w-full items-center justify-center space-x-10">
          <Link href="/login">
            <Button size="lg" color="primary" radius="sm">
              {t("LOGIN_BUTTON")}
            </Button>
          </Link>
          <Link href="/register">
            <Button size="lg" color="default" radius="sm" variant="bordered">
              {t("REGISTER_BUTTON")}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
