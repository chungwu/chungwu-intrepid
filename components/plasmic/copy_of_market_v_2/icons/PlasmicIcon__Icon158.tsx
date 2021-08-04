// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon158IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon158Icon(props: Icon158IconProps) {
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
          "M21.71 9.29l-4-4a1 1 0 00-1.42 1.42L18.59 9H7a1 1 0 000 2h14a1 1 0 00.92-.62 1 1 0 00-.21-1.09zM17 13H3a1 1 0 00-.92.62 1 1 0 00.21 1.09l4 4a1 1 0 001.42 0 1 1 0 000-1.42L5.41 15H17a1 1 0 000-2z"
        }
      ></path>
    </svg>
  );
}

export default Icon158Icon;
/* prettier-ignore-end */
