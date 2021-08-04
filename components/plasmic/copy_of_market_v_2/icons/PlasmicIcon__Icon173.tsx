// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon173IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon173Icon(props: Icon173IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 44 44"}
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
          "M42.187 13.28a4.986 4.986 0 00-3.708-7.65 4.205 4.205 0 00-.5-.02 4.988 4.988 0 00-1.167.15A21.974 21.974 0 001.965 31.05a5 5 0 003.537 7.93c.168.01.335.02.5.02a5.027 5.027 0 001.7-.3 21.982 21.982 0 0034.485-25.42zm-2.216-2.48a2 2 0 01-1.987 1.81c-.067 0-.134-.01-.2-.01a2 2 0 01.2-3.99 1.36 1.36 0 01.2.01 2 2 0 011.787 2.18zM22 3a18.863 18.863 0 0112.139 4.42 4.977 4.977 0 00-.028 6.35c.015.02.034.03.05.05l-5.169 9.31a4.1 4.1 0 00-.494-.11c-.168-.01-.335-.02-.5-.02a4.931 4.931 0 00-2.918.96l-4.81-4.81a4.988 4.988 0 00-3.791-7.52 4.207 4.207 0 00-.5-.02 5 5 0 00-3.868 8.16c.015.02.034.03.05.05l-5.169 9.31a2.769 2.769 0 00-.494-.1A4.229 4.229 0 006 29a4.878 4.878 0 00-1.533.26A18.779 18.779 0 013 22 19 19 0 0122 3zm7.99 25.2A2 2 0 0128 30a1.374 1.374 0 01-.2-.01A2 2 0 0128 26a1.36 1.36 0 01.2.01 2 2 0 011.79 2.19zM17.971 16.8a2 2 0 01-1.988 1.81c-.067 0-.134-.01-.2-.01a2 2 0 01.2-3.99 1.369 1.369 0 01.2.01 2 2 0 011.788 2.18zM6 36a1.37 1.37 0 01-.2-.01A2 2 0 016 32a1.367 1.367 0 01.2.01A2 2 0 016 36zm16 5a18.862 18.862 0 01-11.876-4.2 4.916 4.916 0 00.851-2.3 4.976 4.976 0 00-1.36-3.92l5.087-9.16a5.086 5.086 0 00.781.16 4.237 4.237 0 00.5.03 4.861 4.861 0 002.048-.46l5.244 5.25a4.988 4.988 0 004.226 6.58c.168.01.335.02.5.02a4.978 4.978 0 003.613-8.42l5.087-9.16a5.064 5.064 0 00.78.16 4.235 4.235 0 00.5.03 4.921 4.921 0 001.762-.33A18.725 18.725 0 0141 22a19 19 0 01-19 19z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon173Icon;
/* prettier-ignore-end */
