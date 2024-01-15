/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import styles from "./Container.module.css";
import { Handle } from "./Handle";

export interface ContainerProps {
  children: React.ReactNode;
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      columns = 1,
      handleProps,
      horizontal,
      hover,

      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      ...props
    }: ContainerProps,
    ref,
  ) => {
    return (
      <button {...props} ref={ref as any} style={style}>
        <div className={styles.Header}>
          {label}
          <div>
            <Handle {...handleProps} />
          </div>
        </div>
        <ul className="flex">{children}</ul>
      </button>
    );
  },
);
