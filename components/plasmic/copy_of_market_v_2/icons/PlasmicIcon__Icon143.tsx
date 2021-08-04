// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon143IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon143Icon(props: Icon143IconProps) {
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
          "M1850 688q45 25 82 61.5t62.5 80 39.5 93 14 101.5h-128q0-52-20.5-99t-55-81.5-81.5-55-99-20.5q-53 0-99.5 20.5t-81 55-55 81.5-20.5 99q0 91-41.5 173T1252 1333q65 33 117.5 81.5t89.5 108 57 128 20 141.5h-128q0-79-30.5-149t-82.5-122-122-82.5-149-30.5-149 30.5-122 82.5-82.5 122-30.5 149H512q0-73 20-141.5t57-128 89.5-108T796 1333q-73-54-114.5-136T640 1024q0-52-20.5-99t-55-81.5-81.5-55-99-20.5q-53 0-99.5 20.5t-81 55-55 81.5-20.5 99H0q0-52 14-101.5t39.5-93 62.5-80 82-61.5q-33-35-51.5-81T128 512q0-52 20.5-99t55-81.5 81-55T384 256q52 0 99 20.5t81.5 55 55 81.5 20.5 99q0 49-18.5 95T570 688q82 45 134 124 54-80 138.5-126t181.5-46 181.5 46T1344 812q52-79 134-124-33-35-51.5-81t-18.5-95q0-52 20.5-99t55-81.5 81-55T1664 256q52 0 99 20.5t81.5 55 55 81.5 20.5 99q0 49-18.5 95t-51.5 81zM256 512q0 27 10 50t27.5 40.5T334 630t50 10 50-10 40.5-27.5T502 562t10-50-10-50-27.5-40.5T434 394t-50-10-50 10-40.5 27.5T266 462t-10 50zm768 768q52 0 99-20.5t81.5-55 55-81 20.5-99.5q0-52-20.5-99t-55-81.5-81.5-55-99-20.5q-53 0-99.5 20.5t-81 55-55 81.5-20.5 99q0 53 20.5 99.5t55 81 81 55 99.5 20.5zm512-768q0 27 10 50t27.5 40.5T1614 630t50 10 50-10 40.5-27.5T1782 562t10-50-10-50-27.5-40.5T1714 394t-50-10-50 10-40.5 27.5T1546 462t-10 50z"
        }
      ></path>
    </svg>
  );
}

export default Icon143Icon;
/* prettier-ignore-end */
