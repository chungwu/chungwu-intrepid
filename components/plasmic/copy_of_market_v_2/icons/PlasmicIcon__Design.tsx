// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DesignIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DesignIcon(props: DesignIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 2048 2048"}
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
          "M1280 128h768v1920H0V37l1280 1280V128zM128 1920h1573L128 347v1573zm1627-128l128 128h37V256h-512v128h256v128h-256v128h256v128h-256v128h384v128h-384v128h256v128h-256v128h256v128h-165l128 128h165v128h-37zM384 1061l603 603H384v-603zm128 310v165h165z"
        }
      ></path>
    </svg>
  );
}

export default DesignIcon;
/* prettier-ignore-end */
