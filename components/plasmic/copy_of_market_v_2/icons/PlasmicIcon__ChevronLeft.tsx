// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronLeftIcon(props: ChevronLeftIconProps) {
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

      <path
        fillRule={"evenodd"}
        d={
          "M11.707 13.293l-1.414 1.414L3.586 8l6.707-6.707 1.414 1.414L6.414 8z"
        }
      ></path>
    </svg>
  );
}

export default ChevronLeftIcon;
/* prettier-ignore-end */
