// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        strokeLinecap={"round"}
        strokeWidth={"2"}
        stroke={"currentColor"}
        fill={"none"}
        strokeLinejoin={"round"}
      >
        <rect width={"20"} height={"20"} x={"2"} y={"2"} rx={"5"}></rect>

        <path
          d={
            "M16 11.37h0a4.01 4.01 0 01-3.38 4.54 4.014 4.014 0 01-4.55-3.38 4 4 0 014.54-4.55h0c1.74.25 3.11 1.62 3.36 3.37zm1.5-4.87h.01"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
