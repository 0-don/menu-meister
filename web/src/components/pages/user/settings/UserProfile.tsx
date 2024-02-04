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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-default-900">
            {t("FIRST_NAME")}
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border border-default-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-default-900">
            {t("LAST_NAME")}
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border border-default-300 rounded-lg"
          />
        </div>
      </div>
    </form>
  );
};
