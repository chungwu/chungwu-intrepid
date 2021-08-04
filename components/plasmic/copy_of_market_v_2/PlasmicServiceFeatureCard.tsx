// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: ROhXrEmZhHUraZ
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
import * as sty from "./PlasmicServiceFeatureCard.module.css"; // plasmic-import: ROhXrEmZhHUraZ/css

export type PlasmicServiceFeatureCard__VariantMembers = {
  size: "small";
};

export type PlasmicServiceFeatureCard__VariantsArgs = {
  size?: SingleChoiceArg<"small">;
};

type VariantPropType = keyof PlasmicServiceFeatureCard__VariantsArgs;
export const PlasmicServiceFeatureCard__VariantProps =
  new Array<VariantPropType>("size");

export type PlasmicServiceFeatureCard__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicServiceFeatureCard__ArgsType;
export const PlasmicServiceFeatureCard__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicServiceFeatureCard__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultServiceFeatureCardProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  size?: SingleChoiceArg<"small">;
  className?: string;
}

function PlasmicServiceFeatureCard__RenderFunc(props: {
  variants: PlasmicServiceFeatureCard__VariantsArgs;
  args: PlasmicServiceFeatureCard__ArgsType;
  overrides: PlasmicServiceFeatureCard__OverridesType;
  dataFetches?: PlasmicServiceFeatureCard__Fetches;
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
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__size_small]: hasVariant(variants, "size", "small")
      })}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__hMugR)}>
        <div className={classNames(defaultcss.all, sty.freeBox__ah7Mv)}>
          {p.renderPlasmicSlot({
            defaultContents: "20",
            value: args.slot,
            className: classNames(sty.slotSlot, {
              [sty.slotSlot__size_small]: hasVariant(variants, "size", "small")
            })
          })}
        </div>
      </div>

      <div className={classNames(defaultcss.all, sty.freeBox__jeDl1)}>
        <div className={classNames(defaultcss.all, sty.freeBox__zeE5O)}>
          {p.renderPlasmicSlot({
            defaultContents: "Components",
            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren__size_small]: hasVariant(
                variants,
                "size",
                "small"
              )
            })
          })}
        </div>
      </div>
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
  PlasmicServiceFeatureCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServiceFeatureCard__VariantsArgs;
    args?: PlasmicServiceFeatureCard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicServiceFeatureCard__Fetches;
  } & Omit<PlasmicServiceFeatureCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicServiceFeatureCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicServiceFeatureCard__ArgProps,
      internalVariantPropNames: PlasmicServiceFeatureCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicServiceFeatureCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServiceFeatureCard";
  } else {
    func.displayName = `PlasmicServiceFeatureCard.${nodeName}`;
  }
  return func;
}

export const PlasmicServiceFeatureCard = Object.assign(
  // Top-level PlasmicServiceFeatureCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicServiceFeatureCard
    internalVariantProps: PlasmicServiceFeatureCard__VariantProps,
    internalArgProps: PlasmicServiceFeatureCard__ArgProps
  }
);

export default PlasmicServiceFeatureCard;
/* prettier-ignore-end */