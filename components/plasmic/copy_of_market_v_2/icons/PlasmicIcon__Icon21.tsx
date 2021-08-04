// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
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

      <path fill={"none"} d={"M0 0h20v20H0z"}></path>

      <path
        d={
          "M14.82 9L13 4h-3v1h2.3l1.46 4H8.75l-.37-1H10V7H6v1h1.32l1.46 4h-.83C7.7 10.19 6.12 8.86 4.2 9.01c-1.64.13-3.01 1.46-3.18 3.1C.8 14.25 2.41 16 4.5 16c1.79 0 3.21-1.29 3.45-3h4.1c.25 1.81 1.83 3.14 3.75 2.99 1.64-.13 3.01-1.46 3.18-3.1C19.2 10.75 17.59 9 15.5 9h-.68zm-5.71 1h3.92c-.53.52-.88 1.22-.98 2H9.84l-.73-2zM4.5 15C3.1 15 2 13.9 2 12.5S3.1 10 4.5 10c1.23 0 2.23.85 2.45 2H4v1h2.95c-.22 1.15-1.22 2-2.45 2zm11 0c-1.4 0-2.5-1.1-2.5-2.5 0-.94.5-1.73 1.24-2.16l1.03 2.83.94-.34-1.02-2.8c.11-.01.21-.03.31-.03 1.4 0 2.5 1.1 2.5 2.5S16.9 15 15.5 15z"
        }
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
