// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: VGML93vWMU9W43k
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
import * as sty from "./PlasmicTagBadgeVerification.module.css"; // plasmic-import: VGML93vWMU9W43k/css

import Icon129Icon from "./icons/PlasmicIcon__Icon129"; // plasmic-import: 3f8NxRRxXPSDSg5/icon

export type PlasmicTagBadgeVerification__VariantMembers = {
  size: "_14" | "_16" | "_18" | "_24";
};

export type PlasmicTagBadgeVerification__VariantsArgs = {
  size?: SingleChoiceArg<"_14" | "_16" | "_18" | "_24">;
};

type VariantPropType = keyof PlasmicTagBadgeVerification__VariantsArgs;
export const PlasmicTagBadgeVerification__VariantProps =
  new Array<VariantPropType>("size");

export type PlasmicTagBadgeVerification__ArgsType = {};
type ArgPropType = keyof PlasmicTagBadgeVerification__ArgsType;
export const PlasmicTagBadgeVerification__ArgProps = new Array<ArgPropType>();

export type PlasmicTagBadgeVerification__OverridesType = {
  root?: p.Flex<"div">;
  parent?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultTagBadgeVerificationProps {
  size?: SingleChoiceArg<"_14" | "_16" | "_18" | "_24">;
  className?: string;
}

function PlasmicTagBadgeVerification__RenderFunc(props: {
  variants: PlasmicTagBadgeVerification__VariantsArgs;
  args: PlasmicTagBadgeVerification__ArgsType;
  overrides: PlasmicTagBadgeVerification__OverridesType;
  dataFetches?: PlasmicTagBadgeVerification__Fetches;
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
        [sty.root__size__14]: hasVariant(variants, "size", "_14"),
        [sty.root__size__16]: hasVariant(variants, "size", "_16"),
        [sty.root__size__18]: hasVariant(variants, "size", "_18"),
        [sty.root__size__24]: hasVariant(variants, "size", "_24")
      })}
    >
      <div
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__size__14]: hasVariant(variants, "size", "_14"),
          [sty.parent__size__16]: hasVariant(variants, "size", "_16"),
          [sty.parent__size__18]: hasVariant(variants, "size", "_18"),
          [sty.parent__size__24]: hasVariant(variants, "size", "_24")
        })}
      >
        <Icon129Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg, {
            [sty.svg__size__14]: hasVariant(variants, "size", "_14"),
            [sty.svg__size__16]: hasVariant(variants, "size", "_16"),
            [sty.svg__size__18]: hasVariant(variants, "size", "_18"),
            [sty.svg__size__24]: hasVariant(variants, "size", "_24")
          })}
          role={"img"}
        />
      </div>
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
  parent: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTagBadgeVerification__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTagBadgeVerification__VariantsArgs;
    args?: PlasmicTagBadgeVerification__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTagBadgeVerification__Fetches;
  } & Omit<PlasmicTagBadgeVerification__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTagBadgeVerification__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTagBadgeVerification__ArgProps,
      internalVariantPropNames: PlasmicTagBadgeVerification__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTagBadgeVerification__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTagBadgeVerification";
  } else {
    func.displayName = `PlasmicTagBadgeVerification.${nodeName}`;
  }
  return func;
}

export const PlasmicTagBadgeVerification = Object.assign(
  // Top-level PlasmicTagBadgeVerification renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicTagBadgeVerification
    internalVariantProps: PlasmicTagBadgeVerification__VariantProps,
    internalArgProps: PlasmicTagBadgeVerification__ArgProps
  }
);

export default PlasmicTagBadgeVerification;
/* prettier-ignore-end */