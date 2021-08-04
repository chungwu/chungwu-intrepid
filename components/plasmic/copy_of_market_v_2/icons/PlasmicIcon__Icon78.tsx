// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon78IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon78Icon(props: Icon78IconProps) {
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
          "M1073 1664l-57 56 72 72H832v-128h241zm143 256l128 128H512q-27 0-50-10t-40.5-27.5T394 1970t-10-50V128q0-27 10-50t27.5-40.5T462 10t50-10h1024q27 0 50 10t40.5 27.5T1654 78t10 50v1264l-128 128V128H512v1792h704zm813-482l-557 557-269-269 90-91 179 179 467-467z"
        }
      ></path>
    </svg>
  );
}

export default Icon78Icon;
/* prettier-ignore-end */
