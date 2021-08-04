// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserIcon(props: UserIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
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
        d={
          "M12 2a10 10 0 00-7.35 16.76 10 10 0 0014.7 0A10 10 0 0012 2zm0 18a8 8 0 01-5.55-2.25 6 6 0 0111.1 0A8 8 0 0112 20zm-2-10a2 2 0 112 2 2 2 0 01-2-2zm8.91 6A8 8 0 0015 12.62a4 4 0 10-6 0A8 8 0 005.09 16 7.92 7.92 0 014 12a8 8 0 0116 0 7.92 7.92 0 01-1.09 4z"
        }
      ></path>
    </svg>
  );
}

export default UserIcon;
/* prettier-ignore-end */
