import { useTranslations } from "next-intl";
import React from "react";

interface UserNotificationsProps {}

export const UserNotifications: React.FC<UserNotificationsProps> = ({}) => {
  const t = useTranslations<"User">();
  return (
    <>
      <div className="overflow-inherit color-inherit z-10 flex w-full shrink-0 flex-col items-start justify-start rounded-t-large p-3 px-4 pb-0 pt-4 subpixel-antialiased">
        <p className="text-large">{t("NOTIFICATIONS")}</p>
        <p className="text-small text-default-400">
          {t("NOTIFICATIONS_DETAILS_DESCRIPTION")}
        </p>
      </div>
    </>
  );
};
