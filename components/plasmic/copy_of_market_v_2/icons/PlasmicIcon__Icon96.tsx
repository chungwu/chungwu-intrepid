// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon96IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon96Icon(props: Icon96IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
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

      <path d={"M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z"}></path>
    </svg>
  );
}

export default Icon96Icon;
/* prettier-ignore-end */
