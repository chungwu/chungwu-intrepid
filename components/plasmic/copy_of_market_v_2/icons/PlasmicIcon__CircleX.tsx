// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleXIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleXIcon(props: CircleXIconProps) {
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
        fillRule={"evenodd"}
        d={
          "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm0-7.586l-3.293 3.293-1.414-1.414L10.586 12 7.293 8.707l1.414-1.414L12 10.586l3.293-3.293 1.414 1.414L13.414 12l3.293 3.293-1.414 1.414L12 13.414z"
        }
      ></path>
    </svg>
  );
}

export default CircleXIcon;
/* prettier-ignore-end */
