// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon32Icon(props: Icon32IconProps) {
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
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M23 12h0c-.58-6.08-5.98-10.53-12.05-9.95C5.67 2.55 1.5 6.72 1 12zm-5 7v0c0 1.65-1.35 3-3 3-1.66 0-3-1.35-3-3v-7"
        }
      ></path>
    </svg>
  );
}

export default Icon32Icon;
/* prettier-ignore-end */
