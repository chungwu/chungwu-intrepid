// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MastercardsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MastercardsvgIcon(props: MastercardsvgIconProps) {
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
        d={
          "M11.343 18.031c.058.049.12.098.181.146a7.391 7.391 0 01-4.107 1.238 7.416 7.416 0 114.104-13.593c-.06.051-.12.098-.165.15A7.963 7.963 0 008.595 12a7.996 7.996 0 002.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15A7.963 7.963 0 0115.405 12a8.002 8.002 0 01-2.748 6.031c-.058.049-.12.098-.181.146a7.386 7.386 0 004.107 1.238A7.414 7.414 0 0024 12a7.417 7.417 0 00-7.416-7.416zM12 6.174A7.388 7.388 0 009.169 12 7.386 7.386 0 0012 17.827 7.39 7.39 0 0014.831 12 7.388 7.388 0 0012 6.174z"
        }
      ></path>
    </svg>
  );
}

export default MastercardsvgIcon;
/* prettier-ignore-end */
