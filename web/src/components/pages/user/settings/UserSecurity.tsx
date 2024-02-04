import { useTranslations } from "next-intl";
import React from "react";

interface UserSecurityProps {}

export const UserSecurity: React.FC<UserSecurityProps> = ({}) => {
  const t = useTranslations<"User">();
  return (
    <form className="subpixel-antialiased">
      <p className="text-large">{t("SECURITY")}</p>
      <p className="text-small text-default-400">
        {t("SECURITY_DETAILS_DESCRIPTION")}
      </p>
    </form>
  );
};
