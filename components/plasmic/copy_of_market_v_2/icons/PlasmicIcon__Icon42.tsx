// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon42Icon(props: Icon42IconProps) {
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

        <path
          d={
            "M9.09 9v-.01a2.988 2.988 0 013.82-1.84c1.2.42 2 1.55 2 2.83 0 2-3 3-3 3M12 17h.01"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icon42Icon;
/* prettier-ignore-end */
