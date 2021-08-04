// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: V3iZ52VLcm9tXoA
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
import CardFeatureDescription from "../../CardFeatureDescription"; // plasmic-import: hLrFJ-JgiWwHRG/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicSectionMemberFeatures.module.css"; // plasmic-import: V3iZ52VLcm9tXoA/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicSectionMemberFeatures__VariantMembers = {};

export type PlasmicSectionMemberFeatures__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionMemberFeatures__VariantsArgs;
export const PlasmicSectionMemberFeatures__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionMemberFeatures__ArgsType = {};
type ArgPropType = keyof PlasmicSectionMemberFeatures__ArgsType;
export const PlasmicSectionMemberFeatures__ArgProps = new Array<ArgPropType>();

export type PlasmicSectionMemberFeatures__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSectionMemberFeaturesProps {
  className?: string;
}

function PlasmicSectionMemberFeatures__RenderFunc(props: {
  variants: PlasmicSectionMemberFeatures__VariantsArgs;
  args: PlasmicSectionMemberFeatures__ArgsType;
  overrides: PlasmicSectionMemberFeatures__OverridesType;
  dataFetches?: PlasmicSectionMemberFeatures__Fetches;
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
      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.freeBox__g95Bd
        )}
      >
        {"A marketplace built for modern startups and entrepreneurs."}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__ubu2G)}
      >
        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__qNAtc
          )}
          headline={"Go to market fast"}
          text={
            "Launch an MVP, transform your business, or augment your staff."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__dfv0O
          )}
          headline={"Work from anywhere"}
          text={
            "Quit your 9-5 and work on the project and business you always dreamed of building but thought you couldn't."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__vsiBq
          )}
          headline={"Build a remote team"}
          text={
            "Find rare talent and work from anywhere. Work that revolves around you and your lifestyle. "
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__kPh2X
          )}
          headline={"Save time and money"}
          text={
            "We’re a shoppable ecommerce experience and we make the buying and collaboration process easy and familiar."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__u378
          )}
          headline={"Professional standards"}
          text={
            "Our community members must maintain a minimum rating and customer delivery standard to maintain their listing."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__mGeSe
          )}
          headline={"Support small businesses"}
          text={
            "Buy directly from SMEs who put their heart and soul into making something innovative."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__gmpfm
          )}
          headline={"Community & collaboration"}
          text={
            "Learn from leading entrepreneurs, creatives, and cutting-edge technologists from around the world."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription__sBhcg
          )}
          headline={"Remote first companies"}
          text={
            "Our marketplace is curated with only the top SMEs and remote teams from around the world."
          }
        />

        <CardFeatureDescription
          className={classNames(
            "__wab_instance",
            sty.cardFeatureDescription___0VEz9
          )}
          headline={"Vetted & compliant"}
          text={
            "We verify each business and their client references so you don't have to."
          }
        />
      </p.Stack>
    </p.Stack>
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
  PlasmicSectionMemberFeatures__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionMemberFeatures__VariantsArgs;
    args?: PlasmicSectionMemberFeatures__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSectionMemberFeatures__Fetches;
  } & Omit<PlasmicSectionMemberFeatures__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionMemberFeatures__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSectionMemberFeatures__ArgProps,
      internalVariantPropNames: PlasmicSectionMemberFeatures__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSectionMemberFeatures__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionMemberFeatures";
  } else {
    func.displayName = `PlasmicSectionMemberFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionMemberFeatures = Object.assign(
  // Top-level PlasmicSectionMemberFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSectionMemberFeatures
    internalVariantProps: PlasmicSectionMemberFeatures__VariantProps,
    internalArgProps: PlasmicSectionMemberFeatures__ArgProps
  }
);

export default PlasmicSectionMemberFeatures;
/* prettier-ignore-end */
