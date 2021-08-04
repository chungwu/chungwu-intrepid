// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
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

      <path fill={"none"} d={"M0 0h20v20H0z"}></path>

      <path
        d={
          "M18 10l-1.77-2.03.25-2.69-2.63-.6-1.37-2.32L10 3.43 7.53 2.36 6.15 4.68l-2.62.6.25 2.69L2 10l1.77 2.03-.25 2.69 2.63.6 1.37 2.32L10 16.56l2.47 1.07 1.37-2.32 2.63-.6-.25-2.69L18 10zm-9.41 3.07l-2.12-2.12.71-.71 1.41 1.41 4.24-4.24.71.71-4.95 4.95z"
        }
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
