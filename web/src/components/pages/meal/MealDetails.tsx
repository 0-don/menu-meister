"use client";

import { GET_MEAL_ADMIN } from "@/documents/query/meal";
import { useGqlQuery } from "@/fetcher";
import React from "react";

interface MealDetailsProps {
  id: number;
  modal?: boolean;
}

export const MealDetails: React.FC<MealDetailsProps> = ({ id, modal }) => {
  const { data: { getMealAdmin } = {} } = useGqlQuery(GET_MEAL_ADMIN, {
    where: { id: { equals: id } },
  });

  console.log(getMealAdmin);

  return (
    <div
      className={`w-full rounded-lg bg-content1 p-5 ${modal ? "" : "container mx-auto mt-5"}`}
    >
      <h1>asdasd {id}</h1>
      <h1>asdasd {id}</h1>
      <h1>asdasd {id}</h1>
      <h1>asdasd {id}</h1>
    </div>
  );
};
