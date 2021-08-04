// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon58Icon(props: Icon58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"1.5"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "feather feather-lock"
      )}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"3"}
        y={"11"}
        width={"18"}
        height={"11"}
        rx={"2"}
        ry={"2"}
      ></rect>

      <path d={"M7 11V7a5 5 0 0110 0v4"}></path>
    </svg>
  );
}

export default Icon58Icon;
/* prettier-ignore-end */
