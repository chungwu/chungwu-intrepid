// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon152IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon152Icon(props: Icon152IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 42.031 41.19"}
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
          "M41.944 39.2l.087-25.01c0-1.01-.481-1.99-1.314-1.99a6.973 6.973 0 00-5.939 3.86c-1.059 2.01-1.767 3.15-3.981 3.15-1.65 0-2.157-1.02-3.086-3.74-.918-2.69-2.176-6.37-6.844-6.37-.111 0-.21.01-.317.02a1.078 1.078 0 00-.179-.02 1.414 1.414 0 00-.359.05c-5.182.5-6.421 5.51-7.513 9.98a30.049 30.049 0 01-1.9 5.98 7.32 7.32 0 01-.879 1.38 1.487 1.487 0 00-.646.72 8.562 8.562 0 01-6.079 2.18V1.51a1.49 1.49 0 10-2.979 0l.031 38.18a1.5 1.5 0 001.5 1.5h39.384c.839 0 1.321-1.72 1.013-1.99zm-2.913-23.01v22h-7l-.241-16.01c5.79-.7 4.829-4.64 7.241-5.99zm-14.134.27c.673 1.97 1.768 4.81 4.134 5.73l-.057 16h-6.982l.039-26c1.635.4 2.067 1.93 2.866 4.27zM13.263 26.47a32.466 32.466 0 002.126-6.61c.93-3.8 1.8-6.71 3.642-7.67l-.032 26h-6.982l-.087-9.66a10.582 10.582 0 001.333-2.06zM2.994 32.44h.189a12.2 12.2 0 005.769-1.45l.072 7.2H3.039z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon152Icon;
/* prettier-ignore-end */
