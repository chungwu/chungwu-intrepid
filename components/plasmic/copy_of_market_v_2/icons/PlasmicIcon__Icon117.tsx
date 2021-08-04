// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon117IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon117Icon(props: Icon117IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
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
          "M20.16 5A6.29 6.29 0 0012 4.41a6.27 6.27 0 00-8.16 9.48l6 6.05a3 3 0 004.24 0l6-6.05A6.27 6.27 0 0020.16 5zm-1.41 7.46l-6 6a1 1 0 01-1.42 0l-6-6a4.29 4.29 0 010-6 4.27 4.27 0 016 0 1 1 0 001.42 0 4.27 4.27 0 016 6z"
        }
      ></path>
    </svg>
  );
}

export default Icon117Icon;
/* prettier-ignore-end */
