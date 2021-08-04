// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: VlQH8oxKiOADB
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
import * as sty from "./PlasmicRatingReviewAmount.module.css"; // plasmic-import: VlQH8oxKiOADB/css

export type PlasmicRatingReviewAmount__VariantMembers = {};

export type PlasmicRatingReviewAmount__VariantsArgs = {};
type VariantPropType = keyof PlasmicRatingReviewAmount__VariantsArgs;
export const PlasmicRatingReviewAmount__VariantProps =
  new Array<VariantPropType>();

export type PlasmicRatingReviewAmount__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRatingReviewAmount__ArgsType;
export const PlasmicRatingReviewAmount__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicRatingReviewAmount__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultRatingReviewAmountProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicRatingReviewAmount__RenderFunc(props: {
  variants: PlasmicRatingReviewAmount__VariantsArgs;
  args: PlasmicRatingReviewAmount__ArgsType;
  overrides: PlasmicRatingReviewAmount__OverridesType;
  dataFetches?: PlasmicRatingReviewAmount__Fetches;
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
      <div className={classNames(defaultcss.all, sty.freeBox__vwU8)}>
        <div className={classNames(defaultcss.all, sty.freeBox__epEkU)}>
          {p.renderPlasmicSlot({
            defaultContents: "(12)",
            value: args.children,
            className: classNames(sty.slotChildren)
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRatingReviewAmount__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRatingReviewAmount__VariantsArgs;
    args?: PlasmicRatingReviewAmount__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicRatingReviewAmount__Fetches;
  } & Omit<PlasmicRatingReviewAmount__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRatingReviewAmount__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicRatingReviewAmount__ArgProps,
      internalVariantPropNames: PlasmicRatingReviewAmount__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicRatingReviewAmount__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatingReviewAmount";
  } else {
    func.displayName = `PlasmicRatingReviewAmount.${nodeName}`;
  }
  return func;
}

export const PlasmicRatingReviewAmount = Object.assign(
  // Top-level PlasmicRatingReviewAmount renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRatingReviewAmount
    internalVariantProps: PlasmicRatingReviewAmount__VariantProps,
    internalArgProps: PlasmicRatingReviewAmount__ArgProps
  }
);

export default PlasmicRatingReviewAmount;
/* prettier-ignore-end */