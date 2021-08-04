// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CommentReviewBIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CommentReviewBIcon(props: CommentReviewBIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
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
        fillRule={"evenodd"}
        d={
          "M12.087 18L6 21.804V18H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-7.913zM8 18.196L11.513 16H20V4H4v12h4v2.196zm3-7.61l4.293-4.293 1.414 1.414L11 13.414 7.293 9.707l1.414-1.414L11 10.586z"
        }
      ></path>
    </svg>
  );
}

export default CommentReviewBIcon;
/* prettier-ignore-end */
