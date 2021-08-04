// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
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

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M11 14H9a9 9 0 019-9v2c-3.87 0-7 3.13-7 7zm7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3zM7 4c0-1.11-.89-2-2-2-1.11 0-2 .89-2 2 0 1.11.89 2 2 2 1.11 0 2-.89 2-2zm4.45.5h-2A2.99 2.99 0 016.5 7H2v4h6V8.74a4.97 4.97 0 003.45-4.24zM19 17c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2 .89-2 2 0 1.11.89 2 2 2zm-1.5 1a2.99 2.99 0 01-2.95-2.5h-2A4.97 4.97 0 0016 19.74V22h6v-4h-4.5z"
        }
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
