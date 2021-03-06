// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XerosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XerosvgIcon(props: XerosvgIconProps) {
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
        d={
          "M10.544 10.027h.001zm0 .002v-.002c-.91 0-1.671.623-1.885 1.466v.03h3.776a1.946 1.946 0 00-1.891-1.494z"
        }
      ></path>

      <path
        d={
          "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM7.54 14.644h-.01a.375.375 0 01-.267-.116l-2.043-2.04-2.052 2.047a.367.367 0 11-.515-.523l2.04-2.05-2.038-2.047a.35.35 0 01-.113-.261.367.367 0 01.626-.261l2.055 2.048 2.048-2.045a.359.359 0 01.26-.108c.211 0 .375.165.375.366a.337.337 0 01-.104.258l-2.056 2.055 2.055 2.051a.368.368 0 01-.261.626zm4.848-2.34l.068-.046H8.625c0 .019.003.037.006.057.02.105.045.211.083.31.194.531.765 1.275 1.829 1.29.33-.003.631-.086.9-.229.21-.12.391-.271.525-.428.045-.058.09-.112.12-.168.18-.229.405-.186.54-.083.164.135.18.391.045.57l-.016.016c-.21.27-.435.495-.689.66a2.441 2.441 0 01-.811.345c-.33.09-.645.104-.975.06a2.69 2.69 0 01-2.28-2.01 2.31 2.31 0 01-.09-.645c0-.855.421-1.695 1.125-2.205.885-.615 2.085-.66 3-.075.63.405 1.035 1.021 1.185 1.771.075.419-.21.794-.734.81zm3.159-2.251c-.796.101-.882.476-.882 1.404v2.787a.367.367 0 01-.734 0v-4.53c0-.204.16-.366.362-.366.166 0 .316.125.346.289.27-.209.6-.317.93-.317h.105c.195 0 .359.165.359.368 0 .201-.164.352-.375.359 0 0-.09 0-.164.008l.053-.002zm5.728 1.913a2.692 2.692 0 01-2.69 2.689 2.691 2.691 0 01-2.69-2.689 2.693 2.693 0 012.69-2.691 2.692 2.692 0 012.69 2.691z"
        }
      ></path>

      <path
        d={
          "M18.585 10.035a1.933 1.933 0 00-1.931 1.931c0 1.064.866 1.931 1.931 1.931a1.934 1.934 0 001.931-1.931 1.935 1.935 0 00-1.931-1.933v.002zm.667 1.929a.666.666 0 11-1.332 0 .666.666 0 011.332 0z"
        }
      ></path>
    </svg>
  );
}

export default XerosvgIcon;
/* prettier-ignore-end */
