// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronDownBIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronDownBIcon(props: ChevronDownBIconProps) {
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
          "M13.293 4.293l1.414 1.414L8 12.414 1.293 5.707l1.414-1.414L8 9.586z"
        }
      ></path>
    </svg>
  );
}

export default ChevronDownBIcon;
/* prettier-ignore-end */
