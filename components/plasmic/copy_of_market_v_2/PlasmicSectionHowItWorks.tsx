// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4BLiU6oPcZdXDvseuPTeUa
// Component: pbYXWCX9ZUvloJV
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
import CardValueProposition from "../../CardValueProposition"; // plasmic-import: ZaTlEbsFiBx7C8/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: biX3aS42hiG0fF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_market_v_2.module.css"; // plasmic-import: 4BLiU6oPcZdXDvseuPTeUa/projectcss
import * as sty from "./PlasmicSectionHowItWorks.module.css"; // plasmic-import: pbYXWCX9ZUvloJV/css

import Icon80Icon from "./icons/PlasmicIcon__Icon80"; // plasmic-import: ROD7eyPSYjlH1CI/icon
import MemberAddIcon from "./icons/PlasmicIcon__MemberAdd"; // plasmic-import: Y_y9zXduZNsZeWP/icon
import Icon88Icon from "./icons/PlasmicIcon__Icon88"; // plasmic-import: Il0DunioYf3y-5C/icon

export type PlasmicSectionHowItWorks__VariantMembers = {};

export type PlasmicSectionHowItWorks__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionHowItWorks__VariantsArgs;
export const PlasmicSectionHowItWorks__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSectionHowItWorks__ArgsType = {};
type ArgPropType = keyof PlasmicSectionHowItWorks__ArgsType;
export const PlasmicSectionHowItWorks__ArgProps = new Array<ArgPropType>();

export type PlasmicSectionHowItWorks__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSectionHowItWorksProps {
  className?: string;
}

function PlasmicSectionHowItWorks__RenderFunc(props: {
  variants: PlasmicSectionHowItWorks__VariantsArgs;
  args: PlasmicSectionHowItWorks__ArgsType;
  overrides: PlasmicSectionHowItWorks__OverridesType;
  dataFetches?: PlasmicSectionHowItWorks__Fetches;
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
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.freeBox__wk13Y
        )}
      >
        {"How it works"}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__gl2Fx)}
      >
        <CardValueProposition
          background={"bgLightB" as const}
          className={classNames(
            "__wab_instance",
            sty.cardValueProposition__odx8R
          )}
          headline={"Setup a profile"}
          svg={
            <Icon80Icon
              className={classNames(defaultcss.all, sty.svg__l7DNb)}
              role={"img"}
            />
          }
          textBody={
            "Tell us about your needs and a few key details about your goals."
          }
        />

        <CardValueProposition
          background={"bgLightB" as const}
          className={classNames(
            "__wab_instance",
            sty.cardValueProposition__fAJe
          )}
          headline={"Invite your team"}
          svg={
            <MemberAddIcon
              className={classNames(defaultcss.all, sty.svg__dckJ)}
              role={"img"}
            />
          }
          textBody={"Add team members to collaborate and manage your projects."}
        />

        <CardValueProposition
          background={"bgLightB" as const}
          className={classNames(
            "__wab_instance",
            sty.cardValueProposition__ozVJg
          )}
          headline={"Find products & services"}
          svg={
            <Icon88Icon
              className={classNames(defaultcss.all, sty.svg__v7Zkv)}
              role={"img"}
            />
          }
          textBody={
            hasVariant(globalVariants, "screen", "desktop")
              ? "Shop digital products and services from a curated group of makers."
              : "shop digital products and services from a curated group of makers."
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
  PlasmicSectionHowItWorks__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionHowItWorks__VariantsArgs;
    args?: PlasmicSectionHowItWorks__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSectionHowItWorks__Fetches;
  } & Omit<PlasmicSectionHowItWorks__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSectionHowItWorks__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSectionHowItWorks__ArgProps,
      internalVariantPropNames: PlasmicSectionHowItWorks__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSectionHowItWorks__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionHowItWorks";
  } else {
    func.displayName = `PlasmicSectionHowItWorks.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionHowItWorks = Object.assign(
  // Top-level PlasmicSectionHowItWorks renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSectionHowItWorks
    internalVariantProps: PlasmicSectionHowItWorks__VariantProps,
    internalArgProps: PlasmicSectionHowItWorks__ArgProps
  }
);

export default PlasmicSectionHowItWorks;
/* prettier-ignore-end */