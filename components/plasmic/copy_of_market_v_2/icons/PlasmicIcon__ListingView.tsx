// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListingViewIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListingViewIcon(props: ListingViewIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 2048 2048"}
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
          "M1792 1024h128v896h-128v-896zm128-640h-128V0h128v384zm-64 128q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15-75-15-61-41-41-61-15-75 15-75 41-61 61-41 75-15zM0 512h1408v896H0V512zm128 768h1152V640H128v640zM1280 0h128v384H0V0h128v256h1152V0zM0 1536h1408v384h-128v-256H128v256H0v-384z"
        }
      ></path>
    </svg>
  );
}

export default ListingViewIcon;
/* prettier-ignore-end */
