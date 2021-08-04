// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: oVvk72s9CwRicvm
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
import PanelHeaderDisplayPartner from "../../PanelHeaderDisplayPartner"; // plasmic-import: J-OiJsxT9rUuwMX/component
import PanelButtonHeader from "../../PanelButtonHeader"; // plasmic-import: 9I6cKBLOMWVCOTc/component
import PanelCommunityScores from "../../PanelCommunityScores"; // plasmic-import: EB58ZPxwAS2xlPF/component
import PanelListingScores from "../../PanelListingScores"; // plasmic-import: XClO29Earz-pDCK/component
import PanelPartnerSectionMarket from "../../PanelPartnerSectionMarket"; // plasmic-import: brD8Soq4a9tnKam/component
import PanelPartnerSectionPartner from "../../PanelPartnerSectionPartner"; // plasmic-import: GrBAgBfIJEdPO5V/component
import PanelPartnerSectionAccount from "../../PanelPartnerSectionAccount"; // plasmic-import: o72EYhIIU1Adwmh/component
import PanelFooter from "../../PanelFooter"; // plasmic-import: Oj9pWcYj7eur42M/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicPanelPartner.module.css"; // plasmic-import: oVvk72s9CwRicvm/css

export type PlasmicPanelPartner__VariantMembers = {};

export type PlasmicPanelPartner__VariantsArgs = {};
type VariantPropType = keyof PlasmicPanelPartner__VariantsArgs;
export const PlasmicPanelPartner__VariantProps = new Array<VariantPropType>();

export type PlasmicPanelPartner__ArgsType = {};
type ArgPropType = keyof PlasmicPanelPartner__ArgsType;
export const PlasmicPanelPartner__ArgProps = new Array<ArgPropType>();

export type PlasmicPanelPartner__OverridesType = {
  root?: p.Flex<"div">;
  headerPanelMainPartner?: p.Flex<"div">;
  partnerHeaderDisplay?: p.Flex<typeof PanelHeaderDisplayPartner>;
  partnerButtonHeader?: p.Flex<typeof PanelButtonHeader>;
  partnerCommunityScores?: p.Flex<typeof PanelCommunityScores>;
  partnerListingScores?: p.Flex<typeof PanelListingScores>;
  partnerMarket?: p.Flex<typeof PanelPartnerSectionMarket>;
  partnerProfile?: p.Flex<typeof PanelPartnerSectionPartner>;
  partnerAccount?: p.Flex<typeof PanelPartnerSectionAccount>;
  panelPartnerFooter?: p.Flex<typeof PanelFooter>;
};

export interface DefaultPanelPartnerProps {
  className?: string;
}

function PlasmicPanelPartner__RenderFunc(props: {
  variants: PlasmicPanelPartner__VariantsArgs;
  args: PlasmicPanelPartner__ArgsType;
  overrides: PlasmicPanelPartner__OverridesType;
  dataFetches?: PlasmicPanelPartner__Fetches;
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
        data-plasmic-name={"headerPanelMainPartner"}
        data-plasmic-override={overrides.headerPanelMainPartner}
        className={classNames(defaultcss.all, sty.headerPanelMainPartner)}
      >
        <PanelHeaderDisplayPartner
          data-plasmic-name={"partnerHeaderDisplay"}
          data-plasmic-override={overrides.partnerHeaderDisplay}
          className={classNames("__wab_instance", sty.partnerHeaderDisplay)}
        />

        <PanelButtonHeader
          data-plasmic-name={"partnerButtonHeader"}
          data-plasmic-override={overrides.partnerButtonHeader}
          className={classNames("__wab_instance", sty.partnerButtonHeader)}
          user={"partner" as const}
        />
      </div>

      <PanelCommunityScores
        data-plasmic-name={"partnerCommunityScores"}
        data-plasmic-override={overrides.partnerCommunityScores}
        className={classNames("__wab_instance", sty.partnerCommunityScores)}
        user={"partner" as const}
      />

      <PanelListingScores
        data-plasmic-name={"partnerListingScores"}
        data-plasmic-override={overrides.partnerListingScores}
        className={classNames("__wab_instance", sty.partnerListingScores)}
      />

      <PanelPartnerSectionMarket
        data-plasmic-name={"partnerMarket"}
        data-plasmic-override={overrides.partnerMarket}
        className={classNames("__wab_instance", sty.partnerMarket)}
      />

      <PanelPartnerSectionPartner
        data-plasmic-name={"partnerProfile"}
        data-plasmic-override={overrides.partnerProfile}
        className={classNames("__wab_instance", sty.partnerProfile)}
      />

      <PanelPartnerSectionAccount
        data-plasmic-name={"partnerAccount"}
        data-plasmic-override={overrides.partnerAccount}
        className={classNames("__wab_instance", sty.partnerAccount)}
      />

      <PanelFooter
        data-plasmic-name={"panelPartnerFooter"}
        data-plasmic-override={overrides.panelPartnerFooter}
        className={classNames("__wab_instance", sty.panelPartnerFooter)}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerPanelMainPartner",
    "partnerHeaderDisplay",
    "partnerButtonHeader",
    "partnerCommunityScores",
    "partnerListingScores",
    "partnerMarket",
    "partnerProfile",
    "partnerAccount",
    "panelPartnerFooter"
  ],
  headerPanelMainPartner: [
    "headerPanelMainPartner",
    "partnerHeaderDisplay",
    "partnerButtonHeader"
  ],
  partnerHeaderDisplay: ["partnerHeaderDisplay"],
  partnerButtonHeader: ["partnerButtonHeader"],
  partnerCommunityScores: ["partnerCommunityScores"],
  partnerListingScores: ["partnerListingScores"],
  partnerMarket: ["partnerMarket"],
  partnerProfile: ["partnerProfile"],
  partnerAccount: ["partnerAccount"],
  panelPartnerFooter: ["panelPartnerFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerPanelMainPartner: "div";
  partnerHeaderDisplay: typeof PanelHeaderDisplayPartner;
  partnerButtonHeader: typeof PanelButtonHeader;
  partnerCommunityScores: typeof PanelCommunityScores;
  partnerListingScores: typeof PanelListingScores;
  partnerMarket: typeof PanelPartnerSectionMarket;
  partnerProfile: typeof PanelPartnerSectionPartner;
  partnerAccount: typeof PanelPartnerSectionAccount;
  panelPartnerFooter: typeof PanelFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPanelPartner__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPanelPartner__VariantsArgs;
    args?: PlasmicPanelPartner__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPanelPartner__Fetches;
  } & Omit<PlasmicPanelPartner__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPanelPartner__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPanelPartner__ArgProps,
      internalVariantPropNames: PlasmicPanelPartner__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPanelPartner__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelPartner";
  } else {
    func.displayName = `PlasmicPanelPartner.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelPartner = Object.assign(
  // Top-level PlasmicPanelPartner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerPanelMainPartner: makeNodeComponent("headerPanelMainPartner"),
    partnerHeaderDisplay: makeNodeComponent("partnerHeaderDisplay"),
    partnerButtonHeader: makeNodeComponent("partnerButtonHeader"),
    partnerCommunityScores: makeNodeComponent("partnerCommunityScores"),
    partnerListingScores: makeNodeComponent("partnerListingScores"),
    partnerMarket: makeNodeComponent("partnerMarket"),
    partnerProfile: makeNodeComponent("partnerProfile"),
    partnerAccount: makeNodeComponent("partnerAccount"),
    panelPartnerFooter: makeNodeComponent("panelPartnerFooter"),

    // Metadata about props expected for PlasmicPanelPartner
    internalVariantProps: PlasmicPanelPartner__VariantProps,
    internalArgProps: PlasmicPanelPartner__ArgProps
  }
);

export default PlasmicPanelPartner;
/* prettier-ignore-end */