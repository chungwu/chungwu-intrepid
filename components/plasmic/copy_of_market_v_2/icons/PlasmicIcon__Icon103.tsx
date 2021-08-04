// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon103IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon103Icon(props: Icon103IconProps) {
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

      <path d={"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}></path>
    </svg>
  );
}

export default Icon103Icon;
/* prettier-ignore-end */
