// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon93IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon93Icon(props: Icon93IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
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
          "M13 4v6.805L7.107 7.402l-3 5.198L10 16l-5.893 3.4 3 5.198L13 21.195V28h6v-6.805l5.893 3.403 3-5.198L22 16l5.893-3.4-3-5.198L19 10.805V4h-6zm2 2h2v8.27l7.16-4.135 1 1.73L18 16l7.16 4.135-1 1.73L17 17.73V26h-2v-8.27l-7.16 4.135-1-1.73L14 16l-7.16-4.135 1-1.73L15 14.27V6z"
        }
      ></path>
    </svg>
  );
}

export default Icon93Icon;
/* prettier-ignore-end */
