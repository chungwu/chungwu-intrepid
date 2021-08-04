// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon124IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon124Icon(props: Icon124IconProps) {
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
          "M1024 896q52 0 99 20.5t81.5 55 55 81.5 20.5 99q0 53-20.5 99.5t-55 81-81.5 55-99 20.5q-53 0-99.5-20.5t-81-55-55-81T768 1152q0-52 20.5-99t55-81.5 81-55T1024 896zm0 384q27 0 50-10t40.5-27.5 27.5-40.5 10-50-10-50-27.5-40.5-40.5-27.5-50-10-50 10-40.5 27.5T906 1102t-10 50 10 50 27.5 40.5T974 1270t50 10zm0-1152q141 0 271.5 36.5T1540 268t207.5 160.5T1908 636t103.5 244.5T2048 1152q0 102-20 200.5t-58 191-94 176.5-128 156l-90-90q63-63 111.5-136.5t82-154.5 51-167.5T1920 1152q0-124-32-238.5t-90.5-214-140-181-181-140-214-90.5-238.5-32-238.5 32-214 90.5-181 140-140 181-90.5 214-32 238.5q0 89 17.5 175.5t51 167.5 82 154.5T390 1786l-90 90q-72-72-128-156t-94-176.5-58-191T0 1152q0-141 36.5-271.5T140 636t160.5-207.5T508 268t244.5-103.5T1024 128zm0 384q133 0 249.5 50T1477 699t137 203.5 50 249.5q0 128-48.5 245T1477 1605l-91-91q72-72 111-166t39-196q0-106-40.5-199t-110-162.5-162.5-110-199-40.5-199 40.5-162.5 110-110 162.5-40.5 199q0 102 39 196t111 166l-91 91q-90-91-138.5-208T384 1152q0-133 50-249.5T571 699t203.5-137 249.5-50z"
        }
      ></path>
    </svg>
  );
}

export default Icon124Icon;
/* prettier-ignore-end */
