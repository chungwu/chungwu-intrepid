// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsIcon(props: SettingsIconProps) {
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
          "M20.873 18.68l-2.217 2.217-2.838-.79-.811.334L13.55 23h-3.135l-1.449-2.567-.81-.34-2.838.781-2.216-2.216.79-2.838-.334-.811L1 13.55v-3.135l2.568-1.449.34-.81-.781-2.838 2.215-2.215 2.838.791.81-.334L10.446 1h3.136l1.449 2.568.81.34 2.837-.781 2.22 2.215-.792 2.839.335.81L23 10.447v3.136l-2.567 1.448-.34.813.78 2.837zm-2.892-2.972l.872-2.082L21 12.414v-.804l-2.147-1.22-.859-2.083.662-2.375-.569-.568-2.383.655-2.08-.872L12.413 3h-.804l-1.22 2.147-2.083.859-2.376-.663-.566.566.655 2.383-.872 2.08L3 11.583v.805l2.145 1.222.859 2.083-.662 2.376.567.567 2.383-.655 2.08.872 1.21 2.146h.805l1.222-2.145 2.083-.859 2.376.662.568-.568-.655-2.381zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
        }
      ></path>
    </svg>
  );
}

export default SettingsIcon;
/* prettier-ignore-end */
