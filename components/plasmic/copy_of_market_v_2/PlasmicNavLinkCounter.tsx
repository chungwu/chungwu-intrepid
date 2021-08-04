// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: hZnsIRN1C34btPr
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
import * as sty from "./PlasmicNavLinkCounter.module.css"; // plasmic-import: hZnsIRN1C34btPr/css

export type PlasmicNavLinkCounter__VariantMembers = {
  state: "selected" | "disabled";
};

export type PlasmicNavLinkCounter__VariantsArgs = {
  state?: SingleChoiceArg<"selected" | "disabled">;
};

type VariantPropType = keyof PlasmicNavLinkCounter__VariantsArgs;
export const PlasmicNavLinkCounter__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicNavLinkCounter__ArgsType = {
  navLabel?: React.ReactNode;
  numberValue?: React.ReactNode;
  id?: string;
  destination?: string | PageHref;
};

type ArgPropType = keyof PlasmicNavLinkCounter__ArgsType;
export const PlasmicNavLinkCounter__ArgProps = new Array<ArgPropType>(
  "navLabel",
  "numberValue",
  "id",
  "destination"
);

export type PlasmicNavLinkCounter__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  parent?: p.Flex<"div">;
  linkParent?: p.Flex<"div">;
  linkBg?: p.Flex<"div">;
  numberParent?: p.Flex<"div">;
  numberBg?: p.Flex<"div">;
};

export interface DefaultNavLinkCounterProps {
  navLabel?: React.ReactNode;
  numberValue?: React.ReactNode;
  id?: string;
  destination?: string | PageHref;
  state?: SingleChoiceArg<"selected" | "disabled">;
  className?: string;
}

function PlasmicNavLinkCounter__RenderFunc(props: {
  variants: PlasmicNavLinkCounter__VariantsArgs;
  args: PlasmicNavLinkCounter__ArgsType;
  overrides: PlasmicNavLinkCounter__OverridesType;
  dataFetches?: PlasmicNavLinkCounter__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__state_selected]: hasVariant(variants, "state", "selected")
      })}
      component={Link}
      href={args.destination}
      id={args.id}
      platform={"nextjs"}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"parent"}
        data-plasmic-override={overrides.parent}
        hasGap={true}
        className={classNames(defaultcss.all, sty.parent, {
          [sty.parent__state_selected]: hasVariant(
            variants,
            "state",
            "selected"
          )
        })}
      >
        <div
          data-plasmic-name={"linkParent"}
          data-plasmic-override={overrides.linkParent}
          className={classNames(defaultcss.all, sty.linkParent)}
        >
          <div
            data-plasmic-name={"linkBg"}
            data-plasmic-override={overrides.linkBg}
            className={classNames(defaultcss.all, sty.linkBg)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Counter Nav",
              value: args.navLabel,
              className: classNames(sty.slotNavLabel, {
                [sty.slotNavLabel__state_selected]: hasVariant(
                  variants,
                  "state",
                  "selected"
                )
              })
            })}
          </div>
        </div>

        <div
          data-plasmic-name={"numberParent"}
          data-plasmic-override={overrides.numberParent}
          className={classNames(defaultcss.all, sty.numberParent)}
        >
          <div
            data-plasmic-name={"numberBg"}
            data-plasmic-override={overrides.numberBg}
            className={classNames(defaultcss.all, sty.numberBg)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "######",
              value: args.numberValue,
              className: classNames(sty.slotNumberValue, {
                [sty.slotNumberValue__state_selected]: hasVariant(
                  variants,
                  "state",
                  "selected"
                )
              })
            })}
          </div>
        </div>
      </p.Stack>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "parent", "linkParent", "linkBg", "numberParent", "numberBg"],
  parent: ["parent", "linkParent", "linkBg", "numberParent", "numberBg"],
  linkParent: ["linkParent", "linkBg"],
  linkBg: ["linkBg"],
  numberParent: ["numberParent", "numberBg"],
  numberBg: ["numberBg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  parent: "div";
  linkParent: "div";
  linkBg: "div";
  numberParent: "div";
  numberBg: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavLinkCounter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavLinkCounter__VariantsArgs;
    args?: PlasmicNavLinkCounter__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavLinkCounter__Fetches;
  } & Omit<PlasmicNavLinkCounter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavLinkCounter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavLinkCounter__ArgProps,
      internalVariantPropNames: PlasmicNavLinkCounter__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavLinkCounter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavLinkCounter";
  } else {
    func.displayName = `PlasmicNavLinkCounter.${nodeName}`;
  }
  return func;
}

export const PlasmicNavLinkCounter = Object.assign(
  // Top-level PlasmicNavLinkCounter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parent: makeNodeComponent("parent"),
    linkParent: makeNodeComponent("linkParent"),
    linkBg: makeNodeComponent("linkBg"),
    numberParent: makeNodeComponent("numberParent"),
    numberBg: makeNodeComponent("numberBg"),

    // Metadata about props expected for PlasmicNavLinkCounter
    internalVariantProps: PlasmicNavLinkCounter__VariantProps,
    internalArgProps: PlasmicNavLinkCounter__ArgProps
  }
);

export default PlasmicNavLinkCounter;
/* prettier-ignore-end */