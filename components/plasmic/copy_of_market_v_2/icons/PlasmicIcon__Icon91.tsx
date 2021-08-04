// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon91IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon91Icon(props: Icon91IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
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
          "M25.906 4c-.695 0-1.664.031-2.687.125-2.047.191-4.41.535-5.875 2-1.23 1.23-3.774 4.496-6.125 7.563-.465.605-.446.593-.875 1.156l-1.719-.094a3.982 3.982 0 00-3.313 1.469L3.22 18.78l-1.031 1.313 1.624.312 3.282.657 3.843 3.843.657 3.282.344 1.625 1.28-1.032 2.563-2.093a3.982 3.982 0 001.469-3.313l-.094-1.688c.582-.44.563-.43 1.188-.906 3.074-2.355 6.351-4.883 7.562-6.093 1.453-1.454 1.778-3.852 1.969-5.907.191-2.054.094-3.812.094-3.812l-.032-.907-.906-.03S26.601 4 25.906 4zM25 6c.398 0 .68.023.969.031.011.582.035 1.188-.094 2.563-.176 1.894-.754 4.004-1.406 4.656-.89.89-4.282 3.59-7.344 5.938a1031.119 1031.119 0 01-5.156 3.937l-3.063-3.063c.41-.55 1.813-2.464 3.875-5.156 2.344-3.054 5.051-6.457 5.969-7.375.684-.683 2.77-1.261 4.656-1.437A18.28 18.28 0 0125 6zm-4.563 3.531c-1.117 0-2 .914-2 2.031 0 1.118.883 2.032 2 2.032a2.037 2.037 0 002.032-2.031 2.037 2.037 0 00-2.032-2.032zM8.5 16.75l.375.031c-.602.797-1.586 2.074-1.719 2.25l-1.343-.281 1.03-1.25a2.002 2.002 0 011.657-.75zm-2.281 5.188c-.856.855-1.344 2.039-1.688 3.03-.343.993-.5 1.813-.5 1.813L3.72 28.25l1.469-.281s.796-.137 1.78-.469c.985-.332 2.169-.824 3.063-1.719l-1.406-1.406c-.445.445-1.328.836-2.125 1.125.305-.832.75-1.777 1.125-2.156zm9 1.187l.031.375a1.965 1.965 0 01-.719 1.656l-1.281 1.032-.281-1.344c.176-.13 1.453-1.121 2.25-1.719z"
        }
      ></path>
    </svg>
  );
}

export default Icon91Icon;
/* prettier-ignore-end */