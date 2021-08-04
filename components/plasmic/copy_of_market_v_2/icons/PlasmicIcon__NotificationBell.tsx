// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotificationBellIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotificationBellIcon(props: NotificationBellIconProps) {
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
        fillRule={"evenodd"}
        d={
          "M10.135 2.276a2 2 0 013.73.002C16.762 3.123 19 5.94 19 10c0 2.625.532 4.102 1.515 5.177.244.266 1.101 1.038 1.197 1.135l.288.292v3.41h-6.126a3.941 3.941 0 01-1.786 2.409 4.008 4.008 0 01-4.176 0c-1.042-.636-1.618-1.347-1.824-2.409H2v-3.41l.288-.292c.104-.105.956-.87 1.198-1.133C4.469 14.11 5 12.634 5 10c0-4.07 2.235-6.882 5.135-7.724zm.044 17.738c.14.263.382.461.775.701.642.392 1.45.392 2.092 0 .297-.181.53-.421.69-.7H10.18zM20 17.452c-.298-.275-.75-.695-.96-.925C17.706 15.07 17 13.107 17 10c0-3.769-2.34-5.988-5-5.988-2.667 0-5 2.208-5 5.988 0 3.118-.706 5.08-2.042 6.533-.21.228-.662.648-.958.92v.561h16v-.562z"
        }
      ></path>
    </svg>
  );
}

export default NotificationBellIcon;
/* prettier-ignore-end */
