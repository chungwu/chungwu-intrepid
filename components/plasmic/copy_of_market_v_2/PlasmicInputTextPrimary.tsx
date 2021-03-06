// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: 3HTlzeJK29QS8Vu
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
import * as sty from "./PlasmicInputTextPrimary.module.css"; // plasmic-import: 3HTlzeJK29QS8Vu/css

export type PlasmicInputTextPrimary__VariantMembers = {
  type: "primary" | "secondary" | "underline";
  width: "_90" | "_160" | "_180" | "_270" | "_360" | "_540" | "_720";
  height: "_32" | "_36" | "_40" | "_48";
  background: "white" | "grey" | "black";
};

export type PlasmicInputTextPrimary__VariantsArgs = {
  type?: SingleChoiceArg<"primary" | "secondary" | "underline">;
  width?: SingleChoiceArg<
    "_90" | "_160" | "_180" | "_270" | "_360" | "_540" | "_720"
  >;
  height?: SingleChoiceArg<"_32" | "_36" | "_40" | "_48">;
  background?: SingleChoiceArg<"white" | "grey" | "black">;
};

type VariantPropType = keyof PlasmicInputTextPrimary__VariantsArgs;
export const PlasmicInputTextPrimary__VariantProps = new Array<VariantPropType>(
  "type",
  "width",
  "height",
  "background"
);

export type PlasmicInputTextPrimary__ArgsType = {};
type ArgPropType = keyof PlasmicInputTextPrimary__ArgsType;
export const PlasmicInputTextPrimary__ArgProps = new Array<ArgPropType>();

export type PlasmicInputTextPrimary__OverridesType = {
  root?: p.Flex<"div">;
  parent?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
};

export interface DefaultInputTextPrimaryProps {
  type?: SingleChoiceArg<"primary" | "secondary" | "underline">;
  width?: SingleChoiceArg<
    "_90" | "_160" | "_180" | "_270" | "_360" | "_540" | "_720"
  >;
  height?: SingleChoiceArg<"_32" | "_36" | "_40" | "_48">;
  background?: SingleChoiceArg<"white" | "grey" | "black">;
  className?: string;
}

function PlasmicInputTextPrimary__RenderFunc(props: {
  variants: PlasmicInputTextPrimary__VariantsArgs;
  args: PlasmicInputTextPrimary__ArgsType;
  overrides: PlasmicInputTextPrimary__OverridesType;
  dataFetches?: PlasmicInputTextPrimary__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__width__90]: hasVariant(variants, "width", "_90")
      })}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__background_white]: hasVariant(
            variants,
            "background",
            "white"
          ),
          [sty.parent__height__32]: hasVariant(variants, "height", "_32"),
          [sty.parent__height__36]: hasVariant(variants, "height", "_36"),
          [sty.parent__height__40]: hasVariant(variants, "height", "_40"),
          [sty.parent__height__48]: hasVariant(variants, "height", "_48"),
          [sty.parent__width__160]: hasVariant(variants, "width", "_160"),
          [sty.parent__width__180]: hasVariant(variants, "width", "_180"),
          [sty.parent__width__270]: hasVariant(variants, "width", "_270"),
          [sty.parent__width__360]: hasVariant(variants, "width", "_360"),
          [sty.parent__width__540]: hasVariant(variants, "width", "_540"),
          [sty.parent__width__720]: hasVariant(variants, "width", "_720"),
          [sty.parent__width__90]: hasVariant(variants, "width", "_90")
        })}
      >
        <input
          data-plasmic-name={"textbox"}
          data-plasmic-override={overrides.textbox}
          className={classNames(defaultcss.input, sty.textbox, {
            [sty.textbox__background_black]: hasVariant(
              variants,
              "background",
              "black"
            ),
            [sty.textbox__background_grey]: hasVariant(
              variants,
              "background",
              "grey"
            ),
            [sty.textbox__background_white]: hasVariant(
              variants,
              "background",
              "white"
            ),
            [sty.textbox__height__32]: hasVariant(variants, "height", "_32"),
            [sty.textbox__height__36]: hasVariant(variants, "height", "_36"),
            [sty.textbox__height__40]: hasVariant(variants, "height", "_40"),
            [sty.textbox__height__48]: hasVariant(variants, "height", "_48"),
            [sty.textbox__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            ),
            [sty.textbox__type_underline]: hasVariant(
              variants,
              "type",
              "underline"
            ),
            [sty.textbox__width__90]: hasVariant(variants, "width", "_90")
          })}
          placeholder={"Enter text" as const}
          size={1 as const}
          type={"text" as const}
          value={"" as const}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "parent", "textbox"],
  parent: ["parent", "textbox"],
  textbox: ["textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  parent: "div";
  textbox: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputTextPrimary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputTextPrimary__VariantsArgs;
    args?: PlasmicInputTextPrimary__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicInputTextPrimary__Fetches;
  } & Omit<PlasmicInputTextPrimary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputTextPrimary__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputTextPrimary__ArgProps,
      internalVariantPropNames: PlasmicInputTextPrimary__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicInputTextPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputTextPrimary";
  } else {
    func.displayName = `PlasmicInputTextPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicInputTextPrimary = Object.assign(
  // Top-level PlasmicInputTextPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    textbox: makeNodeComponent("textbox"),

    // Metadata about props expected for PlasmicInputTextPrimary
    internalVariantProps: PlasmicInputTextPrimary__VariantProps,
    internalArgProps: PlasmicInputTextPrimary__ArgProps
  }
);

export default PlasmicInputTextPrimary;
/* prettier-ignore-end */
