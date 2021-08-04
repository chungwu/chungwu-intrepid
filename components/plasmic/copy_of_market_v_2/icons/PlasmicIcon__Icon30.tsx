// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon30Icon(props: Icon30IconProps) {
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

        <path d={"M12 6a6 6 0 100 12 6 6 0 100-12z"}></path>

        <path d={"M12 10a2 2 0 100 4 2 2 0 100-4z"}></path>
      </g>
    </svg>
  );
}

export default Icon30Icon;
/* prettier-ignore-end */
