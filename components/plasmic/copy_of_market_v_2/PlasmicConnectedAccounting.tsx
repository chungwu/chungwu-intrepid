// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: jLD2QIBg2tV9O9
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
import InputFormCardWebhookConnections from "../../InputFormCardWebhookConnections"; // plasmic-import: xhtqzOQbigz-bm/component
import CardConnectedAccount from "../../CardConnectedAccount"; // plasmic-import: 40diCBROeAR9vl/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicConnectedAccounting.module.css"; // plasmic-import: jLD2QIBg2tV9O9/css

export type PlasmicConnectedAccounting__VariantMembers = {
  closed: "closed";
  visible: "xero" | "quickbooks";
};

export type PlasmicConnectedAccounting__VariantsArgs = {
  closed?: SingleBooleanChoiceArg<"closed">;
  visible?: SingleChoiceArg<"xero" | "quickbooks">;
};

type VariantPropType = keyof PlasmicConnectedAccounting__VariantsArgs;
export const PlasmicConnectedAccounting__VariantProps =
  new Array<VariantPropType>("closed", "visible");

export type PlasmicConnectedAccounting__ArgsType = {};
type ArgPropType = keyof PlasmicConnectedAccounting__ArgsType;
export const PlasmicConnectedAccounting__ArgProps = new Array<ArgPropType>();

export type PlasmicConnectedAccounting__OverridesType = {
  root?: p.Flex<"div">;
  inputFormCardWebhookConnections?: p.Flex<
    typeof InputFormCardWebhookConnections
  >;
  xero?: p.Flex<typeof CardConnectedAccount>;
  quickbooks?: p.Flex<typeof CardConnectedAccount>;
};

export interface DefaultConnectedAccountingProps {
  closed?: SingleBooleanChoiceArg<"closed">;
  visible?: SingleChoiceArg<"xero" | "quickbooks">;
  className?: string;
}

function PlasmicConnectedAccounting__RenderFunc(props: {
  variants: PlasmicConnectedAccounting__VariantsArgs;
  args: PlasmicConnectedAccounting__ArgsType;
  overrides: PlasmicConnectedAccounting__OverridesType;
  dataFetches?: PlasmicConnectedAccounting__Fetches;
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
      <InputFormCardWebhookConnections
        data-plasmic-name={"inputFormCardWebhookConnections"}
        data-plasmic-override={overrides.inputFormCardWebhookConnections}
        accounting={"accounting" as const}
        slot={"Connect your accounting systems to log financing benefits."}
      >
        {"Accounting Connections"}
      </InputFormCardWebhookConnections>

      {(
        hasVariant(variants, "visible", "quickbooks")
          ? false
          : hasVariant(variants, "closed", "closed")
          ? false
          : true
      ) ? (
        <CardConnectedAccount
          data-plasmic-name={"xero"}
          data-plasmic-override={overrides.xero}
          className={classNames("__wab_instance", sty.xero, {
            [sty.xero__closed]: hasVariant(variants, "closed", "closed"),
            [sty.xero__visible_quickbooks]: hasVariant(
              variants,
              "visible",
              "quickbooks"
            )
          })}
          companies={"xero" as const}
          team={"team" as const}
          userFirstname={"companyName"}
        />
      ) : null}
      {(
        hasVariant(variants, "visible", "xero")
          ? false
          : hasVariant(variants, "closed", "closed")
          ? false
          : true
      ) ? (
        <CardConnectedAccount
          data-plasmic-name={"quickbooks"}
          data-plasmic-override={overrides.quickbooks}
          className={classNames("__wab_instance", sty.quickbooks, {
            [sty.quickbooks__closed]: hasVariant(variants, "closed", "closed"),
            [sty.quickbooks__visible_xero]: hasVariant(
              variants,
              "visible",
              "xero"
            )
          })}
          companies={"quickbooks" as const}
          team={"team" as const}
          userFirstname={"companyName"}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "inputFormCardWebhookConnections", "xero", "quickbooks"],
  inputFormCardWebhookConnections: ["inputFormCardWebhookConnections"],
  xero: ["xero"],
  quickbooks: ["quickbooks"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  inputFormCardWebhookConnections: typeof InputFormCardWebhookConnections;
  xero: typeof CardConnectedAccount;
  quickbooks: typeof CardConnectedAccount;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicConnectedAccounting__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicConnectedAccounting__VariantsArgs;
    args?: PlasmicConnectedAccounting__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicConnectedAccounting__Fetches;
  } & Omit<PlasmicConnectedAccounting__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicConnectedAccounting__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicConnectedAccounting__ArgProps,
      internalVariantPropNames: PlasmicConnectedAccounting__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicConnectedAccounting__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConnectedAccounting";
  } else {
    func.displayName = `PlasmicConnectedAccounting.${nodeName}`;
  }
  return func;
}

export const PlasmicConnectedAccounting = Object.assign(
  // Top-level PlasmicConnectedAccounting renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    inputFormCardWebhookConnections: makeNodeComponent(
      "inputFormCardWebhookConnections"
    ),
    xero: makeNodeComponent("xero"),
    quickbooks: makeNodeComponent("quickbooks"),

    // Metadata about props expected for PlasmicConnectedAccounting
    internalVariantProps: PlasmicConnectedAccounting__VariantProps,
    internalArgProps: PlasmicConnectedAccounting__ArgProps
  }
);

export default PlasmicConnectedAccounting;
/* prettier-ignore-end */