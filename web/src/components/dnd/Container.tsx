/* eslint-disable react/display-name */
import classNames from "classnames";
import React, { forwardRef } from "react";
import styles from "./Container.module.css";
import { Handle } from "./Handle";

export interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  handleProps?: React.HTMLAttributes<any>;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, handleProps, style, ...props }: ContainerProps, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        style={style}
        className={classNames(styles.Container)}
      >
        <Handle {...handleProps} />
        {children}
      </div>
    );
  },
);
