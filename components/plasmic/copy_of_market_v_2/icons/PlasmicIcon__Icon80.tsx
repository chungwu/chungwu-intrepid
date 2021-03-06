// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon80IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon80Icon(props: Icon80IconProps) {
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
          "M3 6v20h26V6zm2 2h22v16h-3.406c-.078-.137-.043-.324-.157-.438C23.06 23.184 22.523 23 22 23s-1.059.184-1.438.563c-.113.113-.078.3-.156.437h-8.812c-.078-.137-.043-.324-.156-.438-.38-.378-.915-.562-1.438-.562-.523 0-1.059.184-1.438.563-.113.113-.078.3-.156.437H5zm7 2c-2.2 0-4 1.8-4 4 0 1.113.477 2.117 1.219 2.844A5.041 5.041 0 007 21h2a3 3 0 016 0h2a5.041 5.041 0 00-2.219-4.156C15.523 16.117 16 15.114 16 14c0-2.2-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm7 1v2h6v-2zm0 4v2h6v-2z"
        }
      ></path>
    </svg>
  );
}

export default Icon80Icon;
/* prettier-ignore-end */
