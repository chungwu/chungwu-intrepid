// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EditIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EditIcon(props: EditIconProps) {
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
          "M14.802 6.445L8.696 12.55c-.405.358-.656.86-.696 1.318v2.135l2.064.002c.534-.038 1.031-.287 1.43-.743L17.558 9.2l-2.755-2.755zm1.415-1.414l2.754 2.755.894-.894a.462.462 0 000-.653L17.76 4.135a.456.456 0 00-.647 0l-.897.896zM22 13v7a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h7v2H4v16h16v-7h2zM17.437 2c.655 0 1.283.261 1.741.723l2.101 2.101a2.462 2.462 0 010 3.482l-8.321 8.318c-.699.805-1.69 1.3-2.823 1.378H6v-1l.003-3.215c.085-1.054.576-2.035 1.323-2.694l8.37-8.368A2.456 2.456 0 0117.436 2z"
        }
      ></path>
    </svg>
  );
}

export default EditIcon;
/* prettier-ignore-end */
