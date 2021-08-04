// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon176IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon176Icon(props: Icon176IconProps) {
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
          "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm0-3.002a1 1 0 110-2 1 1 0 010 2zm-.997-12h2v8h-2v-8z"
        }
      ></path>
    </svg>
  );
}

export default Icon176Icon;
/* prettier-ignore-end */
