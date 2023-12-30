/* eslint-disable react/display-name */
import classNames from "classnames";
import { CSSProperties, forwardRef, HTMLAttributes } from "react";
import styles from "./TreeItem.module.css";

export interface TreeItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, "id"> {
  depth: number;
  handleProps?: any;
  indentationWidth: number;
  value: string;
  wrapperRef?(node: HTMLLIElement): void;
}

export const TreeItem = forwardRef<HTMLDivElement, TreeItemProps>(
  ({ depth, handleProps, indentationWidth, style, value, wrapperRef }, ref) => {
    return (
      <li
        className={classNames(styles.Wrapper, styles.ghost)}
        ref={wrapperRef}
        style={
          {
            "--spacing": `${indentationWidth * depth}px`,
          } as CSSProperties
        }
      >
        <div
          className={styles.TreeItem}
          ref={ref}
          style={style}
          {...handleProps}
        >
          <span>{value}</span>
        </div>
      </li>
    );
  },
);
