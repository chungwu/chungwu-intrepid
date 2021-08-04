// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: L1r4sBRgwURapY
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
import * as sty from "./PlasmicProgressBar.module.css"; // plasmic-import: L1r4sBRgwURapY/css

export type PlasmicProgressBar__VariantMembers = {
  progress:
    | "_20"
    | "_30"
    | "_40"
    | "_50"
    | "_60"
    | "_70"
    | "_80"
    | "_90"
    | "_100";
};

export type PlasmicProgressBar__VariantsArgs = {
  progress?: SingleChoiceArg<
    "_20" | "_30" | "_40" | "_50" | "_60" | "_70" | "_80" | "_90" | "_100"
  >;
};

type VariantPropType = keyof PlasmicProgressBar__VariantsArgs;
export const PlasmicProgressBar__VariantProps = new Array<VariantPropType>(
  "progress"
);

export type PlasmicProgressBar__ArgsType = {};
type ArgPropType = keyof PlasmicProgressBar__ArgsType;
export const PlasmicProgressBar__ArgProps = new Array<ArgPropType>();

export type PlasmicProgressBar__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultProgressBarProps {
  progress?: SingleChoiceArg<
    "_20" | "_30" | "_40" | "_50" | "_60" | "_70" | "_80" | "_90" | "_100"
  >;
  className?: string;
}

function PlasmicProgressBar__RenderFunc(props: {
  variants: PlasmicProgressBar__VariantsArgs;
  args: PlasmicProgressBar__ArgsType;
  overrides: PlasmicProgressBar__OverridesType;
  dataFetches?: PlasmicProgressBar__Fetches;
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
        [sty.root__progress__100]: hasVariant(variants, "progress", "_100")
      })}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox, {
          [sty.freeBox__progress__100]: hasVariant(
            variants,
            "progress",
            "_100"
          ),
          [sty.freeBox__progress__20]: hasVariant(variants, "progress", "_20"),
          [sty.freeBox__progress__30]: hasVariant(variants, "progress", "_30"),
          [sty.freeBox__progress__40]: hasVariant(variants, "progress", "_40"),
          [sty.freeBox__progress__50]: hasVariant(variants, "progress", "_50"),
          [sty.freeBox__progress__60]: hasVariant(variants, "progress", "_60"),
          [sty.freeBox__progress__70]: hasVariant(variants, "progress", "_70"),
          [sty.freeBox__progress__80]: hasVariant(variants, "progress", "_80"),
          [sty.freeBox__progress__90]: hasVariant(variants, "progress", "_90")
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProgressBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProgressBar__VariantsArgs;
    args?: PlasmicProgressBar__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicProgressBar__Fetches;
  } & Omit<PlasmicProgressBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProgressBar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicProgressBar__ArgProps,
      internalVariantPropNames: PlasmicProgressBar__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicProgressBar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProgressBar";
  } else {
    func.displayName = `PlasmicProgressBar.${nodeName}`;
  }
  return func;
}

export const PlasmicProgressBar = Object.assign(
  // Top-level PlasmicProgressBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicProgressBar
    internalVariantProps: PlasmicProgressBar__VariantProps,
    internalArgProps: PlasmicProgressBar__ArgProps
  }
);

export default PlasmicProgressBar;
/* prettier-ignore-end */