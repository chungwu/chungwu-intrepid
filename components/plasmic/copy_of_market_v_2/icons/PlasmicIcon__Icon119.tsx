// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon119IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon119Icon(props: Icon119IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        className={"uim-primary"}
        d={
          "M14.121 17.243a.997.997 0 01-.707-.293l-4.242-4.243a1 1 0 010-1.414l4.242-4.243a1 1 0 011.414 1.414L11.293 12l3.535 3.536a1 1 0 01-.707 1.707z"
        }
      ></path>
    </svg>
  );
}

export default Icon119Icon;
/* prettier-ignore-end */
