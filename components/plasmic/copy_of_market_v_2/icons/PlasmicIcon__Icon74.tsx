// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon74IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon74Icon(props: Icon74IconProps) {
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
          "M19 6h-3V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v1H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3zm-9-1h4v1h-4zm10 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-5.61L8.68 14A1.19 1.19 0 009 14h6a1.19 1.19 0 00.32-.05L20 12.39zm0-7.72L14.84 12H9.16L4 10.28V9a1 1 0 011-1h14a1 1 0 011 1z"
        }
      ></path>
    </svg>
  );
}

export default Icon74Icon;
/* prettier-ignore-end */
