// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeIcon(props: HomeIconProps) {
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
          "M21.66 10.25l-9-8a1 1 0 00-1.32 0l-9 8a1 1 0 00-.27 1.11A1 1 0 003 12h1v9a1 1 0 001 1h14a1 1 0 001-1v-9h1a1 1 0 00.93-.64 1 1 0 00-.27-1.11zM13 20h-2v-3a1 1 0 012 0zm5 0h-3v-3a3 3 0 00-6 0v3H6v-8h12zM5.63 10L12 4.34 18.37 10z"
        }
      ></path>
    </svg>
  );
}

export default HomeIcon;
/* prettier-ignore-end */
