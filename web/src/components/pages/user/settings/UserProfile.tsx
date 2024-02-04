import { MyAutocomplete } from "@/components/elements/MyAutocomplete";
import { useMeHook } from "@/components/hooks/useMeHook";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface UserProfileProps {}

export const UserProfile: React.FC<UserProfileProps> = ({}) => {
  const { me } = useMeHook();
  const [allergen, setAllergen] = useState<string>("");
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const t = useTranslations<"User">();

  return (
    <form className="subpixel-antialiased">
      <p className="text-large">{t("PROFILE_DETAILS")}</p>
      <p className="mb-3 text-small text-default-400">
        {t("PROFILE_DETAILS_DESCRIPTION")}
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md">
          <MyAutocomplete
            label={t("NOTIFICATIONS")}
            value={allergen}
            size="sm"
            onChange={(e) => setAllergen(e.target.value)}
            items={
              me?.allergens?.map(({ id, name }) => ({
                id,
                name,
              })) || []
            }
          />
          <Listbox>
            <ListboxItem
              key="new"
              endContent={
                <FaRegTrashAlt className="cursor-pointer hover:text-red-600" />
              }
            >
              New file
            </ListboxItem>
            <ListboxItem key="copy" endContent={<FaRegTrashAlt />}>
              Copy link
            </ListboxItem>
            <ListboxItem key="edit" endContent={<FaRegTrashAlt />}>
              Edit file
            </ListboxItem>
            <ListboxItem key="delete" endContent={<FaRegTrashAlt />}>
              Delete file
            </ListboxItem>
          </Listbox>
        </div>
        <div>
          <MyAutocomplete
            label={t("NOTIFICATIONS")}
            value={allergen}
            size="sm"
            onChange={(e) => setAllergen(e.target.value)}
            items={
              me?.allergens?.map(({ id, name }) => ({
                id,
                name,
              })) || []
            }
          />
        </div>
      </div>
    </form>
  );
};