// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon174IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon174Icon(props: Icon174IconProps) {
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
          "M16.32 14.906l5.387 5.387-1.414 1.414-5.387-5.387a8 8 0 111.414-1.414zM10 16a6 6 0 100-12 6 6 0 000 12z"
        }
      ></path>
    </svg>
  );
}

export default Icon174Icon;
/* prettier-ignore-end */
