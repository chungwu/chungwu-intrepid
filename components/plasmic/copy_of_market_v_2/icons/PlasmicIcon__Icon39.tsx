// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon39Icon(props: Icon39IconProps) {
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
          d={"M12 2a9 3 0 100 6 9 3 0 100-6zm9 10c0 1.66-4 3-9 3s-9-1.34-9-3"}
        ></path>

        <path d={"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}></path>
      </g>
    </svg>
  );
}

export default Icon39Icon;
/* prettier-ignore-end */
