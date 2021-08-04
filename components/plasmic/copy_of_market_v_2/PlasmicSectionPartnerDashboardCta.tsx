// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: NzgqLPzdG_KQ9O
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
import CardCta from "../../CardCta"; // plasmic-import: GOi2fER7xMDJsT/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicSectionPartnerDashboardCta.module.css"; // plasmic-import: NzgqLPzdG_KQ9O/css

export type PlasmicSectionPartnerDashboardCta__VariantMembers = {};

export type PlasmicSectionPartnerDashboardCta__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionPartnerDashboardCta__VariantsArgs;
export const PlasmicSectionPartnerDashboardCta__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionPartnerDashboardCta__ArgsType = {};
type ArgPropType = keyof PlasmicSectionPartnerDashboardCta__ArgsType;
export const PlasmicSectionPartnerDashboardCta__ArgProps =
  new Array<ArgPropType>();

export type PlasmicSectionPartnerDashboardCta__OverridesType = {
  root?: p.Flex<"div">;
  cardCta?: p.Flex<typeof CardCta>;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<"img">;
};

export interface DefaultSectionPartnerDashboardCtaProps {
  className?: string;
}

function PlasmicSectionPartnerDashboardCta__RenderFunc(props: {
  variants: PlasmicSectionPartnerDashboardCta__VariantsArgs;
  args: PlasmicSectionPartnerDashboardCta__ArgsType;
  overrides: PlasmicSectionPartnerDashboardCta__OverridesType;
  dataFetches?: PlasmicSectionPartnerDashboardCta__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <CardCta
        data-plasmic-name={"cardCta"}
        data-plasmic-override={overrides.cardCta}
        center={
          hasVariant(globalVariants, "screen", "mobile")
            ? ("center" as const)
            : undefined
        }
        className={classNames("__wab_instance", sty.cardCta)}
        slot={
          hasVariant(globalVariants, "screen", "desktop")
            ? "Gain the insights you need to grow—use a single dashboard to manage orders, projects, collaborators, reviews, and payments from anywhere.\n"
            : "Gain the insights you need to grow—use a single dashboard to manage orders, projects, reviews, and payments from anywhere.\n"
        }
      >
        {hasVariant(globalVariants, "screen", "desktop")
          ? "Automated business management for creative entrepreneurs."
          : "Manage and grow your business like never before"}
      </CardCta>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          role={"img"}
          src={"/plasmic/copy_of_market_v_2/images/intrepidDashboardpng.png"}
        />
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cardCta", "freeBox", "img"],
  cardCta: ["cardCta"],
  freeBox: ["freeBox", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  cardCta: typeof CardCta;
  freeBox: "div";
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionPartnerDashboardCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionPartnerDashboardCta__VariantsArgs;
    args?: PlasmicSectionPartnerDashboardCta__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSectionPartnerDashboardCta__Fetches;
  } & Omit<PlasmicSectionPartnerDashboardCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionPartnerDashboardCta__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSectionPartnerDashboardCta__ArgProps,
      internalVariantPropNames: PlasmicSectionPartnerDashboardCta__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSectionPartnerDashboardCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionPartnerDashboardCta";
  } else {
    func.displayName = `PlasmicSectionPartnerDashboardCta.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionPartnerDashboardCta = Object.assign(
  // Top-level PlasmicSectionPartnerDashboardCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cardCta: makeNodeComponent("cardCta"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicSectionPartnerDashboardCta
    internalVariantProps: PlasmicSectionPartnerDashboardCta__VariantProps,
    internalArgProps: PlasmicSectionPartnerDashboardCta__ArgProps
  }
);

export default PlasmicSectionPartnerDashboardCta;
/* prettier-ignore-end */
