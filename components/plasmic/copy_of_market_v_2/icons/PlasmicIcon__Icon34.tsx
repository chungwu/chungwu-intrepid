// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon34Icon(props: Icon34IconProps) {
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
        <path d={"M12 2a10 10 0 100 20 10 10 0 100-20z"}></path>

        <path d={"M10 8l6 4-6 4V8z"}></path>
      </g>
    </svg>
  );
}

export default Icon34Icon;
/* prettier-ignore-end */
