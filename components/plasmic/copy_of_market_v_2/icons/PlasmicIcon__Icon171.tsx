// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon171IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon171Icon(props: Icon171IconProps) {
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

      <path fillRule={"evenodd"} d={"M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"}></path>
    </svg>
  );
}

export default Icon171Icon;
/* prettier-ignore-end */
