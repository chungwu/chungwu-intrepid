// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProfileViewIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProfileViewIcon(props: ProfileViewIconProps) {
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
          "M16 4c-2.2 0-4 1.8-4 4 0 1.113.477 2.117 1.219 2.844A5.036 5.036 0 0011 15v4.625l2 1V25h6v-4.375l2-1V15a5.036 5.036 0 00-2.219-4.156C19.523 10.117 20 9.114 20 8c0-2.2-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm0 6c1.668 0 3 1.332 3 3v3.375l-2 1V23h-2v-3.625l-2-1V15c0-1.668 1.332-3 3-3zm-7 6.875c-2.918.816-5 2.2-5 4.125 0 3.281 6.035 5 12 5s12-1.719 12-5c0-1.926-2.082-3.309-5-4.125v2.094c1.902.613 3 1.406 3 2.031 0 1.195-3.988 3-10 3-6.012 0-10-1.805-10-3 0-.625 1.098-1.418 3-2.031z"
        }
      ></path>
    </svg>
  );
}

export default ProfileViewIcon;
/* prettier-ignore-end */
