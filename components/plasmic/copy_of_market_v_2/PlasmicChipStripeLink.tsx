// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: WNu_2sznJMMpja
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
import ElementStripeLogoLinkBurple from "../../ElementStripeLogoLinkBurple"; // plasmic-import: m2ulW01emKV9Vy/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicChipStripeLink.module.css"; // plasmic-import: WNu_2sznJMMpja/css

export type PlasmicChipStripeLink__VariantMembers = {};

export type PlasmicChipStripeLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicChipStripeLink__VariantsArgs;
export const PlasmicChipStripeLink__VariantProps = new Array<VariantPropType>();

export type PlasmicChipStripeLink__ArgsType = {};
type ArgPropType = keyof PlasmicChipStripeLink__ArgsType;
export const PlasmicChipStripeLink__ArgProps = new Array<ArgPropType>();

export type PlasmicChipStripeLink__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  textlabelParent?: p.Flex<"div">;
  poweredByText?: p.Flex<"div">;
  elementStripeLogoLinkBurple?: p.Flex<typeof ElementStripeLogoLinkBurple>;
};

export interface DefaultChipStripeLinkProps {
  className?: string;
}

function PlasmicChipStripeLink__RenderFunc(props: {
  variants: PlasmicChipStripeLink__VariantsArgs;
  args: PlasmicChipStripeLink__ArgsType;
  overrides: PlasmicChipStripeLink__OverridesType;
  dataFetches?: PlasmicChipStripeLink__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      component={Link}
      href={"https://stripe.com" as const}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"textlabelParent"}
        data-plasmic-override={overrides.textlabelParent}
        className={classNames(defaultcss.all, sty.textlabelParent)}
      >
        <div
          data-plasmic-name={"poweredByText"}
          data-plasmic-override={overrides.poweredByText}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.poweredByText
          )}
        >
          {"Powered by"}
        </div>
      </div>

      <ElementStripeLogoLinkBurple
        data-plasmic-name={"elementStripeLogoLinkBurple"}
        data-plasmic-override={overrides.elementStripeLogoLinkBurple}
        className={classNames(
          "__wab_instance",
          sty.elementStripeLogoLinkBurple
        )}
        size={"_18" as const}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "textlabelParent",
    "poweredByText",
    "elementStripeLogoLinkBurple"
  ],
  textlabelParent: ["textlabelParent", "poweredByText"],
  poweredByText: ["poweredByText"],
  elementStripeLogoLinkBurple: ["elementStripeLogoLinkBurple"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  textlabelParent: "div";
  poweredByText: "div";
  elementStripeLogoLinkBurple: typeof ElementStripeLogoLinkBurple;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChipStripeLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChipStripeLink__VariantsArgs;
    args?: PlasmicChipStripeLink__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicChipStripeLink__Fetches;
  } & Omit<PlasmicChipStripeLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicChipStripeLink__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicChipStripeLink__ArgProps,
      internalVariantPropNames: PlasmicChipStripeLink__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicChipStripeLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChipStripeLink";
  } else {
    func.displayName = `PlasmicChipStripeLink.${nodeName}`;
  }
  return func;
}

export const PlasmicChipStripeLink = Object.assign(
  // Top-level PlasmicChipStripeLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textlabelParent: makeNodeComponent("textlabelParent"),
    poweredByText: makeNodeComponent("poweredByText"),
    elementStripeLogoLinkBurple: makeNodeComponent(
      "elementStripeLogoLinkBurple"
    ),

    // Metadata about props expected for PlasmicChipStripeLink
    internalVariantProps: PlasmicChipStripeLink__VariantProps,
    internalArgProps: PlasmicChipStripeLink__ArgProps
  }
);

export default PlasmicChipStripeLink;
/* prettier-ignore-end */
