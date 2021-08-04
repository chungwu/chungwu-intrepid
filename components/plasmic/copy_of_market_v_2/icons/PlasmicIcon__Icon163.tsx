// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon163IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon163Icon(props: Icon163IconProps) {
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
        fillRule={"evenodd"}
        d={
          "M21 8V5H3v3h18zm0 2H3v7h18v-7zM2.818 3h18.364C22.186 3 23 3.895 23 5v12c0 1.105-.814 2-1.818 2H2.818C1.814 19 1 18.105 1 17V5c0-1.105.814-2 1.818-2z"
        }
      ></path>
    </svg>
  );
}

export default Icon163Icon;
/* prettier-ignore-end */
