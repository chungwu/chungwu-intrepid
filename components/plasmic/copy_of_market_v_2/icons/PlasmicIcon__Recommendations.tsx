// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RecommendationsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RecommendationsIcon(props: RecommendationsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 30 28"}
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
          "M5 20a3 3 0 110-6 3 3 0 010 6zm1-7.899V1a1 1 0 10-2 0v11.101a5 5 0 000 9.798V27a1 1 0 102 0v-5.101a5 5 0 000-9.798zM15 10a3 3 0 110-6 3 3 0 010 6zm1-7.899V1a1 1 0 10-2 0v1.101a5 5 0 000 9.798V27a1 1 0 102 0V11.899a5 5 0 000-9.798zM25 24a3 3 0 110-6 3 3 0 010 6zm1-7.899V1a1 1 0 10-2 0v15.101a5 5 0 000 9.798V27a1 1 0 102 0v-1.101a5 5 0 000-9.798z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default RecommendationsIcon;
/* prettier-ignore-end */
