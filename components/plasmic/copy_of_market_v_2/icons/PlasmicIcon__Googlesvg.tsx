// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GooglesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GooglesvgIcon(props: GooglesvgIconProps) {
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
          "M19.822 8.004h-9.61c0 1 0 2.998-.007 3.998h5.569c-.213.999-.97 2.398-2.039 3.103-.001-.001-.002.006-.004.005-1.421.938-3.297 1.151-4.69.871-2.183-.433-3.91-2.016-4.612-4.027.004-.003.007-.031.01-.033C4 10.673 4 9.003 4.439 8.004c.565-1.837 2.345-3.513 4.53-3.972 1.759-.373 3.743.031 5.202 1.396.194-.19 2.685-2.622 2.872-2.82C12.058-1.907 4.077-.318 1.09 5.511l-.006.011a9.767 9.767 0 00.01 8.964l-.01.008a10.18 10.18 0 006.48 5.165c3.01.79 6.843.25 9.41-2.072l.003.003c2.175-1.958 3.529-5.296 2.845-9.586"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default GooglesvgIcon;
/* prettier-ignore-end */
