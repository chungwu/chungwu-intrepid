// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon166IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon166Icon(props: Icon166IconProps) {
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
          "M11 22H9a2 2 0 01-2-2H3v-5.5l4-3V8c0-3.156 1.914-7 5-7 3.086 0 5 3.844 5 7v3.5l4 3V20h-4a2 2 0 01-2 2h-2v1h-2v-1zm2-2h2V8c0-2.193-1.397-5-3-5S9 5.807 9 8v12h2v-6h2v6zm-6-6l-2 1.5V18h2v-4zm10 0v4h2v-2.5L17 14zm-5-3a2 2 0 110-4 2 2 0 010 4z"
        }
      ></path>
    </svg>
  );
}

export default Icon166Icon;
/* prettier-ignore-end */
