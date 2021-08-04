// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon67Icon(props: Icon67IconProps) {
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
          "M24 34c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm12-18h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zm-18.2-4c0-3.42 2.78-6.2 6.2-6.2s6.2 2.78 6.2 6.2v4H17.8v-4zM36 40H12V20h24v20z"
        }
      ></path>
    </svg>
  );
}

export default Icon67Icon;
/* prettier-ignore-end */
