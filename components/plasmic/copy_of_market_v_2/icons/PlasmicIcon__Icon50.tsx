// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon50Icon(props: Icon50IconProps) {
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
        d={"M9.707 14.293L19 5l1.414 1.414L9.707 17.121 4 11.414 5.414 10z"}
      ></path>
    </svg>
  );
}

export default Icon50Icon;
/* prettier-ignore-end */
