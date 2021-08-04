// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon137IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon137Icon(props: Icon137IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 2048 2048"}
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
          "M1416 1254l248 794-640-492-640 492 248-794L0 768h784L1024 0l240 768h784z"
        }
      ></path>
    </svg>
  );
}

export default Icon137Icon;
/* prettier-ignore-end */
