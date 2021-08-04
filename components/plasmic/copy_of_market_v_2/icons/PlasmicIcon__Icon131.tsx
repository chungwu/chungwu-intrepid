// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon131IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon131Icon(props: Icon131IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
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
          "M9.531 6L4.22 12.375l-.5.594.5.656 11 14 .781 1 .781-1 11-14 .5-.656-.5-.594L22.47 6zm.938 2h3.656l-2.688 4H7.125zm7.406 0h3.656l3.344 4h-4.313zM16 8.844L18.125 12h-4.25zM7.031 14h4.219l2.375 8.406zm6.282 0h5.343L16 23.313zm7.437 0h4.219l-6.594 8.375z"
        }
      ></path>
    </svg>
  );
}

export default Icon131Icon;
/* prettier-ignore-end */
