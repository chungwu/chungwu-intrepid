// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon104IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon104Icon(props: Icon104IconProps) {
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

      <path
        d={"M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z"}
      ></path>
    </svg>
  );
}

export default Icon104Icon;
/* prettier-ignore-end */
