// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareIcon(props: ShareIconProps) {
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
          "M21 11v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9h2v9h14v-9h2zm-8-5.586V16h-2V5.414L7.707 8.707 6.293 7.293 12 1.586l5.707 5.707-1.414 1.414L13 5.414z"
        }
      ></path>
    </svg>
  );
}

export default ShareIcon;
/* prettier-ignore-end */
