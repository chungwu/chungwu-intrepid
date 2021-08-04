// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SoundcloudFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SoundcloudFillIcon(props: SoundcloudFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 27"}
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
          "M0 22.153c0 .604.216 1.06.648 1.37.432.31.893.419 1.385.328.461-.09.785-.256.971-.498.186-.241.28-.642.28-1.2v-6.57c0-.467-.16-.864-.48-1.188a1.584 1.584 0 00-1.173-.487c-.447 0-.83.162-1.15.487A1.63 1.63 0 000 15.584v6.569zm5.137 2.808c0 .438.153.767.458.986.305.219.696.328 1.173.328.491 0 .89-.11 1.195-.328.305-.22.458-.548.458-.986V9.65a1.6 1.6 0 00-.48-1.166 1.584 1.584 0 00-1.173-.487c-.447 0-.83.162-1.15.487a1.6 1.6 0 00-.48 1.166v15.312zm5.115.725c0 .438.157.767.47.986.312.218.714.328 1.205.328.477 0 .868-.11 1.173-.328.305-.22.458-.548.458-.986V11.711c0-.469-.16-.869-.48-1.201a1.541 1.541 0 00-1.15-.498c-.462 0-.857.166-1.184.498a1.648 1.648 0 00-.492 1.2v13.976zm5.137.068c0 .83.551 1.246 1.653 1.246 1.102 0 1.653-.415 1.653-1.246V3.104c0-1.27-.38-1.987-1.139-2.153-.491-.12-.975.023-1.452.43-.476.408-.715.982-.715 1.722v22.651zm5.227.657V1.767c0-.785.23-1.254.693-1.405A12.586 12.586 0 0124.279 0c2.278 0 4.4.544 6.366 1.63a13.186 13.186 0 014.769 4.452 13.393 13.393 0 012.11 6.218 7.239 7.239 0 012.904-.59c2.085 0 3.868.748 5.35 2.243C47.259 15.448 48 17.245 48 19.344c0 2.114-.74 3.919-2.222 5.414C44.296 26.253 42.52 27 40.45 27l-19.432-.023a.524.524 0 01-.301-.249.676.676 0 01-.1-.317z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default SoundcloudFillIcon;
/* prettier-ignore-end */
