// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlockchainsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BlockchainsvgIcon(props: BlockchainsvgIconProps) {
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
          "M30 19h-4v-7a1 1 0 00-1-1h-4v-1a1 1 0 10-2 0v2a1 1 0 001 1h4v7a1 1 0 001 1h4v8h-8v-1a1 1 0 10-2 0v2a1 1 0 001 1h10a1 1 0 001-1V20a1 1 0 00-1-1z"
        }
      ></path>

      <path
        d={
          "M21 25v-4h1a1 1 0 100-2h-2a1 1 0 00-1 1v4h-7a1 1 0 00-1 1v4H3v-8h1a1 1 0 100-2H2a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4h7a1 1 0 001-1z"
        }
      ></path>

      <path
        d={
          "M2 13h4v7a1 1 0 001 1h4v1a1 1 0 102 0v-2a1 1 0 00-1-1H8v-7a1 1 0 00-1-1H3V3h8v1a1 1 0 102 0V2a1 1 0 00-1-1H2a1 1 0 00-1 1v10a1 1 0 001 1z"
        }
      ></path>

      <path
        d={
          "M30 1H20a1 1 0 00-1 1v4h-7a1 1 0 00-1 1v4h-1a1 1 0 100 2h2a1 1 0 001-1V8h7a1 1 0 001-1V3h8v8h-1a1 1 0 100 2h2a1 1 0 001-1V2a1 1 0 00-1-1z"
        }
      ></path>

      <path
        d={
          "M5 4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1H5zm3 4H6V6h2v2zm19 2a1 1 0 001-1V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1h4zm-3-4h2v2h-2V6zM5 22a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1H5zm3 4H6v-2h2v2zm14-3v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1zm2 1h2v2h-2v-2z"
        }
      ></path>
    </svg>
  );
}

export default BlockchainsvgIcon;
/* prettier-ignore-end */
