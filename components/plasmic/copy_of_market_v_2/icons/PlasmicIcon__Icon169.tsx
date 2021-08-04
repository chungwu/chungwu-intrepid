// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon169IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon169Icon(props: Icon169IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 39 39"}
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
          "M30 15a3 3 0 00-1.573-2.64c-6.81-3.68-7.114-3.98-10.838-10.8A3 3 0 0014.956 0h-.008a2.994 2.994 0 00-2.632 1.58C8.656 8.36 8.354 8.67 1.565 12.36a3.008 3.008 0 000 5.28c6.8 3.69 7.1 3.99 10.8 10.79a3 3 0 005.273 0c3.691-6.8 3.994-7.1 10.794-10.79A3.007 3.007 0 0030 15zM15 27c-3.965-7.31-4.7-8.04-12-12 7.279-3.97 8.019-4.7 11.955-12 3.994 7.31 4.714 8.04 12.044 12C19.7 18.96 18.965 19.7 15 27zm22.43 1.36c-2.459-1.33-2.459-1.33-3.794-3.79a3 3 0 00-5.273 0c-1.335 2.46-1.335 2.46-3.8 3.79a3.006 3.006 0 000 5.28c2.46 1.33 2.46 1.33 3.8 3.79a3 3 0 005.273 0c1.335-2.46 1.335-2.46 3.794-3.79a3.006 3.006 0 00.001-5.28zM31 36c-1.652-3.04-1.956-3.35-5-5 3.044-1.65 3.348-1.96 5-5 1.652 3.04 1.957 3.35 5 5-3.043 1.65-3.348 1.96-5 5z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon169Icon;
/* prettier-ignore-end */
