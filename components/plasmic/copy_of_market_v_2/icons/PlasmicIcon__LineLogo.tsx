// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LineLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LineLogoIcon(props: LineLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 296.528 296.528"}
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
          "M295.838 115.347l.003-.001-.092-.76a.44.44 0 00-.008-.068l-.344-2.858-.238-1.974-.072-.594-.147.018c-3.617-20.571-13.553-40.093-28.942-56.762-15.317-16.589-35.217-29.687-57.548-37.878-19.133-7.018-39.434-10.577-60.337-10.577-28.22 0-55.627 6.637-79.257 19.193C23.289 47.297-3.585 91.799.387 136.461c2.056 23.111 11.11 45.11 26.184 63.621 14.188 17.423 33.381 31.483 55.503 40.66 13.602 5.642 27.051 8.301 41.291 11.116l1.667.33c3.921.776 4.975 1.842 5.247 2.264.503.784.24 2.329.038 3.18-.186.785-.378 1.568-.57 2.352-1.529 6.235-3.11 12.683-1.868 19.792 1.428 8.172 6.531 12.859 14.001 12.86h.002c8.035 0 17.18-5.39 23.231-8.956l.808-.475c14.436-8.478 28.036-18.041 38.271-25.425 22.397-16.159 47.783-34.475 66.815-58.17 19.165-23.865 28.193-54.532 24.831-84.263zM92.343 160.561H66.761a7 7 0 01-7-7V99.865a7 7 0 1114 0v46.696h18.581a7 7 0 01.001 14zm26.687-7.19a7 7 0 11-14 0V99.675a7 7 0 1114 0v53.696zm63.274 0a7 7 0 01-12.665 4.113l-25.207-34.717v30.605a7 7 0 11-14 0v-52.16a7 7 0 0112.665-4.113l25.207 34.717V99.675a7 7 0 1114 0v53.696zm51.007 5.898h-34.645a7 7 0 01-7-7V98.573a7 7 0 017-7h33.57a7 7 0 110 14h-26.57v12.849h21.562a7 7 0 110 14h-21.562v12.847h27.645a7 7 0 110 14z"
        }
      ></path>
    </svg>
  );
}

export default LineLogoIcon;
/* prettier-ignore-end */
