"use client";

import { UserNotifications } from "@/components/pages/user/settings/UserNotifications";
import { UserProfile } from "@/components/pages/user/settings/UserProfile";
import { UserSecurity } from "@/components/pages/user/settings/UserSecurity";
import { Tab, Tabs } from "@nextui-org/react";
import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard";
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import { useTranslations } from "next-intl";
import { MdOutlineLockPerson } from "react-icons/md";

interface UserProfilePageProps {}

export default function UserProfilePage({}: UserProfilePageProps) {
  const t = useTranslations<"User">();

  return (
    <main className="mt-5 w-full max-w-3xl rounded-lg bg-default-50 p-5">
      <Tabs>
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <FaAddressCard />
              <span>{t("PROFILE")}</span>
            </div>
          }
        >
          <UserProfile />
        </Tab>
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <FaBell />
              <span>{t("NOTIFICATIONS")}</span>
            </div>
          }
        >
          <UserNotifications />
        </Tab>
        <Tab
          title={
            <div className="flex items-center space-x-2">
              <MdOutlineLockPerson />
              <span>{t("SECURITY")}</span>
            </div>
          }
        >
          <UserSecurity />
        </Tab>
      </Tabs>
    </main>
  );
}
