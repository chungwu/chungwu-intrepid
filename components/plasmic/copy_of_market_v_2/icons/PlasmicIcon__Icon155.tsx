// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon155IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon155Icon(props: Icon155IconProps) {
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
          "M192 480q-23-54-64.5-95.5T32 320q54-23 95.5-64.5T192 160q23 54 64.5 95.5T352 320q-54 23-95.5 64.5T192 480zm1664 64q23 54 64.5 95.5T2016 704q-54 23-95.5 64.5T1856 864q-23-54-64.5-95.5T1696 704q54-23 95.5-64.5T1856 544zm-384 96q-47-109-129-191t-191-129q109-47 191-129T1472 0q47 109 129 191t191 129q-109 47-191 129t-129 191zm0-446q-56 71-126 126 70 56 126 126 55-70 126-126-71-55-126-126zM747 785q-47 0-88.5-19.5T586 713t-48.5-76-17.5-89q0-59 24.5-110.5t65.5-90 94.5-61T816 264q84 0 149.5 35.5T1076 393t68.5 132 23.5 151q0 105-34 196.5t-93.5 166.5T900 1171.5 726 1268q-9 4-23 4-23 0-39-16.5t-16-39.5q0-36 34-52 76-36 140.5-77.5t113-95 79-122T1054 712q1-10 1.5-19.5t.5-19.5q0-52-15-105t-45-96-75-69.5T816 376q-34 0-67 13.5T690 426t-42 54.5-16 67.5q0 23 9 45.5t24.5 40 37 28.5 45.5 11 38-7.5 23-19.5 14.5-25 12-25 17-19.5T881 569q23 0 40 17t17 40q0 5-2 13-8 32-26.5 59T866 744.5t-55.5 30T747 785zm880 111l274 275-90 90-147-146v933H256v-933l-147 146-90-90 274-275h555q-35 41-77.5 72.5T680 1024H384v896h1152v-896h-331q17-31 31-63t25-65h366z"
        }
      ></path>
    </svg>
  );
}

export default Icon155Icon;
/* prettier-ignore-end */
