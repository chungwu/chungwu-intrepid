// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon154IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon154Icon(props: Icon154IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
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
          "M12 12a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zm-.71-6.29a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21L15 7.46A1 1 0 1013.54 6l-.54.59V3a1 1 0 00-2 0v3.59L10.46 6A1 1 0 009 7.46zM19 15a1 1 0 10-1 1 1 1 0 001-1zm1-7h-3a1 1 0 000 2h3a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h3a1 1 0 000-2H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3v-8a3 3 0 00-3-3zM5 15a1 1 0 101-1 1 1 0 00-1 1z"
        }
      ></path>
    </svg>
  );
}

export default Icon154Icon;
/* prettier-ignore-end */
