// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CommentReviewIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CommentReviewIcon(props: CommentReviewIconProps) {
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
        d={
          "M12 2A10 10 0 002 12a9.89 9.89 0 002.26 6.33l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 000-20zm0 18H5.41l.93-.93a1 1 0 000-1.41A8 8 0 1112 20zm5-9H7a1 1 0 000 2h10a1 1 0 000-2zm-2 4H9a1 1 0 000 2h6a1 1 0 000-2zM9 9h6a1 1 0 000-2H9a1 1 0 000 2z"
        }
      ></path>
    </svg>
  );
}

export default CommentReviewIcon;
/* prettier-ignore-end */
