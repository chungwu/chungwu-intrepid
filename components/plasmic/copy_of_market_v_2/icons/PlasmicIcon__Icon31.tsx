// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon31Icon(props: Icon31IconProps) {
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
        <path
          d={
            "M6 2L3 6v14h0c0 1.1.89 1.99 2 1.99h14l-.01-.001c1.1 0 2-.9 2-2v-14l-3-4zM3 6h18"
          }
        ></path>

        <path d={"M16 10v0c0 2.2-1.8 4-4 4-2.21 0-4-1.8-4-4"}></path>
      </g>
    </svg>
  );
}

export default Icon31Icon;
/* prettier-ignore-end */
