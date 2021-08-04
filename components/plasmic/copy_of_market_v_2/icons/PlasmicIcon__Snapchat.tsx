// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SnapchatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SnapchatIcon(props: SnapchatIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 45"}
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
          "M24.462 0h-.12l-.825.009c-1.066 0-3.198.15-5.488 1.158a12.228 12.228 0 00-3.5 2.314c-1.208 1.144-2.193 2.554-2.925 4.192-1.073 2.398-.818 6.438-.614 9.684l.001.005.066 1.065c-.157.072-.412.148-.788.148-.605 0-1.325-.193-2.138-.573a1.917 1.917 0 00-.814-.167c-.485 0-.995.142-1.438.401-.557.327-.917.788-1.015 1.299-.064.338-.061 1.006.683 1.684.41.373 1.011.717 1.788 1.023.204.08.445.156.702.237.888.282 2.234.708 2.584 1.53.178.418.102.967-.226 1.631-.009.018-.018.036-.025.055-.082.19-.847 1.918-2.416 3.74-.891 1.035-1.873 1.901-2.917 2.573a10.744 10.744 0 01-4.095 1.595 1.122 1.122 0 00-.94 1.169c.01.165.048.33.116.488l.001.003c.23.535.761.99 1.625 1.39 1.056.489 2.635.9 4.694 1.222.104.197.212.693.286 1.032.079.36.16.732.277 1.126.125.427.45.937 1.287.937.317 0 .681-.072 1.104-.153.618-.121 1.463-.286 2.518-.286.585 0 1.191.051 1.801.152 1.176.196 2.19.91 3.363 1.737 1.718 1.21 3.661 2.58 6.63 2.58.082 0 .163-.003.243-.008a7.6 7.6 0 00.348.008c2.971 0 4.914-1.37 6.63-2.58l.002-.002c1.174-.826 2.186-1.54 3.362-1.735.61-.1 1.216-.152 1.801-.152 1.008 0 1.806.128 2.519.267.465.09.826.135 1.103.135h.056c.611 0 1.06-.335 1.232-.92.114-.386.195-.748.276-1.115.07-.318.181-.828.285-1.027 2.06-.323 3.639-.733 4.695-1.222.862-.399 1.393-.852 1.624-1.385.069-.16.11-.325.118-.493a1.122 1.122 0 00-.94-1.17c-6.417-1.054-9.308-7.628-9.427-7.907a.8.8 0 00-.026-.055c-.328-.664-.404-1.212-.226-1.63.35-.823 1.695-1.249 2.584-1.53.257-.081.5-.158.702-.238.876-.344 1.502-.718 1.915-1.143.493-.507.589-.992.583-1.31-.015-.768-.604-1.45-1.541-1.785a2.777 2.777 0 00-1.045-.199c-.25 0-.62.034-.971.198-.751.35-1.424.541-2 .569a1.814 1.814 0 01-.663-.146l.057-.928.009-.138c.205-3.248.46-7.29-.612-9.69-.736-1.645-1.724-3.058-2.937-4.205a12.26 12.26 0 00-3.513-2.314A14.01 14.01 0 0024.462 0"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default SnapchatIcon;
/* prettier-ignore-end */
