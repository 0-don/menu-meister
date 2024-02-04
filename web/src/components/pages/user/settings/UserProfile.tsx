import { useTranslations } from "next-intl";
import React from "react";

interface UserProfileProps {}

export const UserProfile: React.FC<UserProfileProps> = ({}) => {
  const t = useTranslations<"User">();
  return (
    <form className="subpixel-antialiased">
      <p className="text-large">{t("PROFILE_DETAILS")}</p>
      <p className="text-small text-default-400">
        {t("PROFILE_DETAILS_DESCRIPTION")}
      </p>
    </form>
  );
};
