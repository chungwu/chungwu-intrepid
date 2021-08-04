// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
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
            "M21.21 15.89h-.01c-2.16 5.08-8.02 7.46-13.11 5.31C3 19.04.62 13.18 2.77 8.09a9.998 9.998 0 015.21-5.28"
          }
        ></path>

        <path d={"M22 12v0c0-5.53-4.48-10-10-10v10z"}></path>
      </g>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
