// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: 2W_C8OXQT-TUaQ
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
import InputEmailA from "../../InputEmailA"; // plasmic-import: UmAzZG9nly83mS/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicSectionEmailCta.module.css"; // plasmic-import: 2W_C8OXQT-TUaQ/css

export type PlasmicSectionEmailCta__VariantMembers = {};

export type PlasmicSectionEmailCta__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionEmailCta__VariantsArgs;
export const PlasmicSectionEmailCta__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionEmailCta__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSectionEmailCta__ArgsType;
export const PlasmicSectionEmailCta__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicSectionEmailCta__OverridesType = {
  root?: p.Flex<"div">;
  headlineParent?: p.Flex<"div">;
  subheadParent?: p.Flex<"div">;
  inputEmailA?: p.Flex<typeof InputEmailA>;
};

export interface DefaultSectionEmailCtaProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicSectionEmailCta__RenderFunc(props: {
  variants: PlasmicSectionEmailCta__VariantsArgs;
  args: PlasmicSectionEmailCta__ArgsType;
  overrides: PlasmicSectionEmailCta__OverridesType;
  dataFetches?: PlasmicSectionEmailCta__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
        data-plasmic-name={"headlineParent"}
        data-plasmic-override={overrides.headlineParent}
        className={classNames(defaultcss.all, sty.headlineParent)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__d8SJa)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Start, launch, and grow a scalable & profitable business.",
            value: args.slot,
            className: classNames(sty.slotSlot)
          })}
        </div>
      </div>

      <div
        data-plasmic-name={"subheadParent"}
        data-plasmic-override={overrides.subheadParent}
        className={classNames(defaultcss.all, sty.subheadParent)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__gRbUk)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Explore all the specialised tools and services you need to start, run, and grow a global technology and creative services business.",
            value: args.children,
            className: classNames(sty.slotChildren)
          })}
        </div>
      </div>

      {true ? (
        <InputEmailA
          data-plasmic-name={"inputEmailA"}
          data-plasmic-override={overrides.inputEmailA}
          className={classNames("__wab_instance", sty.inputEmailA)}
          size={
            hasVariant(globalVariants, "screen", "mobile")
              ? ("_360" as const)
              : ("_540" as const)
          }
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "headlineParent", "subheadParent", "inputEmailA"],
  headlineParent: ["headlineParent"],
  subheadParent: ["subheadParent"],
  inputEmailA: ["inputEmailA"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headlineParent: "div";
  subheadParent: "div";
  inputEmailA: typeof InputEmailA;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionEmailCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionEmailCta__VariantsArgs;
    args?: PlasmicSectionEmailCta__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSectionEmailCta__Fetches;
  } & Omit<PlasmicSectionEmailCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionEmailCta__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSectionEmailCta__ArgProps,
      internalVariantPropNames: PlasmicSectionEmailCta__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSectionEmailCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionEmailCta";
  } else {
    func.displayName = `PlasmicSectionEmailCta.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionEmailCta = Object.assign(
  // Top-level PlasmicSectionEmailCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headlineParent: makeNodeComponent("headlineParent"),
    subheadParent: makeNodeComponent("subheadParent"),
    inputEmailA: makeNodeComponent("inputEmailA"),

    // Metadata about props expected for PlasmicSectionEmailCta
    internalVariantProps: PlasmicSectionEmailCta__VariantProps,
    internalArgProps: PlasmicSectionEmailCta__ArgProps
  }
);

export default PlasmicSectionEmailCta;
/* prettier-ignore-end */