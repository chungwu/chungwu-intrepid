// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: GrBAgBfIJEdPO5V
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
import MenuIconListItem from "../../MenuIconListItem"; // plasmic-import: A4cpU1IW2YGn9yX/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicPanelPartnerSectionPartner.module.css"; // plasmic-import: GrBAgBfIJEdPO5V/css

import UserIcon from "./icons/PlasmicIcon__User"; // plasmic-import: 69Nnfgwrrho7Epq/icon
import TeamPartnersIcon from "./icons/PlasmicIcon__TeamPartners"; // plasmic-import: Hf6TOd80Ag78cQq/icon
import WalletEarningsIcon from "./icons/PlasmicIcon__WalletEarnings"; // plasmic-import: 0j9c3K2zanlGHIW/icon
import SwitchUserIcon from "./icons/PlasmicIcon__SwitchUser"; // plasmic-import: rOUpOXLd5q8qCDn/icon

export type PlasmicPanelPartnerSectionPartner__VariantMembers = {};

export type PlasmicPanelPartnerSectionPartner__VariantsArgs = {};
type VariantPropType = keyof PlasmicPanelPartnerSectionPartner__VariantsArgs;
export const PlasmicPanelPartnerSectionPartner__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPanelPartnerSectionPartner__ArgsType = {};
type ArgPropType = keyof PlasmicPanelPartnerSectionPartner__ArgsType;
export const PlasmicPanelPartnerSectionPartner__ArgProps =
  new Array<ArgPropType>();

export type PlasmicPanelPartnerSectionPartner__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPanelPartnerSectionPartnerProps {
  className?: string;
}

function PlasmicPanelPartnerSectionPartner__RenderFunc(props: {
  variants: PlasmicPanelPartnerSectionPartner__VariantsArgs;
  args: PlasmicPanelPartnerSectionPartner__ArgsType;
  overrides: PlasmicPanelPartnerSectionPartner__OverridesType;
  dataFetches?: PlasmicPanelPartnerSectionPartner__Fetches;
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___0STzm)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.freeBox__p5FHw
          )}
        >
          {"Partner"}
        </div>
      </p.Stack>

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__veG4)}
        navIcon={
          <div className={classNames(defaultcss.all, sty.freeBox__bmcRk)}>
            <UserIcon
              className={classNames(defaultcss.all, sty.svg__arBAh)}
              role={"img"}
            />
          </div>
        }
        navText={"Profile"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__xLurM)}
        navIcon={
          <div className={classNames(defaultcss.all, sty.freeBox__mlK2K)}>
            <TeamPartnersIcon
              className={classNames(defaultcss.all, sty.svg___5RTzg)}
              role={"img"}
            />
          </div>
        }
        navText={"Team"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem___8OCvJ)}
        navIcon={
          <div className={classNames(defaultcss.all, sty.freeBox___5MxJm)}>
            <WalletEarningsIcon
              className={classNames(defaultcss.all, sty.svg__u3APy)}
              role={"img"}
            />
          </div>
        }
        navText={"Wallet"}
      />

      <MenuIconListItem
        className={classNames("__wab_instance", sty.menuIconListItem__sFjLv)}
        navIcon={
          <div className={classNames(defaultcss.all, sty.freeBox__xRqPg)}>
            <SwitchUserIcon
              className={classNames(defaultcss.all, sty.svg__jdYqI)}
              role={"img"}
            />
          </div>
        }
        navText={"Switch to Member"}
      />
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
  PlasmicPanelPartnerSectionPartner__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPanelPartnerSectionPartner__VariantsArgs;
    args?: PlasmicPanelPartnerSectionPartner__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPanelPartnerSectionPartner__Fetches;
  } & Omit<PlasmicPanelPartnerSectionPartner__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPanelPartnerSectionPartner__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPanelPartnerSectionPartner__ArgProps,
      internalVariantPropNames: PlasmicPanelPartnerSectionPartner__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPanelPartnerSectionPartner__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanelPartnerSectionPartner";
  } else {
    func.displayName = `PlasmicPanelPartnerSectionPartner.${nodeName}`;
  }
  return func;
}

export const PlasmicPanelPartnerSectionPartner = Object.assign(
  // Top-level PlasmicPanelPartnerSectionPartner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPanelPartnerSectionPartner
    internalVariantProps: PlasmicPanelPartnerSectionPartner__VariantProps,
    internalArgProps: PlasmicPanelPartnerSectionPartner__ArgProps
  }
);

export default PlasmicPanelPartnerSectionPartner;
/* prettier-ignore-end */
