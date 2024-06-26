import { MyAutocomplete } from "@/components/elements/MyAutocomplete";
import { MyConfirmModal } from "@/components/elements/MyConfirmModal";
import { MyInput } from "@/components/elements/MyInput";
import { useIngredientPropertiesHook } from "@/components/hooks/useIngredientPropertiesHook";
import { useMeHook } from "@/components/hooks/useMeHook";
import { ME } from "@/documents/query/auth";
import { type GET_USER_ADMIN } from "@/documents/query/user";
import { TIME_OF_DAY_CONFIGS } from "@/utils/constants";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { MealLocation, TimeOfDay } from "@/utils/types/enum";
import {
  Button,
  Card,
  CardBody,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { ResultOf } from "gql.tada";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

type TimeOfDayAndMealLocation = {
  timeOfDay: string;
  mealLocation: string;
};

interface UserProfileProps {
  user?: Partial<
    ResultOf<typeof GET_USER_ADMIN>["getUserAdmin"] | ResultOf<typeof ME>["me"]
  > | null;
  refetch: (args?: any) => Promise<any>;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, refetch }) => {
  const t = useTranslations<"User" | "Allergens" | "Enums">();
  const {
    isHighRank,
    updateUser,
    createUserMealLocation,
    deleteUserMealLocation,
  } = useMeHook();
  const { allergens } = useIngredientPropertiesHook();
  const [firstname, setFirstname] = useState<string>(user?.firstname || "");
  const [lastname, setLastname] = useState<string>(user?.lastname || "");
  const [allergen, setAllergen] = useState<string>("");
  const [timeOfDayAndMealLocation, setTimeOfDayAndMealLoction] =
    useState<TimeOfDayAndMealLocation>({
      timeOfDay: "",
      mealLocation: "",
    });

  useEffect(() => {
    setFirstname(user?.firstname || "");
    setLastname(user?.lastname || "");
  }, [user?.firstname, user?.lastname]);

  const submit = async (args?: TimeOfDayAndMealLocation) => {
    const changedState = args || timeOfDayAndMealLocation;

    if (changedState.timeOfDay && changedState.mealLocation) {
      try {
        await createUserMealLocation({
          data: {
            userId: String(user?.id),
            mealLocation:
              changedState.mealLocation as keyof typeof MealLocation,
            timeOfDay: changedState.timeOfDay as keyof typeof TimeOfDay,
          },
        });
        refetch();
        setTimeOfDayAndMealLoction({ timeOfDay: "", mealLocation: "" });
      } catch (error) {
        catchErrorAlerts(error, t);
      }
    } else {
      setTimeOfDayAndMealLoction(changedState);
    }
  };

  return (
    <section className="subpixel-antialiased">
      <p className="text-large">{t("PROFILE_DETAILS")}</p>
      <p className="mb-3 text-small text-default-400">
        {t("PROFILE_DETAILS_DESCRIPTION")}
      </p>

      <Card className="mb-5">
        <CardBody className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <MyInput
            label={t("FIRSTNAME")}
            labelPlacement="outside"
            placeholder=" "
            value={firstname}
            onChange={(e) => {
              if (!isHighRank) return;
              setFirstname(e.target.value);
              updateUser({
                where: { id: user?.id },
                data: { firstname: { set: e.target.value } },
              });
            }}
          />
          <MyInput
            label={t("LASTNAME")}
            labelPlacement="outside"
            placeholder=" "
            value={lastname}
            onChange={(e) => {
              if (!isHighRank) return;
              setLastname(e.target.value);
              updateUser({
                where: { id: user?.id },
                data: { lastname: { set: e.target.value } },
              });
            }}
          />
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardBody>
            <MyAutocomplete
              label={t("ALLERGENS")}
              labelPlacement="outside"
              placeholder=" "
              aria-label="Allergens"
              value={allergen}
              onSelectionChange={async (key) => {
                if (!isHighRank) return;
                const allergy = allergens?.find(
                  (allergen) => allergen.id === Number(key),
                );
                if (key && allergy) {
                  await updateUser({
                    where: { id: user?.id },
                    data: {
                      allergens: {
                        connectOrCreate: [
                          {
                            create: { name: allergy.name },
                            where: { id: allergy.id },
                          },
                        ],
                      },
                    },
                  });
                  refetch();
                  setAllergen("");
                }
              }}
              items={(allergens || [])
                .filter((a) => !user?.allergens?.find((b) => b.name === a.name))
                .map(({ id, name }) => ({
                  id,
                  name: t(name as keyof Messages["Allergens"]),
                }))}
            />
            <Listbox
              emptyContent={t("NO_ALLERGIES")}
              aria-label={t("ALLERGENS")}
            >
              {(user?.allergens || []).map(({ id, name }) => (
                <ListboxItem
                  key={id}
                  endContent={
                    <MyConfirmModal
                      title={t("WARNING")}
                      Footer={({ onOpenChange }) => (
                        <div className="flex items-center justify-between">
                          <Button
                            color="danger"
                            onClick={async () => {
                              if (!isHighRank) return;
                              try {
                                await updateUser({
                                  where: { id: user?.id },
                                  data: { allergens: { disconnect: [{ id }] } },
                                });
                                onOpenChange();
                                refetch();
                              } catch (error) {
                                catchErrorAlerts(error, t);
                              }
                            }}
                          >
                            {t("YES")}
                          </Button>
                        </div>
                      )}
                      Trigger={({ onOpen }) => (
                        <FaRegTrashAlt
                          onClick={onOpen}
                          className="m-2 cursor-pointer text-sm hover:text-red-600"
                        />
                      )}
                    >
                      <span>
                        {t.rich("ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS", {
                          item: t(name as keyof Messages["Allergens"]),
                          placeholder: (chunks) => (
                            <span className="font-bold">{chunks}</span>
                          ),
                        })}
                      </span>
                    </MyConfirmModal>
                  }
                >
                  {t(name as keyof Messages["Allergens"])}
                </ListboxItem>
              ))}
            </Listbox>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <form
              className="flex items-center space-x-3"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!isHighRank) return;
                await submit();
              }}
            >
              <MyAutocomplete
                label={t("TIME_OF_DAY")}
                labelPlacement="outside"
                placeholder=" "
                value={timeOfDayAndMealLocation.timeOfDay}
                required
                onSelectionChange={async (key) => {
                  if (!isHighRank) return;
                  const changedState = {
                    ...timeOfDayAndMealLocation,
                    timeOfDay: key as string,
                  };
                  await submit(changedState);
                }}
                items={TIME_OF_DAY_CONFIGS.map(({ time }) => ({
                  id: time,
                  name: t(time as keyof Messages["Enums"]),
                }))}
              />
              <MyAutocomplete
                label={t("MEAL_LOCATION")}
                labelPlacement="outside"
                placeholder=" "
                required
                value={timeOfDayAndMealLocation.mealLocation}
                onSelectionChange={async (key) => {
                  if (!isHighRank) return;
                  const changedState = {
                    ...timeOfDayAndMealLocation,
                    mealLocation: key as string,
                  };
                  await submit(changedState);
                }}
                items={Object.values(MealLocation).map((location) => ({
                  id: location,
                  name: t(location as keyof Messages["Enums"]),
                }))}
              />
            </form>
            <Listbox
              emptyContent={t("NO_USER_MEAL_LOCATION")}
              aria-label={t("TIME_OF_DAY")}
            >
              {(user?.userMealLocation || []).map(
                ({ id, mealLocation, timeOfDay }) => {
                  const { icon: Icon } = TIME_OF_DAY_CONFIGS?.find(
                    (config) => config.time === timeOfDay,
                  )!;

                  const text = `${t(timeOfDay.toString() as keyof Messages["Allergens"])} | ${t(mealLocation.toString() as keyof Messages["Allergens"])}`;

                  return (
                    <ListboxItem
                      key={id}
                      startContent={<Icon />}
                      endContent={
                        <MyConfirmModal
                          title={t("WARNING")}
                          Footer={({ onOpen }) => (
                            <div className="flex items-center justify-between">
                              <Button
                                color="danger"
                                onClick={async () => {
                                  if (!isHighRank) return;
                                  try {
                                    await deleteUserMealLocation({
                                      where: {
                                        id,
                                        userId: { equals: String(user?.id) },
                                      },
                                    });
                                    onOpen();
                                    refetch();
                                  } catch (error) {
                                    catchErrorAlerts(error, t);
                                  }
                                }}
                              >
                                {t("YES")}
                              </Button>
                            </div>
                          )}
                          Trigger={({ onOpen }) => (
                            <FaRegTrashAlt
                              onClick={onOpen}
                              className="m-2 cursor-pointer text-sm hover:text-red-600"
                            />
                          )}
                        >
                          <span>
                            {t.rich("ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS", {
                              item: text,
                              placeholder: (chunks) => (
                                <span className="font-bold">{chunks}</span>
                              ),
                            })}
                          </span>
                        </MyConfirmModal>
                      }
                    >
                      {text}
                    </ListboxItem>
                  );
                },
              )}
            </Listbox>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
