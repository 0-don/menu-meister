"use client";

import { Settings } from "@/components/pages/settings/Settings";
import { Tab, Tabs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { FaAddressCard } from "react-icons/fa";

interface SettingsPageProps {}

export default function SettingsPage({}: SettingsPageProps) {
  const t = useTranslations<"Settings">();

  return (
    <main className="mt-5 w-full max-w-3xl rounded-lg bg-default-50 p-5">
      <Tabs>
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <FaAddressCard />
              <span>{t("SETTINGS")}</span>
            </div>
          }
        >
          <Settings />
        </Tab>
      </Tabs>
    </main>
  );
}
