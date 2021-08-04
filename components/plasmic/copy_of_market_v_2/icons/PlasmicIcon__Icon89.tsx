// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon89IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon89Icon(props: Icon89IconProps) {
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
          "M20.16 5A6.29 6.29 0 0012 4.36a6.27 6.27 0 00-8.16 9.48l6.21 6.22a2.78 2.78 0 003.9 0l6.21-6.22a6.27 6.27 0 000-8.84zm-1.41 7.46l-6.21 6.21a.76.76 0 01-1.08 0l-6.21-6.24a4.29 4.29 0 010-6 4.27 4.27 0 016 0 1 1 0 001.42 0 4.27 4.27 0 016 0 4.29 4.29 0 01.08 6z"
        }
      ></path>
    </svg>
  );
}

export default Icon89Icon;
/* prettier-ignore-end */
