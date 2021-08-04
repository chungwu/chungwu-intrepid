// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon26Icon(props: Icon26IconProps) {
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

      <path
        d={
          "M19 5L5 19M6.5 4a2.5 2.5 0 100 5 2.5 2.5 0 100-5zm11 11a2.5 2.5 0 100 5 2.5 2.5 0 100-5z"
        }
        strokeLinecap={"round"}
        strokeWidth={"2"}
        stroke={"currentColor"}
        fill={"none"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */
