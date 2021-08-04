// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon99IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon99Icon(props: Icon99IconProps) {
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
        "feather feather-plus-square"
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

      <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"2"} ry={"2"}></rect>

      <path d={"M12 8v8m-4-4h8"}></path>
    </svg>
  );
}

export default Icon99Icon;
/* prettier-ignore-end */
