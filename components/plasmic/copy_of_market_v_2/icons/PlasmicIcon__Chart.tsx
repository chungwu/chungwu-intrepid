// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartIcon(props: ChartIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 41.906 41.19"}
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
          "M36.409 16.66a4.214 4.214 0 00.5.03 5 5 0 004.961-4.56 5.057 5.057 0 00-1.1-3.7 4.9 4.9 0 00-3.364-1.83 4.214 4.214 0 00-.5-.03 5 5 0 00-4.961 4.56 5.059 5.059 0 001.006 3.55l-6.494 9.33a5.76 5.76 0 00-1.023-.22 8.389 8.389 0 00-.5-.02 4.891 4.891 0 00-2.987 1.03l-6.133-4.45a4.83 4.83 0 00.1-.52 5.081 5.081 0 00-1.1-3.71 4.979 4.979 0 00-3.364-1.83c-.168-.01-.334-.02-.5-.02a4.991 4.991 0 00-4.96 4.55 5.064 5.064 0 00.567 2.89l-3.566 4.34V1.52a1.5 1.5 0 10-2.993 0V39.7a1.5 1.5 0 001.482 1.5h38.029a1.5 1.5 0 000-3H2.96l.029-7.41 5.719-6.96a4.992 4.992 0 001.745.53c.168.01.334.02.5.02a4.936 4.936 0 003.4-1.35l5.85 4.23a5.149 5.149 0 00-.228 1.06 5.081 5.081 0 001.1 3.71 4.98 4.98 0 003.364 1.83 4.189 4.189 0 00.5.02 4.992 4.992 0 004.961-4.55 5.079 5.079 0 00-1-3.56l6.493-9.32a4.89 4.89 0 001.016.21zm-25.455 4.69c-.066 0-.133-.01-.2-.01a2.027 2.027 0 01.2-4.04 1.362 1.362 0 01.2.01 2.027 2.027 0 01-.2 4.04zm25.95-11.74a1.367 1.367 0 01.2.01 2.021 2.021 0 01-.2 4.03 1.367 1.367 0 01-.2-.01 2.021 2.021 0 01.196-4.03zM24.938 30.85a1.367 1.367 0 01-.2-.01 2.027 2.027 0 01.2-4.04c.067 0 .134.01.2.01a2.027 2.027 0 01-.2 4.04z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ChartIcon;
/* prettier-ignore-end */
