// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type P2PPayPaymentIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function P2PPayPaymentIcon(props: P2PPayPaymentIconProps) {
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
          "M2 3v18h4v5.094l1.625-1.313L12.344 21H22V3H2zm2 2h16v14h-8.344l-.281.219L8 21.906V19H4V5zm7 2v1.04c-1.121.187-2 1.163-2 2.335 0 .754.422 1.453 1.11 1.797L13 13.617c-.004.223-.16.383-.383.383h-1.234a.369.369 0 01-.383-.383V13H9v.617c0 1.172.875 2.156 2 2.344V17h2v-1.04c1.125-.187 2-1.17 2-2.343a2.01 2.01 0 00-1.105-1.789L11 10.378c.008.009 0 .001 0-.003 0-.223.156-.375.383-.375h1.234a.37.37 0 01.383.383V11h2v-.617c0-1.172-.875-2.156-2-2.344V7h-2zm13 2v2h4v12h-4v2.906L20.344 23h-7.5l-2.5 2h9.312L26 30.094V25h4V9h-6z"
        }
      ></path>
    </svg>
  );
}

export default P2PPayPaymentIcon;
/* prettier-ignore-end */
