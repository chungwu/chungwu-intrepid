// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CouponIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CouponIcon(props: CouponIconProps) {
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
          "M15 6a1 1 0 01-2 0H3v2c1.241.93 2 2.4 2 4s-.759 3.07-2 4v2h10a1 1 0 012 0h6v-2c-1.241-.93-2-2.4-2-4s.759-3.07 2-4V6h-6zm8 12a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.112l.5-.289A2.998 2.998 0 003 12a2.998 2.998 0 00-1.5-2.6L1 9.113V6a2 2 0 012-2h18a2 2 0 012 2v3.112l-.5.289a3.001 3.001 0 000 5.199l.5.288V18zm-9-2a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2zm0-3a1 1 0 110-2 1 1 0 010 2z"
        }
      ></path>
    </svg>
  );
}

export default CouponIcon;
/* prettier-ignore-end */
