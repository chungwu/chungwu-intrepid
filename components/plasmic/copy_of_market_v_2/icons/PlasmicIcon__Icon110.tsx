// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon110IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon110Icon(props: Icon110IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
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
          "M14.72 8.79l-4.29 4.3-1.65-1.65a1 1 0 10-1.41 1.41l2.35 2.36a1 1 0 00.71.29 1 1 0 00.7-.29l5-5a1 1 0 000-1.42 1 1 0 00-1.41 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        }
      ></path>
    </svg>
  );
}

export default Icon110Icon;
/* prettier-ignore-end */
