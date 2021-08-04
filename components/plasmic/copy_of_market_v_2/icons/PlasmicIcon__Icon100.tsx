// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon100IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon100Icon(props: Icon100IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
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
        fill={"currentColor"}
        d={
          "M18 42c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2H18v2zm6-38c-7.73 0-14 6.27-14 14 0 4.76 2.38 8.95 6 11.48V34c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.52c3.62-2.53 6-6.72 6-11.48 0-7.73-6.27-14-14-14zm5.71 22.2L28 27.39V32h-8v-4.6l-1.71-1.19a10.01 10.01 0 01-4.29-8.2c0-5.51 4.49-10 10-10s10 4.49 10 10c0 3.25-1.6 6.31-4.29 8.19z"
        }
      ></path>
    </svg>
  );
}

export default Icon100Icon;
/* prettier-ignore-end */
