// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon83IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon83Icon(props: Icon83IconProps) {
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
          "M171 341h1706v1366H171V341zm1536 171H341v161l683 341 683-341V512zM341 1536h1366V863l-683 342-683-342v673z"
        }
      ></path>
    </svg>
  );
}

export default Icon83Icon;
/* prettier-ignore-end */
