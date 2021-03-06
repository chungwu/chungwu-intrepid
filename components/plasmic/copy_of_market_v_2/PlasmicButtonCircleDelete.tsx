// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: ADEYruGVISG4-wd
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicButtonCircleDelete.module.css"; // plasmic-import: ADEYruGVISG4-wd/css

import CircleXIcon from "./icons/PlasmicIcon__CircleX"; // plasmic-import: 82-OM13o9RS-I1T/icon

export type PlasmicButtonCircleDelete__VariantMembers = {
  size: "_16Px" | "_18Px" | "_24Px" | "_32Px" | "_48Px";
};

export type PlasmicButtonCircleDelete__VariantsArgs = {
  size?: SingleChoiceArg<"_16Px" | "_18Px" | "_24Px" | "_32Px" | "_48Px">;
};

type VariantPropType = keyof PlasmicButtonCircleDelete__VariantsArgs;
export const PlasmicButtonCircleDelete__VariantProps =
  new Array<VariantPropType>("size");

export type PlasmicButtonCircleDelete__ArgsType = {};
type ArgPropType = keyof PlasmicButtonCircleDelete__ArgsType;
export const PlasmicButtonCircleDelete__ArgProps = new Array<ArgPropType>();

export type PlasmicButtonCircleDelete__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<"button">;
  svgParent?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultButtonCircleDeleteProps {
  size?: SingleChoiceArg<"_16Px" | "_18Px" | "_24Px" | "_32Px" | "_48Px">;
  className?: string;
}

function PlasmicButtonCircleDelete__RenderFunc(props: {
  variants: PlasmicButtonCircleDelete__VariantsArgs;
  args: PlasmicButtonCircleDelete__ArgsType;
  overrides: PlasmicButtonCircleDelete__OverridesType;
  dataFetches?: PlasmicButtonCircleDelete__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(defaultcss.button, sty.button, {
          [sty.button__size__16Px]: hasVariant(variants, "size", "_16Px"),
          [sty.button__size__18Px]: hasVariant(variants, "size", "_18Px"),
          [sty.button__size__24Px]: hasVariant(variants, "size", "_24Px"),
          [sty.button__size__32Px]: hasVariant(variants, "size", "_32Px"),
          [sty.button__size__48Px]: hasVariant(variants, "size", "_48Px")
        })}
      >
        <div
          data-plasmic-name={"svgParent"}
          data-plasmic-override={overrides.svgParent}
          className={classNames(defaultcss.all, sty.svgParent, {
            [sty.svgParent__size__16Px]: hasVariant(variants, "size", "_16Px"),
            [sty.svgParent__size__18Px]: hasVariant(variants, "size", "_18Px"),
            [sty.svgParent__size__24Px]: hasVariant(variants, "size", "_24Px"),
            [sty.svgParent__size__32Px]: hasVariant(variants, "size", "_32Px"),
            [sty.svgParent__size__48Px]: hasVariant(variants, "size", "_48Px")
          })}
        >
          <CircleXIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg, {
              [sty.svg__size__16Px]: hasVariant(variants, "size", "_16Px"),
              [sty.svg__size__18Px]: hasVariant(variants, "size", "_18Px"),
              [sty.svg__size__24Px]: hasVariant(variants, "size", "_24Px"),
              [sty.svg__size__32Px]: hasVariant(variants, "size", "_32Px")
            })}
            role={"img"}
          />
        </div>
      </button>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "svgParent", "svg"],
  button: ["button", "svgParent", "svg"],
  svgParent: ["svgParent", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: "button";
  svgParent: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonCircleDelete__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonCircleDelete__VariantsArgs;
    args?: PlasmicButtonCircleDelete__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButtonCircleDelete__Fetches;
  } & Omit<PlasmicButtonCircleDelete__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonCircleDelete__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonCircleDelete__ArgProps,
      internalVariantPropNames: PlasmicButtonCircleDelete__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButtonCircleDelete__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonCircleDelete";
  } else {
    func.displayName = `PlasmicButtonCircleDelete.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonCircleDelete = Object.assign(
  // Top-level PlasmicButtonCircleDelete renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    svgParent: makeNodeComponent("svgParent"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicButtonCircleDelete
    internalVariantProps: PlasmicButtonCircleDelete__VariantProps,
    internalArgProps: PlasmicButtonCircleDelete__ArgProps
  }
);

export default PlasmicButtonCircleDelete;
/* prettier-ignore-end */
