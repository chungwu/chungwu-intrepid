// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MinusBoldIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MinusBoldIcon(props: MinusBoldIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
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

      <path fillRule={"evenodd"} d={"M2 9V7h12v2z"}></path>
    </svg>
  );
}

export default MinusBoldIcon;
/* prettier-ignore-end */
