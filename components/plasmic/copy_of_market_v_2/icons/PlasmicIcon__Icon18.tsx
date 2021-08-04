// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M20.84 4.61h0a5.507 5.507 0 00-7.78-.01h-.01l-1.07 1.06-1.06-1.06h0c-2.15-2.15-5.64-2.15-7.78-.01-2.15 2.14-2.15 5.63-.01 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06v-.01a5.517 5.517 0 000-7.78l-.01-.01z"
        }
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
