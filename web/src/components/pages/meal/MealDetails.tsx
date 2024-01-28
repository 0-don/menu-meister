"use client";

import { FileInput } from "@/components/utils/FileInput";
import { GET_MEAL_ADMIN } from "@/documents/query/meal";
import { useGqlQuery } from "@/fetcher";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { IoTrashOutline } from "@react-icons/all-files/io5/IoTrashOutline";
import Image from "next/image";
import React from "react";

interface MealDetailsProps {
  id: number;
  modal?: boolean;
}

export const MealDetails: React.FC<MealDetailsProps> = ({ id, modal }) => {
  const [files, setFiles] = React.useState<File[]>([]);

  const { data: { getMealAdmin } = {} } = useGqlQuery(GET_MEAL_ADMIN, {
    where: { id: { equals: Number(id) } },
  });

  return (
    <div
      className={`w-full rounded-lg bg-content1 p-5 ${modal ? "" : "container mx-auto mt-5"} flex space-x-10`}
    >
      <div className="w-5/6">
        <h1 className="text-left text-xl font-bold">{getMealAdmin?.name}</h1>

        <div className="mt-5 w-full rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100">
          <Listbox onAction={(key) => alert(key)}>
            {(getMealAdmin?.mealRecipe || []).map(({ id, recipe }) => (
              <ListboxItem
                key={id}
                className="text-left"
                endContent={<IoTrashOutline className="hover:text-red-500" />}
              >
                {recipe.name}
              </ListboxItem>
            ))}
            {/* <ListboxItem key="new">New file</ListboxItem>
          <ListboxItem key="copy">Copy link</ListboxItem>
          <ListboxItem key="edit">Edit file</ListboxItem>
          <ListboxItem key="delete" className="text-danger" color="danger">
            Delete file
          </ListboxItem> */}
          </Listbox>
        </div>
      </div>
      <div>
        {getMealAdmin?.image && (
          <Image
            alt={"MEAL"}
            className={`h-24 w-full rounded-xl object-cover`}
            src={`data:image/jpeg;base64,${getMealAdmin.image}`}
            width={200}
            height={400}
          />
        )}
        <FileInput
          className={`${getMealAdmin?.image ? "mt-5" : ""}`}
          files={files}
          setFiles={setFiles}
        />
      </div>
    </div>
  );
};
