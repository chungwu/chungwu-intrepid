// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CartProductsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CartProductsvgIcon(props: CartProductsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        data-name={"253-Shopping Cart Product"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      >
        <path d={"M10 6H5M0 2h5v20h22l4-6v-3M5 22v3a1 1 0 001 1h22"}></path>

        <circle cx={"11"} cy={"28"} r={"2"}></circle>

        <circle cx={"22"} cy={"28"} r={"2"}></circle>

        <path d={"M15 2h12v10H15z"}></path>

        <path d={"M19 2v5h4V2"}></path>
      </g>
    </svg>
  );
}

export default CartProductsvgIcon;
/* prettier-ignore-end */
