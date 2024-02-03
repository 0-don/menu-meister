import NextIntlProvider from "@/components/NextIntlProvider";
import React from "react";

interface MealLayoutProps {
  children: React.ReactNode;
}

export const MealLayout: React.FC<MealLayoutProps> = ({ children }) => {
  return (
    <>
      <NextIntlProvider tree={["Allergens"]}>{children}</NextIntlProvider>
    </>
  );
};
