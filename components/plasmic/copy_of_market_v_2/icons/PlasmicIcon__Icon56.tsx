// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon56Icon(props: Icon56IconProps) {
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
        "feather feather-user"
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

      <path d={"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}></path>

      <circle cx={"12"} cy={"7"} r={"4"}></circle>
    </svg>
  );
}

export default Icon56Icon;
/* prettier-ignore-end */
