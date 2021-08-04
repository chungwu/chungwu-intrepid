// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CommentReviewCIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CommentReviewCIcon(props: CommentReviewCIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 92 92"}
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
          "M88 6H4c-2.2 0-4 1.8-4 4v51.1C0 63.3 1.8 65 4 65h47v17c0 1.7 1.3 3.2 2.8 3.8.5.2 1 .2 1.5.2 1.2 0 2.3-.5 3.1-1.4L75 65h13c2.2 0 4-1.7 4-3.9V10c0-2.2-1.8-4-4-4zm-4 51H73.2c-1.2 0-2.5.6-3.3 1.4L59 71.1v-10c0-2.2-1.4-4.1-3.6-4.1H8V14h76v43zM18.6 28c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4s-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4zm43.9 3.1c-.7-.7-1.2-1.8-1.2-2.8 0-1.1.4-2.1 1.2-2.8.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2.7.7 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.8.8-1.8 1.2-2.8 1.2-1-.1-2-.5-2.8-1.2z"
        }
      ></path>
    </svg>
  );
}

export default CommentReviewCIcon;
/* prettier-ignore-end */
