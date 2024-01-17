import { Chip } from "@nextui-org/react";
import React from "react";

interface ColorPaletteProps {}

export const ColorPalette: React.FC<ColorPaletteProps> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-1">
        <Chip
          variant="light"
          color="default"
          radius="none"
          style={{ backgroundColor: "#fafae" }}
        />
      </div>
    </>
  );
};
