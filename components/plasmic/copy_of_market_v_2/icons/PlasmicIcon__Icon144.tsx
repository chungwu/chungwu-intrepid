// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon144IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon144Icon(props: Icon144IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 50 43"}
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
        data-name={"Money box"}
        d={
          "M37.5 16a1.5 1.5 0 101.508 1.5A1.5 1.5 0 0037.5 16zm8.3-1.25c-1.675-4-5.1-6.95-9.8-8.62l1.255-4.19A1.517 1.517 0 0035.163.13L25 5c-11.58.28-19.678 5.98-20 15-1.542-.43-2-.1-2-1a3.937 3.937 0 011.387-2.3 1.522 1.522 0 00-2.154-2.15A7.307 7.307 0 000 20c0 2.89 2.7 3 5 3 .724 4.13 4.2 7.3 6.87 9.46v5.25a5.293 5.293 0 005.077 5.28h2.608a5.217 5.217 0 004.858-3.73c.584.04 1.165-.01 1.742-.01s1.162.09 1.742.05a5.182 5.182 0 004.857 3.69h3.419A4.763 4.763 0 0041 38v-5a15.819 15.819 0 004.255-5.19 5.064 5.064 0 004.76-5.04v-3.04a5.074 5.074 0 00-4.22-4.98zm1.174 8.02A2.167 2.167 0 0145 25h-2c-.938 2.9-2.325 4.1-5 6v7a1.818 1.818 0 01-1.827 1.99l-3.419-.03a2.3 2.3 0 01-2.03-2.31v-2.01a20.684 20.684 0 01-4.569.51 20.1 20.1 0 01-4.569-.53v2.03a2.3 2.3 0 01-2.031 2.31l-2.608.03a2.274 2.274 0 01-2.031-2.28V31C11.189 28.25 8 25.56 8 21c0-7.64 7.389-12.24 16-13 2.023 0 9.374-3.72 9.374-3.72l-2.079 6.93a1.52 1.52 0 001.023 1.89 1.655 1.655 0 00.437.06 1.517 1.517 0 001.459-1.08l.916-3.06A11.993 11.993 0 0143 18h2a1.979 1.979 0 012 2z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon144Icon;
/* prettier-ignore-end */
