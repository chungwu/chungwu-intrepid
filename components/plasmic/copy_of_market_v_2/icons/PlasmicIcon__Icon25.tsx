// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon25Icon(props: Icon25IconProps) {
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
          "M12 1v22m5-18H9.49c-1.94 0-3.5 1.56-3.5 3.5 0 1.93 1.56 3.5 3.5 3.49h5-.01c1.93-.01 3.5 1.56 3.5 3.49 0 1.93-1.57 3.5-3.5 3.5H5.97"
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

export default Icon25Icon;
/* prettier-ignore-end */
