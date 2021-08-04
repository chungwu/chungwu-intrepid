// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Beauty3SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Beauty3SvgIcon(props: Beauty3SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
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
          "M7.025.434l-4 3.334V6h-1v9h5V.434zM8.428 1l.105.588.492 2.783V15h4V4.543L13.615 1H8.428zM9.62 2h2.813l-.332 2H9.975L9.62 2zm-3.596.568V4H4.307l1.718-1.432zM4.025 5h2v1h-2V5zm6 0h2v1h-2V5zm-7 2h3v1h-3V7zm7 0h2v7h-2V7zm-7 2h3v5h-3V9z"
        }
        color={"#000"}
        fontFamily={"sans-serif"}
        fontWeight={"400"}
        overflow={"visible"}
        style={{
          lineHeight: "normal",
          textIndent: "0",
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: 'normal"',
        }}
      ></path>
    </svg>
  );
}

export default Beauty3SvgIcon;
/* prettier-ignore-end */
