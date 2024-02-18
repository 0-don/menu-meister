"use client";

import { MyFileInput } from "@/components/elements/MyFileInput";
import { useMeHook } from "@/components/hooks/useMeHook";
import { UPLOAD_MEAL_IMAGE_ADMIN } from "@/documents/mutation/menu";
import { GET_MEAL_USER } from "@/documents/query/meal";
import { useGqlMutation, useGqlQuery } from "@/fetcher";
import { TableStore } from "@/store/TableStore";
import { catchErrorAlerts } from "@/utils/helpers/clientUtils";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { MealProperties } from "./MealProperties";

interface MealDetailsProps {
  id: number;
  modal?: boolean;
}

export const MealDetails: React.FC<MealDetailsProps> = ({ id, modal }) => {
  const t = useTranslations<"Meal">();
  const [files, setFiles] = useState<File[]>([]);
  const { isHighRank, isOrderMenu } = useMeHook();

  const { data: { getMealUser } = {}, refetch } = useGqlQuery(GET_MEAL_USER, {
    where: { id: { equals: Number(id) } },
  });
  const { mutateAsync: uploadImage } = useGqlMutation(UPLOAD_MEAL_IMAGE_ADMIN);

  const isDisabled = !isHighRank || isOrderMenu;

  return (
    <div
      className={`w-full rounded-lg bg-content1 p-5 ${modal ? "" : "container mx-auto mt-5"} flex space-x-10`}
    >
      <div className="w-4/6">
        <h1 className="text-left text-2xl font-bold">{getMealUser?.name}</h1>

        <div className="mt-5 w-full rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100">
          <Listbox aria-label="mealRecipe">
            {(getMealUser?.mealRecipe || []).map(({ id, recipe }) => (
              <ListboxItem
                key={id}
                className="text-left"
                endContent={
                  isDisabled ? undefined : (
                    <FaRegTrashAlt className="hover:text-red-500" />
                  )
                }
              >
                {recipe.name}
              </ListboxItem>
            ))}
          </Listbox>
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-5">
        {getMealUser?.image && (
          <Image
            alt={"MEAL"}
            className={`h-28 w-full rounded-xl object-cover`}
            src={`data:image/jpeg;base64,${getMealUser.image}`}
            width={200}
            height={200}
          />
        )}
        {isDisabled && (
          <MyFileInput
            files={files}
            setFiles={async (e) => {
              try {
                await uploadImage({
                  mealId: Number(getMealUser?.id),
                  file: e[0],
                });
                refetch();
                TableStore?.refetchWeeklyMealGroups();
              } catch (error) {
                catchErrorAlerts(error);
              }

              setFiles([]);
            }}
          />
        )}
        <MealProperties
          title={t("ALLERGENS")}
          items={getMealUser?.allergens || []}
        />
        <MealProperties
          title={t("ADDITIVES")}
          items={getMealUser?.additives || []}
        />
        <MealProperties
          title={t("PROPERTIES")}
          items={getMealUser?.properties || []}
        />
        <MealProperties
          title={t("CATEGORIES")}
          items={getMealUser?.categories || []}
        />
        <MealProperties
          title={t("SEASONS")}
          items={getMealUser?.seasons || []}
        />
        <MealProperties
          title={t("FOOD_FORMS")}
          items={getMealUser?.foodForms || []}
        />
      </div>
    </div>
  );
};
