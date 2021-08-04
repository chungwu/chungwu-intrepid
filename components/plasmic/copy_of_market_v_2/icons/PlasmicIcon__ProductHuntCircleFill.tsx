// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProductHuntCircleFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProductHuntCircleFillIcon(
  props: ProductHuntCircleFillIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
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
          "M27.2 28.8h-6.8V36h-4.8V12h11.6a8.4 8.4 0 018.4 8.4 8.4 8.4 0 01-8.4 8.4M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24c13.254 0 24-10.745 24-24S37.254 0 24 0m3.2 16.8h-6.8V24h6.8a3.6 3.6 0 100-7.2"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ProductHuntCircleFillIcon;
/* prettier-ignore-end */
