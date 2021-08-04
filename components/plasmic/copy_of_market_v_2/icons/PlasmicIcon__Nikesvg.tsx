// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NikesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NikesvgIcon(props: NikesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
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
          "M7.998 7.567l-2.758.722c-.974.241-1.826.562-2.647.281-1.116-.482-1.096-1.736-.264-3.07-1.471 1.214-4.118 5.096-.538 5.488.456.06 1.268-.1 2.15-.471l4.057-1.665L16 5.58 8.992 7.306l-.994.261z"
        }
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NikesvgIcon;
/* prettier-ignore-end */
