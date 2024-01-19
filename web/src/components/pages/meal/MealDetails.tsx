"use client";

import React from "react";

interface MealDetailsProps {
  id: number;
}

export const MealDetails: React.FC<MealDetailsProps> = ({ id }) => {
  console.log("MealDetails", id);

  return (
    <>
      <h1>asdasd {id}</h1>
    </>
  );
};
