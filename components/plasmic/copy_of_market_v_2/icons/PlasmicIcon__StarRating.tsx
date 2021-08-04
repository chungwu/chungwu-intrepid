// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarRatingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarRatingIcon(props: StarRatingIconProps) {
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
          "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm-4.418-3.061l.844-4.92L4.85 9.534l4.94-.717L12 4.34l2.21 4.477 4.939.717-3.575 3.485.844 4.92L12 15.616l-4.418 2.323zM12 13.356l1.762.927-.336-1.963 1.425-1.389-1.97-.286L12 8.86l-.881 1.785-1.97.286 1.425 1.39-.336 1.962L12 13.356z"
        }
      ></path>
    </svg>
  );
}

export default StarRatingIcon;
/* prettier-ignore-end */
