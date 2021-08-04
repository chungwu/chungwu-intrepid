// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HangersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HangersvgIcon(props: HangersvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 28"}
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
          "M31.278 20.68L17.25 14.14v-1.586a5.948 5.948 0 004.688-5.805A5.944 5.944 0 0016 .812a5.944 5.944 0 00-5.938 5.938 1.25 1.25 0 102.5 0A3.441 3.441 0 0116 3.312a3.441 3.441 0 013.438 3.438A3.441 3.441 0 0116 10.188c-.69 0-1.25.56-1.25 1.25v2.703L.722 20.68A1.25 1.25 0 000 21.813v4.125c0 .69.56 1.25 1.25 1.25h29.5c.69 0 1.25-.56 1.25-1.25v-4.125a1.25 1.25 0 00-.722-1.133zM29.5 24.688h-27v-2.079L16 16.317l13.5 6.292v2.078z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HangersvgIcon;
/* prettier-ignore-end */
