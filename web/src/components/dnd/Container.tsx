/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

export interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  handleProps?: React.HTMLAttributes<any>;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, handleProps, style }: ContainerProps, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={`max-content duration-350 m-2.5 box-border flex min-h-[200px] min-w-[350px] appearance-none flex-col overflow-hidden rounded-md border border-[rgba(0,0,0,0.05)] bg-[rgba(246,246,246,1)] text-base outline-none transition-colors ${
          handleProps?.className || ""
        }`}
        {...handleProps}
      >
        <div>asdas</div>
        {children}
      </div>
    );
  },
);
