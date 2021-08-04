// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon118IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon118Icon(props: Icon118IconProps) {
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
          "M15.54 11.29L9.88 5.64a1 1 0 00-1.42 0 1 1 0 000 1.41l4.95 5L8.46 17a1 1 0 000 1.41 1 1 0 00.71.3 1 1 0 00.71-.3l5.66-5.65a1 1 0 000-1.47z"
        }
      ></path>
    </svg>
  );
}

export default Icon118Icon;
/* prettier-ignore-end */
