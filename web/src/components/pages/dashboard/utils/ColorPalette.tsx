import { Chip, colors } from "@nextui-org/react";
import React from "react";

interface ColorPaletteProps {
  value: string;
  onChange: (value: string) => void;
}

export const COLORS = [
  { className: "bg-[#f44336]", value: "#f44336" },
  { className: "bg-[#E91E63]", value: "#E91E63" },
  { className: "bg-[#9C27B0]", value: "#9C27B0" },
  { className: "bg-[#673AB7]", value: "#673AB7" },
  { className: "bg-[#3F51B5]", value: "#3F51B5" },
  { className: "bg-[#2196F3]", value: "#2196F3" },
  { className: "bg-[#03A9F4]", value: "#03A9F4" },
  { className: "bg-[#00BCD4]", value: "#00BCD4" },
  { className: "bg-[#009688]", value: "#009688" },
  { className: "bg-[#4CAF50]", value: "#4CAF50" },
  { className: "bg-[#8BC34A]", value: "#8BC34A" },
  { className: "bg-[#CDDC39]", value: "#CDDC39" },
  { className: "bg-[#FFEB3B]", value: "#FFEB3B" },
  { className: "bg-[#FFC107]", value: "#FFC107" },
  { className: "bg-[#FF9800]", value: "#FF9800" },
  { className: "bg-[#FF5722]", value: "#FF5722" },
  { className: "bg-[#FFC0CB]", value: "#FFC0CB" },
  { className: "bg-[#FF69B4]", value: "#FF69B4" },
  { className: "bg-[#FF1493]", value: "#FF1493" },
  { className: "bg-[#DB7093]", value: "#DB7093" },
  { className: "bg-[#BA55D3]", value: "#BA55D3" },
  { className: "bg-[#9370DB]", value: "#9370DB" },
  { className: "bg-[#8A2BE2]", value: "#8A2BE2" },
  { className: "bg-[#7B68EE]", value: "#7B68EE" },
  { className: "bg-[#6A5ACD]", value: "#6A5ACD" },
  { className: "bg-[#48D1CC]", value: "#48D1CC" },
  { className: "bg-[#00CED1]", value: "#00CED1" },
  { className: "bg-[#20B2AA]", value: "#20B2AA" },
  { className: "bg-[#3CB371]", value: "#3CB371" },
  { className: "bg-[#32CD32]", value: "#32CD32" },
  { className: "bg-[#9ACD32]", value: "#9ACD32" },
  { className: "bg-[#ADFF2F]", value: "#ADFF2F" },
  { className: "bg-[#FFFF00]", value: "#FFFF00" },
  { className: "bg-[#FFD700]", value: "#FFD700" },
  { className: "bg-[#FFA500]", value: "#FFA500" },
  { className: "bg-[#FF4500]", value: "#FF4500" },
];

export const ColorPalette: React.FC<ColorPaletteProps> = (props) => {
  return (
    <div className="grid grid-cols-12 gap-1">
      {COLORS.map((color) => (
        <Chip
          key={color.value}
          className={`cursor-pointer ${color.className} ${color.value === props.value ? "ring-2 ring-[#000000] ring-offset-2" : ""}`}
          variant="light"
          color="default"
          radius="none"
          onClick={() => props.onChange && props.onChange(color.value)}
        />
      ))}
    </div>
  );
};
