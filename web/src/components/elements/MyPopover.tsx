import { Backdrop, OverlayPlacement } from "@/utils/types";
import {
  Button,
  ButtonProps,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { IconType } from "@react-icons/all-files";
import React from "react";

interface MyPopoverProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
  text?: string;
  title?: string;
  Icon?: IconType;
  placement?: OverlayPlacement;
  showArrow?: boolean;
  backdrop?: Backdrop;
  color?: ButtonProps["color"];
  varient?: ButtonProps["variant"];
}

export const MyPopover: React.FC<MyPopoverProps> = (props) => {
  return (
    <Popover
      placement={props.placement}
      showArrow={props.showArrow}
      backdrop={props.backdrop}
      isOpen={props.isOpen}
      onOpenChange={(isOpen) => props.setIsOpen(isOpen)}
    >
      <PopoverTrigger>
        <Button
          color={props.color}
          variant={props.varient}
          title={props.title}
          isIconOnly={props.text && props.Icon ? false : true}
          className={`flex items-center ${props.text && props.Icon ? "space-x-1" : ""} ${props.className}`}
        >
          {props.text && <p>{props.text}</p>}
          {props.Icon && <props.Icon />}
        </Button>
      </PopoverTrigger>
      <PopoverContent>{props.children}</PopoverContent>
    </Popover>
  );
};
