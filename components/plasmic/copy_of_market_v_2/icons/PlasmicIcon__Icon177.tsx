// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon177IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon177Icon(props: Icon177IconProps) {
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
          "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm0-4.002a1 1 0 110-2 1 1 0 010 2zM13 14h-2c0-1.702.625-2.43 2.053-3.144.822-.411.947-.558.947-1.356 0-.944-.723-1.5-2-1.5a2 2 0 00-2 2H8a4 4 0 014-4c2.284 0 4 1.32 4 3.5 0 1.702-.625 2.43-2.053 3.144-.822.411-.947.558-.947 1.356z"
        }
      ></path>
    </svg>
  );
}

export default Icon177Icon;
/* prettier-ignore-end */
