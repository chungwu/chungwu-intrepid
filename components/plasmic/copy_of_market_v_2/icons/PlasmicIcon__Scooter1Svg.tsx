// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Scooter1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Scooter1SvgIcon(props: Scooter1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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
        d={"M40.34 33.438a1.09 1.09 0 100-2.18 1.09 1.09 0 000 2.18z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M47.644 25.042c-1.962-1.963-4.797-2.835-7.523-2.617-.327-1.308-.872-4.143-1.526-7.087l2.616.655c.327.109.654 0 .982-.218.218-.218.436-.546.436-.873V8.361c0-.327-.11-.654-.436-.872-.328-.218-.655-.218-.982-.218l-4.47.872C36.087 6.508 34.888 4 31.617 4c-.218 0-.436.11-.654.218l-3.27 2.18c-.546.328-.655.982-.328 1.527.327.545.981.654 1.527.327l3.052-2.071c1.745.109 2.399 1.635 2.944 3.38l.109.217c.218.545.763.872 1.2.763l4.142-.872v3.816l-3.053-.763c-.327-.11-.763 0-.98.327-.219.327-.437.654-.328.981.763 3.38 1.636 7.087 1.962 8.722-1.635.437-3.27 1.309-4.578 2.617a10.37 10.37 0 00-1.636 2.18c-.327.546-.109 1.2.436 1.527.545.327 1.2.109 1.526-.436.328-.655.764-1.2 1.309-1.745 2.616-2.616 6.868-3.161 9.812-1.417l-11.12 4.797c-.982.436-1.636.763-2.072.981H2.181c.109-6.868.98-9.812 5.45-9.812.437 0 .764-.218.982-.654.218-.327.11-.763-.109-1.09l-1.962-2.617h11.992c.655 0 1.09.436 1.09 1.09v7.632c0 .654.437 1.09 1.09 1.09h6.651c1.636 0 3.271-.763 4.252-2.072l1.963-2.398a5.623 5.623 0 001.199-3.925l-.981-9.158c-.11-.545-.545-.981-1.2-.981-.545.109-1.09.545-.98 1.199l.871 9.158c.11.872-.218 1.744-.654 2.399l-1.962 2.398c-.654.763-1.527 1.2-2.508 1.2h-5.56v-6.542c0-1.853-1.417-3.27-3.27-3.27H4.36c-.436 0-.763.217-.981.653-.218.437-.11.764.109 1.09l2.071 2.835C0 20.681 0 27.113 0 32.346c0 .654.436 1.09 1.09 1.09h3.38c.545 3.053 3.162 5.452 6.433 5.452 3.27 0 5.887-2.399 6.432-5.451h14.282c.11 0 .327 0 .436-.11 0 0 .764-.327 1.745-.763.109 3.489 3.052 6.324 6.541 6.324 3.598 0 6.542-2.944 6.542-6.542 0-1.744-.654-3.38-1.854-4.579a28.565 28.565 0 002.29-.981c.327-.11.545-.436.654-.763.109-.327-.11-.763-.327-.981zM10.903 36.707c-2.072 0-3.707-1.417-4.252-3.27h8.395a4.225 4.225 0 01-4.143 3.27zm29.436 0a4.374 4.374 0 01-4.36-4.36c0-.219 0-.437.108-.764 2.072-.872 4.688-1.962 6.76-2.943 0 .109.109.218.109.218 1.09.872 1.744 2.071 1.744 3.488a4.374 4.374 0 01-4.36 4.361z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.813 26.898H5.452c-.655 0-1.09.437-1.09 1.09 0 .655.435 1.09 1.09 1.09h4.36c.655 0 1.09-.435 1.09-1.09 0-.653-.435-1.09-1.09-1.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Scooter1SvgIcon;
/* prettier-ignore-end */