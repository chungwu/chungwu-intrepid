// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: gY-azC_pqF0jjM
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
import * as sty from "./PlasmicNavbarBrief.module.css"; // plasmic-import: gY-azC_pqF0jjM/css

import BriefOrdersIcon from "./icons/PlasmicIcon__BriefOrders"; // plasmic-import: J1TFcrPZvPr-xcg/icon

export type PlasmicNavbarBrief__VariantMembers = {
  light: "light";
};

export type PlasmicNavbarBrief__VariantsArgs = {
  light?: SingleBooleanChoiceArg<"light">;
};

type VariantPropType = keyof PlasmicNavbarBrief__VariantsArgs;
export const PlasmicNavbarBrief__VariantProps = new Array<VariantPropType>(
  "light"
);

export type PlasmicNavbarBrief__ArgsType = {};
type ArgPropType = keyof PlasmicNavbarBrief__ArgsType;
export const PlasmicNavbarBrief__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbarBrief__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultNavbarBriefProps {
  light?: SingleBooleanChoiceArg<"light">;
  className?: string;
}

function PlasmicNavbarBrief__RenderFunc(props: {
  variants: PlasmicNavbarBrief__VariantsArgs;
  args: PlasmicNavbarBrief__ArgsType;
  overrides: PlasmicNavbarBrief__OverridesType;
  dataFetches?: PlasmicNavbarBrief__Fetches;
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
        [sty.root__light]: hasVariant(variants, "light", "light")
      })}
    >
      <BriefOrdersIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg, {
          [sty.svg__light]: hasVariant(variants, "light", "light")
        })}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarBrief__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarBrief__VariantsArgs;
    args?: PlasmicNavbarBrief__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavbarBrief__Fetches;
  } & Omit<PlasmicNavbarBrief__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbarBrief__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavbarBrief__ArgProps,
      internalVariantPropNames: PlasmicNavbarBrief__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavbarBrief__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarBrief";
  } else {
    func.displayName = `PlasmicNavbarBrief.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarBrief = Object.assign(
  // Top-level PlasmicNavbarBrief renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNavbarBrief
    internalVariantProps: PlasmicNavbarBrief__VariantProps,
    internalArgProps: PlasmicNavbarBrief__ArgProps
  }
);

export default PlasmicNavbarBrief;
/* prettier-ignore-end */
