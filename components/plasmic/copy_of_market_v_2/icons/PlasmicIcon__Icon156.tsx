// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon156IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon156Icon(props: Icon156IconProps) {
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
          "M88 49c-1 0-2-.4-2.8-1.1L46 9.6 6.8 47.9c-1.6 1.5-4.1 1.5-5.7-.1-1.5-1.6-1.5-4.1.1-5.7l42-41c1.6-1.5 4-1.5 5.6 0l42 41c1.6 1.5 1.6 4.1.1 5.7-.8.8-1.9 1.2-2.9 1.2zm-8.8 39V48.9c0-2.2-1.8-4-4-4s-4 1.8-4 4V84H58.7V62.6c0-2.9-2.4-5.3-5.3-5.3H38.6c-2.9 0-5.3 2.4-5.3 5.3V84H20.8V48.9c0-2.2-1.8-4-4-4s-4 1.8-4 4V88c0 2.2 1.8 4 4 4h20.5c2.2 0 4-1.8 4-4V65.3h9.5V88c0 2.2 1.8 4 4 4h20.5c2.2 0 3.9-1.8 3.9-4z"
        }
      ></path>
    </svg>
  );
}

export default Icon156Icon;
/* prettier-ignore-end */
