// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BeautyBsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BeautyBsvgIcon(props: BeautyBsvgIconProps) {
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
        fill={"currentColor"}
        d={
          "M11 1c-.432 0-.77.197-1.093.469-.324.272-.632.641-.907 1.031-.548.78-1 1.677-1 2.5v3h6V5c0-.815-.452-1.717-1-2.5a5.302 5.302 0 00-.906-1c-.323-.274-.66-.5-1.094-.5zm0 2c.37 0 1 .87 1 1.313V6h-2V4.313C10 3.86 10.63 3 11 3zM7.344 9A.515.515 0 007 9.5V15h2V9.5h1V15h5V9.5a.52.52 0 00-.5-.5H7.344zm-1 7a.515.515 0 00-.344.5v15c0 .262.238.5.5.5H9v-5h1v5h5.5a.52.52 0 00.5-.5v-15a.52.52 0 00-.5-.5H10v9.5H9V16H6.344zm12 6a.515.515 0 00-.344.5v9c0 .262.238.5.5.5H20V22h-1.5a.41.41 0 00-.156 0zM21 22v10h4.5a.52.52 0 00.5-.5v-9a.52.52 0 00-.5-.5H21z"
        }
        color={"#000"}
        fontFamily={"Sans"}
        fontWeight={"400"}
        overflow={"visible"}
        style={{
          lineHeight: "normal",
          inkscapeFontSpecification: "Sans",
          textIndent: "0",
          textAlign: "start",
          textDecorationLine: "none",
          textTransform: "none",
          blockProgression: "tb",
          marker: 'none"',
        }}
      ></path>
    </svg>
  );
}

export default BeautyBsvgIcon;
/* prettier-ignore-end */
