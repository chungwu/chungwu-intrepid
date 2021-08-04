// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TiktokIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TiktokIcon(props: TiktokIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-32 0 512 512"}
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
          "M432.734 112.465c-53.742 0-97.464-43.723-97.464-97.465 0-8.285-6.715-15-15-15h-80.336c-8.282 0-15 6.715-15 15v329.367c0 31.594-25.707 57.297-57.301 57.297s-57.297-25.703-57.297-57.297c0-31.597 25.703-57.3 57.297-57.3 8.285 0 15-6.715 15-15V191.73c0-8.28-6.715-15-15-15C75.199 176.73 0 251.934 0 344.367 0 436.801 75.2 512 167.633 512S335.27 436.8 335.27 344.367V198.574c29.851 15.918 63.074 24.227 97.464 24.227 8.286 0 15-6.715 15-15v-80.336c0-8.281-6.714-15-15-15zm0 0"
        }
      ></path>
    </svg>
  );
}

export default TiktokIcon;
/* prettier-ignore-end */
