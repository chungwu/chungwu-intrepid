// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon61IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon61Icon(props: Icon61IconProps) {
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
        "feather feather-target"
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

      <circle cx={"12"} cy={"12"} r={"10"}></circle>

      <circle cx={"12"} cy={"12"} r={"6"}></circle>

      <circle cx={"12"} cy={"12"} r={"2"}></circle>
    </svg>
  );
}

export default Icon61Icon;
/* prettier-ignore-end */
