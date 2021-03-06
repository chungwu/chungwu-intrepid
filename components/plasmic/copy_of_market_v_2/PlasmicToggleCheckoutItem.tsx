// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: tUA22-wUuDKgcR
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
import ToggleSubscriptionCard from "../../ToggleSubscriptionCard"; // plasmic-import: ev2zgnRoIomYPd/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicToggleCheckoutItem.module.css"; // plasmic-import: tUA22-wUuDKgcR/css

export type PlasmicToggleCheckoutItem__VariantMembers = {};

export type PlasmicToggleCheckoutItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicToggleCheckoutItem__VariantsArgs;
export const PlasmicToggleCheckoutItem__VariantProps =
  new Array<VariantPropType>();

export type PlasmicToggleCheckoutItem__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicToggleCheckoutItem__ArgsType;
export const PlasmicToggleCheckoutItem__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicToggleCheckoutItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultToggleCheckoutItemProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

function PlasmicToggleCheckoutItem__RenderFunc(props: {
  variants: PlasmicToggleCheckoutItem__VariantsArgs;
  args: PlasmicToggleCheckoutItem__ArgsType;
  overrides: PlasmicToggleCheckoutItem__OverridesType;
  dataFetches?: PlasmicToggleCheckoutItem__Fetches;
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
      <div className={classNames(defaultcss.all, sty.freeBox___45Ij)}>
        <div className={classNames(defaultcss.all, sty.freeBox__lsIpk)}>
          {p.renderPlasmicSlot({
            defaultContents: "Headline",
            value: args.slot,
            className: classNames(sty.slotSlot)
          })}
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__cNh2H)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__xqBZb)}
        >
          <div className={classNames(defaultcss.all, sty.freeBox__yJbC1)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <ToggleSubscriptionCard inactive={"placement" as const} />
              ),

              value: args.slot2
            })}
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox___2SYd2)}>
            {p.renderPlasmicSlot({
              defaultContents: "Description",
              value: args.children,
              className: classNames(sty.slotChildren)
            })}
          </div>
        </p.Stack>
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
  PlasmicToggleCheckoutItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicToggleCheckoutItem__VariantsArgs;
    args?: PlasmicToggleCheckoutItem__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicToggleCheckoutItem__Fetches;
  } & Omit<PlasmicToggleCheckoutItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicToggleCheckoutItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicToggleCheckoutItem__ArgProps,
      internalVariantPropNames: PlasmicToggleCheckoutItem__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicToggleCheckoutItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicToggleCheckoutItem";
  } else {
    func.displayName = `PlasmicToggleCheckoutItem.${nodeName}`;
  }
  return func;
}

export const PlasmicToggleCheckoutItem = Object.assign(
  // Top-level PlasmicToggleCheckoutItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicToggleCheckoutItem
    internalVariantProps: PlasmicToggleCheckoutItem__VariantProps,
    internalArgProps: PlasmicToggleCheckoutItem__ArgProps
  }
);

export default PlasmicToggleCheckoutItem;
/* prettier-ignore-end */
