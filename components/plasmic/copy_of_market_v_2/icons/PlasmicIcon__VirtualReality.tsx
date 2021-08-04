// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VirtualRealityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VirtualRealityIcon(props: VirtualRealityIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 128 128"}
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
          "M101.9 32H88v8h10.1l9.6 12H28.3l9.6-12H48v-8H34.1L16 54.6V64H8v20h8v8c0 4.4 3.6 8 8 8h39.1l3.8-15.1c.1-.6.6-.9 1.1-.9.5 0 1 .3 1.1.9l3.8 15.1H112c4.4 0 8-3.6 8-8V54.6L101.9 32zM16 72h22c1.1 0 2 .9 2 2s-.9 2-2 2H16v-4zm63.1 20l-2.3-9.1c-1-4.1-4.7-6.9-8.9-6.9s-7.8 2.8-8.9 6.9L56.9 92H24v-8h14c5.5 0 10-4.5 10-10s-4.5-10-10-10H24v-4h88v32H79.1z"
        }
      ></path>

      <path d={"M84 84h8c0-6.6 5.4-12 12-12v-8c-11 0-20 9-20 20z"}></path>

      <path d={"M96 84h8v-8c-4.4 0-8 3.6-8 8z"}></path>
    </svg>
  );
}

export default VirtualRealityIcon;
/* prettier-ignore-end */
