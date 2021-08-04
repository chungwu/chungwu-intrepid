// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StripeLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StripeLogoIcon(props: StripeLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1449.2 2048"}
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
          "M577.2 618.4c0-89.2 74.4-123.6 193.6-123.6 173.6 0 394 53.2 567.6 146.8V104.4C1149.2 28.8 960.4 0 771.2 0 308.4 0 0 241.6 0 645.6c0 631.6 867.2 529.2 867.2 801.6 0 105.6-91.6 139.6-218.8 139.6-188.8 0-432.8-78-624.4-182v514c212 91.2 427.2 129.6 624 129.6 474.4 0 801.2-204 801.2-614.4 0-680.8-872-558.8-872-815.6"
        }
      ></path>
    </svg>
  );
}

export default StripeLogoIcon;
/* prettier-ignore-end */
