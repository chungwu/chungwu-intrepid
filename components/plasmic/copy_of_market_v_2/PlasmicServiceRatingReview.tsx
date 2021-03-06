// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: Cfubo4rSHuQYiq
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
import * as sty from "./PlasmicServiceRatingReview.module.css"; // plasmic-import: Cfubo4rSHuQYiq/css

import Icon48Icon from "./icons/PlasmicIcon__Icon48"; // plasmic-import: 6jGAOUno1uLeW1A/icon

export type PlasmicServiceRatingReview__VariantMembers = {};

export type PlasmicServiceRatingReview__VariantsArgs = {};
type VariantPropType = keyof PlasmicServiceRatingReview__VariantsArgs;
export const PlasmicServiceRatingReview__VariantProps =
  new Array<VariantPropType>();

export type PlasmicServiceRatingReview__ArgsType = {};
type ArgPropType = keyof PlasmicServiceRatingReview__ArgsType;
export const PlasmicServiceRatingReview__ArgProps = new Array<ArgPropType>();

export type PlasmicServiceRatingReview__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  serviceAggregateRating?: p.Flex<"div">;
  serviceAggregateReviews?: p.Flex<"div">;
};

export interface DefaultServiceRatingReviewProps {
  className?: string;
}

function PlasmicServiceRatingReview__RenderFunc(props: {
  variants: PlasmicServiceRatingReview__VariantsArgs;
  args: PlasmicServiceRatingReview__ArgsType;
  overrides: PlasmicServiceRatingReview__OverridesType;
  dataFetches?: PlasmicServiceRatingReview__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

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
      <div className={classNames(defaultcss.all, sty.freeBox__bfdA4)}>
        <Icon48Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg)}
          role={"img"}
        />
      </div>

      <div
        data-plasmic-name={"serviceAggregateRating"}
        data-plasmic-override={overrides.serviceAggregateRating}
        className={classNames(defaultcss.all, sty.serviceAggregateRating)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox__sMnO
          )}
        >
          {"4.9"}
        </div>
      </div>

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.freeBox__fq6NO
        )}
      >
        {"|"}
      </div>

      <div
        data-plasmic-name={"serviceAggregateReviews"}
        data-plasmic-override={overrides.serviceAggregateReviews}
        className={classNames(defaultcss.all, sty.serviceAggregateReviews)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox___48CmA
          )}
        >
          {"10"}
        </div>
      </div>

      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.freeBox__f1Zq4
        )}
      >
        {"Reviews"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "serviceAggregateRating", "serviceAggregateReviews"],
  svg: ["svg"],
  serviceAggregateRating: ["serviceAggregateRating"],
  serviceAggregateReviews: ["serviceAggregateReviews"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  serviceAggregateRating: "div";
  serviceAggregateReviews: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServiceRatingReview__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServiceRatingReview__VariantsArgs;
    args?: PlasmicServiceRatingReview__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicServiceRatingReview__Fetches;
  } & Omit<PlasmicServiceRatingReview__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicServiceRatingReview__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicServiceRatingReview__ArgProps,
      internalVariantPropNames: PlasmicServiceRatingReview__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicServiceRatingReview__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServiceRatingReview";
  } else {
    func.displayName = `PlasmicServiceRatingReview.${nodeName}`;
  }
  return func;
}

export const PlasmicServiceRatingReview = Object.assign(
  // Top-level PlasmicServiceRatingReview renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    serviceAggregateRating: makeNodeComponent("serviceAggregateRating"),
    serviceAggregateReviews: makeNodeComponent("serviceAggregateReviews"),

    // Metadata about props expected for PlasmicServiceRatingReview
    internalVariantProps: PlasmicServiceRatingReview__VariantProps,
    internalArgProps: PlasmicServiceRatingReview__ArgProps
  }
);

export default PlasmicServiceRatingReview;
/* prettier-ignore-end */
