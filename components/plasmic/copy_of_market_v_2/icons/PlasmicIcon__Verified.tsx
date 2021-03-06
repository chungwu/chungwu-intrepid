// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VerifiedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VerifiedIcon(props: VerifiedIconProps) {
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
          "M4.222 19.778c-.924-.924-1.19-2.334-.9-4.184C1.81 14.491 1 13.307 1 12s.81-2.491 2.322-3.594c-.29-1.85-.024-3.26.9-4.184.924-.924 2.334-1.19 4.184-.9C9.509 1.81 10.693 1 12 1s2.491.81 3.594 2.322c1.85-.29 3.26-.024 4.184.9.924.924 1.19 2.334.9 4.184C22.19 9.509 23 10.693 23 12s-.81 2.491-2.322 3.594c.29 1.85.024 3.26-.9 4.184-.924.924-2.334 1.19-4.184.9C14.491 22.19 13.307 23 12 23s-2.491-.81-3.594-2.322c-1.85.29-3.26.024-4.184-.9zm4.43-1.18a1 1 0 011.05.434C10.582 20.393 11.368 21 12 21c.632 0 1.418-.607 2.298-1.968a1 1 0 011.05-.434c1.584.34 2.569.213 3.016-.234.447-.447.573-1.432.234-3.017a1 1 0 01.434-1.049C20.393 13.418 21 12.632 21 12c0-.632-.607-1.418-1.968-2.298a1 1 0 01-.434-1.05c.34-1.584.213-2.569-.234-3.016-.447-.447-1.432-.573-3.017-.234a1 1 0 01-1.049-.434C13.418 3.607 12.632 3 12 3c-.632 0-1.418.607-2.298 1.968a1 1 0 01-1.05.434c-1.584-.34-2.569-.213-3.016.234-.447.447-.573 1.432-.234 3.017a1 1 0 01-.434 1.049C3.607 10.582 3 11.368 3 12c0 .632.607 1.418 1.968 2.298a1 1 0 01.434 1.05c-.34 1.584-.213 2.569.234 3.016.447.447 1.432.573 3.017.234zM11 12.586l4.293-4.293 1.414 1.414L11 15.414l-3.707-3.707 1.414-1.414L11 12.586z"
        }
      ></path>
    </svg>
  );
}

export default VerifiedIcon;
/* prettier-ignore-end */
