// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon142IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon142Icon(props: Icon142IconProps) {
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
          "M614 870v359h1425v409H614v359L0 1434zm820 308V819H0V410h1434V51l614 563z"
        }
      ></path>
    </svg>
  );
}

export default Icon142Icon;
/* prettier-ignore-end */
