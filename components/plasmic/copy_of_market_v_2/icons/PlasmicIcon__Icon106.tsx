// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon106IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon106Icon(props: Icon106IconProps) {
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
          "M9 13h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2V9a1 1 0 00-2 0v2H9a1 1 0 000 2zM21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zm-1 18H4V4h16z"
        }
      ></path>
    </svg>
  );
}

export default Icon106Icon;
/* prettier-ignore-end */
