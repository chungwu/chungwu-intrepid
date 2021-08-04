// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon162IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon162Icon(props: Icon162IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 92 92"}
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
          "M92 23.4c0-4.1-3.3-7.4-7.4-7.4H7.4C3.3 16 0 19.3 0 23.4v45.3c0 4 3.3 7.3 7.4 7.3h77.3c4.1 0 7.4-3.3 7.4-7.4V23.4zm-8 .6v7H8v-7h76zM8 68V43h76v25H8zm68.5-13c0 2.2-1.8 4-4 4h-19c-2.2 0-4-1.8-4-4s1.8-4 4-4h19c2.2 0 4 1.8 4 4z"
        }
      ></path>
    </svg>
  );
}

export default Icon162Icon;
/* prettier-ignore-end */
