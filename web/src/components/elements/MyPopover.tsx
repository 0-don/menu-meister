import { Backdrop, OverlayPlacement } from "@/utils/types";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { IconType } from "@react-icons/all-files";
import React from "react";

interface MyPopoverProps {
  ref: React.RefObject<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  text?: string;
  Icon?: IconType;
  placement?: OverlayPlacement;
  showArrow?: boolean;
  backdrop?: Backdrop;
}

export const MyPopover: React.FC<MyPopoverProps> = (props) => {
  return (
    <Popover
      placement={props.placement}
      showArrow={props.showArrow}
      backdrop={props.backdrop}
    >
      <PopoverTrigger>
        <Button
          ref={props.ref}
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
