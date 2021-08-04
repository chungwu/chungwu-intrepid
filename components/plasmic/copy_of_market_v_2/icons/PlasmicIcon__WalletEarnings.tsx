// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WalletEarningsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WalletEarningsIcon(props: WalletEarningsIconProps) {
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
          "M18 5h2a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2h.027A2 2 0 012 18.674V6.754a2 2 0 011.45-1.923l12-3.428A2 2 0 0118 3.326V5zm0 2v8.246a2 2 0 01-1.45 1.923L10.14 19H20V7h-2zM4 6.754v11.92l12-3.428V3.326L4 6.754zM18 11V9h2v2h-2zm-5-1a1 1 0 110-2 1 1 0 010 2z"
        }
      ></path>
    </svg>
  );
}

export default WalletEarningsIcon;
/* prettier-ignore-end */
