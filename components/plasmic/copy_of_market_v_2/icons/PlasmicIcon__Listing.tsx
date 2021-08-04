// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListingIcon(props: ListingIconProps) {
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
          "M10.21 6.21l.79-.8V10a1 1 0 002 0V5.41l.79.8a1 1 0 001.42 0 1 1 0 000-1.42l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1 1 0 001.42 1.42zM18 7.56A1 1 0 1016.56 9a6.45 6.45 0 11-9.12 0A1 1 0 106 7.56a8.46 8.46 0 1012 0z"
        }
      ></path>
    </svg>
  );
}

export default ListingIcon;
/* prettier-ignore-end */
