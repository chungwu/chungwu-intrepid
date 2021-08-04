// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BeautysvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BeautysvgIcon(props: BeautysvgIconProps) {
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

      <path
        d={
          "M10 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-9C7.8 3 6 4.8 6 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
        }
      ></path>

      <path
        d={
          "M10 14c-3.9 0-7-3.1-7-7 0-.3.2-.5.5-.5s.5.2.5.5c0 3.3 2.7 6 6 6s6-2.7 6-6c0-.3.2-.5.5-.5s.5.2.5.5c0 3.9-3.1 7-7 7z"
        }
      ></path>

      <path
        d={
          "M5 8H4c-.3 0-.5-.2-.5-.5S3.7 7 4 7h1c.3 0 .5.2.5.5S5.3 8 5 8zm11.3 0h-1.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.8c.3 0 .5.2.5.5s-.3.5-.5.5zM10 17.5c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5s.5.2.5.5v3c0 .3-.2.5-.5.5z"
        }
      ></path>

      <path
        d={
          "M12.5 18h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zm-1-10c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l1-1c.2-.2.5-.2.7 0s.2.5 0 .7l-1 1c0 .1-.2.1-.3.1zM9 8c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l2.5-2.5c.2-.2.5-.2.7 0s.2.5 0 .7L9.4 7.9c-.1.1-.3.1-.4.1z"
        }
      ></path>

      <circle cx={"10.5"} cy={"8.5"} r={".5"}></circle>
    </svg>
  );
}

export default BeautysvgIcon;
/* prettier-ignore-end */
