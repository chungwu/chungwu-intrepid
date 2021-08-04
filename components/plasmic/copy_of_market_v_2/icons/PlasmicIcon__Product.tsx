// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProductIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProductIcon(props: ProductIconProps) {
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
          "M2.5 8.86l9 5.2a1 1 0 001 0l9-5.2A1 1 0 0022 8a1 1 0 00-.5-.87l-9-5.19a1 1 0 00-1 0l-9 5.19A1 1 0 002 8a1 1 0 00.5.86zM12 4l7 4-7 4-7-4zm8.5 7.17L12 16l-8.5-4.87a1 1 0 00-1.37.37 1 1 0 00.37 1.36l9 5.2a1 1 0 001 0l9-5.2a1 1 0 00.37-1.36 1 1 0 00-1.37-.37zm0 4L12 20l-8.5-4.87a1 1 0 00-1.37.37 1 1 0 00.37 1.36l9 5.2a1 1 0 001 0l9-5.2a1 1 0 00.37-1.36 1 1 0 00-1.37-.37z"
        }
      ></path>
    </svg>
  );
}

export default ProductIcon;
/* prettier-ignore-end */
