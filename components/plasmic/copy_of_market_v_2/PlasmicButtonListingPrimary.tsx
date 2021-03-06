// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: 6y7JoWSUIghIOQy
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
import * as sty from "./PlasmicButtonListingPrimary.module.css"; // plasmic-import: 6y7JoWSUIghIOQy/css

import ListingIcon from "./icons/PlasmicIcon__Listing"; // plasmic-import: V-Z6DuZPre8UBS6/icon

export type PlasmicButtonListingPrimary__VariantMembers = {};

export type PlasmicButtonListingPrimary__VariantsArgs = {};
type VariantPropType = keyof PlasmicButtonListingPrimary__VariantsArgs;
export const PlasmicButtonListingPrimary__VariantProps =
  new Array<VariantPropType>();

export type PlasmicButtonListingPrimary__ArgsType = {};
type ArgPropType = keyof PlasmicButtonListingPrimary__ArgsType;
export const PlasmicButtonListingPrimary__ArgProps = new Array<ArgPropType>();

export type PlasmicButtonListingPrimary__OverridesType = {
  root?: p.Flex<"button">;
  navbarListButtonTextParent?: p.Flex<"div">;
  navbarListButtonSvg?: p.Flex<"svg">;
  navbarListButtonText?: p.Flex<"div">;
};

export interface DefaultButtonListingPrimaryProps {
  className?: string;
}

function PlasmicButtonListingPrimary__RenderFunc(props: {
  variants: PlasmicButtonListingPrimary__VariantsArgs;
  args: PlasmicButtonListingPrimary__ArgsType;
  overrides: PlasmicButtonListingPrimary__OverridesType;
  dataFetches?: PlasmicButtonListingPrimary__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.button, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"navbarListButtonTextParent"}
        data-plasmic-override={overrides.navbarListButtonTextParent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.navbarListButtonTextParent)}
      >
        <ListingIcon
          data-plasmic-name={"navbarListButtonSvg"}
          data-plasmic-override={overrides.navbarListButtonSvg}
          className={classNames(defaultcss.all, sty.navbarListButtonSvg)}
          role={"img"}
        />

        <div
          data-plasmic-name={"navbarListButtonText"}
          data-plasmic-override={overrides.navbarListButtonText}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.navbarListButtonText
          )}
        >
          {"New listing"}
        </div>
      </p.Stack>
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbarListButtonTextParent",
    "navbarListButtonSvg",
    "navbarListButtonText"
  ],
  navbarListButtonTextParent: [
    "navbarListButtonTextParent",
    "navbarListButtonSvg",
    "navbarListButtonText"
  ],
  navbarListButtonSvg: ["navbarListButtonSvg"],
  navbarListButtonText: ["navbarListButtonText"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  navbarListButtonTextParent: "div";
  navbarListButtonSvg: "svg";
  navbarListButtonText: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonListingPrimary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonListingPrimary__VariantsArgs;
    args?: PlasmicButtonListingPrimary__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButtonListingPrimary__Fetches;
  } & Omit<PlasmicButtonListingPrimary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonListingPrimary__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButtonListingPrimary__ArgProps,
      internalVariantPropNames: PlasmicButtonListingPrimary__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButtonListingPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonListingPrimary";
  } else {
    func.displayName = `PlasmicButtonListingPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonListingPrimary = Object.assign(
  // Top-level PlasmicButtonListingPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbarListButtonTextParent: makeNodeComponent("navbarListButtonTextParent"),
    navbarListButtonSvg: makeNodeComponent("navbarListButtonSvg"),
    navbarListButtonText: makeNodeComponent("navbarListButtonText"),

    // Metadata about props expected for PlasmicButtonListingPrimary
    internalVariantProps: PlasmicButtonListingPrimary__VariantProps,
    internalArgProps: PlasmicButtonListingPrimary__ArgProps
  }
);

export default PlasmicButtonListingPrimary;
/* prettier-ignore-end */
