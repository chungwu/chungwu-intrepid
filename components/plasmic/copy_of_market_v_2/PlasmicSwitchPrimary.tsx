// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: NI4mgAsheQjrPj
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
import * as sty from "./PlasmicSwitchPrimary.module.css"; // plasmic-import: NI4mgAsheQjrPj/css

export type PlasmicSwitchPrimary__VariantMembers = {
  _switch: "_switch";
  disabled: "closed" | "open";
  color: "brand";
};

export type PlasmicSwitchPrimary__VariantsArgs = {
  _switch?: SingleBooleanChoiceArg<"_switch">;
  disabled?: SingleChoiceArg<"closed" | "open">;
  color?: MultiChoiceArg<"brand">;
};

type VariantPropType = keyof PlasmicSwitchPrimary__VariantsArgs;
export const PlasmicSwitchPrimary__VariantProps = new Array<VariantPropType>(
  "_switch",
  "disabled",
  "color"
);

export type PlasmicSwitchPrimary__ArgsType = {};
type ArgPropType = keyof PlasmicSwitchPrimary__ArgsType;
export const PlasmicSwitchPrimary__ArgProps = new Array<ArgPropType>();

export type PlasmicSwitchPrimary__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultSwitchPrimaryProps {
  _switch?: SingleBooleanChoiceArg<"_switch">;
  disabled?: SingleChoiceArg<"closed" | "open">;
  color?: MultiChoiceArg<"brand">;
  className?: string;
}

function PlasmicSwitchPrimary__RenderFunc(props: {
  variants: PlasmicSwitchPrimary__VariantsArgs;
  args: PlasmicSwitchPrimary__ArgsType;
  overrides: PlasmicSwitchPrimary__OverridesType;
  dataFetches?: PlasmicSwitchPrimary__Fetches;
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
        [sty.root___switch]: hasVariant(variants, "_switch", "_switch"),
        [sty.root__color_brand__switch]:
          hasVariant(variants, "color", "brand") &&
          hasVariant(variants, "_switch", "_switch"),
        [sty.root__disabled_closed]: hasVariant(variants, "disabled", "closed"),
        [sty.root__disabled_open]: hasVariant(variants, "disabled", "open"),
        [sty.root__disabled_open_color_brand]:
          hasVariant(variants, "disabled", "open") &&
          hasVariant(variants, "color", "brand")
      })}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox, {
          [sty.freeBox___switch]: hasVariant(variants, "_switch", "_switch"),
          [sty.freeBox__disabled_closed]: hasVariant(
            variants,
            "disabled",
            "closed"
          ),
          [sty.freeBox__disabled_open]: hasVariant(
            variants,
            "disabled",
            "open"
          ),
          [sty.freeBox__disabled_open_color_brand]:
            hasVariant(variants, "disabled", "open") &&
            hasVariant(variants, "color", "brand")
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
  PlasmicSwitchPrimary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSwitchPrimary__VariantsArgs;
    args?: PlasmicSwitchPrimary__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSwitchPrimary__Fetches;
  } & Omit<PlasmicSwitchPrimary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSwitchPrimary__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSwitchPrimary__ArgProps,
      internalVariantPropNames: PlasmicSwitchPrimary__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSwitchPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSwitchPrimary";
  } else {
    func.displayName = `PlasmicSwitchPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitchPrimary = Object.assign(
  // Top-level PlasmicSwitchPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSwitchPrimary
    internalVariantProps: PlasmicSwitchPrimary__VariantProps,
    internalArgProps: PlasmicSwitchPrimary__ArgProps
  }
);

export default PlasmicSwitchPrimary;
/* prettier-ignore-end */
