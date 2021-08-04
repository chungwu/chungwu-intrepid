// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OrdersIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OrdersIcon(props: OrdersIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
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
          "M9.5 10.5H12a1 1 0 000-2h-1V8a1 1 0 00-2 0v.55a2.5 2.5 0 00.5 4.95h1a.5.5 0 010 1H8a1 1 0 000 2h1v.5a1 1 0 002 0v-.55a2.5 2.5 0 00-.5-4.95h-1a.5.5 0 010-1zM21 12h-3V3a1 1 0 00-.5-.87 1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0A1 1 0 002 3v16a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zM5 20a1 1 0 01-1-1V4.73l2 1.14a1.08 1.08 0 001 0l3-1.72 3 1.72a1.08 1.08 0 001 0l2-1.14V19a3 3 0 00.18 1zm15-1a1 1 0 01-2 0v-5h2z"
        }
      ></path>
    </svg>
  );
}

export default OrdersIcon;
/* prettier-ignore-end */
