// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon72IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon72Icon(props: Icon72IconProps) {
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
          "M3.582 14.798l.844-4.92L.85 6.394l4.94-.718L8 1.2l2.21 4.476 4.939.718-3.575 3.484.844 4.92L8 12.475l-4.418 2.323zM8 10.216l1.762.926-.336-1.962 1.425-1.39-1.97-.286L8 5.72l-.881 1.785-1.97.287L6.574 9.18l-.336 1.962L8 10.216z"
        }
      ></path>
    </svg>
  );
}

export default Icon72Icon;
/* prettier-ignore-end */
