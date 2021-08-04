// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: _0UAhyxjhw8Dnc9
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

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicBadgeVerification.module.css"; // plasmic-import: _0UAhyxjhw8Dnc9/css

import Icon129Icon from "./icons/PlasmicIcon__Icon129"; // plasmic-import: 3f8NxRRxXPSDSg5/icon

export type PlasmicBadgeVerification__VariantMembers = {};

export type PlasmicBadgeVerification__VariantsArgs = {};
type VariantPropType = keyof PlasmicBadgeVerification__VariantsArgs;
export const PlasmicBadgeVerification__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBadgeVerification__ArgsType = {};
type ArgPropType = keyof PlasmicBadgeVerification__ArgsType;
export const PlasmicBadgeVerification__ArgProps = new Array<ArgPropType>();

export type PlasmicBadgeVerification__OverridesType = {
  root?: p.Flex<"div">;
  parent?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultBadgeVerificationProps {
  className?: string;
}

function PlasmicBadgeVerification__RenderFunc(props: {
  variants: PlasmicBadgeVerification__VariantsArgs;
  args: PlasmicBadgeVerification__ArgsType;
  overrides: PlasmicBadgeVerification__OverridesType;
  dataFetches?: PlasmicBadgeVerification__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"parent"}
          data-plasmic-override={overrides.parent}
          hasGap={true}
          className={classNames(defaultcss.all, sty.parent)}
        >
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <Icon129Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, sty.svg)}
              role={"img"}
            />
          ) : null}
          {(hasVariant(globalVariants, "screen", "desktop") ? true : true) ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox
              )}
            >
              {"Verified"}
            </div>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "parent", "svg", "freeBox"],
  parent: ["parent", "svg", "freeBox"],
  svg: ["svg"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  parent: "div";
  svg: "svg";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBadgeVerification__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBadgeVerification__VariantsArgs;
    args?: PlasmicBadgeVerification__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBadgeVerification__Fetches;
  } & Omit<PlasmicBadgeVerification__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBadgeVerification__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBadgeVerification__ArgProps,
      internalVariantPropNames: PlasmicBadgeVerification__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicBadgeVerification__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBadgeVerification";
  } else {
    func.displayName = `PlasmicBadgeVerification.${nodeName}`;
  }
  return func;
}

export const PlasmicBadgeVerification = Object.assign(
  // Top-level PlasmicBadgeVerification renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicBadgeVerification
    internalVariantProps: PlasmicBadgeVerification__VariantProps,
    internalArgProps: PlasmicBadgeVerification__ArgProps
  }
);

export default PlasmicBadgeVerification;
/* prettier-ignore-end */
