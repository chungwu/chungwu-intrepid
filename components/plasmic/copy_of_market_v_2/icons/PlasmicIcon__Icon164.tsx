// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon164IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon164Icon(props: Icon164IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
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

      <rect
        x={"48"}
        y={"96"}
        width={"416"}
        height={"320"}
        rx={"56"}
        ry={"56"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"32"}
      ></rect>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"60"}
        d={"M48 192h416M128 300h48v20h-48z"}
      ></path>
    </svg>
  );
}

export default Icon164Icon;
/* prettier-ignore-end */
