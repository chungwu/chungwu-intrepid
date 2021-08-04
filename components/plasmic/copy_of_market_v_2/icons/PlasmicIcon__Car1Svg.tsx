// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Car1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Car1SvgIcon(props: Car1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
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
          "M10.91 33.822a1.09 1.09 0 100-2.181 1.09 1.09 0 000 2.181zm26.18 0a1.09 1.09 0 100-2.181 1.09 1.09 0 000 2.181zM24 25.096a1.09 1.09 0 100-2.182 1.09 1.09 0 000 2.182z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M43.636 20.074l-5.454-1.091a5.563 5.563 0 01-2.837-1.527l-5.781-5.782c-1.2-1.2-2.837-1.855-4.582-1.855H14.727c-2.072 0-4.036.982-5.236 2.618l-2.4 3.273c-.327.437-.218 1.2.218 1.527.436.328 1.09.219 1.418-.218l2.4-3.272C12 12.656 13.2 12 14.618 12h10.255c1.2 0 2.29.437 3.054 1.31l5.782 5.781c1.091 1.091 2.4 1.746 3.927 2.073l5.455 1.09c1.527.328 2.618 1.637 2.618 3.164v5.128c0 .654-.436 1.09-1.09 1.09h-2.292c-.545-2.509-2.727-4.363-5.345-4.363s-4.8 1.854-5.345 4.363h-10.91V20.728h9.818c.655 0 1.091-.436 1.091-1.09 0-.655-.436-1.091-1.09-1.091h-9.819v-4.364c0-.654-.436-1.09-1.09-1.09-.655 0-1.091.436-1.091 1.09v4.364H3.273C1.418 18.547 0 19.965 0 21.819v6.546c0 3.054 2.4 5.454 5.455 5.454h.109c.545 2.51 2.727 4.364 5.345 4.364 3.055 0 5.455-2.4 5.455-5.455 0-3.054-2.4-5.454-5.455-5.454-2.618 0-4.8 1.854-5.345 4.363h-.11c-1.854 0-3.272-1.418-3.272-3.272v-6.546c0-.654.436-1.09 1.09-1.09h15.273v12c0 .654.437 1.09 1.091 1.09h12.11c.545 2.51 2.727 4.364 5.345 4.364s4.8-1.855 5.345-4.364h2.291c1.855 0 3.273-1.418 3.273-3.273V25.42c0-2.618-1.855-4.909-4.364-5.345zM10.91 29.456c1.855 0 3.273 1.418 3.273 3.272 0 1.855-1.418 3.273-3.273 3.273-1.854 0-3.273-1.418-3.273-3.273 0-1.854 1.419-3.272 3.273-3.272zM37.091 36c-1.855 0-3.273-1.418-3.273-3.273 0-1.854 1.418-3.272 3.273-3.272 1.854 0 3.273 1.418 3.273 3.272 0 1.855-1.419 3.273-3.273 3.273z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Car1SvgIcon;
/* prettier-ignore-end */
