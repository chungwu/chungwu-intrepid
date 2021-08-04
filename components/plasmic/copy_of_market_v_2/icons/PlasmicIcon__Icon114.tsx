// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon114IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon114Icon(props: Icon114IconProps) {
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

      <path d={"M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"}></path>
    </svg>
  );
}

export default Icon114Icon;
/* prettier-ignore-end */
