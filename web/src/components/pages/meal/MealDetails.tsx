"use client";

import React from "react";

interface MealDetailsProps {
  id: number;
}

export const MealDetails: React.FC<MealDetailsProps> = ({ id }) => {
  return (
    <div className="bg-content1 p-5 ">
      <h1>asdasd {id}</h1>
      <h1>asdasd {id}</h1>
      <h1>asdasd {id}</h1>
      <h1>asdasd {id}</h1>
    </div>
  );
};
