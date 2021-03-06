// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: 3ED63OwXGjK4Vt
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
import * as sty from "./PlasmicCardLinkServiceMenu.module.css"; // plasmic-import: 3ED63OwXGjK4Vt/css

import PlusBoldIcon from "./icons/PlasmicIcon__PlusBold"; // plasmic-import: lhSEEajPJGZatfD/icon

export type PlasmicCardLinkServiceMenu__VariantMembers = {};

export type PlasmicCardLinkServiceMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicCardLinkServiceMenu__VariantsArgs;
export const PlasmicCardLinkServiceMenu__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCardLinkServiceMenu__ArgsType = {
  icon?: React.ReactNode;
  textHeadline?: React.ReactNode;
  textBody?: React.ReactNode;
  destination?: string | PageHref;
};

type ArgPropType = keyof PlasmicCardLinkServiceMenu__ArgsType;
export const PlasmicCardLinkServiceMenu__ArgProps = new Array<ArgPropType>(
  "icon",
  "textHeadline",
  "textBody",
  "destination"
);

export type PlasmicCardLinkServiceMenu__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  headerTitle?: p.Flex<"div">;
  parentIconText?: p.Flex<"div">;
};

export interface DefaultCardLinkServiceMenuProps {
  icon?: React.ReactNode;
  textHeadline?: React.ReactNode;
  textBody?: React.ReactNode;
  destination?: string | PageHref;
  className?: string;
}

function PlasmicCardLinkServiceMenu__RenderFunc(props: {
  variants: PlasmicCardLinkServiceMenu__VariantsArgs;
  args: PlasmicCardLinkServiceMenu__ArgsType;
  overrides: PlasmicCardLinkServiceMenu__OverridesType;
  dataFetches?: PlasmicCardLinkServiceMenu__Fetches;
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
      href={args.destination}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"headerTitle"}
        data-plasmic-override={overrides.headerTitle}
        className={classNames(defaultcss.all, sty.headerTitle)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"parentIconText"}
          data-plasmic-override={overrides.parentIconText}
          hasGap={true}
          className={classNames(defaultcss.all, sty.parentIconText)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <PlusBoldIcon
                className={classNames(defaultcss.all, sty.svg__qneB7)}
                role={"img"}
              />
            ),

            value: args.icon
          })}

          <div className={classNames(defaultcss.all, sty.freeBox__mWvjr)}>
            {p.renderPlasmicSlot({
              defaultContents: "Headline Title",
              value: args.textHeadline,
              className: classNames(sty.slotTextHeadline)
            })}
          </div>
        </p.Stack>
      </div>

      <div className={classNames(defaultcss.all, sty.freeBox__rySru)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "Description of service or product that makes it clear to the",
          value: args.textBody,
          className: classNames(sty.slotTextBody)
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "headerTitle", "parentIconText"],
  headerTitle: ["headerTitle", "parentIconText"],
  parentIconText: ["parentIconText"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  headerTitle: "div";
  parentIconText: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCardLinkServiceMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardLinkServiceMenu__VariantsArgs;
    args?: PlasmicCardLinkServiceMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCardLinkServiceMenu__Fetches;
  } & Omit<PlasmicCardLinkServiceMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCardLinkServiceMenu__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCardLinkServiceMenu__ArgProps,
      internalVariantPropNames: PlasmicCardLinkServiceMenu__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCardLinkServiceMenu__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardLinkServiceMenu";
  } else {
    func.displayName = `PlasmicCardLinkServiceMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicCardLinkServiceMenu = Object.assign(
  // Top-level PlasmicCardLinkServiceMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerTitle: makeNodeComponent("headerTitle"),
    parentIconText: makeNodeComponent("parentIconText"),

    // Metadata about props expected for PlasmicCardLinkServiceMenu
    internalVariantProps: PlasmicCardLinkServiceMenu__VariantProps,
    internalArgProps: PlasmicCardLinkServiceMenu__ArgProps
  }
);

export default PlasmicCardLinkServiceMenu;
/* prettier-ignore-end */
