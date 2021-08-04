// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitchIcon(props: TwitchIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
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
          "M80 32l-32 80v304h96v64h64l64-64h80l112-112V32zm336 256l-64 64h-96l-64 64v-64h-80V80h304z"
        }
      ></path>

      <path d={"M320 143h48v129h-48zm-112 0h48v129h-48z"}></path>
    </svg>
  );
}

export default TwitchIcon;
/* prettier-ignore-end */
