import { useTranslations } from "next-intl";
import React from "react";

interface UserNotificationsProps {}

export const UserNotifications: React.FC<UserNotificationsProps> = ({}) => {
  const t = useTranslations<"User">();
  return (
    <form className="subpixel-antialiased">
      <p className="text-large">{t("NOTIFICATIONS")}</p>
      <p className="text-small text-default-400">
        {t("NOTIFICATIONS_DETAILS_DESCRIPTION")}
      </p>
    </form>
  );
};
