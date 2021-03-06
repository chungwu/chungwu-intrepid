// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon127IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon127Icon(props: Icon127IconProps) {
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
          "M0 768h128v128H0V768zm256-256h128v384H256V512zm256-384h128v768H512V128zm256 256h128v512H768V384zm384 512h-128V768h128v128zm768 0h-128V768h128v128zM0 1024h128v128H0v-128zm256 0h128v384H256v-384zm256 0h128v768H512v-768zm256 0h128v512H768v-512zm384 128h-128v-128h128v128zm512-256h-128V768h128v128zm-256 0h-128V768h128v128zm192 256q93 0 174.5 35t142.5 96 96 142.5 35 174.5-35 174.5-96 142.5-142.5 96-174.5 35-174.5-35-142.5-96-96-142.5-35-174.5 35-174.5 96-142.5 142.5-96 174.5-35zm-320 448q0 66 25 124.5t68.5 102 102 68.5 124.5 25q47 0 92-13.5t84-39.5l-443-443q-26 39-39.5 84t-13.5 92zm587 176q26-39 39.5-84t13.5-92q0-66-25.5-124t-69-101.5-101.5-69-124-25.5q-47 0-92 13.5t-84 39.5z"
        }
      ></path>
    </svg>
  );
}

export default Icon127Icon;
/* prettier-ignore-end */
