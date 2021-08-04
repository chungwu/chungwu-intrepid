// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8QuickbookssvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8QuickbookssvgIcon(props: Icons8QuickbookssvgIconProps) {
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
          "M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16 9.913 5 16 5zm1 4v12h4c2.287 0 4-2.104 4-4.5S23.287 12 21 12v2c1.027 0 2 1.03 2 2.5s-.973 2.5-2 2.5h-2V9h-2zm-6 2c-2.287 0-4 2.104-4 4.5S8.713 20 11 20v-2c-1.027 0-2-1.03-2-2.5s.973-2.5 2-2.5h2v10h2V11h-4z"
        }
      ></path>
    </svg>
  );
}

export default Icons8QuickbookssvgIcon;
/* prettier-ignore-end */
