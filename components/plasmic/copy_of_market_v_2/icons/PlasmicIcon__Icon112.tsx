// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon112IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon112Icon(props: Icon112IconProps) {
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
          "M13.41 12l6.3-6.29a1 1 0 10-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 00-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 000 1.42 1 1 0 001.42 0l6.29-6.3 6.29 6.3a1 1 0 001.42 0 1 1 0 000-1.42z"
        }
      ></path>
    </svg>
  );
}

export default Icon112Icon;
/* prettier-ignore-end */
