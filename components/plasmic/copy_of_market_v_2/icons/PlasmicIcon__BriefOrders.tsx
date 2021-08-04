// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BriefOrdersIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BriefOrdersIcon(props: BriefOrdersIconProps) {
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
          "M8 8H4v5h16V8H8zm0-2V5a2 2 0 012-2h4a2 2 0 012 2v1h4a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4zm3 9H4v4h16v-4h-7v1h-2v-1zm3-9V5h-4v1h4z"
        }
      ></path>
    </svg>
  );
}

export default BriefOrdersIcon;
/* prettier-ignore-end */
