// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon116IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon116Icon(props: Icon116IconProps) {
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
          "M20.16 4.61A6.27 6.27 0 0012 4a6.27 6.27 0 00-8.16 9.48l7.45 7.45a1 1 0 001.42 0l7.45-7.45a6.27 6.27 0 000-8.87zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 013-7.3 4.25 4.25 0 013 1.25 1 1 0 001.42 0 4.27 4.27 0 016 6.05z"
        }
      ></path>
    </svg>
  );
}

export default Icon116Icon;
/* prettier-ignore-end */
