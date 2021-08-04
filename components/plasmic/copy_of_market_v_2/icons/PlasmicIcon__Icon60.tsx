// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon60Icon(props: Icon60IconProps) {
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
          "M17.01 14h-.8l-.27-.27a6.451 6.451 0 001.57-4.23c0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51a4.5 4.5 0 019 0 4.507 4.507 0 01-6.32 4.12L7.71 15.1a6.474 6.474 0 007.52-.67l.27.27v.79l5.01 4.99L22 19l-4.99-5z"
        }
      ></path>
    </svg>
  );
}

export default Icon60Icon;
/* prettier-ignore-end */
