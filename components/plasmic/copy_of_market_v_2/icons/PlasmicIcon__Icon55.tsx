// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon55Icon(props: Icon55IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M38 4H10C7.79 4 6 5.79 6 8v28c0 2.21 1.79 4 4 4h8l6 6 6-6h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM27.75 25.75L24 34l-3.75-8.25L12 22l8.25-3.75L24 10l3.75 8.25L36 22l-8.25 3.75z"
        }
      ></path>
    </svg>
  );
}

export default Icon55Icon;
/* prettier-ignore-end */
