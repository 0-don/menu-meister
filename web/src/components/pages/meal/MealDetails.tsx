"use client";

import React from "react";

interface MealDetailsProps {
  id: number;
  modal?: boolean;
}

export const MealDetails: React.FC<MealDetailsProps> = ({ id, modal }) => {
  return (
    <div className={`w-full rounded-lg bg-content1 p-5 ${modal ? "" : "mt-5 container mx-auto"}`}>
      <h1>asdasd {id}</h1>
      <h1>asdasd {id}</h1>
      <h1>asdasd {id}</h1>
      <h1>asdasd {id}</h1>
    </div>
  );
};
