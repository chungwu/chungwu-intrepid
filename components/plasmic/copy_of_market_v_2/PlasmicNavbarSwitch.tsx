// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: OecOEfFFIUzxZ0j
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
import * as sty from "./PlasmicNavbarSwitch.module.css"; // plasmic-import: OecOEfFFIUzxZ0j/css

import Icon161Icon from "./icons/PlasmicIcon__Icon161"; // plasmic-import: ADTNXhJ2ggTBjOm/icon
import Icon170Icon from "./icons/PlasmicIcon__Icon170"; // plasmic-import: 8dZnFQrWLcwMPnF/icon

export type PlasmicNavbarSwitch__VariantMembers = {
  close: "close";
  size: "_16" | "_18" | "_24" | "_32" | "_36" | "_40" | "_48";
};

export type PlasmicNavbarSwitch__VariantsArgs = {
  close?: SingleBooleanChoiceArg<"close">;
  size?: SingleChoiceArg<"_16" | "_18" | "_24" | "_32" | "_36" | "_40" | "_48">;
};

type VariantPropType = keyof PlasmicNavbarSwitch__VariantsArgs;
export const PlasmicNavbarSwitch__VariantProps = new Array<VariantPropType>(
  "close",
  "size"
);

export type PlasmicNavbarSwitch__ArgsType = {
  target?: string;
  trigger?: string;
};

type ArgPropType = keyof PlasmicNavbarSwitch__ArgsType;
export const PlasmicNavbarSwitch__ArgProps = new Array<ArgPropType>(
  "target",
  "trigger"
);

export type PlasmicNavbarSwitch__OverridesType = {
  root?: p.Flex<"div">;
  parent?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
};

export interface DefaultNavbarSwitchProps {
  target?: string;
  trigger?: string;
  close?: SingleBooleanChoiceArg<"close">;
  size?: SingleChoiceArg<"_16" | "_18" | "_24" | "_32" | "_36" | "_40" | "_48">;
  className?: string;
}

function PlasmicNavbarSwitch__RenderFunc(props: {
  variants: PlasmicNavbarSwitch__VariantsArgs;
  args: PlasmicNavbarSwitch__ArgsType;
  overrides: PlasmicNavbarSwitch__OverridesType;
  dataFetches?: PlasmicNavbarSwitch__Fetches;
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
        [sty.root__close]: hasVariant(variants, "close", "close")
      })}
    >
      <button
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.button, sty.parent, {
          [sty.parent__close]: hasVariant(variants, "close", "close"),
          [sty.parent__size__16]: hasVariant(variants, "size", "_16"),
          [sty.parent__size__18]: hasVariant(variants, "size", "_18"),
          [sty.parent__size__24]: hasVariant(variants, "size", "_24"),
          [sty.parent__size__32]: hasVariant(variants, "size", "_32"),
          [sty.parent__size__36]: hasVariant(variants, "size", "_36"),
          [sty.parent__size__40]: hasVariant(variants, "size", "_40"),
          [sty.parent__size__48]: hasVariant(variants, "size", "_48")
        })}
      >
        <p.PlasmicIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          PlasmicIconType={
            hasVariant(variants, "close", "close") ? Icon170Icon : Icon161Icon
          }
          className={classNames(defaultcss.all, sty.svg, {
            [sty.svg__close]: hasVariant(variants, "close", "close")
          })}
          role={"img"}
        />
      </button>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "parent", "svg"],
  parent: ["parent", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  parent: "button";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarSwitch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarSwitch__VariantsArgs;
    args?: PlasmicNavbarSwitch__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavbarSwitch__Fetches;
  } & Omit<PlasmicNavbarSwitch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbarSwitch__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavbarSwitch__ArgProps,
      internalVariantPropNames: PlasmicNavbarSwitch__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavbarSwitch__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarSwitch";
  } else {
    func.displayName = `PlasmicNavbarSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarSwitch = Object.assign(
  // Top-level PlasmicNavbarSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNavbarSwitch
    internalVariantProps: PlasmicNavbarSwitch__VariantProps,
    internalArgProps: PlasmicNavbarSwitch__ArgProps
  }
);

export default PlasmicNavbarSwitch;
/* prettier-ignore-end */