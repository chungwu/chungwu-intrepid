// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon85IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon85Icon(props: Icon85IconProps) {
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
          "M14.81 12.28a3.73 3.73 0 001-2.5 3.78 3.78 0 00-7.56 0 3.73 3.73 0 001 2.5A5.94 5.94 0 006 16.89a1 1 0 002 .22 4 4 0 017.94 0A1 1 0 0017 18h.11a1 1 0 00.88-1.1 5.94 5.94 0 00-3.18-4.62zM12 11.56a1.78 1.78 0 111.78-1.78A1.78 1.78 0 0112 11.56zM19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1z"
        }
      ></path>
    </svg>
  );
}

export default Icon85Icon;
/* prettier-ignore-end */
