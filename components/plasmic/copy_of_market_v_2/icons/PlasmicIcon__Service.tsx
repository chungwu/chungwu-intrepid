// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ServiceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ServiceIcon(props: ServiceIconProps) {
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
          "M19.313 6.969c-.555.004-1.106.031-1.688.187a6.026 6.026 0 00-1.781.813c-.766-.45-1.508-.82-2.219-.907-.883-.109-1.703-.05-2.656-.03-1.13.023-1.867.6-3.063 1.062C6.711 8.554 5.172 9 3 9H2v9.625l.563.281 1.843.907 6.563 7.312.031.031c.75.742 1.762.926 2.656.875.895-.05 1.735-.312 2.406-.718 1.477-.891 5.5-3.688 5.5-3.688l.094-.063.063-.062c.476-.473.715-1.05.875-1.656l3.843-1.938 2.875-.968.688-.22V9h-1a12.84 12.84 0 01-4.906-.938C22.898 7.595 22.172 7.024 21.03 7c-.61-.012-1.164-.035-1.718-.031zm.03 2c.45-.004.97.02 1.626.031.105.004 1.066.414 2.406.938 1.133.445 2.707.84 4.625.968v6.375l-2.313.782h-.062l-.063.03-3.03 1.532a3.55 3.55 0 00-.75-1.25l-.063-.094-4.25-5.218-.625-.782-.782.625-2.687 2.188c-.902.625-1.633.445-2.375.094-.215-.102-.203-.133-.375-.25l4.563-3.782.062-.062c1.355-1.344 2.188-1.809 2.906-2 .36-.098.739-.121 1.188-.125zM12.376 9a7.291 7.291 0 011 .031c.262.031.559.254.813.344-.102.094-.176.148-.282.25l-.062.063-5.469 4.53-.844.688.75.781s.723.782 1.844 1.313c1.121.531 2.852.832 4.406-.25l.063-.063 1.937-1.593 3.688 4.531.031.063.031.03c.66.653.645 1.68 0 2.345-.008.007.008.023 0 .03-.008.005-.14.083-.156.095l-1.313-1.782-1.625 1.188 1.282 1.718c-.52.352-.754.536-1.313.907l-1.343-1.813-1.626 1.188 1.282 1.718c-.114.07-.348.227-.438.282-.316.191-.926.406-1.469.437-.511.028-.902-.09-1.093-.25l-.031-.031-6.688-7.406-.125-.157L4 17.375v-6.469c1.91-.125 3.496-.504 4.625-.937 1.336-.512 2.29-.934 2.406-.938L12.375 9z"
        }
      ></path>
    </svg>
  );
}

export default ServiceIcon;
/* prettier-ignore-end */
