// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaypalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaypalIcon(props: PaypalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 41 48"}
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
          "M34.912 3.62C32.67 1.085 28.622 0 23.44 0H8.405a2.15 2.15 0 00-2.128 1.801L.017 41.194a1.284 1.284 0 001.275 1.48h9.282l2.332-14.67-.073.46a2.143 2.143 0 012.12-1.802h4.41c8.668 0 15.452-3.492 17.434-13.593.06-.3.154-.874.154-.874.563-3.738-.004-6.275-2.04-8.576zM39.3 14.107c-2.156 9.945-9.03 15.208-19.937 15.208h-3.956L12.458 48h6.416a1.88 1.88 0 001.86-1.576l.075-.396 1.476-9.273.095-.512a1.877 1.877 0 011.858-1.576h1.172c7.58 0 13.516-3.056 15.25-11.89.696-3.547.362-6.52-1.359-8.669z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default PaypalIcon;
/* prettier-ignore-end */
