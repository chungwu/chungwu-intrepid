// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon150IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon150Icon(props: Icon150IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
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
        d={
          "M16 14H8a1 1 0 000 2h8a1 1 0 000-2zm0-4h-6a1 1 0 000 2h6a1 1 0 000-2zm4-6h-3V3a1 1 0 00-2 0v1h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H4a1 1 0 00-1 1v14a3 3 0 003 3h12a3 3 0 003-3V5a1 1 0 00-1-1zm-1 15a1 1 0 01-1 1H6a1 1 0 01-1-1V6h2v1a1 1 0 002 0V6h2v1a1 1 0 002 0V6h2v1a1 1 0 002 0V6h2z"
        }
      ></path>
    </svg>
  );
}

export default Icon150Icon;
/* prettier-ignore-end */
