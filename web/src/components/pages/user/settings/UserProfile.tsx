import { MyAutocomplete } from "@/components/elements/MyAutocomplete";
import { useIngredientPropertiesHook } from "@/components/hooks/useIngredientPropertiesHook";
import { useMeHook } from "@/components/hooks/useMeHook";
import { MealLocation, TimeOfDay } from "@/gql/graphql";
import { Card, CardBody, Listbox, ListboxItem } from "@nextui-org/react";
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface UserProfileProps {}

export const UserProfile: React.FC<UserProfileProps> = ({}) => {
  const t = useTranslations<"User" | "Allergens" | "Enums">();
  const { me, refetchMe } = useMeHook();
  const { allergens } = useIngredientPropertiesHook();
  const [allergen, setAllergen] = useState<string>("");
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const [mealLocation, setMealLocation] = useState<string>("");

  return (
    <form className="subpixel-antialiased">
      <p className="text-large">{t("PROFILE_DETAILS")}</p>
      <p className="mb-3 text-small text-default-400">
        {t("PROFILE_DETAILS_DESCRIPTION")}
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardBody>
            <form>
              <MyAutocomplete
                label={t("ALLERGENS")}
                labelPlacement="outside"
                placeholder=" "
                value={allergen}
                size="sm"
                onChange={async (e) => {
                  setAllergen(e.target.value);
                }}
                items={(allergens || []).map(({ id, name }) => ({
                  id,
                  name: t(name as keyof Messages["Allergens"]),
                }))}
              />
              <Listbox emptyContent={t("NO_ALLERGIES")}>
                {(me?.allergens || []).map(({ id, name }) => (
                  <ListboxItem
                    key={id}
                    endContent={
                      <FaRegTrashAlt className="cursor-pointer hover:text-red-600" />
                    }
                  >
                    {t(name as keyof Messages["Allergens"])}
                  </ListboxItem>
                ))}
              </Listbox>
            </form>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <form className="flex items-center space-x-3">
              <MyAutocomplete
                label={t("TIME_OF_DAY")}
                labelPlacement="outside"
                placeholder=" "
                value={timeOfDay}
                required
                size="sm"
                onChange={(e) => setTimeOfDay(e.target.value)}
                items={Object.values(TimeOfDay).map((time) => ({
                  id: time,
                  name: t(time as keyof Messages["Enums"]),
                }))}
              />
              <MyAutocomplete
                label={t("MEAL_LOCATION")}
                labelPlacement="outside"
                placeholder=" "
                required
                value={mealLocation}
                size="sm"
                onChange={(e) => setMealLocation(e.target.value)}
                items={Object.values(MealLocation).map((location) => ({
                  id: location,
                  name: t(location as keyof Messages["Enums"]),
                }))}
              />
            </form>
            <Listbox emptyContent={t("NO_USER_MEAL_LOCATION")}>
              {(me?.userMealLocation || []).map(
                ({ id, mealLocation, timeOfDay }) => (
                  <ListboxItem
                    key={id}
                    endContent={
                      <FaRegTrashAlt className="cursor-pointer hover:text-red-600" />
                    }
                  >
                    <div className="flex items-center justify-between space-x-2">
                      <p>{t(timeOfDay as keyof Messages["Enums"])}</p>
                      <div className="text-xl">|</div>
                      <p>{t(mealLocation as keyof Messages["Enums"])}</p>
                    </div>
                  </ListboxItem>
                ),
              )}
            </Listbox>
          </CardBody>
        </Card>
      </div>
    </form>
  );
};
