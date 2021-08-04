// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookmarkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookmarkIcon(props: BookmarkIconProps) {
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
          "M17 19.382V17h2v5.618l-7-3.5-7 3.5V4a2 2 0 012-2h10a2 2 0 012 2v1h-2V4H7v15.382l5-2.5 5 2.5zM18 10V8h2v2h2v2h-2v2h-2v-2h-2v-2h2z"
        }
      ></path>
    </svg>
  );
}

export default BookmarkIcon;
/* prettier-ignore-end */
