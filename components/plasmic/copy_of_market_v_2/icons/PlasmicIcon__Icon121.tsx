// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon121IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon121Icon(props: Icon121IconProps) {
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
        className={"uim-tertiary"}
        d={
          "M14 12h-4a1 1 0 01-1-1V9a3 3 0 016 0v2a1 1 0 01-1 1zm-3-2h2V9a1 1 0 00-2 0z"
        }
      ></path>

      <path
        className={"uim-primary"}
        d={
          "M21 10a1 1 0 01-1-1V4h-5a1 1 0 010-2h6a1 1 0 011 1v6a1 1 0 01-1 1zM3 10a1 1 0 01-1-1V3a1 1 0 011-1h6a1 1 0 010 2H4v5a1 1 0 01-1 1zm6 12H3a1 1 0 01-1-1v-6a1 1 0 012 0v5h5a1 1 0 010 2zm12 0h-6a1 1 0 010-2h5v-5a1 1 0 012 0v6a1 1 0 01-1 1z"
        }
      ></path>

      <rect
        width={"10"}
        height={"8"}
        x={"7"}
        y={"10"}
        className={"uim-tertiary"}
        rx={"2"}
      ></rect>
    </svg>
  );
}

export default Icon121Icon;
/* prettier-ignore-end */
